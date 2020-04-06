import {format} from 'timeago.js'
import {padTimestamp} from './'

export const timestampToHumanReadable = timestamp =>
  format(new Date(Number(padTimestamp(timestamp))))
