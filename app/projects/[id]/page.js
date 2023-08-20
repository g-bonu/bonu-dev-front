import ProjectContainer from "@/components/project/container";

export default function Project({ params }) {
    
  return (
    <ProjectContainer id={params.id} />  
  )
}