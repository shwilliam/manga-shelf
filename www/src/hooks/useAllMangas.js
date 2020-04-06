import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export const useAllMangas = () => {
  const {loading, error, data} = useQuery(GET_ALL_MANGAS)

  return {loading, error, data}
}

const GET_ALL_MANGAS = gql`
  query getAllMangas {
    mangas {
      _id
      title
      lastUpdated
    }
  }
`
