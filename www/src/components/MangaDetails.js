import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useManga} from '../hooks'

export const MangaDetails = () => {
  const {id} = useParams()
  const {loading, error, data} = useManga(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return null // FIXME

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
      <header>
        <h2>{title}</h2>
        <p>By {author}</p>
        <Link to="/">Back</Link>
      </header>

      <section>
        <p>{description}</p>
        {image && (
          <img src={`${process.env.REACT_APP_CDN_URL}/${image}`} alt="" />
        )}
      </section>

      <section>
        <h3>Chapters</h3>
        <ol>
          {chapters.map(([number, lastUpdated, title, chapterId]) => (
            <li key={number}>
              <p>{title}</p>
              <Link to={`/read/${chapterId}`}>Read</Link>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}
