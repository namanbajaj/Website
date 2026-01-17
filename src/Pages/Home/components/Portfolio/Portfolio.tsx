import React from 'react'
import './portfolio.css'

import 'animate.css';
import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
        <div className='portfolio_intro_text'>
          <h1>Projects</h1>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="animate__animated animate__bounceIn" duration={1.5} animateOnce={true}>
        <Link to="/projects" className='btn go_to_projects_link'>Check out my projects!</Link>
      </ScrollAnimation>
    </section >
  )
}

export default Portfolio
