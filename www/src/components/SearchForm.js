import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {TextInput, Box, Button} from 'grommet'
import {Search} from 'grommet-icons'
import {useInput} from '../hooks'

export const SearchForm = () => {
  const history = useHistory()
  const [searchInput, handleSearchInputChange] = useInput()
  const [isSearching, setIsSearching] = useState(false)
  const toggleIsSearching = () => setIsSearching(s => !s)

  const handleSubmit = e => {
    e.preventDefault()
    history.push(`/?search=${searchInput}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box direction="row" justify="end" className="relative">
        {isSearching && (
          <Box direction="row" className="site-search-container">
            <label>
              <span className="sr-only">Search for manga</span>
              <TextInput
                size="small"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search ..."
              />
            </label>

            <Button
              type="submit"
              icon={<Search />}
              size="small"
              alignSelf="center"
              aria-label="Search"
            />
          </Box>
        )}

        <Button
          onClick={toggleIsSearching}
          size="small"
          plain
          label={
            <Box width="medium" gap="small" direction="row" justify="end">
              <Search opacity={isSearching ? 0 : 1} />
              {isSearching ? (
                'Close'
              ) : (
                <span className="sr-only">Toggle search</span>
              )}
            </Box>
          }
        />
      </Box>
    </form>
  )
}
