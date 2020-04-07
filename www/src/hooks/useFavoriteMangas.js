import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export const useFavoriteMangas = favorites => {
  const {loading, error, data} = useQuery(GET_FAVORITE_MANGAS, {
    variables: {
      favorites,
    },
  })

  return {loading, error, data}
}

const GET_FAVORITE_MANGAS = gql`
  query getFavoriteMangas($favorites: [String]) {
    mangas(favorites: $favorites) {
      _id
      title
      status
      lastUpdated
      image
    }
  }
`
