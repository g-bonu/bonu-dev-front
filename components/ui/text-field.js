'use client'

export default function TextField({type, name, placeholder, value, onChange, onEnter, className}) {
  const handleChange = (e) => {
    if (!onChange) return

    onChange(e.target.value)
  }

  const onKeyPress = (e) => {
    if (!onEnter) return
    
    if (e.key === 'Enter') {
      e.preventDefault()
      onEnter()
    }
  }

  return (
    <div className={className}>
      <input
        type={type || 'text'}
        name={name || ''}
        value={value || ''}
        className="border sm:text-sm rounded-lg block w-full p-2.5 bg-slate-700 border-slate-600 placeholder-gray-400 text-slate-300 focus:ring-1 focus:outline-none focus:ring-slate-500"
        placeholder={placeholder || ''}
        onChange={handleChange}
        onKeyDown={onKeyPress}
      />
    </div>
  )
}