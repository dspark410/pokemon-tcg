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
          <>
            {card.tcgplayer?.prices.normal ? (
              <section>
                <span>Normal Prices</span>
                <p>Low: {card.tcgplayer?.prices.normal?.low}</p>
                <p>Mid: {card.tcgplayer?.prices.normal?.mid}</p>
                <p>High: {card.tcgplayer?.prices.normal?.high}</p>
                <p>Market:{card.tcgplayer?.prices.normal?.market}</p>
              </section>
            ) : null}
            {card.tcgplayer?.prices.holofoil ? (
              <section>
                <span>Holofoil Prices</span>
                <p>Low: {card.tcgplayer?.prices.holofoil?.low}</p>
                <p>Mid: {card.tcgplayer?.prices.holofoil?.mid}</p>
                <p>High: {card.tcgplayer?.prices.holofoil?.high}</p>
                <p>Market: {card.tcgplayer?.prices.holofoil?.market}</p>
              </section>
            ) : null}
            {card.tcgplayer?.prices.reverseHolofoil ? (
              <section>
                <span>Reverse Holofoil Prices</span>
                <p>Low: {card.tcgplayer?.prices.reverseHolofoil?.low}</p>
                <p>Mid: {card.tcgplayer?.prices.reverseHolofoil?.mid}</p>
                <p>High: {card.tcgplayer?.prices.reverseHolofoil?.high}</p>
                <p>Market: {card.tcgplayer?.prices.reverseHolofoil?.market}</p>
              </section>
            ) : null}
            {card.tcgplayer?.prices['1stEditionNormal'] ? (
              <section>
                <span>1st Edition Normal Prices</span>
                <p>Low: {card.tcgplayer?.prices['1stEditionNormal']?.low}</p>
                <p>Mid: {card.tcgplayer?.prices['1stEditionNormal']?.mid}</p>
                <p>High: {card.tcgplayer?.prices['1stEditionNormal']?.high}</p>
                <p>
                  Market: {card.tcgplayer?.prices['1stEditionNormal']?.market}
                </p>
              </section>
            ) : null}
            {card.tcgplayer?.prices['1stEditionHolofoil'] ? (
              <section>
                <span>1st Edition Holofoil Prices</span>
                <p>Low: {card.tcgplayer?.prices['1stEditionHolofoil']?.low}</p>
                <p>Mid: {card.tcgplayer?.prices['1stEditionHolofoil']?.mid}</p>
                <p>
                  High: {card.tcgplayer?.prices['1stEditionHolofoil']?.high}
                </p>
                <p>
                  Market: {card.tcgplayer?.prices['1stEditionHolofoil']?.market}
                </p>
              </section>
            ) : null}
            {card.tcgplayer?.prices?.unlimitedHolofoil ? (
              <section>
                <span>Unlimited Holofoil Prices</span>
                <p>Low: {card.tcgplayer?.prices?.unlimitedHolofoil?.low}</p>
                <p>Mid: {card.tcgplayer?.prices?.unlimitedHolofoil?.mid}</p>
                <p>High: {card.tcgplayer?.prices?.unlimitedHolofoil?.high}</p>
                <p>
                  Market: {card.tcgplayer?.prices?.unlimitedHolofoil?.market}
                </p>
              </section>
            ) : null}
          </>
        </article>
      ))}
    </main>
  )
}
