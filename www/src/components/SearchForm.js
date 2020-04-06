import React from 'react'
import {useHistory} from 'react-router-dom'
import {useInput} from '../hooks'

export const SearchForm = () => {
  const history = useHistory()
  const [searchInput, handleSearchInputChange] = useInput()

  const handleSubmit = e => {
    e.preventDefault()
    history.push(`/?search=${searchInput}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="sr-only">Search for manga</span>
        <input
          type="text"
          name="Search"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  )
}
