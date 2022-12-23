import React from 'react'
import './about.css'
import Languages from './Languages';


const About = () => {
  return (
    <section id='about'>
        <div className='about__me__header'>
          <h1>
            About Me
          </h1>
        </div>

        <div className='about__me__geninfo'>
          <h5>
            Hi! I'm a Software Developer currently enrolled at Rutgers University - New Brunswick majoring in Computer Science (BS) and Mathematics.
            <br />
            <br />
            I've worked with a variety of technologies through hobby projects and undergraduate courses and am continously learning new frameworks, technologies, langauges, and Computer Science topics and applying them through personal projects.
            <br />
            <br />
            Listed below are technologies that I've worked with.
          </h5>
        </div>
        <Languages />

    </section>
  )

}

export default About