import { useState } from 'react'
import ErrorToast from '../../components/publicUI/errorToast.jsx'

export default function CreateForm ({handleOpenCancel, handleCreateGroup, error}) {
  const [name, setName] = useState('')

  const submit = (e) => {
    e.preventDefault()
    handleCreateGroup(name.trim())
    setName('')
  }

  const cancel = () => {
    setName('')
    handleOpenCancel()
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <fieldset className='fieldset flex flex-col items-start'>
          <legend className='fieldset-legend text-xl'>Vytvoriť skupinu</legend>
          <ErrorToast error={error} />
          <label className='fieldset-label'>Zadajte názov skupiny</label>
          <input className='w-full input' value={name} onChange={(e) => setName(e.target.value)} placeholder='napr. Domácnosť' />
        </fieldset>
        <div id='btns' className='mt-8 flex flex-row gap-3 w-full justify-center'>
          <button className='btn btn-primary' type='submit'>Vytvoriť</button>
          <button className='btn' type='button' onClick={() => cancel()}>Zrušiť</button>
        </div>
      </form>
    </>
  )
}