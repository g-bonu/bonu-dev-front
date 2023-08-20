'use client'

import TextField from '@/components/ui/text-field'
import TextArea from '@/components/ui/text-area'
import Button from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { put, get } from '@/utils/api'
import useSwrMutation from 'swr/mutation'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/ui/spinner'
import TagsForm from '@/components/admin/tags-form'
import Link from 'next/link'
import useSWR from "swr"
import ImagesForm from '@/components/admin/images-form'

const updateProject = (url, { arg }) => put(url, arg)
const getProjects = url => get(url).then(res => res.data)

export default function UpdateProjectForm({ projectId }) {
  const [startYear, setStartYear] = useState('')
  const [endYear, setEndYear] = useState('')
  const [title, setTitle] = useState('')
  const [organization, setOrganization] = useState('')
  const [description, setDescription] = useState('')
  const { trigger, data: updatedProject, isMutating } = useSwrMutation(`/admin/projects/${projectId}`, updateProject)
  const router = useRouter()
  const { data: loadedProject, isLoading } = useSWR(`/admin/projects/${projectId}`, getProjects)
  

  useEffect(() => {
    if (!updatedProject || !router) return

    router.push('/admin/projects')
  }, [updatedProject, router])

  useEffect(() => {
    if (!loadedProject) return

    setStartYear(loadedProject.start_year)
    setEndYear(loadedProject.end_year)
    setTitle(loadedProject.title)
    setOrganization(loadedProject.organization)
    setDescription(loadedProject.description)

  }, [loadedProject])

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
        <div className="flex flex-col gap-4 md:p-8 p-4">
          <div className="flex justify-between mb-2">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-300 md:text-2xl">
              Update project
            </h1>
            <div>
              ID: {projectId}
            </div>
          </div>
          <div className="flex gap-2">
            <TextField className="w-full" value={startYear} onChange={setStartYear} placeholder="Start Year" />
            <TextField className="w-full"value={endYear} onChange={setEndYear} placeholder="End Year" /> 
          </div>
          
          <TextField value={title} onChange={setTitle} placeholder="Title" />
          <TextField value={organization} onChange={setOrganization} placeholder="Organization" />
          <TextArea value={description} onChange={setDescription} placeholder="Description" />
          <TagsForm projectId={projectId} />
          <ImagesForm projectId={projectId} />
          <div className="flex justify-between">
            <Link href="/admin/projects" className="block py-2 pl-4 pr-4 rounded text-white hover:text-teal-500">Back</Link>
            <Button onClick={handleSubmit}> {isMutating || isLoading ? <div className="flex justify-center"><Spinner /></div> : 'Save'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}