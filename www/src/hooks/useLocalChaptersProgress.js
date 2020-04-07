import {useLocalStorage} from './'

export const useLocalChaptersProgress = () => {
  const [chaptersProgress, setChaptersProgress] = useLocalStorage(
    '__manga_chapters_progress__',
    {},
  )

  const updateProgress = (chapter, progress) => {
    if (typeof chapter === 'string') {
      if (!chaptersProgress[chapter]) return
      setChaptersProgress(s => ({...s, [chapter]: {...s[chapter], progress}}))
    } else {
      setChaptersProgress(s => ({
        ...s,
        [chapter[3]]: {
          progress,
          title: chapter[2],
        },
      }))
    }
  }

  return [chaptersProgress, updateProgress]
}
