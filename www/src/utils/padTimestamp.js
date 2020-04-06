export const padTimestamp = str =>
  `${str}${String(0).repeat(13 - String(str).length)}`
