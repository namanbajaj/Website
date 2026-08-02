import React from 'react'
import '../css/portfolio.css'

import 'animate.css';

import All from './All'
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';

const RUPortfolio = () => {
  return (
    <>
      <Header />
      <section id='portfolio'>
        <div className='portfolio_intro_text'>
          <h1>Projects I did at Rutgers as part of classwork</h1>
        </div>
        <All />
      </section >
      <Footer />
    </>

  )
}

export default RUPortfolio
