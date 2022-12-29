import { useState, useEffect } from 'react'
import { PokemonCardPricesInfo } from './PokemonCardPricesInfo/PokemonCardPricesInfo'
import { PokemonInfo } from './pokemonCardTypes'
import { Image } from 'antd'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import './pokemonCard.css'

interface Pokemon {
  pokemon: PokemonInfo
  addtoLocalStorage: (pokemon: PokemonInfo) => void
  removefromLocalStorage: (id: string) => void
}

export const PokemonCard = ({
  pokemon,
  addtoLocalStorage,
  removefromLocalStorage,
}: Pokemon) => {
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
    addtoLocalStorage(pokemon)
    if (addtoCollection) {
      setAddToCollection(false)
      removefromLocalStorage(pokemon.id)
    }
  }

  useEffect(() => {
    if (pokemon.heart) setAddToCollection(true)
  }, [])

  return (
    <section
      className='image-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {/* <h1>{pokemon.name}</h1> */}
      <Image src={pokemon.images.large} />
      {showHeartIcon ? (
        <div className='add-collection-button'>
          {addtoCollection && pokemon.heart ? (
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
