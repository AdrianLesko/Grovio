import { useState } from 'react'
import { useItemContext } from './../../context/ItemContext'
import Units from './UnitsContainer'
import QuantitySetter from './QuantitySetter'

export default function AddForm () {
  const {addItem, setIsOpen} = useItemContext()

  const [itemName, setItemName] = useState('') 
  const [quantity, setQuantity] = useState(1)
  const [unit, setUnit] = useState('pc')

  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newItem = {
      id: crypto.randomUUID(),
      title: itemName.trim(),
      quantity: Number(quantity) || 1,
      unit: unit,
      isBought: false,
      createdAt: Date.now()
    }
    
    console.log(newItem)
    addItem(newItem)
    setIsOpen(false)
    setItemName('')
    setQuantity(1)

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className='fieldset flex flex-col items-start'>
          <legend className='fieldset-legend text-xl'>Add New Item</legend>

          <label className='fieldset-label'>Item Name</label>
          <input className='input w-full' type='text' value={itemName} onChange={(e) => setItemName(e.target.value)} required />

          <label className='fildset-label'>Quantity</label>
          <QuantitySetter quantity={quantity} setQuantity={setQuantity} />

          <Units unit={unit} setUnit={setUnit} />
        </fieldset>

        <button className='btn btn-accent w-full' type='submit'>Add</button>
      </form>
    </>
  )
}