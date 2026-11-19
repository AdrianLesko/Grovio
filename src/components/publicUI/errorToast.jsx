

export default function ErrorToast ({ error }) {
  return error && (
    <div role='alert' className='alert alert-error text-white font-bold'>
      <span>{error}!</span>
    </div>
  )
}