import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import './App.css'
import { PokemonCard } from './components/PokemonCard/PokemonCard'
import {
  PokemonImages,
  TcgPlayer,
} from './components/PokemonCard/pokemonCardTypes'

interface Pokemon {
  id: string
  name: string
  images: PokemonImages
  tcgplayer: TcgPlayer
}

function App() {
  const [searchPokemon, setSearchPokemon] = useState('')
  const [pokemonData, setPokemonData] = useState([])

  //https://api.pokemontcg.io/v2/cards
  //"https://api.pokemontcg.io/v2/cards?q=set.name:generations subtypes:mega"

  const getPokemonCards = () => {
    return fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchPokemon}`)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getPokemonCards()
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data)
        setPokemonData(data)
      })
  }

  // useEffect(() => {

  // }, [])

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input value={searchPokemon} onChange={handleOnChange} />
      </form>

      <main>
        {pokemonData.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>
    </div>
  )
}

export default App
