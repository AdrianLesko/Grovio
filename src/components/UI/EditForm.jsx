import { useState } from 'react'
import { useItemContext } from './../../context/ItemContext'

export default function EditForm () {

  const { itemToEdit, updateItem } = useItemContext()

  const title = itemToEdit.title
  const quantity = itemToEdit.quantity

  const [newTitle, setNewTitle] = useState(title)
  const [newQuantity, setNewQuantity] = useState(quantity)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {...itemToEdit, title: newTitle.trim(), quantity: Number(newQuantity)}
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
        <input className='input w-full' type='number' min='1' value={newQuantity} onChange={e=> setNewQuantity(e.target.value)} />

      </fieldset>

      <button className='btn btn-accent w-full' type='submit'>Submit</button>
    </form>
  )
}