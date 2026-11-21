import { Plus, Minus } from 'lucide-react'


export default function QuantitySetter ({quantity, setQuantity}) {



  const handleClick = (val) => {
    const num = Number(quantity + val)

    if (num < 1 || !num) {
      setQuantity(1)
      return
    }

    setQuantity(num)
  }

  return (
    <div className='w-full bg-base-100 rounded-xl'>

      <div className="flex justify-center">
        <div className='inline-flex items-center border border-base-300 rounded-lg bg-base-100 p-1'>
          <button type='button' className='btn btn-ghost btn-sm' onClick={() => handleClick(-1)} ><Minus /></button>
          <input className='input input-ghost bg-transparent focus:outline-none w-12 text-center font-semibold' type='text' inputMode='numeric' min='1' value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
          <button type='button' className="btn btn-ghost btn-sm" onClick={() => handleClick(+1)}><Plus /></button>
        </div>
      </div>
    </div> 

  )
}