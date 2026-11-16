import logoImg from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function LandingPage () {
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div className='border min-h-full border-red-500'>
      <div className='hero bg-base-100 shadow-md rounded-2xl h-100'>
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

      <div className='flex mt-2 gap-2 flex-col sm:items-center md:flex-row md:justify-center  '>
        <div className="card card-md text-center bg-base-100 shadow-md md:w-[30%] sm:w-5/6">
          <div className='card-body'>
            <h2 className='card-title mx-auto'>⚡️ Bleskový prehľad</h2>
            <p className='font-semibold'>Kúpene vs. na nákup</p>
          </div>     
        </div>

        <div className="card card-md text-center bg-base-100 shadow-md md:w-[30%] sm:w-5/6">
          <div className='card-body'>
            <h2 className='card-title mx-auto'>👥 Zdieľanie s rodinou</h2>
            <p className='font-semibold'>Všetci vidia zmeny</p>
          </div>     
        </div>

        <div className="card card-md text-center bg-base-100 shadow-md md:w-[30%] sm:w-5/6">
          <div className='card-body'>
            <h2 className='card-title mx-auto'>📱 Vždy po ruke</h2>
            <p className='font-semibold'>Iba na dosah vrecka</p>
          </div>     
        </div>
      </div> 

    </div>
  )
}