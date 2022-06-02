import React from 'react'
import './navbar.css'

import { RiComputerLine, RiHomeLine, RiPhoneLine, RiQuestionLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <navbar>
      <a href="#welcome"><RiHomeLine/></a>
      <a href="#about"><RiQuestionLine/></a>
      <a href="#portfolio"><RiComputerLine/></a>
      <a href="#contact"><RiPhoneLine/></a>

    </navbar>
  )
}

export default Navbar