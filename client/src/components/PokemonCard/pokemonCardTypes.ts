export interface PokemonImages {
  large: string
  small: string
}

export interface CardPrices {
  high: string
  low: string
  market: string
  mid: string
}

export interface CardPricesInfo {
  normal: CardPrices
  holofoil: CardPrices
  reverseHolofoil: CardPrices
  '1stEditionNormal': CardPrices
  '1stEditionHolofoil': CardPrices
  unlimitedHolofoil: CardPrices
}

export interface Prices extends CardPricesInfo {}

export interface TcgPlayer {
  prices: Prices
  url: string
}

export interface PokemonInfo {
  name: string
  images: PokemonImages
  tcgplayer: TcgPlayer
}
