import Item from './Item'
import { useItemContext } from './../../context/ItemContext'

export default function ShoppingList ({ filterVal }) {
  const { items } = useItemContext()
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

  return items.length > 0 ?
   (
    <ul className='list bg-base-200 rounded-box h-full flex flex-col gap-1'>
      {filteredItems.map(item => <Item item={item} key={item.id} />)}
    </ul>
  ) :
  (
    <div className='bg-base-200 rounded-box h-full flex flex-col gap-1 items-center justify-start'>
      <div role='alert' className='alert alert-warning alert-soft mt-50 flex flex-col'>
        <span className='text-lg'>Your list is empty.</span>
        <span>Click + to add first Item</span>
      </div>
    </div>
  )
}
