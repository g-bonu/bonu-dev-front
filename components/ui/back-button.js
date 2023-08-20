import Link from "next/link"

export default function BackButton() {
  return (
    <Link className="block mb-6" href="/">
      <svg className="fill-slate-200 hover:fill-slate-400 h-12 w-12" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 96 96" height="96" viewBox="0 0 96 96" width="96">
        <path d="M84 44H21.7l21.5-21.5c1.6-1.6 1.6-4.1 0-5.7 -1.6-1.6-4.1-1.6-5.7 0L9.2 45.2l0 0c-0.2 0.2-0.4 0.4-0.5 0.6 -0.1 0.1-0.1 0.2-0.2 0.3 -0.1 0.1-0.1 0.2-0.2 0.4 -0.1 0.1-0.1 0.3-0.1 0.4 0 0.1-0.1 0.2-0.1 0.3C8 47.5 8 47.7 8 48l0 0c0 0 0 0 0 0 0 0.3 0 0.5 0.1 0.8 0 0.1 0.1 0.2 0.1 0.3 0 0.1 0.1 0.3 0.1 0.4 0.1 0.1 0.1 0.3 0.2 0.4 0.1 0.1 0.1 0.2 0.2 0.3 0.1 0.2 0.3 0.4 0.5 0.6l28.3 28.3c1.6 1.6 4.1 1.6 5.7 0 1.6-1.6 1.6-4.1 0-5.7L21.7 52H84c2.2 0 4-1.8 4-4S86.2 44 84 44z"></path>
      </svg>
    </Link>
  )
}