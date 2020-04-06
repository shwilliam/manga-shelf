import ApolloClient from 'apollo-boost'
import {InMemoryCache} from 'apollo-cache-inmemory'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
})

export {client}
