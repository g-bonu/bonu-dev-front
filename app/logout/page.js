'use client'

import { removeToken } from "@/utils/auth-token"
import Spinner from "@/components/ui/spinner"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    removeToken()
    router.push('/')

  }, [router])

  return (
    <Spinner fullScreen />
  )
}