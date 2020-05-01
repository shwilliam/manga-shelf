import React, {useMemo} from 'react'
import {useHistory} from 'react-router-dom'
import {Box, List, Heading} from 'grommet'
import {useLocalChaptersProgress} from '../hooks'

const formatChapterTitle = str =>
  str[str.length - 1] === ':' ? str.slice(0, -1) : str

export const LocalChapterList = () => {
  const history = useHistory()
  const [chaptersProgress] = useLocalChaptersProgress()
  const {inProgress, complete} = useMemo(
    () =>
      Object.entries(chaptersProgress).reduce(
        (acc, [id, chapter]) => {
          if (chapter.done) {
            acc.complete.push({id, ...chapter})
          } else {
            acc.inProgress.push({id, ...chapter})
          }
          return acc
        },
        {inProgress: [], complete: []},
      ),
    [chaptersProgress],
  )

  const handleItemClick = e => {
    history.push(`/read/${e.item.id}`)
  }

  if (!Object.keys(chaptersProgress).length)
    return <p>No reading progress available</p>

  return (
    <Box direction="row" justify="center" wrap>
      <Box gap="medium" width="large" margin="medium">
        <Heading level={2}>In progress</Heading>
        <List data={inProgress} onClickItem={handleItemClick}>
          {({id, title}) => (
            <Box key={id}>{title && formatChapterTitle(title)}</Box>
          )}
        </List>
      </Box>

      <Box gap="medium" width="large" margin="medium">
        <Heading level={2}>Complete</Heading>
        <List data={complete} onClickItem={handleItemClick}>
          {({id, title}) => (
            <Box key={id}>{title && formatChapterTitle(title)}</Box>
          )}
        </List>
      </Box>
    </Box>
  )
}
