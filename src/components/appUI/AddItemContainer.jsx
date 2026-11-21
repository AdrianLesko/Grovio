
import { useItemContext } from './../../context/ItemContext'

export default function AddItemContainer ({ setFilterVal }) {

  const { items, setIsOpen, setModalType } = useItemContext()
  const notBoughtCount = items.filter(item => !item.isBought).length
  const boughtCount = items.length - notBoughtCount


  

  return (
    <div className='flex flex-wrap gap-y-4 flex-row justify-between items-center bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 '>
      <div id='list-info' className='flex flex-row gap-2'>
        <div className='badge badge-sm badge-soft text-base-content'>Na nákup: {notBoughtCount}</div>
        <div className='badge badge-sm badge-soft text-base-content'>Kúpené: {boughtCount}</div>
      </div>
      
      <div className='flex flex-row items-center gap-2'>
        <select onChange={e => setFilterVal(e.target.value)} className='select select-sm'>
          <option value='all'>All</option>
          <option value='to-buy'>To buy</option>
          <option value='bought'>Bought</option>
        </select>
        
        <button 
          className='btn btn-primary btn-sm'
          onClick={() => {
            setIsOpen(true)
            setModalType('add')
          }}
        >
            Pridať
        </button>
      </div>
      
      
    </div>
  )
}