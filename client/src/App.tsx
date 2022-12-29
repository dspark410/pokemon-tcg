import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './App.css'
import { Button } from 'antd'
import { Collection } from './components/Collection/Collection'
import { PokemonCardGrid } from './components/PokemonCardGrid/PokemonCardGrid'

function App() {
  const [atCollectionPage, setAtCollectionPage] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setAtCollectionPage(false)
    const path = location.pathname.split('/')[1]

    if (path === 'collection') {
      setAtCollectionPage(true)
    }
  }, [])

  return (
    <>
      <div className='App'>
        {atCollectionPage ? null : (
          <Button
            type='primary'
            href='/collection'
            className='see-collection-button'>
            See Collection
          </Button>
        )}
      </div>
      <Routes>
        <Route path='/' element={<PokemonCardGrid />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </>
  )
}

export default App
