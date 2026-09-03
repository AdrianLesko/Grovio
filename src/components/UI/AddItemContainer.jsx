

export default function AddItemContainer ( { setIsOpen, setModalType } ) {

  return (
    <div className='card w-full bg-accent h-12 flex flex-row justify-around items-center'>
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