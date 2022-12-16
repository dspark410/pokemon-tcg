import { useState, useEffect, ChangeEvent } from 'react'
import { Col, Row, Form, Input, Button, BackTop } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { PokemonInfo } from './PokemonCard/pokemonCardTypes'
import { PokemonCard } from './PokemonCard/PokemonCard'
import './pokemonCardGrid.css'

export const PokemonCardGrid = () => {
  const [searchPokemon, setSearchPokemon] = useState('')
  const [pokemonData, setPokemonData] = useState<PokemonInfo[]>([])
  const [heartData, setHeartData] = useState<PokemonInfo[]>([])
  const [collection, setCollection] = useState<PokemonInfo[]>([])

  //https://api.pokemontcg.io/v2/cards
  //"https://api.pokemontcg.io/v2/cards?q=set.name:generations subtypes:mega"
  const getCollection = localStorage.getItem('collection')

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
        //console.log(data)
        setPokemonData(data)
      })
  }

  const addtoLocalStorage = (pokemon: PokemonInfo) => {
    const copiedCollection = [...collection]
    copiedCollection.push(pokemon)
    localStorage.setItem('collection', JSON.stringify(copiedCollection))
    setCollection(copiedCollection)
  }

  const removefromLocalStorage = (id: string) => {
    const copiedCollection = [...collection]
    const filteredCollection = copiedCollection.filter(
      (collection) => collection.id !== id
    )
    localStorage.setItem('collection', JSON.stringify(filteredCollection))
    setCollection(filteredCollection)
  }

  useEffect(() => {
    if (!!getCollection) {
      setCollection(JSON.parse(getCollection))
    }
  }, [])

  useEffect(() => {
    const copiedPokemonData = [...pokemonData]
    if (copiedPokemonData && copiedPokemonData.length > 0) {
      copiedPokemonData.forEach((data, i) => {
        if (!!getCollection) {
          JSON.parse(getCollection).forEach((ccollection: PokemonInfo) => {
            if (data.id === ccollection.id) {
              copiedPokemonData[i].heart = true
            }
          })
        }
      })
      //console.log({ copiedPokemonData })
      setHeartData(copiedPokemonData)
    }
  }, [collection, getCollection, pokemonData])
  return (
    <>
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
        {heartData.map((pokemon: PokemonInfo) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addtoLocalStorage={() => addtoLocalStorage(pokemon)}
            removefromLocalStorage={() => removefromLocalStorage(pokemon.id)}
          />
        ))}
      </main>
      <BackTop />
    </>
  )
}
