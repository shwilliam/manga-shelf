import {useLocalStorage} from './'

export const useLocalFavoriteMangas = () => {
  const [favorites, setFavorites] = useLocalStorage('__favorite_mangas__', [])

  const addFavorite = id =>
    !favorites.includes(id) && setFavorites(s => [...s, id])

  const removeFavorite = id => {
    const idx = favorites.indexOf(id)
    if (idx === -1) return

    const favoritesCopy = [...favorites]
    favoritesCopy.splice(idx, 1)
    setFavorites(favoritesCopy)
  }

  return [favorites, addFavorite, removeFavorite]
}
