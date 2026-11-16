import { Link, Outlet } from 'react-router-dom'
import img from '../assets/logo.png'

export default function PublicLayout (){
  
  return (
    <div className='h-screen min-w-screen flex flex-col'>
      <header className='h-10 flex flex-row items-center justify-center bg-accent'>
        <Link to='/'><img src={img} className='h-3' /> </Link>
        <nav className='flex flex-row gap-4'> 
          <ul>
            <Link to='/login'>Prihlasit sa</Link>
          </ul>
        </nav>

      </header> 

      <main className='flex-1 bg-base-200'>
        <Outlet></Outlet>
      </main>

      <footer className='h-10 flex justify-center items-center bg-accent'>
        <span> Adrian Lesko | vsetky prava vyhradene</span>
      </footer>

    </div>
  )
}