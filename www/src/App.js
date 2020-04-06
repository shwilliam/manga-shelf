import React, {useState} from 'react'
import './global.css'
import {ApolloContextProvider} from './context'
import {MangaList, MangaDetails} from './components'

const MangaSelector = () => {
  const [activeManga, setActiveManga] = useState()
  const clearActiveManga = () => setActiveManga(null)

  if (activeManga)
    return <MangaDetails id={activeManga} onClose={clearActiveManga} />

  return <MangaList onSelect={setActiveManga} />
}

export const App = () => (
  <ApolloContextProvider>
    <h1>Manga Shelf</h1>
    <MangaSelector />
  </ApolloContextProvider>
)
