

export default function QuantitySetter ({quantity, setQuantity}) {

  const handleClick = (val) => {
    const num = quantity + val

    if (num < 1 || !num) {
      setQuantity(1)
      return
    }

    setQuantity(num)
  }

  return (
    <div className='w-full px-8 py-4 rounded-xl mb-2 flex flex-row items-center justify-center shadow-md'>
      <button type='button' onClick={() => handleClick(-100)} className='btn btn-md btn-ghost px-1 '>-100</button>
      <button type='button' onClick={() => handleClick(-10)} className='btn btn-md btn-ghost px-1 '>-10</button>
      <button type='button' onClick={() => handleClick(-1)} className='btn btn-md btn-ghost px-2 '>-</button>
    
      <span className='bg-transparent w-20 text-center text-2xl font-semibold hover:cursor-default '>{quantity}</span>

      <button type='button' onClick={() => handleClick(+1)} className='btn btn-md btn-ghost px-2 '>+</button>
      <button type='button' onClick={() => handleClick(+10)} className='btn btn-md btn-ghost px-1 '>+10</button>
      <button type='button' onClick={() => handleClick(+100)} className='btn btn-md btn-ghost px-1 '>+100</button>
    </div> 

  )
}