import About from '@/components/basic/About'
import Contact from '@/components/basic/Contact'
import Education from '@/components/basic/Education'
import Home from '@/components/basic/Home'
import Project from '@/components/basic/Projects'
import Reviews from '@/components/basic/Reviews'
import Skills from '@/components/basic/Skills'
import Stats from '@/components/basic/Stats'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto px-4 md:px-0'>
      <Navbar></Navbar>
      <main className='text-white space-y-32 md:space-y-0'>
        <Home></Home>
        <div className='space-y-32'>
          <Stats></Stats>
          <About></About>
          <Skills></Skills>
          <Project></Project>
          <Education></Education>
          <Reviews></Reviews>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </main>
    </div>
  )
}

export default page
