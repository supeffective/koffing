import fs from 'fs'
import { Koffing, Pokemon, PokemonTeamSet } from '../src'

export const loadFixture = function (fileName: string): PokemonTeamSet {
  const rawData = fs.readFileSync(__dirname + '/' + fileName, 'utf8') + ''
  return Koffing.parse(rawData) as PokemonTeamSet
}

export const expectPokemonEquals = function (
  actual: Pokemon,
  expected: Pokemon | Partial<Pokemon>
): void {
  //console.log('actual', actual)
  //console.log('expected', expected)

  const {
    ivs: actualIvs,
    evs: actualEvs,
    moves: actualMoves,
    ...actualScalarValues
  } = actual
  const { ivs, evs, moves, ...expectedScalarValues } = expected

  expect(actualScalarValues).toMatchObject(expectedScalarValues)

  if (evs !== undefined) {
    expect(actualEvs).toMatchObject(evs)
  } else {
    expect(actualEvs).toBeUndefined()
  }

  if (ivs !== undefined) {
    expect(actualIvs).toMatchObject(ivs)
  } else {
    expect(actualIvs).toBeUndefined()
  }

  expect(actualMoves).toStrictEqual(moves)
}

export const expectPokemonEqualsShowdown = function (
  actual: Pokemon,
  expected: string
): void {
  const expectedTrimmed = expected
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .join('\n')

  expect(actual.toShowdown()).toEqual(expectedTrimmed)
}
