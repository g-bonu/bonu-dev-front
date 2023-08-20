'use-client'

export default function TextButton({ children, onClick, className }) {
  return (
    <div className={className}>
      <button
        type='button'
        className='block text-slate-200 hover:text-teal-500'
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}