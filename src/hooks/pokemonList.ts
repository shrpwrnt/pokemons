import { useEffect, useState } from 'react'
import axios from 'axios'

import { iPokemonList, fullPockemonModel } from '../types/models'

const getPokemonList = () => {
  const [pokemons, setPokemons] = useState<Array<iPokemonList>>([])

  async function fetchPokemonList() {
    const response = await axios.get<fullPockemonModel>(
      'https://pokeapi.co/api/v2/pokemon/'
    )
    setPokemons(response.data.results)
  }

  useEffect(() => {
    fetchPokemonList()
  }, [])

  return pokemons
}

export default getPokemonList
