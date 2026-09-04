

import profileImage from '../../assets/profile.png'

export default function Header () {
  return (
    <div className='navbar bg-base-200 flex flex-row justify-between items-center px-10'>
      <h1 className='font-extrabold text-2xl text-accent-content'>Grovio</h1>
      <div className='avatar h-12 w-12 shrink-0'>
        <div className='ring-accent ring-offset-base-100 h-11 w-11 overflow-hidden rounded-full ring-2 ring-offset-2'>
          <img src={profileImage} alt='profile photo' className='h-full w-full object-cover' />
        </div>
      </div>
    </div>
  )
}