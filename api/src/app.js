const server = require('./apollo')
const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Lisening on *:${PORT}`)
})
