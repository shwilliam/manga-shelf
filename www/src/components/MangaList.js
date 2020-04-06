import React from 'react'
import {VariableSizeList as List} from 'react-window'
import {MangaListItem} from './'

export const MangaList = ({loading, error, data}) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data.mangas.length) return <p>Nothing found</p>

  return (
    <List
      height={400}
      itemCount={data.mangas.length}
      itemSize={() => 200}
      width={500}
    >
      {({index, style}) => (
        <MangaListItem style={style} data={data.mangas[index]} />
      )}
    </List>
  )
}
