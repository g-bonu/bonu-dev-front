'use client'

export default function Tag({ id, name, onDelete }) {
  const handleClick = (e) => {
    e.preventDefault()
    if (onDelete) onDelete(id)
  }

  return (
    <div className="flex items-center gap-x-2 rounded-full bg-teal-400/10 px-4 py-2 font-medium leading-5 text-teal-300">
      {name}
      <div className="pt-1">
        <svg onClick={handleClick} className="h-4 w-5 fill-current text-teal-300 hover:text-teal-400/70 active:text-teal-400/50 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
      </div>
    </div>
  )
}