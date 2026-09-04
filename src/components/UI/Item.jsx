import { timeAgo } from '../../utility/timeAgo'
import { useItemContext } from './../../context/ItemContext'

export default function Item ( { item } ) {

  const { deleteItem, toggleItem, openEdit } = useItemContext()
  
  return (
    <li className='list-row border-2 border-accent bg-base-100 flex flex-row w-full h-15 items-center justify-around'>
      <span className=' w-1/4 h-full text-[1.1rem] flex items-center justify-start'>
        {item.title}
      </span>

      <span className=' w-1/6 h-full text-[1.1rem] flex items-center justify-start'>
        {item.quantity}
      </span>

      <span className=' w-1/3 h-full text-[1.1rem] flex items-center justify-start'>
        {timeAgo(item.createdAt)}
      </span>

      <span className=' w-1/3 h-full text-[1.1rem] ml-auto flex flex-row items-center justify-end gap-1'>

        <button className='btn btn-ghost btn-accent rounded-full w-10 px-0 py-0'
          onClick={() => openEdit(item)}>
          <img src='src/assets/edit.png' className='h-5' />
        </button>

        <button className='btn btn-ghost btn-accent rounded-full w-10 px-0 py-0'
          onClick={() => deleteItem(item.id)}>
          <img src='src/assets/delete.png' className='h-5' />
        </button>
        
        <input className='checkbox checkbox-accent' type='checkbox' checked={item.isBought} onChange={() => toggleItem(item)} />
      </span>

      
    </li>
  )
}