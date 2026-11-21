

const units = ['KS', 'KG', 'L', 'G']

export default function Units ( { unit, setUnit }) {
  return (
    
    <div className='mx-auto flex flex-row gap-2'>
      {units.map(el => {
        return <button key={el} type='button' onClick={() => setUnit(el)}
          className={`btn btn-xs px-3 ${el === unit ? 'btn-primary' : 'btn-soft'}`}
        >
          {el}
        </button>
      })}
    </div>
  )

}