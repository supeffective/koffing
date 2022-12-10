import { Pokemon, PokemonGender } from './Pokemon'
import { PokemonTeam } from './PokemonTeam'
import { PokemonTeamSet } from './PokemonTeamSet'

type ParserState = { team: PokemonTeam | null; pokemon: Pokemon | null }

const clamp = (num: number, min: number, max: number): number => {
  if (Number.isNaN(num)) {
    return min
  }
  return Math.min(Math.max(num, min), max)
}

/**
 * Ported from Pokemon Showdown Client's exportTeam/importTeam functions.
 *
 * @see https://github.com/Zarel/Pokemon-Showdown-Client/blob/master/js/storage.js
 */
export class ShowdownParser {
  static regexes: Record<string, RegExp> = {
    // team title line
    team: /^===\s+\[(.*)\]\s+(.*)\s+===$/,

    // pokemon title line
    nickname_name: /^([^()=@]*)\s+\(([^()=@]{2,})\)/i,
    name: /^([^()=@]{2,})/i,
    gender: /\((F|M)\)/i,
    item: /@\s?(.*)$/i,

    // evs/ivs
    eivs: /^([EI]Vs):\s?(.*)$/i,
    eivs_value: /^([0-9]+)\s+(hp|atk|def|spa|spd|spe)$/i,

    // moves
    move: /^[-~]\s?(.*)$/i,

    // all other key-value properties
    nature: /^(.*)\s+Nature$/,
    ability: /^(?:Ability|Trait):\s?(.*)$/i,
    level: /^Level:\s?([0-9]{1,3})$/i,
    shiny: /^Shiny:\s?(Yes|No)$/i,
    happiness: /^(?:Happiness|Friendship):\s?([0-9]{1,3})$/i,
    pokeball: /^(?:Pokeball|Ball):\s?(.*)$/i,
    dynamaxLevel: /^Dynamax Level:\s?([0-9]{1,2})$/i,
    gigantamax: /^Gigantamax:\s?(Yes|No)$/i,
    teraType: /^Tera Type:\s?(.*)$/i,

    // not supported by Showdown, but by other websites:
    // ot: /^OT:\s?(.*)$/i,
    // otgender: /^(?:OT Gender|OTGender):\s?(M|F|Male|Female)$/i,
    // sid: /^SID:\s?([0-9]{1,10})$/i,
    // tid: /^TID:\s?([0-9]{1,10})$/i,
    // language: /^(?:Lang|Language):\s?(.*)$/i,
    // originmark: /^(?:OriginMark|Origin Mark):\s?(.*)$/i,
    // hypertraining: /^HT:\s?(.*)$/i,
  }

  code: string

  constructor(code: string) {
    this.code = code.toString().trim()
  }

  parse(): PokemonTeamSet {
    const regexes = ShowdownParser.regexes
    const teams: PokemonTeam[] = []

    const current: ParserState = {
      team: null,
      pokemon: null,
    }

    const lines: string[] = this.code
      .trim()
      .split('\n')
      .map(function (line) {
        return line.trim()
      })

    lines.forEach((line) => {
      // New Team
      if (line.match(regexes.team)) {
        // Start new team
        current.team = new PokemonTeam()
        this._parseTeam(line, current.team)
        teams.push(current.team)
        return
      }

      // Separator
      if (line === '' || line.match(/^[- ]+$/)) {
        // Line break (empty or as dashes separator), previous Pokemon definition ended.
        this._saveCurrent(teams, current)
        return
      }

      // New Pokemon + nickname, name, gender and item
      if (!current.pokemon) {
        current.pokemon = new Pokemon()
        this._parseNameLine(line, current.pokemon)
        return
      }

      // Ability, Level, etc.
      if (this._parseKeyValuePairs(line, current.pokemon)) {
        return
      }

      // EVs and IVs
      if (this._parseEvsIvs(line, current.pokemon)) {
        return
      }

      // Moves
      if (current.pokemon.moves.length < 4 && line.match(regexes.move)) {
        const moveMatches = regexes.move.exec(line)
        if (moveMatches !== null) {
          current.pokemon.moves.push(moveMatches[1].trim())
        }
      }
    })

    this._saveCurrent(teams, current)

    return new PokemonTeamSet(teams)
  }

  _parseTeam(line: string, team: PokemonTeam) {
    const rg = ShowdownParser.regexes

    const teamDataMatches = rg.team.exec(line)

    if (teamDataMatches && teamDataMatches.length >= 2) {
      const teamNames = teamDataMatches[2].split('/')
      let teamName, teamFolder

      if (teamNames.length > 1) {
        teamFolder = teamNames.shift()
        teamName = teamNames.join('/')
      } else {
        teamName = teamDataMatches[2]
      }

      team.format = teamDataMatches[1].trim()
      team.name = teamName.trim()
      team.folder = teamFolder ? teamFolder.trim() : undefined
    }
  }

  _parseNameLine(line: string, pokemon: Pokemon) {
    const rg = ShowdownParser.regexes

    if (line.match(rg.nickname_name)) {
      // has nickname?
      const nameMatches = rg.nickname_name.exec(line)
      if (nameMatches) {
        pokemon.nickname = nameMatches[1].trim()
        pokemon.name = nameMatches[2].trim()
      }
    } else if (line.match(rg.name)) {
      const nameMatches = rg.name.exec(line)
      if (nameMatches) {
        pokemon.name = nameMatches[1].trim()
      }
    }

    if (line.match(rg.gender)) {
      const genderMatches = rg.gender.exec(line)
      if (genderMatches) {
        pokemon.gender = genderMatches[1].toUpperCase().trim() as PokemonGender
      }
    }

    if (line.match(rg.item)) {
      const itemMatches = rg.item.exec(line)
      if (itemMatches) {
        pokemon.item = itemMatches[1].trim()
      }
    }
  }

  _parseEvsIvs(line: string, pokemon: Pokemon | any): boolean {
    const rg = ShowdownParser.regexes

    if (line.match(rg.eivs)) {
      const data = rg.eivs.exec(line)
      if (data === null) {
        return false
      }

      const prop = data[1].toLowerCase()
      const values = data[2].split('/')
      const limit = prop === 'evs' ? 255 : 31

      values.forEach(function (stat) {
        const statData = rg.eivs_value.exec(stat.trim().toLowerCase())
        if (!statData) {
          console.error('Invalid syntax for ' + prop + ': ' + stat)
          return
        }
        if (!pokemon[prop]) {
          pokemon[prop] = {}
        }
        pokemon[prop][statData[2]] = clamp(parseInt(statData[1]), 0, limit)
      })
      return true
    }
    return false
  }

  _parseKeyValuePairs(line: string, pokemon: Pokemon | any): boolean {
    const propNames: (keyof Pokemon)[] = [
      'nature', // string
      'ability', // string
      'level', // numeric
      'shiny', // bool
      'happiness', // numeric
      'pokeball', // string
      'dynamaxLevel', // numeric
      'gigantamax', // bool
      'teraType', // string
    ]

    return propNames.some(function (key: keyof Pokemon) {
      // if (!line.match(ShowdownParser.regexes[key])) {
      //   return false
      // }

      const matches = ShowdownParser.regexes[key].exec(line)

      if (matches === null) {
        return false
      }

      let value: any = matches[1].trim()

      //   Numeric values
      if (key === 'happiness') {
        value = clamp(parseInt(value), 0, 255)
      } else if (key === 'level') {
        value = clamp(parseInt(value), 1, 100)
      } else if (key === 'dynamaxLevel') {
        value = clamp(parseInt(value), 0, 10)
      } else if (key.match(/^(shiny|gigantamax)$/i)) {
        // Boolean values
        value = value.match(/yes/i) !== null ? true : undefined
      }

      pokemon[key] = value
      return true
    })
  }

  /**
   * Saves the current state of the parsed team.
   */
  _saveCurrent(teams: PokemonTeam[], current: ParserState): ShowdownParser {
    if (!current.team) {
      // Create a team if there is no current one
      current.team = new PokemonTeam()
      teams.push(current.team)
    }
    if (current.pokemon) {
      // Create a team if there is no current one
      current.team.pokemon.push(current.pokemon)
      current.pokemon = null
    }
    return this
  }

  /**
   * Sanitizes and re-formats / prettifies the Showdown code
   */
  format(): ShowdownParser {
    this.code = this.parse().toString()
    return this
  }

  /**
   * @returns {string}
   */
  toString(): string {
    return this.code
  }
}
