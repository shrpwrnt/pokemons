import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'
import PokemonPage from './pages/PokemonPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/pokemonpage' element={<PokemonPage />} />
    </Routes>
  )
}

export default App
