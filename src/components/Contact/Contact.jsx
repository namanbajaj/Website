import React from 'react'
import './contact.css'

import { AiOutlineMail, AiOutlinePhone, AiOutlineMessage, AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="introtext">
        <h1>
          Contact Me
        </h1>
      </div>

      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact-icon' />
          <h4>Email</h4>
          <h5>naman.bajaj@rutgers.edu</h5>
          <a href="mailto:naman.bajaj@rutgers.edu">Send an email</a>
        </article>

        <article className="contact__option">
          <AiOutlineMessage className='contact-icon' /><AiOutlinePhone className='contact-icon' />
          <h4>Phone Number</h4>
          <h5>1-201-408-7000</h5>
          <a href="tel:12014087000">Call&emsp;</a>
          <a href="sms:12014087000">Text</a>
        </article>

        <article className="contact__option">
          <AiOutlineLinkedin className='contact-icon' />
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/namanbajaj" target='_blank' rel='noreferrer'>Connect on LinkedIn</a>
        </article>
      </div>
    </section>
  )

}

export default Contact