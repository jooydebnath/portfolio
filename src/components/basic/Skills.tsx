import React from 'react'
import Heading from '../shared/Heading'
import { skills } from '@/libs/skills'

const Skills = () => {
  return (
    <div id='skills'>
      <Heading text='My skills'></Heading>
      <div className='flex items-center gap-4 flex-wrap'>
        {
          skills.map((skill: string, index: number) =>
            <p key={index} className='rounded-3xl border border-common-border text-header py-2 px-8 text-nowrap capitalize'>
              {skill}
            </p>
          )
        }
      </div>
    </div>
  )
}

export default Skills
