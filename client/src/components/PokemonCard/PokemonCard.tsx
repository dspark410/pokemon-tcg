import React, { useState } from 'react'
import { PokemonCardPricesInfo } from './PokemonCardPricesInfo/PokemonCardPricesInfo'
import { PokemonInfo } from './pokemonCardTypes'
import { Image, Button } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

interface Pokemon {
  pokemon: PokemonInfo
}

export const PokemonCard = ({ pokemon }: Pokemon) => {
  const [showHeartIcon, setShowHeartIcon] = useState(false)

  const handleMouseOver = () => {
    setShowHeartIcon(true)
  }

  const handleMouseOut = () => {
    setShowHeartIcon(false)
  }

  return (
    <main className='image-container'>
      {/* <h1>{pokemon.name}</h1> */}
      <Image
        src={pokemon.images.large}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {showHeartIcon ? (
        <div className='add-collection-button'>
          <HeartOutlined />
        </div>
      ) : null}

      {/* <PokemonCardPricesInfo pokemon={pokemon} /> */}
    </main>
  )
}
