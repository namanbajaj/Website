import React from 'react'
import './portfolio.css'

import 'animate.css';

import Old from './Old'
import New from './New'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>My Notable Work (Sorted By Last Updated)</h1>
      </div>

      <New/>
      <Old/>

    </section >
  )
}

export default Portfolio
