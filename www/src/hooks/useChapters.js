import {useState, useEffect} from 'react'

export const useChapters = id => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)

    // TODO: move to server
    fetch(`${process.env.REACT_APP_MANGA_URL}/chapter/${id}`, {
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
