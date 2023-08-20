'use client'

import useSwrMutation from 'swr/mutation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { post } from "@/utils/api"
import TextField from '@/components/ui/text-field'
import Button from '@/components/ui/button'
import Spinner from '@/components/ui/spinner'
import Container from '@/components/login/container'
import ErrorMessage from '@/components/ui/error-message'
import { useToast } from '@/components/ui/toast'

const signIn = (url, { arg }) => post(url, arg).then(res => res.data)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [emailRequired, setEmailRequired] = useState(false)
  const [passwordRequired, setPasswordRequired] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)
  const { trigger, data: signInResp, isMutating, error: signInError } = useSwrMutation('/admin/sign_in', signIn, { throwOnError: false })
  const { addMessage } = useToast()

  const handleSubmit = () => {
    if(!validateForm()) return

    trigger({ admin: { email, password }})
  }

  useEffect(() => {
    if (!signInError) return

    addMessage('Invalid email or password', 'error')
  }, [signInError])

  useEffect(() => {
    if (!signInResp || !router) return

    addMessage('Successfully signed in', 'success')
    router.push('/admin/projects')
  }, [signInResp, router])
  
  const validateForm = () => {
    let valid = true
    if (!email) {
      setEmailRequired(true)
      valid = false
    }

    if (!password) {
      setPasswordRequired(true)
      valid = false
    }

    if (!validateEmail(email)) {
      setEmailInvalid(true)
      valid = false
    }

    return valid
  }

  useEffect(() => {
    setEmailRequired(false)
    setPasswordRequired(false)
    setEmailInvalid(false)

  }, [email, password])

  const validateEmail = (email) => {
    if (!email) return true

    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  return (
    <Container>
      <div>
        <TextField name="email" type="email" placeholder="Email" value={email} onChange={setEmail} />
        {emailRequired && <ErrorMessage>Email is required</ErrorMessage>}
        {emailInvalid && <ErrorMessage>Invalid email</ErrorMessage>}
      </div>
      <div>
        <TextField name="password" type="password" placeholder="Password" value={password} onChange={setPassword} onEnter={handleSubmit}/> 
        {passwordRequired && <ErrorMessage>Password is required</ErrorMessage>}
      </div>
      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={isMutating}
      >
        {isMutating ? <div className="flex justify-center"><Spinner /></div> : 'Sign In'}
      </Button>
    </Container>
  )
}