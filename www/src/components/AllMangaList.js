import React from 'react'
import {useAllMangas} from '../hooks'
import {MangaList} from './'

export const AllMangaList = () => {
  const {loading, error, data} = useAllMangas()
  return <MangaList loading={loading} error={error} data={data} />
}
