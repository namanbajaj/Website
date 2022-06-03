import React from 'react'
import './navbar.css'

import { RiComputerLine, RiHomeLine, RiPhoneLine, RiQuestionLine } from 'react-icons/ri'

import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#welcome');
  return (

    <navbar>
      <a href="#welcome" onClick={() => setActiveNav('#welcome')} className={activeNav === '#welcome' ? 'active' : ''}><RiHomeLine /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiQuestionLine /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiComputerLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiPhoneLine /></a>
    </navbar>
  )
}

export default Navbar