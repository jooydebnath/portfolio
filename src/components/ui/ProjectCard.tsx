import { TProject } from '@/libs/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({project}: {project: TProject}) => {
    return (
        <div className='bg-card-background p-4 rounded-xl flex flex-col justify-between gap-4 border border-common-border'>
            <Image src={project.imageUrl} width={500} height={500} alt={project.imageUrl} className='rounded-xl h-75' />
            <h3 className='text-fuchsia-500 font-medium text-subheading'>{project.name}</h3>
            <p className='text-title text-paragraph'>{project.description}</p>
            <Link href={project.githubLink} className='text-center bg-linear-to-r hover:scale-[103%] duration-300 transition-all from-purple-500 to-blue-500 rounded-lg py-2 tracking-[7px] text-header font-medium'>
                View Project
            </Link>
        </div>
    )
}

export default ProjectCard
