import React from 'react'
import { PokemonCardPricesInfo } from './PokemonCardPricesInfo/PokemonCardPricesInfo'

import { PokemonInfo } from './pokemonCardTypes'

interface Pokemon {
  pokemon: PokemonInfo
}

export const PokemonCard = ({ pokemon }: Pokemon) => {
  return (
    <main>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.images.small} />
      <PokemonCardPricesInfo pokemon={pokemon} />
    </main>
  )
}
