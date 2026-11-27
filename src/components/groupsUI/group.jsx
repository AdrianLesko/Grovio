
import { useNavigate, Link } from 'react-router-dom'
import { Users, QrCode, ChevronLast} from 'lucide-react'

export default function Group ( { group }) {
  const navigate = useNavigate() 

  const handleClick = () => {
    navigate(`/groups/${group.id}`)
  }
  
  return (
    <li onClick={() => handleClick()} className='hover:cursor-pointer border border-base-300 bg-base-100 w-full rounded-xl shadow-md px-4 md:px-6 py-4 flex flex-row justify-between '>
      
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-row gap-2'>
          <Users  className='text-primary' />
          <h3 className='font-semibold text-xl'>{group.name}</h3>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <span className='p-2 rounded-box bg-primary/60 font-mono font-semibold text-white flex flex-row gap-2 items-center'>
           <QrCode className='text-white' />
            {group.connectionCode}
          </span>
        </div>
        <h3 className='font-semibold text-lg'>Members <span className='badge badge-primary badge-sm'>{group.members.length}</span></h3>
      </div>
      <div>
        <Link to={`/groups/${group.id}`} className='btn btn-ghost h-full'>
          <ChevronLast className='text-primary' />
        </Link>
      </div>

    </li>
  )
}