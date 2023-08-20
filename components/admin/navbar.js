import Avatar from "@/components/home/avatar"
import Link from "next/link"

export default function Navbar() {
  return(
    <nav className="w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link href="/">
            <Avatar width={40} height={40}/>
          </Link>
          <span className="pl-4 self-center text-l font-semibold text-slate-200">Admin Panel</span>  
        </div>
        <div className="items-center justify-between flex w-auto">
          <ul className="font-medium flex flex-row border-gray-700">
            <li>
              <Link href="/logout" className="block py-2 pl-4 pr-4 rounded text-white hover:text-teal-500">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}