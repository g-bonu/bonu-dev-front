'use client'

import TextField from '@/components/ui/text-field'
import TextArea from '@/components/ui/text-area'
import Button from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { post } from '@/utils/api'
import useSwrMutation from 'swr/mutation'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/ui/spinner'
import Link from 'next/link'

const createProject = (url, { arg }) => post(url, arg)

export default function NewProjectForm() {
  const [startYear, setStartYear] = useState('')
  const [endYear, setEndYear] = useState('')
  const [title, setTitle] = useState('')
  const [organization, setOrganization] = useState('')
  const [description, setDescription] = useState('')

  const { trigger, data, isMutating } = useSwrMutation('/admin/projects', createProject)
  const [image, setImage] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (!data || !router) return

    router.push('/admin/projects')
  }, [data, router])


  const handleSubmit = () => {
    trigger({
      start_year: startYear,
      end_year: endYear,
      title,
      organization,
      description
    })
  }

  return (
    <div className="items-center justify-center py-8">
      <div className="rounded-lg bg-slate-800/50">
        <div className="md:p-8 p-4 flex flex-col gap-4">
          <h1 className="mb-2 text-xl font-bold leading-tight tracking-tight text-slate-300 md:text-2xl">
            New project
          </h1>
          <TextField value={startYear} onChange={setStartYear} placeholder="Start Year" />
          <TextField value={endYear} onChange={setEndYear} placeholder="End Year" /> 
          <TextField value={title} onChange={setTitle} placeholder="Title" />
          <TextField value={organization} onChange={setOrganization} placeholder="Organization" />
          <TextArea value={description} onChange={setDescription} placeholder="Description" />
          <div className="flex justify-between">
            <Link href="/admin/projects" className="block py-2 pl-4 pr-4 rounded text-white hover:text-teal-500">Back</Link>
            <Button onClick={handleSubmit}> {isMutating ? <div className="flex justify-center"><Spinner /></div> : 'Create'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}