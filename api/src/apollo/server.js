const {ApolloServer} = require('apollo-server-express')
const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')

const server = new ApolloServer({typeDefs, resolvers, cors: true})

module.exports = server
