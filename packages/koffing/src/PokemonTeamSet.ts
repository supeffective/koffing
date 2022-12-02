import { PokemonTeam } from './PokemonTeam'

export class PokemonTeamSet {
  teams: PokemonTeam[]

  constructor(teams: PokemonTeam[] = []) {
    this.teams = teams
  }

  static fromObject(obj: PokemonTeamSet | Record<string, any>): PokemonTeamSet {
    const teamSet = new PokemonTeamSet()
    teamSet.teams = obj.teams
      ? obj.teams.map(function (team: PokemonTeam | Record<string, any>) {
          return PokemonTeam.fromObject(team)
        })
      : []

    return teamSet
  }

  toJson(indentation = 2): string {
    return JSON.stringify(this, null, indentation)
  }

  toShowdown(): string {
    return this.teams
      .map(function (p) {
        return p.toString()
      })
      .join('\n\n')
      .trim()
  }

  toString(): string {
    return this.toShowdown()
  }
}
