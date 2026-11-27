import { useState } from 'react'
import { useItemContext } from './../../context/ItemContext'
import Units from './UnitsContainer'
import QuantitySetter from './QuantitySetter'

export default function EditForm ( { setOpen }) {

  const { itemToEdit, updateItem, isLoading} = useItemContext()

  const title = itemToEdit.title
  const quantity = itemToEdit.quantity
  const unit = itemToEdit.unit

  const [newTitle, setNewTitle] = useState(title)
  const [newQuantity, setNewQuantity] = useState(quantity)
  const [newUnit, setNewUnit] = useState(unit)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {...itemToEdit, title: newTitle.trim(), quantity: Number(newQuantity), unit: newUnit}
    updateItem(newItem)
    setNewTitle('')
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <fieldset className='fieldset'>
        <legend className='fieldset-legend text-xl'>Upraviť položku</legend>

        <label className='fieldset-label'>Názov položky</label>
        <input className='input w-full' placeholder={title} type='text' value={newTitle} onChange={e => setNewTitle(e.target.value)}required />

        <label className='mt-8 fieldset-label'>Množstvo</label>
        <QuantitySetter quantity={newQuantity} setQuantity={setNewQuantity} />
        

        <Units unit={newUnit} setUnit={setNewUnit} />

      </fieldset>

      <div className='mt-8 flex flex-row gap-3 w-full justify-center'> 
          <button className='btn btn-soft w-30 hover:text-error' type='button' onClick={() => setOpen(false)}>Zatvoriť</button>
          <button className='btn btn-primary w-30' disabled={isLoading} type='submit'>Uložiť</button>
      </div>

    </form>
  )
}