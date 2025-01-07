import React from 'react'
import './games.css'

import 'animate.css';

import Footer from '../../Shared/Footer/Footer'
import Languages from './components/Languages/components/Languages.jsx';
import Portfolio from './components/Portfolio/components/Portfolio.jsx';


const Games = () => {
  return (
    <section id='games'>
      <a href="/#" className='btn home_btn'>Home</a>
      <Languages />
      <div className='gap'></div>
      <Portfolio />
      <Footer />
    </section >

  )
}

export default Games
