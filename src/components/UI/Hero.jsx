import { useState } from 'react'
import AddItemContainer from './AddItemContainer'
import ShoppingList from './ShoppingList'

export default function Hero ( {  items, setIsOpen, setModalType }) {
  
  return (
    <div className='flex-1'>
        <AddItemContainer setIsOpen={setIsOpen} setModalType={setModalType}/>
        <ShoppingList items={items} />
    </div>
  )
}