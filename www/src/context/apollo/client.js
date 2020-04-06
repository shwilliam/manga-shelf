import ApolloClient from 'apollo-boost'
const API_URL = 'http://localhost:3001'

const client = new ApolloClient({
  uri: API_URL,
})

export {client}
