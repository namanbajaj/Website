import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Languages() {
  return (
    <section id='Languages'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
        <div className='l_t_header'>
          <h1>
            Languages and Technologies
          </h1>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="animate__animated animate__bounceIn" duration={1.5} animateOnce={true}>
        <Link to="/tools" className='btn go_to_projects_link'>Check out the languages and tools I've used!</Link>
      </ScrollAnimation>
    </section >
  )
}