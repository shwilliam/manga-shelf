import React from 'react'
import {useLocation} from 'react-router-dom'
import {useAllMangas} from '../hooks'
import {MangaList} from './'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const AllMangaList = () => {
  const urlQuery = useQuery()
  const {loading, error, data} = useAllMangas(urlQuery.get('search'))

  return <MangaList loading={loading} error={error} data={data} />
}
