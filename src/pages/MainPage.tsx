import PokemonListElement from '../components/PokemonListElement'
import getPokemonList from '../hooks/pokemonList'

const MainPage = () => {
  const pokemons = getPokemonList()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <h1>Main page</h1>
      {pokemons?.map(pokemon => (
        <PokemonListElement key={pokemon.url} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default MainPage
