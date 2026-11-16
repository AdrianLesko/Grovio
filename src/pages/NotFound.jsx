import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function NotFound () {
  const redirect = useNavigate()
  return (
    <div className='h-screen w-full'>
      <div className='bg-base-100 h-full flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-5'>
          <img src={logo} className='h-12' />
          <h1 className='font-bold text-5xl'>Ooops!</h1>
        </div> 
        
        <h2><span className='badge badge-primary mr-3'>404</span>Something went wrong</h2>

        <button className='btn btn-xl btn-accent mt-7' onClick={() => redirect('/')}>Back to Homepage</button>
      </div>

    </div>
  )
}