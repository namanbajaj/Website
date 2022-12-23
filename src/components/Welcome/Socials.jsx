import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {IoLogoGooglePlaystore} from 'react-icons/io5'

const Socials = () => {
    return (
        <div className='socials'>
            <a href="https://www.linkedin.com/in/namanbajaj" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/namanbajaj" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
            <a href="https://play.google.com/store/apps/developer?id=NBaj" target='_blank' rel="noopener noreferrer"><IoLogoGooglePlaystore></IoLogoGooglePlaystore></a>
        </div>
    )
}

export default Socials