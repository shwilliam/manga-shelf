import React from 'react'
import {Link} from 'react-router-dom'

export const MangaListItem = ({data, style}) => (
  <section style={style}>
    <p>{data.title}</p>
    <p>{data.lastUpdated}</p>
    <Link to={`/${data._id}`}>View details</Link>
  </section>
)
