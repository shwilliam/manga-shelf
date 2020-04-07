import {useLocalStorage} from './'

export const useLocalChaptersProgress = () => {
  const [chaptersProgress, setChaptersProgress] = useLocalStorage(
    '__manga_chapters_progress__',
    {},
  )

  const updateProgress = (progress, id) => {
    if (!chaptersProgress[id] || chaptersProgress[id] !== 'COMPLETE') {
      setChaptersProgress(s => ({...s, [id]: progress}))
    }
  }

  return [chaptersProgress, updateProgress]
}
