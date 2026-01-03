import React from 'react'
import Heading from '../shared/Heading'
import { aboutData, TAbout } from '@/libs/about'

const About = () => {
  return (
    <div id='about'>
      <Heading text='who am i ?'></Heading>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          aboutData.map((data: TAbout, index: number) =>
            <div key={index} className='p-4 rounded-xl border border-common-border'>
              <h2 className='text-subheading font-semibold text-fuchsia-500'>{data.title}</h2>
              <p className='text-title font-medium text-paragraph'>{data.description}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default About
