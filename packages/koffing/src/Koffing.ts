import { Pokemon } from './Pokemon'
import { PokemonTeam } from './PokemonTeam'
import { PokemonTeamSet } from './PokemonTeamSet'
import { ShowdownParser } from './ShowdownParser'

type DataType = string | Pokemon | PokemonTeam | PokemonTeamSet | ShowdownParser

export class Koffing {
  /**
   * Converts from Showdown to a PokemonTeamSet object.
   */
  static parse(data: DataType): Pokemon | PokemonTeam | PokemonTeamSet {
    if (
      data instanceof PokemonTeamSet ||
      data instanceof PokemonTeam ||
      data instanceof Pokemon
    ) {
      return data
    }
    if (data instanceof ShowdownParser) {
      return data.parse()
    }
    return new ShowdownParser(data).parse()
  }

  /**
   * Prettifies and sanitizes the given Showdown code.
   */
  static format(data: DataType): string {
    return this.parse(data).toShowdown()
  }

  /**
   * Converts from Showdown to JSON code.
   */
  static toJson(data: DataType): string {
    return this.parse(data).toJson()
  }

  /**
   * Converts from JSON string or JSON object to Showdown code.
   */
  static toShowdown(data: DataType | object): string {
    if (
      data instanceof PokemonTeamSet ||
      data instanceof PokemonTeam ||
      data instanceof Pokemon
    ) {
      return data.toShowdown()
    }
    if (data instanceof ShowdownParser) {
      return data.parse().toShowdown()
    }
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
    return PokemonTeamSet.fromObject(data as object).toShowdown()
  }
}
