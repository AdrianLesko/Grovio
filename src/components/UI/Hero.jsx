import { useState } from 'react'
import AddItemContainer from './AddItemContainer'

export default function Hero ( {items, isOpen, setIsOpen, setModalType}) {
  
  return (
    <div className='flex-1'>
        <AddItemContainer open={isOpen} setIsOpen={setIsOpen} setModalType={setModalType}/>
      
    </div>
  )
}