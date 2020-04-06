import React from 'react'
import {useFavoriteMangas, useLocalFavoriteMangas} from '../hooks'
import {MangaList} from './'

export const FavoritesMangaList = () => {
  const [favorites] = useLocalFavoriteMangas()
  const {loading, error, data} = useFavoriteMangas(favorites)

  if (!favorites.length) return <p>No favorites</p>

  return <MangaList loading={loading} error={error} data={data} />
}
