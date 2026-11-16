

const units = ['pc', 'kg', 'l', 'g']

export default function Units ( { unit, setUnit }) {
  return (
    
    <div className='mx-auto flex flex-row gap-2'>
      {units.map(el => {
        return <button key={el} type='button' onClick={() => setUnit(el)}
          className={`btn btn-xs px-3 ${el === unit ? 'btn-accent' : 'btn-soft'}`}
        >
          {el}
        </button>
      })}
    </div>
  )

}