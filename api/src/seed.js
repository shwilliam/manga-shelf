const axios = require('axios')
const {Manga} = require('./db')

const MANGA_API_BASE_URL = 'https://www.mangaeden.com/api'
const MANGA_API_ALL_URL = `${MANGA_API_BASE_URL}/list/0/`

const axiosAllManga = axios.create({
  baseURL: MANGA_API_ALL_URL,
})

axiosAllManga.interceptors.response.use(res => {
  if (res.config.baseURL === MANGA_API_ALL_URL) {
    res.data = res.data.manga.map(({a, c, h, i, im, s, t, ld}) => ({
      _id: i,
      image: im,
      title: t,
      alias: a,
      categories: c,
      status: s,
      hits: h,
      lastUpdated: ld || null,
    }))
  }
  return res.data
})

const seed = async () => {
  try {
    const mangas = await axiosAllManga.get()
    const existingMangas = await Manga.find((e, mangas) => {
      if (e) return console.error(e)
      return mangas
    })

    // TODO: combine filters in single reduce
    const mangasToCreate = mangas.filter(manga => {
      const idx = existingMangas.findIndex(
        existingManga => existingManga._id == manga._id,
      )

      return idx === -1
    })
    const mangasToUpdate = mangas.filter(manga => {
      const idx = existingMangas.findIndex(
        existingManga => existingManga._id == manga._id,
      )

      if (idx === -1) return false

      return existingMangas[idx].lastUpdated !== manga.lastUpdated
    })

    await Promise.all([
      ...mangasToCreate.map(manga =>
        new Manga(manga)
          .save()
          .catch(e => console.error(`Error saving ${manga.title}: ${e}`)),
      ),
      ...mangasToUpdate.map(manga =>
        Manga.findByIdAndUpdate(manga._id, manga).catch(e =>
          console.error(`Error saving ${manga.title}: ${e}`),
        ),
      ),
    ])

    console.log(
      `Created ${mangasToCreate.length} & updated ${mangasToUpdate.length} records`,
    )
    return 1
  } catch (e) {
    console.error(`Error seeding mangas: ${e}`)
    return 0
  }
}

module.exports = {seed}
