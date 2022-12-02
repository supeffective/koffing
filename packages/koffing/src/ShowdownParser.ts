import { Pokemon } from './Pokemon'
import { PokemonTeam } from './PokemonTeam'
import { PokemonTeamSet } from './PokemonTeamSet'

type ParserState = { team: PokemonTeam | null; pokemon: Pokemon | null }

/**
 * Ported from Pokemon Showdown Client's exportTeam/importTeam functions.
 *
 * @see https://github.com/Zarel/Pokemon-Showdown-Client/blob/8994e9e/js/storage.js
 */
export class ShowdownParser {
  static regexes: Record<string, RegExp> = {
    team: /^===\s+\[(.*)\]\s+(.*)\s+===$/,
    gender: /\((F|M)\)/i,
    item: /@\s?(.*)$/i,
    name: /^([^()=@]{2,})/i,
    nickname_name: /^([^()=@]*)\s+\(([^()=@]{2,})\)/i,
    ability: /^Ability:\s?(.*)$/i,
    level: /^Level:\s?([0-9]{1,3})$/i,
    shiny: /^Shiny:\s?(Yes|No)$/i,
    happiness: /^Happiness:\s?([0-9]{1,3})$/i,
    teratype: /^Tera Type:\s?(.*)$/i,
    eivs: /^([EI]Vs):\s?(.*)$/i,
    eivs_value: /^([0-9]+)\s+(hp|atk|def|spa|spd|spe)$/i,
    nature: /^(.*)\s+Nature$/,
    move: /^[-~]\s?(.*)$/i,
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
        pokemon.gender = genderMatches[1].toUpperCase().trim()
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
        pokemon[prop][statData[2]] = parseFloat(statData[1])

        if (pokemon[prop][statData[2]] > limit) {
          pokemon[prop][statData[2]] = limit
        }
      })
      return true
    }
    return false
  }

  _parseKeyValuePairs(line: string, pokemon: Pokemon | any): boolean {
    const rg = ShowdownParser.regexes

    return [
      'ability',
      'level',
      'shiny',
      'happiness',
      'teratype',
      'nature',
    ].some(function (key: string) {
      if (line.match(rg[key])) {
        const matches = rg[key].exec(line)
        if (matches === null) {
          return false
        }

        pokemon[key] = matches[1].trim()

        if (!Number.isNaN(pokemon[key])) {
          pokemon[key] = parseFloat(pokemon[key])
        }

        if (key === 'happiness' && pokemon[key] > 255) {
          pokemon[key] = 255
        }

        if (key === 'level' && pokemon[key] < 1) {
          pokemon[key] = 1
        }

        if (key === 'level' && pokemon[key] > 100) {
          pokemon[key] = 100
        }

        if (key === 'shiny') {
          pokemon[key] = !!pokemon[key].match(/yes/i)
        }

        return true
      }
      return false
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
