import React from 'react'
import { Link } from 'react-router-dom';

import './games.css'
import 'animate.css';

import Footer from '../../Shared/Footer/Footer'
import Languages from './components/Languages/components/Languages';
import Portfolio from './components/Portfolio/components/Portfolio';


export default function Games() {
  return (
    <section id='games'>
      <Link to="/" className='btn home_btn'>Home</Link>
      <Languages />
      <div className='gap'></div>
      <Portfolio />
      <Footer />
    </section >
  )
}
