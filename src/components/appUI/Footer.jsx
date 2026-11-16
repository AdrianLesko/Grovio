import userIcon from './../../assets/user.png'

export default function Footer () {
  return (
    <div className='footer fixed bottom-0 left-0 w-screen h-10 bg-base-100 flex justify-start items-center gap-1'>
      <img src={userIcon} className='w-3'/>
      <p className='font-bold'>Adrián Leško | 2026</p>
    </div>
  )
}