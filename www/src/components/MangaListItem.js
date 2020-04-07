import React from 'react'
import {useHistory} from 'react-router-dom'
import {Box, Image, Button, Text} from 'grommet'
import {Favorite} from 'grommet-icons'
import {timestampToHumanReadable, truncate} from '../utils'
import {useLocalFavoriteMangas} from '../hooks'
import {Placeholder} from '../images'

const STATUS_ENUM = {
  0: '',
  1: 'Ongoing',
  2: 'Complete',
}

export const MangaListItem = ({data, style}) => {
  const history = useHistory()
  const [favorites, addFavorite, removeFavorite] = useLocalFavoriteMangas()
  const isFavorite = favorites.includes(data._id)
  const handleFavorite = () =>
    isFavorite ? removeFavorite(data._id) : addFavorite(data._id)
  const favoriteButtonText = isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites'

  return (
    <Box direction="row" justify="between" style={style}>
      <Box height="small" width="small" overflow="hidden" pad="small">
        <Image
          fallback={Placeholder}
          src={`${process.env.REACT_APP_CDN_URL}/${data.image}`}
          alt=""
          fit="cover"
          width="small"
          fill
        />
      </Box>

      <Box
        width="full"
        direction="column"
        justify="between"
        gap="small"
        pad="small"
      >
        <Box direction="row" gap="medium" justify="between">
          <Box>
            <Text size="small" color={`accent-${Number(data.status) + 1}`}>
              {STATUS_ENUM[data.status]}
            </Text>
            <Text size="large" weight="bold">
              {truncate(data.title)}
            </Text>

            <Text>Updated {timestampToHumanReadable(data.lastUpdated)}</Text>
          </Box>

          <Button
            icon={<Favorite color={isFavorite ? 'red' : null} />}
            onClick={handleFavorite}
            aria-label={favoriteButtonText}
          />
        </Box>

        <Button
          size="small"
          style={{marginBottom: '2rem'}}
          primary
          alignSelf="start"
          onClick={() => history.push(`/${data._id}`)}
          label="View chapters"
        />
      </Box>
    </Box>
  )
}
