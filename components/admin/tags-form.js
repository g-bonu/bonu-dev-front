'use client'

import TextField from "@/components/ui/text-field";
import Button from '@/components/ui/button';
import Tag from '@/components/admin/tag';
import { useState } from "react";
import { destroy, get, post } from "@/utils/api";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const getTags = url => get(url).then(res => res.data)
const createTag = (url, { arg }) => post(url, arg)
const destroyTag = (url, { arg }) => destroy(`${url}/${arg.id}`)

export default function TagsForm({ projectId }) {
  const [newTag, setNewTag] = useState('')
  const { trigger: createTrigger } = useSWRMutation(`/admin/projects/${projectId}/project_tags`, createTag)
  const { trigger: deleteTrigger } = useSWRMutation(`/admin/projects/${projectId}/project_tags`, destroyTag)

  const { data: tags } = useSWR(
    `/admin/projects/${projectId}/project_tags`, 
    getTags,
    {
      fallbackData: []
    }
  )

  const addTag = () => {
    createTrigger({
      name: newTag
    })
  }

  const deleteTag = (id) => {
    deleteTrigger({
      id
    })
  }


  return (
    <div className="flex flex-col">
      <div className="flex gap-x-4">
        <TextField value={newTag} onChange={setNewTag} placeholder="New Tag" className="grow"/>
        <Button onClick={addTag}>Add</Button>
      </div>
      <div className="flex gap-x-2 gap-y-4 flex-wrap mt-4">
        {
          tags.map(({id, name}) => (
            <Tag key={id} id={id} name={name} onDelete={deleteTag}/>
          ))
        }
      </div>
    </div>
  );
}