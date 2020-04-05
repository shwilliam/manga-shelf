const {gql} = require('apollo-server')

module.exports = gql`
  type Manga {
    ID: String
    image: String
    title: String!
    alias: String
    categories: [String]
    status: String
    hits: Int
    lastUpdated: Int
  }

  type Query {
    foo: String
  }

  type Schema {
    query: Query
  }
`
