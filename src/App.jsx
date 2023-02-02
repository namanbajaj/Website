import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Welcome from './components/Welcome/Welcome'
import Experience from './components/Experience/Experience'
import Languages from './components/About/Languages'

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import Certifications from './components/Certifications/Certifications'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MiniTennis from '../src/components/Games/MiniTennis.jsx'


const App = () => {
  return (
    // <>
    //   <Welcome />
    //   {/* <Navbar /> */}
    //   <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><About /></ScrollAnimation>
    //   <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1.5} animateOnce={true}><Experience /></ScrollAnimation>
    //   <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><Languages /></ScrollAnimation>
    //   <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1.5} animateOnce={true}><Portfolio /></ScrollAnimation>
    //   <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1.5} animateOnce={true}><Certifications /></ScrollAnimation>
    //   <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><Contact /></ScrollAnimation>
    //   <Footer />

    //   <Route exact path='/MiniTennis' component={MiniTennis} />
    // </>
    // <Router>
      <>
        <Welcome />
        {/* <Navbar /> */}
        <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><About /></ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1.5} animateOnce={true}><Experience /></ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><Languages /></ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1.5} animateOnce={true}><Portfolio /></ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1.5} animateOnce={true}><Certifications /></ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}><Contact /></ScrollAnimation>
        <Footer />

        {/* <Routes>
          <Route path='MiniTennis' element={<MiniTennis/>} />
        </Routes> */}

      </>
    // </Router>


  )
}

export default App