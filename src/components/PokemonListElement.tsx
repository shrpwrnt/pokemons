import { FC } from 'react'

import { iPokemonList } from '../types/models'

type Props = {
  pokemon: iPokemonList
}

const PokemonListElement: FC<Props> = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      {/* <a href="#">Read more...</a> */}
    </div>
  )
}

export default PokemonListElement
