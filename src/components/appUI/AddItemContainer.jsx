
import { useItemContext } from './../../context/ItemContext'
import { useAuthContext } from './../../context/AuthContext.js'

import { ChevronLeft, ShoppingCartPlus, ShoppingCartMinus, EllipsisVertical} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'


export default function AddItemContainer ({ setFilterVal }) {
  const { user } = useAuthContext()
  const { group, leaveOrDeleteGroup, items, setIsOpen, setModalType } = useItemContext()
  const navigate = useNavigate()

  const notBoughtCount = items.filter(item => !item.isBought).length
  const boughtCount = items.length - notBoughtCount

  const handleLeaveOrDelete = () => {

    const isOwner = user?.id === (group?.owner?.id || group?.owner)
    const msg = isOwner ? `Naozaj chcete vymazať túto skupinu aj s jej položkami? \n (skupina sa vymaže aj pre jej členov)` : 'Naozaj chcete opustiť skupinu?'

    if (!window.confirm(msg)) return 
    
    leaveOrDeleteGroup()
    navigate('/groups')
  }
 
  return (
    <div className='flex flex-wrap gap-y-4 flex-col sm:flex-row justify-between items-center bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 '>
      <div id='list-info' className='flex-1 w-full flex flex-row justify-between sm:justify-start items-center gap-2'>
        <Link to='/groups' className='btn btn-ghost btn-sm'><ChevronLeft className='text-primary' />
          <span className='text-lg'>{group?.name?.length > 12 ? `${group?.name?.slice(0,12)}...` : `${group?.name}`}</span>
        </Link>
        <div className="flex flex-col gap-1">
          <div className='badge badge-sm badge-primary w-full '><ShoppingCartPlus className='size-3' />{notBoughtCount}</div>
          <div className='badge badge-sm badge-neutral w-full'><ShoppingCartMinus className='size-3'/> {boughtCount}</div>
        </div>
      </div>
      
      <div className='flex flex-row items-center gap-2'>
        <select onChange={e => setFilterVal(e.target.value)} className='select select-sm'>
          <option value='all'>All</option>
          <option value='to-buy'>To buy</option>
          <option value='bought'>Bought</option>
        </select>
        
        <button 
          className='btn btn-primary btn-sm'
          onClick={() => {
            setIsOpen(true)
            setModalType('add')
          }}
        >
            Pridať
        </button>
        <details className='dropdown dropdown-end'>
          <summary className='btn btn-sm btn-ghost btn-square'><EllipsisVertical /></summary>
          <ul className='menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm'>
            <li><button onClick={handleLeaveOrDelete} className='btn btn-ghost'>{user?.id === (group?.owner?.id || group?.owner) ? 'Vymazať skupinu' : 'Opustiť skupinu'}</button></li>
          </ul>
        </details> 
      </div>
      
      
    </div>
  )
}