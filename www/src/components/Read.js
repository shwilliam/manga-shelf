import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Button, Box, Text, Image} from 'grommet'
import {Previous, Next} from 'grommet-icons'
import {useChapters, useLocalChaptersProgress} from '../hooks'

export const Read = () => {
  const {id} = useParams()
  const [chaptersProgress, updateProgress] = useLocalChaptersProgress()

  const {loading, error, data} = useChapters(id)
  const [activePage, setActivePage] = useState(0)
  const sortedImages = data?.images.sort(([pageA], [pageB]) => pageA - pageB)

  useEffect(() => {
    if (
      sortedImages &&
      activePage === sortedImages.length - 1 &&
      chaptersProgress[id].progress !== 'COMPLETE'
    ) {
      updateProgress(id, 'COMPLETE')
    }
  }, [activePage, id, sortedImages, updateProgress, chaptersProgress])

  // TODO: scroll to top on page change
  const nextPage = () =>
    setActivePage(s => (s < sortedImages.length - 1 ? s + 1 : s))
  const prevPage = () => setActivePage(s => (s > 0 ? s - 1 : s))

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return null

  const [page, path, width, height] = sortedImages[activePage]
  return (
    <article>
      {/* TODO: dry up page action buttons */}
      <Box direction="row" justify="center">
        <Button icon={<Previous />} onClick={prevPage} aria-label="Prev page" />
        <Text size="medium" weight="bold" alignSelf="center">
          {page + 1} / {sortedImages.length}
        </Text>
        <Button icon={<Next />} onClick={nextPage} aria-label="Next page" />
      </Box>

      <Image src={`${process.env.REACT_APP_CDN_URL}/${path}`} alt="" />

      <Box direction="row" justify="center">
        <Button icon={<Previous />} onClick={prevPage} aria-label="Prev page" />
        <Text size="medium" weight="bold" alignSelf="center">
          {page + 1} / {sortedImages.length}
        </Text>
        <Button icon={<Next />} onClick={nextPage} aria-label="Next page" />
      </Box>
    </article>
  )
}
