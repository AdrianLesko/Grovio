import { Link, Outlet, useLocation} from 'react-router-dom'
import { ShoppingCartPlus } from 'lucide-react'


export default function PublicLayout (){
  const location = useLocation()
  return (
    <div className='min-h-screen flex flex-col bg-base-200'>
      <header className='px-4 mb-8 md:px-8 w-full max-w-5xl mx-auto mt-2 '>
        <div className='bg-base-100 rounded-xl border border-base-300 px-4 md:px-8 py-3 flex items-center justify-between shadow-sm'>
          <Link to="/" className='flex items-center gap-2'>
            <ShoppingCartPlus className='h-10' />
            <h1 className='text-2xl font-extrabold text-base-content'>Grovio</h1>
          </Link>
          {location.pathname !== '/login' && <Link className='btn' to='/login'>Prihlásiť sa</Link>}
        </div>
      </header>
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer className='px-4 md:px-8 w-full max-w-5xl mx-auto mb-2'>
        <div className='bg-base-100 rounded-xl border border-base-300 px-4 md:px-8 py-3 flex items-center justify-center shadow-sm'>
          <p className='text-base-content/60 text-xs'>© 2026 Adrián Leško. Všetky práva vyhradené.</p>
        </div>
      </footer>
    </div>
  )
}