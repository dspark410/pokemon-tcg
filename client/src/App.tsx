import { useState, useEffect, ChangeEvent } from 'react'
import './App.css'
import { PokemonCard } from './components/PokemonCard/PokemonCard'
import {
  PokemonImages,
  TcgPlayer,
} from './components/PokemonCard/pokemonCardTypes'
import { Col, Row, Form, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

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

  const handleSubmit = () => {
    getPokemonCards()
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data)
        setPokemonData(data)
      })
  }

  return (
    <div className='App'>
      <Row justify='center' align='middle'>
        <Col span={12}>
          <Form
            style={{ display: 'flex', justifyContent: 'center' }}
            onFinish={handleSubmit}>
            <Form.Item name='pokemon'>
              <Input value={searchPokemon} onChange={handleOnChange} />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
              <Button type='primary' htmlType='submit'>
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <main className='grid-container'>
        {pokemonData.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>
    </div>
  )
}

export default App
