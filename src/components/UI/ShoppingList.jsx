import Item from './Item'

export default function ShoppingList ({ items }) {
  return (
    <ul className='list bg-base-200 rounded-box h-full flex flex-col gap-1'>
      {items.map(item => <Item title={item.title} quantity={item.quantity} key={item.id} />)}
    </ul>

  )
}
