import React from 'react'
import './portfolio.css'

import 'animate.css';

import Old from './Old'
import New from './New'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>My Recent Work</h1>
      </div>

      <New/>
      <Old/>
    </section >
  )
}

export default Portfolio
