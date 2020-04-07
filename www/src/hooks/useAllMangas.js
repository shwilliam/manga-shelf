import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export const useAllMangas = query => {
  const {loading, error, data} = useQuery(GET_MANGAS, {variables: {query}})

  return {loading, error, data}
}

const GET_MANGAS = gql`
  query getMangas($query: String) {
    mangas(query: $query) {
      _id
      title
      status
      lastUpdated
      image
    }
  }
`
