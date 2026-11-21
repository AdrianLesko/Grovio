
import { Link, useNavigate } from 'react-router-dom'
import heroImg from '../assets/hero-mockups.png'
import { Zap, Users, Smartphone } from 'lucide-react'


export default function LandingPage () {
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div id='main-page' className='w-full max-w-4xl mx-auto flex flex-col'>
      <section id='hero-section' className='flex flex-col w-full items-center mt-12 px-4'>
        <h1 className='font-extrabold text-4xl md:text-5xl text-center'>
          <span className='text-base-content'>Žiadne zabudnuté nákupy</span>
          <br/>
          <span className='text-primary'>a chaos v rodine</span>
        </h1>
        <p className='max-w-2xl mx-auto text-lg md:text-xl text-center text-base-content/70 mt-6 px-4 py-8'>
          Zabudnite na papieriky a nekonečné vypisovanie správ z uličiek supermarketu. Majte spoločný zoznam v mobile a odškrtávajte nákupy spoločne.
        </p>
        <Link to='/login' className='btn btn-primary btn-lg'>Upratať nákupy</Link> 
      </section> 

      <section id='image-section' className='w-full flex p-4 md:p-12 flex-col items-center justify-center mt-12 bg-base-100 border border-base-300 rounded-xl shadow-xl'>
        <img src={heroImg} alt='Snímky obrazovky aplikácie' />
      </section>

      <section id='cards' className='mt-12 mb-12'>
        <div className='
          grid grid-cols-1 grid-rows-3
            md:grid-cols-3 md:grid-rows-1
            gap-6
            
        '>
          <div className='bg-base-100 rounded-xl border border-base-300 shadow-sm w-full max-w-75 mx-auto p-6 flex flex-col gap-4 items-center justify-around'>
            <Zap className='text-primary'/>
            <h3 className='font-bold text-xl text-center text-base-content'>Bleskový prehľad v obchode</h3>
            <p className='text-center text-sm text-base-content/70'>
              Okamžite vidíte, čo treba kúpiť a čo už je v košíku. Položky odškrtnete jedným ťuknutím palca.
            </p>
          </div>

          <div className='bg-base-100 rounded-xl border border-base-300 shadow-sm w-full max-w-75 mx-auto p-6 flex flex-col gap-4 items-center justify-around'>
            <Users className='text-primary' />
            <h3 className='font-bold text-xl text-center text-base-content'>Zdieľanie s rodinou</h3>
            <p className='text-center text-sm text-base-content/70'>
              Partner pridá mlieko, zatiaľ čo vy už stojíte v obchode. Zoznam je vždy aktuálny a bez zbytočných telefonátov.
            </p>
          </div>

          <div className='bg-base-100 rounded-xl border border-base-300 shadow-sm w-full max-w-75 mx-auto p-6 flex flex-col gap-4 items-center justify-around'>
            <Smartphone className='text-primary' />
            <h3 className='font-bold text-xl text-center text-base-content'>Vždy po ruke</h3>
            <p className='text-center text-sm text-base-content/70'>
              Žiadne zabudnuté papieriky na stole. Váš nákupný zoznam máte so sebou v každom supermarkete.
            </p>
          </div>
         
        </div>
      </section>

      <section id='end-cta' className='mb-16 flex flex-col items-center gap-4'>
        <h3 className='text-center text-2xl font-bold text-base-content'>Nákupy bez stresu?</h3> 
        <Link to='/login' className='btn btn-primary btn-lg mx-auto'>Vyskúšať zadarmo</Link>
      </section>

    </div>
  )
}