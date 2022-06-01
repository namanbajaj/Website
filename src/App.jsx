import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Welcome from './components/Welcome/Welcome'


const App = () => {
  return (
    <>
        <Welcome />
        <Navbar />
        <About />
        <Portfolio />
        <Contact />
    </>
  )
}

export default App