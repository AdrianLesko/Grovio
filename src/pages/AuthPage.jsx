import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext.jsx'

export default function AuthPage () {
  const {login} = useAuthContext()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    login('adrian@grovio.sk', 'heslo123')
    navigate('/dashboard')
  }

  return (
  <>
    <h1>Auth page</h1>
    <Link to='/dashboard'>Otvorit dashboard</Link>
    <br />
    <Link to='/'>Home</Link>
    <br />

    <button className='btn' onClick={(e) => handleLogin(e)}>prihlasit</button>
    
  
  </>
  
  )
}