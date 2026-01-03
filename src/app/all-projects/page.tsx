import BackButton from '@/components/ui/BackButton'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects, TProject } from '@/libs/projects'

const page = () => {
    return (
        <div className='container mx-auto space-y-14 p-3 relative'>

            <BackButton></BackButton>

            <div className='text-center'>
                <h2 className='text-header md:text-heading text-subheading capitalize font-medium mb-4'>rojects Built with Django</h2>
                <p className='text-title text-small md:text-paragraph'>Explore my collection of web applications built using Python and Django. These projects showcase my expertise in backend development, REST API design with Django REST Framework, database modeling with PostgreSQL, user authentication, and deploying production-ready applications.</p>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {
                    projects.map((project: TProject) => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    )
}

export default page
