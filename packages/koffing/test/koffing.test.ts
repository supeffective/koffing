import { PokemonStats } from '../src'
import {
  expectPokemonEquals,
  expectPokemonEqualsShowdown,
  loadFixture,
} from './utils'

it('team 1 fixture test', () => {
  const teamSet = loadFixture('team1.fixture.pkms')

  expect(teamSet.teams).toBeInstanceOf(Array)
  expect(teamSet.teams).toHaveLength(1)

  const team = teamSet.teams[0]
  //expect(team).toBeInstanceOf(PokemonTeamSet)
  expect(team.format).toBe('gen9')
  expect(team.folder).toBe('Folder 1')
  expect(team.name).toBe('Example Team')

  const pokemon = team.pokemon
  expect(pokemon).toBeInstanceOf(Array)
  expect(pokemon).toHaveLength(2)

  expectPokemonEquals(pokemon[0], {
    nickname: 'Smogon',
    name: 'Weezing',
    gender: 'F',
    item: 'Leftovers',
    ability: 'Levitate',
    level: 50,
    shiny: true,
    pokeball: 'Beast',
    dynamaxLevel: 10,
    gigantamax: undefined,
    teraType: 'Fire',
    happiness: 255,
    nature: 'Bold',
    evs: {
      hp: 36,
      def: 236,
      spd: 236,
    } as PokemonStats,
    ivs: {
      hp: 30,
      atk: 0,
      spd: 30,
      spe: 29,
    } as PokemonStats,
    moves: ['Will-O-Wisp', 'Pain Split', 'Sludge Bomb', 'Fire Blast'],
  })

  expectPokemonEqualsShowdown(
    pokemon[0],
    `
    Smogon (Weezing) (F) @ Leftovers
    Ability: Levitate
    Level: 50
    Shiny: Yes
    Happiness: 255
    Pokeball: Beast
    Dynamax Level: 10
    Tera Type: Fire
    EVs: 36 HP / 236 Def / 236 SpD
    Bold Nature
    IVs: 30 HP / 0 Atk / 30 SpD / 29 Spe
    - Will-O-Wisp
    - Pain Split
    - Sludge Bomb
    - Fire Blast
    `
  )
})
