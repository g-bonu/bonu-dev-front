'use client'

import Button from "@/components/ui/button"
import LinkButton from "@/components/ui/link-button"
import Spinner from "@/components/ui/spinner"
import { get, destroy } from "@/utils/api"
import useSWR from "swr"
import useSwrMutation from 'swr/mutation'

const getProjects = url => get(url).then(res => res.data)
const deleteProject = (url, { arg }) => destroy(`${url}/${arg.projectId}`)

export default function Projects() {
  const { data: projects, isLoading } = useSWR('/admin/projects', getProjects)
  const { trigger, isMutating } = useSwrMutation(`/admin/projects`, deleteProject)

  const handleDelete = (id) => {
    return () => trigger({
      projectId: id,
    })
  }

  if (isLoading || isMutating) return <Spinner fullScreen />

  return (
    <ul className="mt-12">
      {projects.map(({ id, start_year, end_year, organization, title }) => (
        <li key={id} className="flex flex-col gap-2 md:flex-row mt-6 justify-around rounded bg-slate-800/50 p-4 items-center">
          <div className="md:flex-1">{start_year} — {end_year || 'Present'}</div>
          <div className="md:flex-1">{title}</div>
          <div className="md:flex-1">{organization}</div>
          <div className="flex md:flex-1 mt-2 md:mt-0 space-x-4 justify-end">
            <LinkButton href={`/admin/projects/${id}`}>Edit</LinkButton>
            <Button type="danger" onClick={handleDelete(id)}>Delete</Button>
          </div>
        </li>
      ))}
    </ul>
  )
}