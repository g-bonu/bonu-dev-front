import { get } from '@/utils/api'
import Project from '@/components/home/project'

export default async function Projects() {
  const projects = (await get('/projects')).data

  return (
    <main className="md:pt-24 pt-12 lg:w-1/2 lg:py-24">
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <ul>
          {projects.map(({ 
            id,
            start_year: startYear,
            end_year: endYear,
            organization,
            title,
            description,
            project_tags: projectTags,
            project_images: projectImages
          }) => (
            <li key={id} className="mb-12">
              <Project
                id={id}
                startYear={startYear}
                endYear={endYear}
                organization={organization}
                title={title}
                description={description}
                projectTags={projectTags}
                projectImages={projectImages}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}