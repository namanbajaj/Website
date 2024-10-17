import { IoIosSchool } from 'react-icons/io'
import { AiFillCode } from 'react-icons/ai'
import { CgHomeScreen } from 'react-icons/cg'

const iconSize = 125;

export const cards_data = [
  {
    key: 1,
    title: 'Rutgers University - New Brunswick',
    logo: <IoIosSchool size={iconSize} />,
    info: [
      'GPA: 3.86/4.00',
      'BS in Computer Science (Honors) & Mathematics',
      'Graduated Summa Cum Laude'
    ]
  },
  
  {
    key: 2,
    title: 'Software Developer',
    logo: <AiFillCode size={iconSize} />,
    info: [
      'Global Technology Rotation Associate at Prudential (Current Rotation: Full stack Developer)',
      'Working on hobby projects',
    ]
  },
  
  {
    key: 3,
    title: '20+ Projects',
    logo: <CgHomeScreen size={iconSize} />,
    info: [
      'Frontend, Backend, & Full Stack projects',
      'Mobile, Web, and Desktop applications',
      'For a full list of technologies and projects, see below'
    ]
  }
]