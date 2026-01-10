import React from 'react'

import './games.css'
import 'animate.css';

import Footer from '../../Shared/Footer/Footer'
import Languages from './components/Languages/components/Languages';
import Portfolio from './components/Portfolio/components/Portfolio';
import Header from '../../Shared/Header/Header';


export default function Games() {
  return (
    <>
      <Header />
      <section id='games'>
        <Languages />
        <div className='gap'></div>
        <Portfolio />
        <Footer />
      </section >
    </>
  )
}
