import LinkButton from "@/components/ui/link-button"
import ProjectList from '@/components/admin/projects'

export default function Projects() {
  return (  
    <section className="max-w-screen-lg mx-auto min-h-screen px-6 py-6 font-sans">
      <header className="flex justify-between">
        <div className="text-4xl font-extrabold text-slate-100">
          Projects
        </div>
        <LinkButton href="/admin/projects/new">New Project</LinkButton>
      </header>
      <ProjectList />
    </section>
  )
}