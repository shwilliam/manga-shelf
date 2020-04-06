const cron = require('node-cron')
const axios = require('axios')
const {Manga} = require('./db')

const MANGA_API_BASE_URL = 'https://www.mangaeden.com/api'
const MANGA_API_ALL_URL = `${MANGA_API_BASE_URL}/list/1/`

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

    const mangasToCreate = mangas.filter(manga => {
      const idx = existingMangas.findIndex(
        existingManga => existingManga._id == manga._id,
      )

      return (
        idx === -1
        // || existingMangas[idx].data().lastUpdated !== manga.lastUpdated // TODO: update with new data
      )
    })

    await Promise.all(
      mangasToCreate.map(manga =>
        new Manga(manga)
          .save()
          .catch(e => console.error(`Error saving ${manga.title}: ${e}`)),
      ),
    )

    console.log(`Created ${mangasToCreate.length} manga records`)
  } catch (e) {
    console.error(`Error seeding mangas: ${e}`)
  }
}

// hourly
cron.schedule('0 * * * *', () => {
  seed()
})
