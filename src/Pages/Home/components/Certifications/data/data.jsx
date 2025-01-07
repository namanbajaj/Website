import { SiAngular, SiC, SiCplusplus, SiCsharp, SiMicrosoftexcel, SiPython, SiRust } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

import Angular_Course_Certificate from '../assets/Angular_Course_Certificate.jpg'
import Rust_CC_Cert from '../assets/Rust_Crash_Course.jpg'
import Intro_AWS_Cert from '../assets/Intro_AWS_Cert.pdf'
import CLF02_Course from '../assets/ACG_CLF-02.png'
import CLF02_Cert from '../assets/aws-certified-cloud-practitioner.png'

const iconSize = 100;

export const data = [
  {
    id: 11,
    title: 'AWS CLF-02 Certification',
    company: <img src={CLF02_Cert} alt="" className='cert_image' />,
    date: 'Dec 2024',
    link: 'https://www.credly.com/badges/7b1eefa9-9700-4e4b-b5c4-8344661127e0/public_url',
    type: 'certification'
  },
  {
    id: 10,
    title: 'AWS CLF-02 Course',
    company: <FaAws size={iconSize} />,
    date: 'Nov 2024',
    link: CLF02_Course,
    type: 'coursework'
  },
  {
    id: 9,
    title: 'Introductory AWS Course',
    company: <FaAws size={iconSize} />,
    date: 'Oct 2024',
    link: Intro_AWS_Cert,
    type: 'coursework'
  },
  {
    id: 8,
    title: 'Rust Crash Course',
    company: <SiRust size={iconSize} />,
    date: 'Sep 2024',
    link: Rust_CC_Cert,
    type: 'coursework'
  },
  {
    id: 6,
    title: 'Complete C# Masterclass',
    company: <SiCsharp size={iconSize} />,
    date: 'Aug 2023',
    link: 'https://www.udemy.com/certificate/UC-223cfa12-1df1-490f-a2d9-c50fa88b5ffc/',
    type: 'coursework'
  },
  {
    id: 5,
    title: 'Angular Essentials (Angular 2+ with TypeScript)',
    company: <SiAngular size={iconSize} />,
    date: 'Jul 2023',
    link: Angular_Course_Certificate,
    type: 'coursework'
  },
  {
    id: 4,
    title: 'Excel Course',
    company: <SiMicrosoftexcel size={iconSize} />,
    date: 'Jun 2023',
    link: 'https://credentials.fe.training/8ce1a567-025c-41b4-a134-b5c9399cf1a6#gs.130n7u',
    type: 'coursework'
  },
  {
    id: 3,
    title: 'Beginning C++ Programming - From Beginner to Beyond',
    company: <SiCplusplus size={iconSize} />,
    date: 'Jul 2022',
    link: 'https://www.udemy.com/certificate/UC-58727c93-ff9a-4c7c-8820-5e8f2de11a5b/',
    type: 'coursework'
  },
  {
    id: 2,
    title: 'C Programming For Beginners - Master the C Language',
    company: <SiC size={iconSize} />,
    date: 'Sep 2021',
    link: 'https://www.udemy.com/certificate/UC-97fc354e-5d9b-42d8-bfd1-c77e5ca2d017/',
    type: 'coursework'
  },
  {
    id: 1,
    title: 'Learn Python Programming Masterclass',
    company: <SiPython size={iconSize} />,
    date: 'Aug 2020',
    link: 'https://www.udemy.com/certificate/UC-2e0cfbb5-f10d-4beb-9a01-3577874223f4/',
    type: 'coursework'
  },
]