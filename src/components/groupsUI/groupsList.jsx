
import { Users } from 'lucide-react'
import Group from '../../components/groupsUI/group.jsx'

export default function GroupsList ({ groups, handleOpenCreate, handleOpenJoin}) {

  return (
    <div className='flex-1 flex flex-col space-y-4'>
      <div className='bg-base-100 rounded-xl border border-base-300 px-2 md:px-4 py-2 flex flex-row justify-between shadow-xs'>
        <h2 className='font-semibold text-xl'>
          Moje Skupiny
          <span className='ml-2 badge badge-neutral'>
            <Users className='size-4' />
            <span>{groups.length}</span>
          </span>
        </h2>

        <div className='flex flex-row gap-2'>
          <button type='button' className='btn btn-ghost btn-xs' onClick={() => handleOpenCreate()}>Vytvoriť</button>
          <button type='button' className='btn btn-ghost btn-xs' onClick={() => handleOpenJoin()}>Pripojiť</button>
        </div>
      </div>

      <ul className='flex-1 flex flex-col gap-4'>
        {groups.map(group => {
          return (
            <Group key={group.id} group={group}/>
          )
        })}
      </ul>
    </div>
  )
}