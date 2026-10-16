import {useEffect, useState} from 'react'

export default function ToastError ( {error, setError }) {

  useEffect(() => {
    if (!error) return
    
    const timer = setTimeout(() => setError(null), 4000)

    return () => clearTimeout(timer)
  }, [error])

  return error && (
    <div className='toast mb-10'>
      <div className='alert alert-error'>
        <span className='font-bold text-white'>{error.message}</span>
      </div>
    </div>
  )
}