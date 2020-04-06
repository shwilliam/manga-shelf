const {Manga} = require('../db')

const resolvers = {
  Query: {
    mangas: async (_, args) => {
      let mangas = await Manga.find((e, mangas) => {
        if (e) {
          console.error(e)
          return []
        }
        return mangas
      }).sort({lastUpdated: -1})

      if (args.favorites) {
        mangas = mangas.filter(({_id}) => args.favorites.includes(String(_id)))
      }

      if (args.query) {
        const lowerCaseQuery = args.query.toLowerCase()

        mangas = mangas.filter(
          ({aka, artist, author, categories, description, title}) =>
            (aka &&
              aka.some(str => str.toLowerCase().includes(lowerCaseQuery))) ||
            (artist && artist.toLowerCase().includes(lowerCaseQuery)) ||
            (author && author.toLowerCase().includes(lowerCaseQuery)) ||
            (categories &&
              categories.some(str =>
                str.toLowerCase().includes(lowerCaseQuery),
              )) ||
            (description &&
              description.toLowerCase().includes(lowerCaseQuery)) ||
            title.toLowerCase().includes(lowerCaseQuery),
        )
      }

      return mangas
    },
  },
}

module.exports = {resolvers}
