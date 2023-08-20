import Thumbnail from "@/components/admin/thumbnail";
import ImageUpload from "@/components/ui/image-upload";
import { destroy, post, get } from "@/utils/api";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const getImages = url => get(url).then(res => res.data)
const createImage = (url, { arg }) => post(url, arg)
const destroyImage = (url, { arg }) => destroy(`${url}/${arg.id}`)

export default function ImagesForm({ projectId }) {
  const { trigger: deleteTrigger } = useSWRMutation(`/admin/projects/${projectId}/project_images`, destroyImage)
  const { trigger: createTrigger } = useSWRMutation(`/admin/projects/${projectId}/project_images`, createImage)

  const { data: images } = useSWR(
    `/admin/projects/${projectId}/project_images`,
    getImages,
    {
      fallbackData: []
    }
  )

  const addImage = (image) => {
    const formData = new FormData()
    formData.append('image', image)
    createTrigger(formData)
  }

  const deleteImage = (id) => {
    deleteTrigger({
      id
    })
  }
  
  return (
    <>
      <div>
        <ImageUpload onChange={addImage} />
      </div>
      <div className="flex gap-1 flex-wrap">
        {images.map(({id, thumbnail_url}) => 
          <Thumbnail key={id} id={id} url={thumbnail_url} onDelete={deleteImage} /> 
        )}
      </div>
    </>
  )
}