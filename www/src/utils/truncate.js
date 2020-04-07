export const truncate = (text, options) => {
  const {chars, clean, ellipses} = {...DEFAULT_OPTIONS, ...options}

  const over = text.length > chars
  const a = text.substring(0, chars)
  const end = clean ? a.lastIndexOf(' ') : a.length
  const b = over ? a.substring(0, end) : text
  const e = over && ellipses ? '...' : ''
  return `${b}${e}`
}

const DEFAULT_OPTIONS = {chars: 75, clean: true, ellipses: true}
