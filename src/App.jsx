import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Welcome from './components/Welcome/Welcome'

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

const App = () => {
  return (
    <>
      <Welcome />
      <Navbar />
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><About /></ScrollAnimation>
      <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1.5} animateOnce={true}><Portfolio /></ScrollAnimation>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><Contact /></ScrollAnimation>
      <Footer />
    </>
  )
}

export default App