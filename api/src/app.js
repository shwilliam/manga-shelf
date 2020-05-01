const express = require('express')
const path = require('path')
const server = require('./apollo')

const PORT = process.env.PORT || 3001
const CLIENT_BUILD_PATH = path.join(__dirname, '../../www/build')

const app = express()

server.applyMiddleware({app})

app.use(express.static(CLIENT_BUILD_PATH))

app.get('*', (_, res) => {
  res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Client: */
GQL endpoint: *${server.graphqlPath}`)
})

module.exports = {app}
