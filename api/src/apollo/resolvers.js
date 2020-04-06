const {Manga} = require('../db')

const resolvers = {
  Query: {
    mangas: async (_, args) => {
      const mangas = await Manga.find((e, mangas) => {
        if (e) {
          console.error(e)
          return []
        }
        return mangas
      }).sort({lastUpdated: -1})

      if (args.favorites) {
        return mangas.filter(({_id}) => args.favorites.includes(String(_id)))
      }

      return mangas
    },
  },
}

module.exports = {resolvers}
