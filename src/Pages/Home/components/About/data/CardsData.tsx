import React from 'react';

import { IoIosSchool } from 'react-icons/io'
import { AiFillCode } from 'react-icons/ai'
import { CgHomeScreen } from 'react-icons/cg'
import { CardsDataModel } from '../model/AboutModels';
import { FaUserGraduate } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const iconSize = 125;

export const cards_data: CardsDataModel[] = [
  {
    key: 4,
    title: 'Graduate Education',
    logo: <FaUserGraduate size={iconSize} />,
    info: [
      'Currently enrolled in Georgia Tech\'s OMSCS program',
      'Specialization in Computing Systems',
      <div>For details on full journey, click here: <Link to="/OMSCS">OMSCS</Link></div>,
    ]
  },
  {
    key: 1,
    title: 'Undergraduate Education',
    logo: <IoIosSchool size={iconSize} />,
    info: [
      'Rutgers University - New Brunswick',
      'GPA: 3.86/4.00',
      'BS in Computer Science (Honors) & Mathematics',
      'Summa Cum Laude'
    ]
  },
  {
    key: 2,
    title: 'Software Developer',
    logo: <AiFillCode size={iconSize} />,
    info: [
      'Global Technology Rotation Associate at Prudential',
      'Current Rotation: Platform Engineer (Salesforce)',
      'Working on hobby projects',
    ]
  },

  {
    key: 3,
    title: '20+ Projects',
    logo: <CgHomeScreen size={iconSize} />,
    info: [
      'Frontend, Backend, & Full Stack projects',
      'Mobile, Web, & Desktop applications',
      'For a full list of technologies and projects, click the links in the header'
    ]
  }
]