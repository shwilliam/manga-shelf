import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useChapters} from '../hooks'

export const Read = () => {
  const {id} = useParams()
  const {loading, error, data} = useChapters(id)
  const [activePage, setActivePage] = useState(0)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return null

  const sortedImages = data.images.sort(([pageA], [pageB]) => pageA - pageB)
  const [page, path, width, height] = sortedImages[activePage]
  const nextPage = () =>
    setActivePage(s => (s < sortedImages.length - 1 ? s + 1 : s))
  const prevPage = () => setActivePage(s => (s > 0 ? s - 1 : s))

  return (
    <article>
      <header>
        <h2>Page: {page}</h2>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </header>

      <img src={`${process.env.REACT_APP_CDN_URL}/${path}`} alt="" />
    </article>
  )
}
