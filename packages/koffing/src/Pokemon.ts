export type PokemonStats = {
  hp: number
  atk: number
  def: number
  spa: number
  spd: number
  spe: number
}

const POKEMON_STAT_NAMES = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe']

export class Pokemon {
  name: string | undefined
  nickname: string | undefined
  gender: string | undefined
  item: string | undefined
  ability: string | undefined
  level: number | undefined
  shiny: boolean | undefined
  happiness: number | undefined
  teratype: string | undefined
  nature: string | undefined
  evs: PokemonStats | undefined
  ivs: PokemonStats | undefined
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
    p.teratype = obj.teratype
    p.nature = obj.nature
    p.evs = obj.evs
    p.ivs = obj.ivs
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

    if (!Number.isNaN(this.level)) {
      str += `Level: ${this.level}\n`
    }

    if (this.ability) {
      str += `Ability: ${this.ability}\n`
    }

    if (this.shiny === true) {
      str += `Shiny: Yes\n`
    }

    if (!Number.isNaN(this.happiness)) {
      str += `Happiness: ${this.happiness}\n`
    }

    if (this.teratype) {
      str += `Tera Type: ${this.teratype}\n`
    }

    if (this.nature) {
      str += `${this.nature} Nature\n`
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
