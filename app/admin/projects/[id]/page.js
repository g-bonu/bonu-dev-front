import UpdateProjectForm from "@/components/admin/update-project-from"

export default function EditProject({ params }) {
  return (
    <section className="max-w-screen-lg mx-auto min-h-screen px-6 py-6">
      <UpdateProjectForm projectId={params.id}/>
    </section>
  );
}