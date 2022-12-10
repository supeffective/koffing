import { Pokemon } from './Pokemon'

export class PokemonTeam {
  name: string
  format: string
  folder: string | undefined
  pokemon: Pokemon[] = []

  constructor(
    format = 'gen9',
    name = 'Untitled',
    folder: string | undefined = undefined
  ) {
    this.name = name
    this.format = format
    this.folder = folder
  }

  static fromObject(obj: PokemonTeam | Record<string, any>): PokemonTeam {
    const team = new PokemonTeam()
    team.name = obj.name
    team.format = obj.format
    team.folder = obj.folder
    team.pokemon = obj.pokemon
      ? obj.pokemon.map(function (pokemon: Pokemon | Record<string, any>) {
          return Pokemon.fromObject(pokemon)
        })
      : []

    return team
  }

  toJson(indentation = 2): string {
    return JSON.stringify(this, null, indentation)
  }

  toShowdown(): string {
    const name = this.folder ? `${this.folder}/${this.name}` : this.name
    let str = `=== [${this.format}] ${name} ===\n\n`

    str += this.pokemon
      .map(function (p) {
        return p.toString()
      })
      .join('\n\n')

    return str.trim()
  }

  toString(): string {
    return this.toShowdown()
  }
}
