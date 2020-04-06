const mongoose = require('mongoose')

const mangaSchema = new mongoose.Schema({
  ID: String,
  image: String,
  title: String,
  alias: String,
  categories: [String],
  status: String,
  hits: Number,
  lastUpdated: Number,
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = {Manga}
