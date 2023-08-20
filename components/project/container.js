import { get } from '@/utils/api'
import BackButton from '@/components/ui/back-button'
import Tag from '@/components/project/tag'

export default async function ProjectContainer({ id }) {
  const project = (await get(`/projects/${id}`)).data
  const projectTags = (await get(`/projects/${id}/project_tags`)).data
  const projectImages = (await get(`/projects/${id}/project_images`)).data

  return (
    <section className="max-w-screen-xl mx-auto min-h-screen px-6 md:px-12 lg:px-24 py-6 font-sans">
      <BackButton/>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:w-1/2 mb-12 md:pr-20">
          <h2 className="text-2xl font-semibold text-slate-300">
            {project.organization}
          </h2>
          <h2 className="text-lg mt-2 font-semibold text-slate-500">
            {project.title}
          </h2>
          <div className="flex flex-row gap-2 mt-6 flex-wrap">
            {projectTags.map(({id, name}) => (
              <Tag key={id} name={name} />
            ))}
          </div>
          <p className="mt-14 text-md leading-normal text-slate-400 whitespace-pre-wrap">
            {project.description}
          </p>
        </header>
        <div className="lg:w-1/2 flex flex-col gap-4">
          {projectImages.map(({id, image_url}) => (
            <img key={id} src={image_url} className="rounded-lg w-full" />
          ))}
        </div>
      </div>
    </section>
  )
}
