import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaGamepad } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa6'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { SiSalesforce } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Socials() {
  return (
    <div className='socials_grid'>
      <div className='socials'>
        <a href="https://www.linkedin.com/in/namanbajaj" target="_blank" rel="noopener noreferrer">
          <BsLinkedin></BsLinkedin>
        </a>
        <a href="https://github.com/namanbajaj" target="_blank" rel="noopener noreferrer"
        ><BsGithub></BsGithub>
        </a>
      </div>
      <div className='socials'>
        <a href="https://play.google.com/store/apps/dev?id=5692626467682406083" target='_blank' rel="noopener noreferrer">
          <IoLogoGooglePlaystore></IoLogoGooglePlaystore>
        </a>
        <Link to="/games">
          <FaGamepad></FaGamepad>
        </Link>
      </div>
      <div className='socials'>
        <a href="https://www.credly.com/users/naman-bajaj.87e15263" target='_blank' rel="noopener noreferrer">
          <FaAws></FaAws>
        </a>
        <Link to="https://www.salesforce.com/trailblazer/namanbajaj" target='_blank' rel="noopener noreferrer">
          <SiSalesforce></SiSalesforce>
        </Link>
      </div>
    </div>
  )
}