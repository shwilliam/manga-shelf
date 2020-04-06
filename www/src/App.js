import React from 'react'
import './global.css'
import {ApolloContextProvider} from './context'
import {MangaList} from './components'

export const App = () => (
  <ApolloContextProvider>
    <MangaList />
  </ApolloContextProvider>
)
