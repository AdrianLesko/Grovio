import { timeAgo } from '../../utility/timeAgo'

export default function Item ( { title, quantity, createdAt } ) {
  return (
    <li className='list-row border-2 border-accent bg-base-100 flex flex-row w-full h-15 items-center justify-around'>
      <span className=' w-1/4 h-full text-[1.1rem] flex items-center justify-start'>
        {title}
      </span>

      <span className=' w-1/6 h-full text-[1.1rem] flex items-center justify-start'>
        {quantity}
      </span>

      <span className=' w-1/3 h-full text-[1.1rem] flex items-center justify-start'>
        {timeAgo(createdAt)}
      </span>

      <span className=' w-1/3 h-full text-[1.1rem] ml-auto flex flex-row items-center justify-end gap-1'>
        <button className='btn btn-dash btn-accent rounded-full w-8 px-0 py-0'>
          <img src='src/assets/delete.png' className='h-5' />
        </button>
        <input className='checkbox checkbox-accent' type='checkbox' />
      </span>

      
    </li>
  )
}