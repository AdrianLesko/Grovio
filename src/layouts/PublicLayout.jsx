import { Link, Outlet } from 'react-router-dom'
import img from '../assets/logo.png'

export default function PublicLayout (){
  
  return (
    <div className='h-screen min-w-screen flex flex-col'>
      <header className='px-10 py-2 flex flex-row items-center justify-center bg-accent'>
        <Link className='mr-auto' to='/'><img src={img} className='h-8' /></Link>
        <nav className='flex flex-row gap-4'> 
          <ul>
            <Link to='/login'><button className='btn btn-primary font-bold hover:text-base-200'>Prihlasit sa</button></Link>
          </ul>
        </nav>

      </header> 

      <main className='flex-1 bg-base-100'>
        <Outlet></Outlet>
      </main>

      <footer className='h-10 flex justify-center items-center bg-accent'>
        <span> Adrian Lesko | vsetky prava vyhradene</span>
      </footer>

    </div>
  )
}