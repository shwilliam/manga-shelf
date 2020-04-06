import React from 'react'
import {Link} from 'react-router-dom'

const formatDateToString = timestamp =>
  new Date(Number(`${timestamp}000`)).toLocaleString()

export const MangaListItem = ({data, style}) => (
  <section style={style}>
    <p>{data.title}</p>

    <Link to={`/${data._id}`}>View details</Link>

    <p>{formatDateToString(data.lastUpdated)}</p>

    {data.image && (
      <img src={`${process.env.REACT_APP_CDN_URL}/${data.image}`} alt="" />
    )}
  </section>
)
