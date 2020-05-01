import React from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import {List, Text, Heading, Box, Image} from 'grommet'
import {FormView, Checkmark, LinkPrevious} from 'grommet-icons'
import {useManga, useLocalChaptersProgress} from '../hooks'
import {timestampToHumanReadable} from '../utils'
import {Loader} from './'

export const MangaDetails = () => {
  const [chaptersProgress, updateProgress] = useLocalChaptersProgress()
  const history = useHistory()
  const {id} = useParams()
  const {loading, error, data} = useManga(id)

  const handleItemClick = e => {
    history.push(`/read/${e.item[3]}`)
    updateProgress(e.item, false)
  }

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>
  if (!data) return null // FIXME

  const {
    // aka,
    // alias,
    // artist,
    author,
    // author_kw,
    // baka,
    // categories,
    chapters,
    // chapters_len,
    // created,
    description,
    // hits,
    image,
    // language,
    // last_chapter_data,
    // random,
    // released,
    // startsWith,
    // status,
    title,
    // title_kw,
    // type,
    // updatedKeywords,
  } = data

  return (
    <article>
      <Box direction="column" align="center">
        <Box direction="row" gap="medium" wrap="reverse" justify="center">
          {image && (
            <Box
              width="small"
              flex={{shrink: 0}}
              className="pad-bottom--large"
              pad="small"
            >
              <Image
                fill="contain"
                fit="contain"
                src={`${process.env.REACT_APP_CDN_URL}/${image}`}
                alt=""
              />
            </Box>
          )}
          <Box gap="medium" width={{max: 'large'}}>
            <Link to="/">
              <LinkPrevious size="small" />
              <Text color="dark-3" margin="small">
                Back
              </Text>
            </Link>
            <Heading level={2}>{title}</Heading>
            <Text>By {author}</Text>
            <Text
              dangerouslySetInnerHTML={{__html: description}}
              className="pad-bottom"
            />
          </Box>
        </Box>

        <Box gap="medium" width="medium" fill="horizontal" margin="medium">
          <Heading level={3} size="medium">
            Chapters
          </Heading>
          <List
            data={chapters}
            primaryKey={([number, _, title, chapterId]) => (
              <Box direction="row" gap="small" align="center">
                <Text size="medium" weight="bold">
                  {title && title != number
                    ? title.includes(String(number))
                      ? title[title.length - 1] === ':'
                        ? title.slice(0, -1)
                        : title
                      : title[title.length - 1] === ':'
                      ? `${title} ${number}`
                      : `${title}: ${number}`
                    : number}
                </Text>
                <Box>
                  {chaptersProgress[chapterId] ? (
                    chaptersProgress[chapterId].done ? (
                      <Checkmark />
                    ) : (
                      <FormView />
                    )
                  ) : null}
                </Box>
              </Box>
            )}
            secondaryKey={([_, lastUpdated]) => (
              <Text size="small">{timestampToHumanReadable(lastUpdated)}</Text>
            )}
            onClickItem={handleItemClick}
            width="large"
          />
        </Box>
      </Box>
    </article>
  )
}
