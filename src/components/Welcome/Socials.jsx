import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Socials = () => {
    return (
        <div className='socials'>
            <a href="https://www.linkedin.com/in/namanbajaj" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/namanbajaj" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
        </div>
    )
}

export default Socials