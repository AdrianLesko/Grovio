//function returns random 6 value string from characters
const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.replace(/[10OIL]/g, '')

export function generateCode () {
  return Array.from( { length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}