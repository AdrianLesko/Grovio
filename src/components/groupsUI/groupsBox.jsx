

import { UserGroup, UserRoundPlus } from 'lucide-react'
export default function GroupsBox ( { handleOpenCreate, handleOpenJoin}) {

  return (
    <div className=' flex-1 w-full flex flex-row justify-center items-center bg-base-100 border border-base-300 rounded-xl p-4 py-8'>
      <div className='w-full flex flex-col md:flex-row  items-center md:justify-center gap-12'>

        <div className='flex flex-col items-center justify-center gap-4'>
          <UserGroup className='size-10 text-primary' />
          <button className='btn btn-primary' type='button' onClick={() => handleOpenCreate()}>Vytvoriť skupinu</button>
        </div>
        
        <div className='divider md:divider-horizontal'>alebo</div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <UserRoundPlus className='size-10 text-accent' />
          <button className='btn btn-accent' type='button' onClick={() => handleOpenJoin()} >Pripojiť sa kódom</button>
        </div>
        
      
      </div>
    </div>

    
  )
}