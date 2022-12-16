import { useState, useEffect } from 'react'
import { Image } from 'antd'
import { PokemonInfo } from '../PokemonCardGrid/PokemonCard/pokemonCardTypes'
import './collection.css'

export const Collection = () => {
  const [collection, setCollection] = useState<PokemonInfo[]>([])

  const getCollection = localStorage.getItem('collection')

  useEffect(() => {
    if (!!getCollection) {
      setCollection(JSON.parse(getCollection))
    }
  }, [])

  return (
    <main className='collection-grid-container'>
      {collection.map((card) => (
        <article key={card.id}>
          <Image src={card.images.large} />
        </article>
      ))}
    </main>
  )
}
