export const useScroll = () => {
  const resetScroll = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  return {resetScroll}
}
