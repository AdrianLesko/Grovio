import { timeAgo } from '../../utility/timeAgo'
import { useItemContext } from './../../context/ItemContext'
import deleteIcon from './../../assets/delete.png'
import editIcon from './../../assets/edit.png'

export default function Item ( { item } ) {
  const { deleteItem, toggleItem, openEdit } = useItemContext()
  
  return (
    <li className={`p-3 flex flex-row justify-between items-center border border-base-200 rounded-xl shadow-sm hover:shadow-md hover:cursor-pointer hover:select-none
    transition-all ${item.isBought ? 'bg-base-200/50 opacity-60' : 'bg-base-100'}`}
      onClick={() => toggleItem(item)}
    >
      <div className='flex items-center gap-3'>
        <input type='checkbox' className='checkbox checkbox-accent' checked={item.isBought} onChange={() => toggleItem(item)}/>
        <div className='flex flex-col items-start justify-center gap-0'>
          <h3 className={`text-base font-semibold ${item.isBought ? 'line-through text-base-content/40' : 'text-base-content'}`}>
            {item.title}
          </h3>
          <span className='text-xs text-base-content/50'>{timeAgo(item.createdAt)}</span>
        </div>
      </div>

      <div>
        <span className='badge badge-lg'>{item.quantity} {item.unit}</span>
      </div>

      <div>
        <button type='button' className='btn btn-ghost btn-sm btn-square btn-accent'
          onClick={(e) => {
            e.stopPropagation()
            openEdit(item)
          }}
        >
          <img src={editIcon} alt='edit button' className='h-4' />
        </button>

        <button type='button' className='btn btn-ghost btn-sm btn-square btn-accent'
          onClick={(e) => {
            e.stopPropagation()
            deleteItem(item.id)
          }}
        >
          <img src={deleteIcon} alt='delete button' className='h-4' />
        </button>
      </div>
    </li>
  )
}