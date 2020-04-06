import React from 'react'
import {useAllMangas, useQuery} from '../hooks'
import {MangaList} from './'

export const AllMangaList = () => {
  const urlQuery = useQuery()
  const {loading, error, data} = useAllMangas(urlQuery.get('search'))

  return <MangaList loading={loading} error={error} data={data} />
}
