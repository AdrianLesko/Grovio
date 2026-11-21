import { useState } from 'react'
import AddItemContainer from './AddItemContainer'
import ShoppingList from './ShoppingList'


export default function Hero () {
  const [filterVal, setFilterVal] = useState('all')
  
  return (
    <div className='flex-1 max-w-2xl mx-auto w-full px-4 py-6 md:py-8 mb-12 space-y-4'>
        <AddItemContainer setFilterVal={setFilterVal} />
        <ShoppingList filterVal={filterVal} />
    </div>
  )
}