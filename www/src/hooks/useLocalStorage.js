import {useCallback, useState} from 'react'

export const useLocalStorage = (key, defaultValue = '') => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (e) {
      console.log(`Unable to read ${key} from local storage`)
      return defaultValue
    }
  })

  const setValue = useCallback(
    value => {
      try {
        // allow value to be passed as function
        const valueToStore =
          typeof value === 'function' ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (e) {
        console.log(`Unable to write to ${key} in local storage`)
      }
    },
    [key, storedValue],
  )

  return [storedValue, setValue]
}
