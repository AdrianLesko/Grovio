
export default function Modal ( {isOpen, setIsOpen, children} ) {
  if (!isOpen) return null
  
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/30 z-50'>
      <div className='card bg-base-200 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 w-full sm:w-3/5 p-4'>
        <div className='card-body'>
          {children}
        </div>
        <div className='card-actions'>
          <button
            className='btn ml-auto'
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}