

export default function AddItemContainer ( {open, setIsOpen, setModalType} ) {

  return (
    <div className='card w-full bg-base-300 h-12 flex flex-row justify-around items-center'>
      <h3>Add New Item</h3>
      <button 
        className='btn'
        onClick={() => {
          setIsOpen(true)
          setModalType('add')
        }}
      >
        Add
      </button>
    </div>
  )
}