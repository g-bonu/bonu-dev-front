'use-client'

export default function Button({ name, onClick, children, disabled, type='normal', className}) {
  let bgColor = 'bg-teal-400/30'
  let bgHoverColor = 'hover:bg-teal-400/50'
  let textColor = 'text-teal-200'

  const handleClick = (e) => {
    e.preventDefault()
    if(onClick) onClick()
  }

  if (disabled) {
    if (type === 'danger') {
      bgColor = 'bg-red-400/10'
      bgHoverColor = 'hover:bg-red-400/10'
    } else {
      bgColor = 'bg-teal-400/10'
      bgHoverColor = 'hover:bg-teal-400/10'
    }
  }

  if (type === 'danger') {
    bgColor = 'bg-red-400/30'
    bgHoverColor = 'hover:bg-red-400/50'
    textColor = 'text-red-200'
  }

  const buttonClassName = `w-full ${textColor} focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${bgColor} ${bgHoverColor}`

  return (
    <div className={className}>
      <button
        type='button'
        name={name || ''}
        className={buttonClassName}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}