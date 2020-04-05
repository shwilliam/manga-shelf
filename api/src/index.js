const axios = require('axios')
const cron = require('node-cron')
require('./app')

const MANGA_API_BASE_URL = 'https://www.mangaeden.com/api'
const MANGA_API_ALL_URL = `${MANGA_API_BASE_URL}/list/1/`

const axiosAllManga = axios.create({
  baseURL: MANGA_API_ALL_URL,
})

axiosAllManga.interceptors.response.use(res => {
  if (res.config.baseURL === MANGA_API_ALL_URL) {
    res.data = res.data.manga.map(({a, c, h, i, im, s, t, ld}) => ({
      ID: i,
      image: im,
      title: t,
      alias: a,
      categories: c,
      status: s,
      hits: h,
      lastUpdated: ld,
    }))
  }
  return res.data
})

const seed = async () => {
  const mangas = await axiosAllManga.get()
  console.log(`Returned ${mangas.length} mangas`)
}

seed()

// hourly
cron.schedule('0 * * * *', () => {
  console.log('minute passed')
})
