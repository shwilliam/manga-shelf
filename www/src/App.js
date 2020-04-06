import React from 'react'
import './global.css'
import {ApolloContextProvider} from './context'
import {MangaList, MangaDetails} from './components'
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

export const App = () => (
  <ApolloContextProvider>
    <Router>
      <h1>
        <Link to="/">Manga Shelf</Link>
      </h1>

      <Switch>
        <Route path="/:id">
          <MangaDetails />
        </Route>
        <Route path="/">
          <MangaList />
        </Route>
      </Switch>
    </Router>
  </ApolloContextProvider>
)
