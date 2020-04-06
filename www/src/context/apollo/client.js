import ApolloClient from 'apollo-boost'
import {InMemoryCache} from 'apollo-cache-inmemory'

const API_URL = 'http://localhost:3001'

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})

export {client}
