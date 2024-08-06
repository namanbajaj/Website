import React from 'react'
import './portfolio.css'

import 'animate.css';

import All from './All'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>Projects</h1>
        {/* <h1>Projects (Sorted By Last Updated)</h1> */}
      </div>

      

      {/* <New /> */}
      {/* <Old /> */}

      <All />


    </section >
  )
}

export default Portfolio
