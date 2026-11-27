import { useState } from 'react'
import { useItemContext } from './../../context/ItemContext'
import Units from './UnitsContainer'
import QuantitySetter from './QuantitySetter'

export default function AddForm ( {setOpen}) {
  const {addItem, setIsOpen, isLoading} = useItemContext()

  const [itemName, setItemName] = useState('') 
  const [quantity, setQuantity] = useState(1)
  const [unit, setUnit] = useState('KS')

  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newItem = {
      title: itemName.trim(),
      quantity: Number(quantity) || 1,
      unit: unit,
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

        <fieldset className='fieldset flex flex-col items-start'>
          <legend className='fieldset-legend text-xl'>Pridať položku</legend>

          <label className='fieldset-label'>Názov položky</label>
          <input className='input w-full' type='text' value={itemName} onChange={(e) => setItemName(e.target.value)} required />

          <label className='fieldset-label mt-8'>Množstvo</label>
          <QuantitySetter quantity={quantity} setQuantity={setQuantity} />

          <Units unit={unit} setUnit={setUnit} />
        </fieldset>

        <div className='mt-8 flex flex-row gap-3 w-full justify-center'> 
          <button className='btn btn-soft w-30 hover:text-error' type='button' onClick={() => setOpen(false)}>Zatvoriť</button>
          <button className='btn btn-primary w-30' disabled={isLoading} type='submit'>Pridať</button>
        </div>

      </form>
    </>
  )
}