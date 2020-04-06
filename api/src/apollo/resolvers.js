const {Manga} = require('../db')

const resolvers = {
  Query: {
    mangas: async () =>
      await Manga.find((e, mangas) => {
        if (e) {
          console.error(e)
          return []
        }
        return mangas
      }),
  },
}

module.exports = {resolvers}
