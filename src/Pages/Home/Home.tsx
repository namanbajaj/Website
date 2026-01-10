import React from 'react'
import About from './components/About/components/About'
import Contact from './components/Contact/components/Contact'
import Footer from '../../Shared/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Welcome from './components/Welcome/components/Welcome'
import Experience from './components/Experience/components/Experience'
import Certifications from './components/Certifications/components/Certifications'
import Header from '../../Shared/Header/Header'
import Languages from './components/Languages/Languages'

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Experience />
      <Languages />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
