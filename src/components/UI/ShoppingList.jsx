import Item from './Item'
import {useContext} from 'react'
import {ItemContext} from '../../App'

export default function ShoppingList ({ filterVal }) {
  const { items } = useContext(ItemContext)

  const filterItems = () => {
    switch (filterVal) {
      case 'all': return items;
      case 'to-buy': return items.filter(item => !item.isBought);
      case 'bought': return items.filter(item => item.isBought);
      default: return items
    }
  }

  const filteredItems = filterItems()

  return (
    <ul className='list bg-base-200 rounded-box h-full flex flex-col gap-1'>
      {filteredItems.map(item => <Item item={item} key={item.id} />)}
    </ul>

  )
}
