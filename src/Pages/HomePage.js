import React from 'react'
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Project from '../components/Projects/project'
import Testimonial from '../components/Testimonial/testimonial'

const HomePage = () => {
  return (
    <>
        <Hero />
        <About />
        <Project />
        <Testimonial />
    </>
  )
}

export default HomePage