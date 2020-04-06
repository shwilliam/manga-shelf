import React from 'react'
import {Link} from 'react-router-dom'
import {timestampToHumanReadable} from '../utils'
import {useLocalFavoriteMangas} from '../hooks'

export const MangaListItem = ({data, style}) => {
  const [favorites, addFavorite, removeFavorite] = useLocalFavoriteMangas()
  const isFavorite = favorites.includes(data._id)

  return (
    <section style={style}>
      <p>{data.title}</p>

      <Link to={`/${data._id}`}>View details</Link>

      <p>{timestampToHumanReadable(data.lastUpdated)}</p>

      <button
        onClick={() =>
          isFavorite ? removeFavorite(data._id) : addFavorite(data._id)
        }
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>

      {data.image && (
        <img src={`${process.env.REACT_APP_CDN_URL}/${data.image}`} alt="" />
      )}
    </section>
  )
}
