import Pokemon from './Pokemon'
import PokemonTeam from './PokemonTeam'
import PokemonTeamSet from './PokemonTeamSet'

/**
 * Ported from Pokemon Showdown Client's exportTeam/importTeam functions.
 *
 * @see https://github.com/Zarel/Pokemon-Showdown-Client/blob/8994e9e/js/storage.js
 */
class ShowdownParser {
  /**
   * @param {String} code
   */
  constructor(code) {
    /**
     * @type {String}
     */
    this.code = code.trim() + ''
  }

  /**
   * @returns {PokemonTeamSet}
   */
  parse() {
    const regexes = ShowdownParser.regexes

    /**
     * @type {PokemonTeam[]}
     */
    let teams = []

    /**
     * @type {{team: PokemonTeam, pokemon: Pokemon}}
     */
    let current = {
      team: null,
      pokemon: null,
    }

    /**
     * @type {string[]}
     */
    let lines = this.code
      .trim()
      .split('\n')
      .map(function (line) {
        return line.trim()
      })

    let $this = this

    lines.forEach(function (line) {
      // New Team
      if (line.match(regexes.team)) {
        // Start new team
        current.team = new PokemonTeam()
        $this._parseTeam(line, current.team)
        teams.push(current.team)
        return
      }

      // Separator
      if (line === '' || line.match(/^[- ]+$/)) {
        // Line break (empty or as dashes separator), previous Pokemon definition ended.
        $this._saveCurrent(teams, current)
        return
      }

      // New Pokemon + nickname, name, gender and item
      if (!current.pokemon) {
        current.pokemon = new Pokemon()
        $this._parseNameLine(line, current.pokemon)
        return
      }

      // Ability, Level, etc.
      if ($this._parseKeyValuePairs(line, current.pokemon)) {
        return
      }

      // EVs and IVs
      if ($this._parseEvsIvs(line, current.pokemon)) {
        return
      }

      // Moves
      if (current.pokemon.moves.length < 4 && line.match(regexes.move)) {
        current.pokemon.moves.push(regexes.move.exec(line)[1].trim())
      }
    })

    this._saveCurrent(teams, current)

    return new PokemonTeamSet(teams)
  }

  /**
   * @param {string} line
   * @param {PokemonTeam} team
   * @private
   */
  _parseTeam(line, team) {
    const rg = ShowdownParser.regexes

    let teamData = rg.team.exec(line)
    let teamNames = teamData[2].split('/')
    let teamName, teamFolder

    if (teamNames.length > 1) {
      teamFolder = teamNames.shift()
      teamName = teamNames.join('/')
    } else {
      teamName = teamData[2]
    }

    team.format = teamData[1].trim()
    team.name = teamName.trim()
    team.folder = teamFolder ? teamFolder.trim() : undefined
  }

  /**
   * @param {string} line
   * @param {Pokemon} pokemon
   * @private
   */
  _parseNameLine(line, pokemon) {
    const rg = ShowdownParser.regexes

    if (line.match(rg.nickname_name)) {
      // has nickname?
      let nameMatches = rg.nickname_name.exec(line)
      pokemon.nickname = nameMatches[1].trim()
      pokemon.name = nameMatches[2].trim()
    } else if (line.match(rg.name)) {
      let nameMatches = rg.name.exec(line)
      pokemon.name = nameMatches[1].trim()
    }

    if (line.match(rg.gender)) {
      pokemon.gender = rg.gender.exec(line)[1].toUpperCase().trim()
    }

    if (line.match(rg.item)) {
      pokemon.item = rg.item.exec(line)[1].trim()
    }
  }

  /**
   * @param {string} line
   * @param {Pokemon} pokemon
   * @returns {boolean} True if it matched some, false otherwise
   * @private
   */
  _parseEvsIvs(line, pokemon) {
    const rg = ShowdownParser.regexes

    if (line.match(rg.eivs)) {
      let data = rg.eivs.exec(line)
      let prop = data[1].toLowerCase()
      let values = data[2].split('/')
      let limit = prop === 'evs' ? 255 : 31

      values.forEach(function (stat) {
        let statData = rg.eivs_value.exec(stat.trim().toLowerCase())
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

  /**
   * @param {string} line
   * @param {Pokemon} pokemon
   * @returns {boolean} True if it matched some, false otherwise
   * @private
   */
  _parseKeyValuePairs(line, pokemon) {
    const rg = ShowdownParser.regexes

    return [
      'ability',
      'level',
      'shiny',
      'happiness',
      'teratype',
      'nature',
    ].some(function (key) {
      if (line.match(rg[key])) {
        pokemon[key] = rg[key].exec(line)[1].trim()

        if (!isNaN(pokemon[key])) {
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
   *
   * @param {Array} teams
   * @param {{team: PokemonTeam, pokemon: Pokemon}} current
   * @returns {ShowdownParser}
   * @private
   */
  _saveCurrent(teams, current) {
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
   *
   * @returns {ShowdownParser}
   */
  format() {
    this.code = this.parse().toString()
    return this
  }

  /**
   * @returns {string}
   */
  toString() {
    return this.code
  }
}

ShowdownParser.regexes = {
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

export default ShowdownParser
