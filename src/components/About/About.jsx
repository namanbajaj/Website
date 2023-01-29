import React from 'react'
import './about.css'
import AboutCards from './AboutCards';
import Languages from './Languages';


const About = () => {
  return (
    <section id='about'>
      <div className='about__me__header'>
        <h1>
          About Me
        </h1>
      </div>

      <AboutCards/>
      {/* <Languages /> */}

    </section>
  )

}

export default About