

import profileImage from '../../assets/profile.png'
import logo from '../../assets/logo.png'

import { useNavigate} from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext.js'

export default function Header () {

  const {logout} = useAuthContext()
  const navigate = useNavigate()
  

  const handlelogout = (e) => {
    e.preventDefault()
    logout()
    navigate('/login')
  }


  return (
    <div className='navbar bg-base-200 flex flex-row justify-between items-center px-10'>
      <div className='flex items-center gap-3'>
        <img src={logo} alt='logo' className='h-8'/>
        <h1 className='font-extrabold text-2xl text-accent-content'>Grovio</h1>
      </div>
      <div>
        <button onClick={e => handlelogout(e)}>Odhlasit sa</button>
      </div>
      <div className='avatar h-12 w-12 shrink-0'>
        <div className='ring-accent ring-offset-base-100 h-11 w-11 overflow-hidden rounded-full ring-2 ring-offset-2'>
          <img src={profileImage} alt='profile photo' className='h-full w-full object-cover' />
        </div>
      </div>
    </div>
  )
}