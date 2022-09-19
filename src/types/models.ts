export type iPokemonList = {
  name: string
  url: string
}

export type fullPockemonModel = {
  count: number
  next: string
  previous: null
  results: Array<iPokemonList>
}
