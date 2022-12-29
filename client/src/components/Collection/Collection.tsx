import { useState, useEffect } from "react";
import { Image } from "antd";
import { PokemonInfo } from "../PokemonCardGrid/PokemonCard/pokemonCardTypes";
import "./collection.css";

export const Collection = () => {
  const [collection, setCollection] = useState<PokemonInfo[]>([]);
  const [price, setPrice] = useState(0);
  const getCollection = localStorage.getItem("collection");

  const getCollectionPriceTotal = () => {
    return collection.reduce((acc: any, card) => {
      let cardPrice =
        card?.tcgplayer?.prices.normal?.mid ||
        card.tcgplayer?.prices.holofoil?.mid ||
        card.tcgplayer?.prices.reverseHolofoil?.mid ||
        card.tcgplayer?.prices["1stEditionNormal"]?.mid ||
        card.tcgplayer?.prices["1stEditionHolofoil"]?.mid ||
        card.tcgplayer?.prices?.unlimitedHolofoil?.mid;
      return (acc += cardPrice);
    }, 0);
  };

  useEffect(() => {
    if (!!getCollection) {
      setCollection(JSON.parse(getCollection));
    }
  }, []);

  useEffect(() => {
    const collectionTotal = getCollectionPriceTotal();
    console.log(collectionTotal);
    setPrice(collectionTotal);
  }, [collection]);

  return (
    <main className="collection-container">
      <section className="collection-grid-container">
        {collection.map((card) => (
          <article key={card.id}>
            <Image src={card.images.large} />
          </article>
        ))}
      </section>
      <section className="price-container">{price}</section>
    </main>
  );
};
