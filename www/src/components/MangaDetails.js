import React from 'react'
import {useManga} from '../hooks'

const MANGA_EDEN_IMAGE_BASE_URL = 'https://cdn.mangaeden.com/mangasimg'

export const MangaDetails = ({id, onClose}) => {
  const {loading, error, data} = useManga(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return null

  const {
    aka,
    alias,
    artist,
    author,
    author_kw,
    baka,
    categories,
    chapters,
    chapters_len,
    created,
    description,
    hits,
    image,
    language,
    last_chapter_data,
    random,
    released,
    startsWith,
    status,
    title,
    title_kw,
    type,
    updatedKeywords,
  } = data

  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>

      <img src={`${MANGA_EDEN_IMAGE_BASE_URL}/${image}`} alt="" />

      <button onClick={onClose}>Close</button>
    </article>
  )
}
