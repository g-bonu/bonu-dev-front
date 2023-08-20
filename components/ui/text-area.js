'use client'

export default function TextArea({type, name, placeholder, value, onChange, className }) {

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className={className}>
      <textarea
        type={type || 'text'}
        name={name || ''}
        value={value || ''}
        className="border sm:text-sm rounded-lg block w-full h-64 p-2.5 bg-slate-700 border-slate-600 placeholder-gray-400 pl-[14px] text-slate-300 focus:ring-1 focus:outline-none focus:ring-slate-500"
        placeholder={placeholder || ''}
        onChange={handleChange}
      />

    </div>
  )
}