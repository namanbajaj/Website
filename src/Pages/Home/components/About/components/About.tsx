import React from 'react'
import '../css/about.css'
import AboutCards from './AboutCards';

import ScrollAnimation from 'react-animate-on-scroll';

export default function About(){
  return (
    <section id='about'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
        <div className='about__me__header'>
          <h1>
            About Me
          </h1>
        </div>
      </ScrollAnimation>
      <AboutCards />
    </section>
  )
}
