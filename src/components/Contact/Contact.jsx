import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com';

import { AiOutlineMail, AiOutlinePhone, AiOutlineMessage, AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d95dux2', 'template_5z4wf14', form.current, 'nUNickD5bP5Axu0Zg')
    e.target.reset();
  };


  return (
    <section id='contact'>
      <div className="introtext">
        <h1>
          Contact Me
          </h1>
        </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact-icon' />
            <h4>Email</h4>
            <h5>nb726@scarletmail.rutgers.edu</h5>
            <a href="mailto:nb726@scarletmail.rutgers.edu">Send an email</a>
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
            <a href="https://www.linkedin.com/in/namanbajaj" target='_blank'>Connect on LinkedIn</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message you would like to send to me' required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )

}

export default Contact