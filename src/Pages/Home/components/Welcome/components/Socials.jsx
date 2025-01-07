import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaGamepad } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const Socials = () => {
  return (
    <div>
      <div className='socials'>
        <a href="https://www.linkedin.com/in/namanbajaj" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/namanbajaj" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
      </div>
      <div className='socials'>
        <a href="https://play.google.com/store/apps/dev?id=5692626467682406083" target='_blank' rel="noopener noreferrer"><IoLogoGooglePlaystore></IoLogoGooglePlaystore></a>
        <a href="/games"><FaGamepad></FaGamepad></a>
      </div>
    </div>
  )
}

export default Socials