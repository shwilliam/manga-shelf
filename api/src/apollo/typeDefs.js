const {gql} = require('apollo-server')

const typeDefs = gql`
  type Manga {
    _id: String
    image: String
    title: String!
    alias: String
    categories: [String]
    status: String
    hits: Int
    lastUpdated: Int
  }

  type Query {
    mangas(favorites: [String]): [Manga]
  }

  type Schema {
    query: Query
  }
`

module.exports = {typeDefs}
