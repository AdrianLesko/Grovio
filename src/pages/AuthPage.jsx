import { Link } from 'react-router-dom'

export default function AuthPage () {
  return (
  <>
    <h1>Auth page</h1>
    <Link to='/dashboard'>Otvorit dashboard</Link>
    <br />
    <Link to='/'>Home</Link>
  </>
  
  )
}