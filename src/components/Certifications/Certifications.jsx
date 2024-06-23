import React from 'react'
import './certifications.css'

import { SiAngular, SiC, SiCplusplus, SiCsharp, SiMicrosoftexcel, SiPython } from 'react-icons/si'

import Angular_Course_Certificate from '../../assets/Angular_Course_Certificate.jpg'

const iconSize = 100;

const data = [
  {
    id: 6,
    title: 'Complete C# Masterclass',
    company: <SiCsharp size={iconSize} />,
    date: '08/2023',
    link: 'https://www.udemy.com/certificate/UC-223cfa12-1df1-490f-a2d9-c50fa88b5ffc/'
  },
  {
    id: 5,
    title: 'Angular Essentials (Angular 2+ with TypeScript)',
    company: <SiAngular size={iconSize} />,
    date: '07/2023',
    link: Angular_Course_Certificate
  },
  {
    id: 4,
    title: 'Excel Course',
    company: <SiMicrosoftexcel size={iconSize} />,
    date: '06/2023',
    link: 'https://credentials.fe.training/8ce1a567-025c-41b4-a134-b5c9399cf1a6#gs.130n7u'
  },
  {
    id: 3,
    title: 'Beginning C++ Programming - From Beginner to Beyond',
    company: <SiCplusplus size={iconSize} />,
    date: '07/2022',
    link: 'https://www.udemy.com/certificate/UC-58727c93-ff9a-4c7c-8820-5e8f2de11a5b/'
  },
  {
    id: 2,
    title: 'C Programming For Beginners - Master the C Language',
    company: <SiC size={iconSize} />,
    date: '09/2021',
    link: 'https://www.udemy.com/certificate/UC-97fc354e-5d9b-42d8-bfd1-c77e5ca2d017/'
  },
  {
    id: 1,
    title: 'Learn Python Programming Masterclass',
    company: <SiPython size={iconSize} />,
    date: '08/2020',
    link: 'https://www.udemy.com/certificate/UC-2e0cfbb5-f10d-4beb-9a01-3577874223f4/'
  },
]

const Certifications = () => {
  return (
    <section id='Certifications'>
      <div className="introtext">
        <h1>
          Certifications (Courses)
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