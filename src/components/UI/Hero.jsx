import { useState, useContext } from 'react'
import AddItemContainer from './AddItemContainer'
import ShoppingList from './ShoppingList'


export default function Hero () {
  const [filterVal, setFilterVal] = useState('all')
  
  return (
    <div className='flex-1'>
        <AddItemContainer setFilterVal={setFilterVal} />
        <ShoppingList filterVal={filterVal} />
    </div>
  )
}