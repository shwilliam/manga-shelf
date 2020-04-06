import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useManga} from '../hooks'

const MANGA_EDEN_IMAGE_BASE_URL = 'https://cdn.mangaeden.com/mangasimg'

export const MangaDetails = () => {
  const {id} = useParams()
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
      <Link to="/">Back</Link>
      <p>{description}</p>

      <img src={`${MANGA_EDEN_IMAGE_BASE_URL}/${image}`} alt="" />
    </article>
  )
}
