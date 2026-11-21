import Item from './Item'
import { useItemContext } from './../../context/ItemContext'

export default function ShoppingList ({ filterVal }) {
  const { items, isLoading } = useItemContext()
  const unboughtItems = items.filter(item => !item.isBought)
  const boughtItems = items.filter(item => item.isBought)

  const sortedItems = unboughtItems.concat(boughtItems)

  const filterItems = () => {
    switch (filterVal) {
      case 'all': return sortedItems;
      case 'to-buy': return items.filter(item => !item.isBought);
      case 'bought': return items.filter(item => item.isBought);
      default: return items
    }
  }

  const filteredItems = filterItems()

  return !isLoading ?
    items.length > 0 ?
    (
      <ul className='list rounded-box h-full flex flex-col gap-2'>
        {filteredItems.map(item => <Item item={item} key={item.id} />)}
      </ul>
    ) :
    (
      <div className='bg-base-200 rounded-box h-full flex flex-col gap-1 items-center justify-center'>
        <span className='text-base-content/60 font-medium'>No items yet.</span>
      </div>
    )
  :
  (
    <div className='bg-base-200 rounded-box h-full flex flex-col gap-1 items-center justify-center'>
      <span className='loading loading-spinner text-primary'></span>
    </div>
  )
}
