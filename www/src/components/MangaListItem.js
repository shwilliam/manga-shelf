import React from 'react'
import {Link} from 'react-router-dom'
import {timestampToHumanReadable} from '../utils'

export const MangaListItem = ({data, style}) => (
  <section style={style}>
    <p>{data.title}</p>

    <Link to={`/${data._id}`}>View details</Link>

    <p>{timestampToHumanReadable(data.lastUpdated)}</p>

    {data.image && (
      <img src={`${process.env.REACT_APP_CDN_URL}/${data.image}`} alt="" />
    )}
  </section>
)
