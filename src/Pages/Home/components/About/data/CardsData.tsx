import React from 'react';

import { IoIosSchool } from 'react-icons/io'
import { AiFillCode } from 'react-icons/ai'
import { CgHomeScreen } from 'react-icons/cg'
import { CardsDataModel } from '../model/AboutModels';

const iconSize = 125;

export const cards_data: CardsDataModel[] = [
  //   {
  //   key: 4,
  //   title: 'Georgia Tech',
  //   logo: <FaSchool size={iconSize} />,
  //   info: [
  //     'Incoming student to OMSCS program',
  //   ]
  // },
  {
    key: 1,
    title: 'Education',
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
      'For a full list of technologies and projects, see below'
    ]
  }
]