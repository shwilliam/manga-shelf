import React from 'react'
import {FixedSizeList as List} from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import {Box} from 'grommet'
import {MangaListItem, Loader} from './'

export const MangaList = ({loading, error, data}) => {
  if (loading) return <Loader />
  if (error) return <p>Error :(</p>
  if (!data.mangas.length) return <p>Nothing found</p>

  return (
    <Box className="site-content-container" fill="horizontal">
      <AutoSizer>
        {({width, height}) => (
          <List
            height={height}
            width={width}
            itemCount={data.mangas.length}
            itemSize={220}
          >
            {({index, style}) => (
              <MangaListItem style={style} data={data.mangas[index]} />
            )}
          </List>
        )}
      </AutoSizer>
    </Box>
  )
}
