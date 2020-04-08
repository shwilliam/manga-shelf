const mongoose = require('mongoose')
const {Manga} = require('./models')

const DB_URL = 'mongodb://mongo:27017/manga-shelf-api'

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = {
  Manga,
}
