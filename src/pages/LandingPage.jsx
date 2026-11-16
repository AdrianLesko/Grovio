import logoImg from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function LandingPage () {
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <>
      <div className='hero bg-base-200 h-full'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <div className='flex flex-row justify-center items-center gap-2'>
              <img src={logoImg} className='h-8' />
              <h1 className='font-bold text-5xl'>Grovio!</h1>
            </div>
            <p className='py-6'>
              Pridávajte položky v reálnom čase, organizujte nákupy a majte v chladničke vždy to, čo potrebujete
            </p>
            <button className='btn btn-primary' onClick={e => handleLogin(e)}>Začať!</button>
          </div>
        </div>
      </div>
    </>
  )
}