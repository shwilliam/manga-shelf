import React from 'react'

export const MangaListItem = ({id, title, lastUpdated, onSelect}) => {
  const handleSelect = () => onSelect(id)

  return (
    <li>
      <p>
        {id}: {title}
      </p>
      <p>{lastUpdated}</p>
      <button onClick={handleSelect}>View details</button>
    </li>
  )
}
