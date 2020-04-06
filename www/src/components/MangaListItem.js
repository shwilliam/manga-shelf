import React from 'react'
import {Link} from 'react-router-dom'

export const MangaListItem = ({id, title, lastUpdated}) => (
  <li>
    <p>
      {id}: {title}
    </p>
    <p>{lastUpdated}</p>
    <Link to={`/${id}`}>View details</Link>
  </li>
)
