const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export function timeAgo (createdAt) {

  const diffMinutes = Math.round((createdAt - Date.now())/60000)
  return rtf.format(diffMinutes, 'minute')

}