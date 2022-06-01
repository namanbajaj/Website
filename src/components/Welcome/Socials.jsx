import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Socials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/namanbajaj" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/namanbajaj" target="_blank"><BsGithub></BsGithub></a>
        </div>
    )
}

export default Socials