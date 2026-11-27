import { useState } from 'react'
import ErrorToast from '../../components/publicUI/errorToast.jsx'

export default function JoinForm ({ handleOpenCancel, handleJoinGroup, error}) {
  const [code, setCode] = useState('')

  const submit = (e) => {
    e.preventDefault()
    handleJoinGroup(code.trim().toUpperCase())
    setCode('')
  }

  const cancel = () => {
    setCode('')
    handleOpenCancel()
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <fieldset className='fieldset flex flex-col items-start'>
          <legend className='fieldset-legend text-xl'>Pripojiť sa k skupine</legend>

          <ErrorToast error={error} />
          
          <label className='fieldset-label'>Zadajte kód skupiny</label>
          <input className='w-full input' value={code} onChange={(e) => setCode(e.target.value)} placeholder='XXXXXX' />
        </fieldset>
        <div id='btns' className='mt-8 flex flex-row gap-3 w-full justify-center'>
          <button className='btn btn-primary' type='submit'>Pripojiť</button>
          <button className='btn' type='button' onClick={() => cancel()}>Zrušiť</button>
        </div>
      </form>
    </>
  )
}