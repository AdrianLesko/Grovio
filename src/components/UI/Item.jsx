

export default function Item ( { title, quantity} ) {
  return (
    <li className='list-row border-2 border-accent bg-base-100 flex flex-row w-full h-15 items-center justify-around'>
      <span className=' w-1/4 h-full text-[1.1rem] flex items-center jusitfy-start'>{title}</span>
      <span className=' w-1/4 h-full text-[1.1rem] flex items-center jusitfy-start'>{quantity}</span>
      <span className=' w-1/4 h-full text-[1.1rem] flex items-center jusitfy-start'><p>2 minutes ago</p></span>
      <span className=' w-1/8 h-full text-[1.1rem] ml-auto flex items-center justify-end'><input type='checkbox'></input></span>

      
    </li>
  )
}