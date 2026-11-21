
import { useItemContext } from './../../context/ItemContext'

import { Trash, Pencil} from 'lucide-react'

export default function Item ( { item } ) {
  const { deleteItem, toggleItem, openEdit, isLoading} = useItemContext()
  
  return (
    <li className={`p-4 py-2.5 flex flex-row justify-between items-center border border-base-300 rounded-xl shadow-sm hover:shadow-md hover:cursor-pointer hover:select-none
    transition-all ${item.isBought ? 'bg-base-200/50 opacity-60' : 'bg-base-100'}`}
      onClick={() => toggleItem(item)}
    >
      <div className='flex items-center gap-3 flex-1 min-w-0'>
        <input type='checkbox' className='checkbox checkbox-sm checkbox-primary' checked={item.isBought} onChange={() => toggleItem(item)}/>
          <div className='flex flex-row gap-2 items-center'>
            <h3 className={`text-base wrap-break-word font-semibold ${item.isBought ? 'line-through text-base-content/40' : 'text-base-content'}`}>
              {item.title}
            </h3>
            <span className='badge badge-sm badge-soft shrink-0'>{item.quantity} {item.unit}</span>
          </div>
      </div>

      

      <div className='flex flex-row gap-1 shrink-0'>
        <button type='button' className='btn btn-ghost btn-sm btn-square hover:text-base-content'
          onClick={(e) => {
            e.stopPropagation()
            openEdit(item)
          }}
        >
          <Pencil className='size-4 text-base-content'/>
        </button>

        <button type='button' className='btn btn-ghost btn-sm btn-square hover:text-error' disabled={isLoading}
          onClick={(e) => {
            e.stopPropagation()
            deleteItem(item)
          }}
        >
          <Trash className='size-4 text-base-content' />
        </button>
      </div>
    </li>
  )
}