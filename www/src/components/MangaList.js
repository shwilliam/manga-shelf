import React from 'react'
import {useAllMangas} from '../hooks'

export const MangaList = () => {
  const {loading, error, data} = useAllMangas()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {data.mangas.map(({_id, title, lastUpdated}) => (
        <li key={_id}>
          {title} (updated {lastUpdated})
        </li>
      ))}
    </ul>
  )
}
