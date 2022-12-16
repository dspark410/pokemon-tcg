import React from 'react'
import { PokemonInfo } from '../pokemonCardTypes'

interface Pokemon {
  pokemon: PokemonInfo
}

export const PokemonCardPricesInfo = ({ pokemon }: Pokemon) => {
  return (
    <>
      {pokemon.tcgplayer?.prices.normal ? (
        <section>
          <span>Normal Prices</span>
          <p>Low: {pokemon.tcgplayer?.prices.normal?.low}</p>
          <p>Mid: {pokemon.tcgplayer?.prices.normal?.mid}</p>
          <p>High: {pokemon.tcgplayer?.prices.normal?.high}</p>
          <p>Market:{pokemon.tcgplayer?.prices.normal?.market}</p>
        </section>
      ) : null}
      {pokemon.tcgplayer?.prices.holofoil ? (
        <section>
          <span>Holofoil Prices</span>
          <p>Low: {pokemon.tcgplayer?.prices.holofoil?.low}</p>
          <p>Mid: {pokemon.tcgplayer?.prices.holofoil?.mid}</p>
          <p>High: {pokemon.tcgplayer?.prices.holofoil?.high}</p>
          <p>Market: {pokemon.tcgplayer?.prices.holofoil?.market}</p>
        </section>
      ) : null}
      {pokemon.tcgplayer?.prices.reverseHolofoil ? (
        <section>
          <span>Reverse Holofoil Prices</span>
          <p>Low: {pokemon.tcgplayer?.prices.reverseHolofoil?.low}</p>
          <p>Mid: {pokemon.tcgplayer?.prices.reverseHolofoil?.mid}</p>
          <p>High: {pokemon.tcgplayer?.prices.reverseHolofoil?.high}</p>
          <p>Market: {pokemon.tcgplayer?.prices.reverseHolofoil?.market}</p>
        </section>
      ) : null}
      {pokemon.tcgplayer?.prices['1stEditionNormal'] ? (
        <section>
          <span>1st Edition Normal Prices</span>
          <p>Low: {pokemon.tcgplayer?.prices['1stEditionNormal']?.low}</p>
          <p>Mid: {pokemon.tcgplayer?.prices['1stEditionNormal']?.mid}</p>
          <p>High: {pokemon.tcgplayer?.prices['1stEditionNormal']?.high}</p>
          <p>Market: {pokemon.tcgplayer?.prices['1stEditionNormal']?.market}</p>
        </section>
      ) : null}
      {pokemon.tcgplayer?.prices['1stEditionHolofoil'] ? (
        <section>
          <span>1st Edition Holofoil Prices</span>
          <p>Low: {pokemon.tcgplayer?.prices['1stEditionHolofoil']?.low}</p>
          <p>Mid: {pokemon.tcgplayer?.prices['1stEditionHolofoil']?.mid}</p>
          <p>High: {pokemon.tcgplayer?.prices['1stEditionHolofoil']?.high}</p>
          <p>
            Market: {pokemon.tcgplayer?.prices['1stEditionHolofoil']?.market}
          </p>
        </section>
      ) : null}
      {pokemon.tcgplayer?.prices?.unlimitedHolofoil ? (
        <section>
          <span>Unlimited Holofoil Prices</span>
          <p>Low: {pokemon.tcgplayer?.prices?.unlimitedHolofoil?.low}</p>
          <p>Mid: {pokemon.tcgplayer?.prices?.unlimitedHolofoil?.mid}</p>
          <p>High: {pokemon.tcgplayer?.prices?.unlimitedHolofoil?.high}</p>
          <p>Market: {pokemon.tcgplayer?.prices?.unlimitedHolofoil?.market}</p>
        </section>
      ) : null}
    </>
  )
}
