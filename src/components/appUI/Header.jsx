
import { ShoppingCartPlus } from 'lucide-react'

import { useNavigate} from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext.js'

export default function Header () {

  const {logout} = useAuthContext()
  const { user } = useAuthContext()
  const username = user.username

  const navigate = useNavigate()
  

  const handlelogout = (e) => {
    e.preventDefault()
    logout()
    navigate('/login')
  }


  return (
    <div className='w-full mx-auto max-w-2xl'>
      <div className='flex flex-row items-center justify-between mt-2 mx-2 py-3 px-4 md:px-8 bg-base-100 rounded-xl shadow-sm' >
        <div className='flex items-center gap-1'>
          <ShoppingCartPlus className='h-8' />
          <h1 className='font-extrabold text-2xl text-base-content'>Grovio</h1>
        </div>
        <div>
          <span className='badge badge-neutral'>{username}</span>
        </div>
        <div>
          <button className='btn btn-ghost btn-sm' onClick={e => handlelogout(e)}>Odhlásiť sa</button>
        </div>
      </div>
    </div>
  )
}