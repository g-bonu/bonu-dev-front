import Link from 'next/link'

export default function LinkButton({href, children, type='normal', className}) {
  let buttonClassName = null

  if (type === 'text') {
    buttonClassName = 'block py-2 rounded text-teal-600 hover:text-teal-300'
  } else {
    buttonClassName = 'block text-teal-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-400/30 hover:bg-teal-400/50'
  }

  return (
    <div className={className}>
      <Link 
        href={href}
        className={buttonClassName}
      >
        {children}
      </Link>
    </div>
  );
}