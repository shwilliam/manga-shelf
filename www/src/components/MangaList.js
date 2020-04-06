import React from 'react'
import {useAllMangas} from '../hooks'
import {MangaListItem} from './'

export const MangaList = () => {
  const {loading, error, data} = useAllMangas()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {data.mangas.map(({_id, title, lastUpdated}) => (
        <MangaListItem
          key={_id}
          id={_id}
          title={title}
          lastUpdated={lastUpdated}
        />
      ))}
    </ul>
  )
}
