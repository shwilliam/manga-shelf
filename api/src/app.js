const app = require('./apollo')
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Listening on *:${PORT}`)
})

module.exports = {app}
