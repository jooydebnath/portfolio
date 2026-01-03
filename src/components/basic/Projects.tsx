import React from 'react'
import Heading from '../shared/Heading'
import { projects, TProject } from '@/libs/projects'
import Link from 'next/link'
import ProjectCard from '../ui/ProjectCard'

const Project = () => {
  return (
    <div id='projects'>
      <Heading text='View My Projects'></Heading>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {
          projects.slice(0, 6).map((project: TProject) =><ProjectCard key={project.id} project={project}></ProjectCard>)
        }
      </div>
      <button className='mt-5 flex justify-center w-full items-center'>
        <Link className='hover:underline underline-offset-2 text-header' href={"/all-projects"}>
          View all project
        </Link>
      </button>
    </div>
  )
}

export default Project
