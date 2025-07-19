import React from 'react'
import Resume from '../assets/Resume___Naman_Bajaj.pdf'

export default function Links() {
  return (
    <div className='links'>
      <a href={Resume} download className='btn'>
        Download Resume
      </a>
      <a href="#contact" className='btn' >
        Contact Me
      </a>
    </div>
  )
}
