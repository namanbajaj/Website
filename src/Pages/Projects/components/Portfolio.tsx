import React from 'react'
import '../css/portfolio.css'

import 'animate.css';

import All from './All'
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';

const Portfolio = () => {
  return (
    <>
      <Header />
      <section id='portfolio'>
        <div className='portfolio_intro_text'>
          <h1>Projects</h1>
        </div>

        <All />
      </section >

      <Footer />
    </>

  )
}

export default Portfolio
