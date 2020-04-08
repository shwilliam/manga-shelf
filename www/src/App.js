import React from 'react'
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Grommet, Box, Header, Heading, Main, Text} from 'grommet'
import {aruba} from 'grommet/themes'
import {Catalog} from 'grommet-icons'
import {ApolloContextProvider} from './context'
import {
  AllMangaList,
  FavoritesMangaList,
  MangaDetails,
  Read,
  SearchForm,
  LocalChapterList,
} from './components'
import './global.css'

export const App = () => (
  <ApolloContextProvider>
    <Grommet theme={aruba}>
      <Router>
        <Header border="bottom">
          <Heading size="medium" level={1} margin="medium">
            <Link to="/">
              <Box direction="row" align="center">
                <Catalog size="large" />
                <Text className="site-title" margin="medium" size="large">
                  Manga Shelf
                </Text>
              </Box>
            </Link>
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
              <Link to="/progress">Progress</Link>
            </Box>
          </Box>
        </Header>

        <Main>
          <Box align="center" justify="start" pad="medium">
            <Switch>
              <Route path="/favorites">
                <Heading level={2} margin="large">
                  Favorites
                </Heading>
                <FavoritesMangaList />
              </Route>
              <Route path="/progress">
                <LocalChapterList />
              </Route>
              <Route path="/read/:id">
                <Read />
              </Route>
              <Route path="/:id">
                <MangaDetails />
              </Route>
              <Route path="/">
                <Heading level={2} margin="large">
                  Browse
                </Heading>
                <AllMangaList />
              </Route>
            </Switch>
          </Box>
        </Main>
      </Router>
    </Grommet>
  </ApolloContextProvider>
)
