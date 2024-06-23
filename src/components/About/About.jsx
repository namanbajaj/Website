import React from 'react'
import './about.css'
import AboutCards from './AboutCards';


const About = () => {
  return (
    <section id='about'>
      <div className='about__me__header'>
        <h1>
          About Me
        </h1>
      </div>

      <AboutCards />

    </section>
  )
}

export default About