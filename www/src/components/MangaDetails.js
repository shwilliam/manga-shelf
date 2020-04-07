import React from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import {List, Text, Heading, Box} from 'grommet'
import {FormView, Checkmark} from 'grommet-icons'
import {useManga, useLocalChaptersProgress} from '../hooks'
import {timestampToHumanReadable} from '../utils'

export const MangaDetails = () => {
  const [chaptersProgress] = useLocalChaptersProgress()
  const history = useHistory()
  const {id} = useParams()
  const {loading, error, data} = useManga(id)

  if (loading) return <p>Loading...</p>
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
    hits,
    image,
    // language,
    // last_chapter_data,
    // random,
    // released,
    // startsWith,
    status,
    title,
    // title_kw,
    // type,
    // updatedKeywords,
  } = data

  return (
    <article>
      <header>
        <h2>{title}</h2>
        <p>By {author}</p>
        <Link to="/">Back</Link>
        <p dangerouslySetInnerHTML={{__html: description}} />
        {image && (
          <img src={`${process.env.REACT_APP_CDN_URL}/${image}`} alt="" />
        )}
      </header>

      <section>
        <Heading level={3}>Chapters</Heading>
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
                  chaptersProgress[chapterId] === 'COMPLETE' ? (
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
          onClickItem={e => history.push(`/read/${e.item[3]}`)}
        />
      </section>
    </article>
  )
}
