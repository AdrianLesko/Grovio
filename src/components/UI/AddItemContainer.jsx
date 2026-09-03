import { useContext, useState } from 'react'
import {ItemContext} from '../../App'

export default function AddItemContainer ({ setFilterVal}) {

  const { items, setIsOpen, setModalType } = useContext(ItemContext) 
  const notBoughtCount = items.filter(item => !item.isBought).length
  const boughtCount = items.length - notBoughtCount


  

  return (
    <div className='card w-full bg-accent h-12 mt-5 mb-2 flex flex-row px-3 items-center'>
      <div id='list-info' className='flex flex-row gap-5'>
        <label className='label'>
          To Buy:
          <span>{notBoughtCount}</span>
        </label>
        <label className='label'>
          Bought: 
          <span>{boughtCount}</span>
        </label>
      </div>
      
      <div className='ml-auto w-1/2 flex flex-row justify-end items-center gap-4 '>
        <select onChange={e => setFilterVal(e.target.value)} className='select h-3/4 w-40 '>
          <option value='all'>All</option>
          <option value='to-buy'>To buy</option>
          <option value='bought'>Bought</option>
        </select>
        
        <button 
        className='btn btn-circle btn-sm bg-white border border-accent text-accent text-xl flex items-center justify-center'
        onClick={() => {
          setIsOpen(true)
          setModalType('add')
        }}
        >
          +
        </button>
      </div>
      
      
    </div>
  )
}