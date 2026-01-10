import React from 'react'
import './portfolio.css'

import 'animate.css';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>Projects</h1>
      </div>

      <Link to="/projects" className='btn go_to_projects_link'>Check out my projects!</Link>
    </section >
  )
}

export default Portfolio
