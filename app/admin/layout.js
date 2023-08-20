'use client'

import { getToken } from "@/utils/auth-token"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Spinner from "@/components/ui/spinner"
import Navbar from "@/components/admin/navbar"

export default function AdminLayout({ children }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = getToken()
    if (token) {
      setLoading(false)
    } else {
      router.push('/login')
    }
    
  }, [router])

  if (loading) return <Spinner fullScreen />

  return (
    <>
      <Navbar />
      { children }
    </>
  )
}