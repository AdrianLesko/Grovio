import { useState } from 'react'

export default function AddForm ( { addItem, setIsOpen } ) {

  const [itemName, setItemName] = useState('') 
  const [quantity, setQuantity] = useState(1)


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('klikol si na add')

    const newItem = {
      id: crypto.randomUUID(),
      title: itemName,
      quantity: quantity,
    }

    addItem(newItem)
    setIsOpen(false)

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend text-xl'>Add New Item</legend>

          <label className='fieldset-label'>Item Name</label>
          <input className='input w-full' type='text' value={itemName} onChange={(e) => setItemName(e.target.value)} />

          <label className='fieldset-label'>Quantity</label>
          <input className='input w-full' type='number' min='1' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </fieldset>

        <button className='btn btn-accent w-full' type='submit'>Add</button>
      </form>
    </>
  )
}