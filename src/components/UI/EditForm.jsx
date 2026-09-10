import { useState } from 'react'
import { useItemContext } from './../../context/ItemContext'
import Units from './UnitsContainer'
import QuantitySetter from './QuantitySetter'

export default function EditForm () {

  const { itemToEdit, updateItem } = useItemContext()

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
        <legend className='fieldset-legend text-xl'>Edit<span>'{itemToEdit.title}'</span>Item</legend>

        <label className='fieldset-label'>Item Name</label>
        <input className='input w-full' placeholder={title} type='text' value={newTitle} onChange={e => setNewTitle(e.target.value)}required />

        <label className='fieldset-label'>Quantity</label>
        <QuantitySetter quantity={newQuantity} setQuantity={setNewQuantity} />
        

        <Units unit={newUnit} setUnit={setNewUnit} />

      </fieldset>

      <button className='btn btn-accent w-full' type='submit'>Submit</button>
    </form>
  )
}