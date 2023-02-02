import React from 'react'
import './certifications.css'

import { SiUdemy } from 'react-icons/si'

const iconSize = 100;

const data = [
  {
    id: 3,
    title: 'Beginning C++ Programming - From Beginner to Beyond',
    company: <SiUdemy size={iconSize} />,
    date: '07/05/2022',
    link: 'https://www.udemy.com/certificate/UC-58727c93-ff9a-4c7c-8820-5e8f2de11a5b/'
  },
  {
    id: 2,
    title: 'C Programming For Beginners - Master the C Language',
    company: <SiUdemy size={iconSize} />,
    date: '09/27/2021',
    link: 'https://www.udemy.com/certificate/UC-97fc354e-5d9b-42d8-bfd1-c77e5ca2d017/'
  },
  {
    id: 1,
    title: 'Learn Python Programming Masterclass',
    company: <SiUdemy size={iconSize} />,
    date: '08/20/2020',
    link: 'https://www.udemy.com/certificate/UC-2e0cfbb5-f10d-4beb-9a01-3577874223f4/'
  },
]

const Certifications = () => {
  return (
    <section id='Certifications'>
      <div className="introtext">
        <h1>
          Certifications
        </h1>
      </div>

      <div className="certifications_grid">
        {data.map((certification) => (
          <div className="certification" key={certification.id}>
            <h2 className='item_title_text'>{certification.title}</h2>
            <h3 className='icon'>{certification.company}</h3>
            <div className='grid_info'>
              <h5 className='date'>{certification.date}</h5>
              <a className='btn c_btn' href={certification.link} target="_blank" rel="noreferrer">View Certificate</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Certifications