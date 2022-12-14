import React, { useState, MouseEvent } from 'react'
import { PokemonCardPricesInfo } from './PokemonCardPricesInfo/PokemonCardPricesInfo'
import { PokemonInfo } from './pokemonCardTypes'
import { Image, Button } from 'antd'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'

interface Pokemon {
  pokemon: PokemonInfo
}

export const PokemonCard = ({ pokemon }: Pokemon) => {
  const [showHeartIcon, setShowHeartIcon] = useState(false)
  const [addtoCollection, setAddToCollection] = useState(false)

  const handleMouseOver = () => {
    setShowHeartIcon(true)
  }

  const handleMouseOut = () => {
    setShowHeartIcon(false)
  }

  const handleClick = () => {
    setAddToCollection(true)

    if (addtoCollection) {
      setAddToCollection(false)
    }
    //localStorage.setItem('collection', JSON.stringify(collection))
  }

  return (
    <section
      className='image-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {/* <h1>{pokemon.name}</h1> */}
      <img src={pokemon.images.small} />
      {showHeartIcon ? (
        <div className='add-collection-button'>
          {addtoCollection ? (
            <span onClick={handleClick}>
              <HeartFilled style={{ fontSize: '1.75rem', color: '#EBEBEB' }} />
            </span>
          ) : (
            <span onClick={handleClick}>
              <HeartOutlined
                style={{ fontSize: '1.75rem', color: '#EBEBEB' }}
              />
            </span>
          )}
        </div>
      ) : null}

      {/* <PokemonCardPricesInfo pokemon={pokemon} /> */}
    </section>
  )
}
