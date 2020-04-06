import {useState, useEffect} from 'react'

export const useManga = id => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)

    fetch(`https://www.mangaeden.com/api/manga/${id}`, {
      cache: 'force-cache', // FIXME
    })
      .then(res => res.json())
      .then(setData)
      .catch(e => setError(e))
      .finally(() => {
        setLoading(false)
        setError(null)
      })
  }, [id])

  return {loading, error, data}
}
