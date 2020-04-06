const mongoose = require('mongoose')
const {Manga} = require('./models')

const DB_URL = 'mongodb://localhost:27017/manga-shelf-db'

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = {
  Manga,
}
