import React from 'react'
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Grommet, Box, Header, Heading, Main} from 'grommet'
import {aruba} from 'grommet/themes'
import {ApolloContextProvider} from './context'
import {
  AllMangaList,
  FavoritesMangaList,
  MangaDetails,
  Read,
  SearchForm,
} from './components'
import './global.css'

export const App = () => (
  <ApolloContextProvider>
    <Grommet theme={aruba}>
      <Router>
        <Header background="light-2">
          <Heading size="medium" level={1} margin="medium">
            <Link to="/">Manga Shelf</Link>
          </Heading>

          <Box
            direction="row"
            justify="end"
            align="center"
            margin="medium"
            wrap="reverse"
          >
            <Box pad="medium">
              <SearchForm />
            </Box>

            <Box direction="row" gap="medium" pad="small" as="nav">
              <Link to="/">Browse</Link>
              <Link to="/favorites">Favorites</Link>
            </Box>
          </Box>
        </Header>

        <Main>
          <Box align="center" justify="start" pad="large">
            <Switch>
              <Route path="/favorites">
                <Heading level={2}>Favorites</Heading>
                <FavoritesMangaList />
              </Route>
              <Route path="/read/:id">
                <Read />
              </Route>
              <Route path="/:id">
                <MangaDetails />
              </Route>
              <Route path="/">
                <Heading level={2}>Browse</Heading>
                <AllMangaList />
              </Route>
            </Switch>
          </Box>
        </Main>
      </Router>
    </Grommet>
  </ApolloContextProvider>
)
