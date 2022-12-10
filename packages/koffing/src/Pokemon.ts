export type PokemonStats = {
  hp: number
  atk: number
  def: number
  spa: number
  spd: number
  spe: number
}

export type PokemonGender = 'M' | 'F'

const POKEMON_STAT_NAMES = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe']

export class Pokemon {
  name: string | undefined
  nickname: string | undefined
  gender: PokemonGender | undefined
  item: string | undefined
  pokeball: string | undefined
  ability: string | undefined
  level: number | undefined
  shiny: boolean | undefined
  happiness: number | undefined
  nature: string | undefined
  evs: PokemonStats | undefined
  ivs: PokemonStats | undefined
  dynamaxLevel: number | undefined
  gigantamax: boolean | undefined
  teraType: string | undefined
  moves: string[] = []

  static fromObject(obj: Pokemon | Record<string, any>): Pokemon {
    const p = new Pokemon()
    p.name = obj.name
    p.nickname = obj.nickname
    p.gender = obj.gender
    p.item = obj.item
    p.ability = obj.ability
    p.level = obj.level
    p.shiny = obj.shiny
    p.happiness = obj.happiness
    p.nature = obj.nature
    p.evs = obj.evs
    p.ivs = obj.ivs
    p.teraType = obj.teraType
    p.dynamaxLevel = obj.dynamaxLevel
    p.gigantamax = obj.gigantamax
    p.pokeball = obj.pokeball
    p.moves = Array.isArray(obj.moves) ? obj.moves : []

    return p
  }

  toJson(indentation = 2): string {
    return JSON.stringify(this, null, indentation)
  }

  toShowdown(): string {
    let str = ''

    if (this.nickname) {
      str += `${this.nickname} (${this.name})`
    } else {
      str += `${this.name}`
    }

    if (this.gender && this.gender.match(/^[MF]$/i)) {
      str += ` (${this.gender.toUpperCase()})`
    }

    if (this.item) {
      str += ` @ ${this.item}`
    }

    str += '\n'

    if (this.ability) {
      str += `Ability: ${this.ability}\n`
    }

    if (!Number.isNaN(this.level)) {
      str += `Level: ${this.level}\n`
    }

    if (this.shiny === true) {
      str += `Shiny: Yes\n`
    }

    if (!Number.isNaN(this.happiness)) {
      str += `Happiness: ${this.happiness}\n`
    }

    if (this.pokeball) {
      str += `Pokeball: ${this.pokeball}\n`
    }

    if (!Number.isNaN(this.dynamaxLevel)) {
      str += `Dynamax Level: ${this.dynamaxLevel}\n`
    }

    if (this.gigantamax === true) {
      str += `Gigantamax: Yes\n`
    }

    if (this.teraType) {
      str += `Tera Type: ${this.teraType}\n`
    }

    if (this.evs) {
      const evs = this.evs as Record<string, number>
      str +=
        `EVs: ` +
        POKEMON_STAT_NAMES.filter(function (prop) {
          return !isNaN(evs[prop.toLowerCase()])
        })
          .map(function (prop) {
            const val = evs[prop.toLowerCase()]
            return `${val} ${prop}`
          })
          .join(' / ') +
        '\n'
    }

    if (this.nature) {
      str += `${this.nature} Nature\n`
    }

    if (this.ivs) {
      const ivs = this.ivs as Record<string, number>
      str +=
        `IVs: ` +
        POKEMON_STAT_NAMES.filter(function (prop) {
          return !isNaN(ivs[prop.toLowerCase()])
        })
          .map(function (prop) {
            const val = ivs[prop.toLowerCase()]
            return `${val} ${prop}`
          })
          .join(' / ') +
        '\n'
    }

    if (this.moves) {
      str +=
        this.moves
          .map(function (move) {
            return `- ${move}`
          })
          .join('\n') + '\n'
    }

    return str.trim()
  }

  toString(): string {
    return this.toShowdown()
  }
}
