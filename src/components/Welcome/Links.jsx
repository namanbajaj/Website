import React from 'react'
import Resume from '../../assets/Resume___Naman_Bajaj.pdf'

const Links = () => {
  return (
    <div className='links'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary' >Contact Me</a>
    </div>
  )
}

export default Links