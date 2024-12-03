import React from 'react'
import './portfolio.css'
import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css';

import All from './All'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
        <div className='portfolio_intro_text'>
          <h1>Projects</h1>
        </div>
      </ScrollAnimation>

      <All />

    </section >
  )
}

export default Portfolio
