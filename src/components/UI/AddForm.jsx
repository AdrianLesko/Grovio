import { useState, useContext } from 'react'
import { ItemContext } from '../../App'

export default function AddForm () {
  const {addItem, setIsOpen} = useContext(ItemContext)

  const [itemName, setItemName] = useState('') 
  const [quantity, setQuantity] = useState(1)


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newItem = {
      id: crypto.randomUUID(),
      title: itemName.trim(),
      quantity: Number(quantity) || 1,
      isBought: false,
      createdAt: Date.now()
    }

    addItem(newItem)
    setIsOpen(false)
    setItemName('')
    setQuantity(1)

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend text-xl'>Add New Item</legend>

          <label className='fieldset-label'>Item Name</label>
          <input className='input w-full' type='text' value={itemName} onChange={(e) => setItemName(e.target.value)} required />

          <label className='fieldset-label'>Quantity</label>
          <input className='input w-full' type='number' min='1' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </fieldset>

        <button className='btn btn-accent w-full' type='submit'>Add</button>
      </form>
    </>
  )
}