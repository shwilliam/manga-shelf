import React from 'react'
import {useHistory} from 'react-router-dom'
import {Box, Image, Button, Text} from 'grommet'
import {Favorite} from 'grommet-icons'
import {timestampToHumanReadable} from '../utils'
import {useLocalFavoriteMangas} from '../hooks'
import {Placeholder} from '../images'

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
      <Box height="small" width={{min: '25%'}}>
        <Image
          fallback={Placeholder}
          src={`${process.env.REACT_APP_CDN_URL}/${data.image}`}
          alt=""
          fit="cover"
          fill
        />
      </Box>

      <Box
        width="full"
        direction="column"
        justify="start"
        gap="large"
        pad="medium"
      >
        <Box direction="row" gap="medium" justify="between">
          <Box>
            <Text size="large" weight="bold">
              {data.title}
            </Text>

            <Text>{timestampToHumanReadable(data.lastUpdated)}</Text>
          </Box>

          <Button
            icon={<Favorite color={isFavorite ? 'red' : null} />}
            onClick={handleFavorite}
            aria-label={favoriteButtonText}
          />
        </Box>

        <Button
          size="small"
          primary
          alignSelf="start"
          onClick={() => history.push(`/${data._id}`)}
          label="View chapters"
        />
      </Box>
    </Box>
  )
}
