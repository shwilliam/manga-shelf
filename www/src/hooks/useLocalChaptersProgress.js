import {useLocalStorage} from './'

export const useLocalChaptersProgress = () => {
  const [chaptersProgress, setChaptersProgress] = useLocalStorage(
    '__manga_chapters_progress__',
    {},
  )

  const updateProgress = (chapter, done, page) => {
    if (typeof chapter === 'string') {
      if (!chaptersProgress[chapter]) return
      setChaptersProgress(s => ({...s, [chapter]: {...s[chapter], done, page}}))
    } else {
      setChaptersProgress(s => ({
        ...s,
        [chapter[3]]: {
          done,
          page,
          title: chapter[2],
        },
      }))
    }
  }

  return [chaptersProgress, updateProgress]
}
