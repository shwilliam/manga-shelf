import React from 'react'
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {ApolloContextProvider} from './context'
import {
  AllMangaList,
  FavoritesMangaList,
  MangaDetails,
  Read,
} from './components'
import './global.css'

export const App = () => (
  <ApolloContextProvider>
    <Router>
      <header>
        <h1>
          <Link to="/">Manga Shelf</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/favorites">
          <FavoritesMangaList />
        </Route>
        <Route path="/read/:id">
          <Read />
        </Route>
        <Route path="/:id">
          <MangaDetails />
        </Route>
        <Route path="/">
          <AllMangaList />
        </Route>
      </Switch>
    </Router>
  </ApolloContextProvider>
)
