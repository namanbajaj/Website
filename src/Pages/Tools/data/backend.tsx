import React from 'react';
import { DiJava, DiPython } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiC, SiNodedotjs, SiRust, SiSpringboot, SiFlask, SiFastapi, SiDeno } from 'react-icons/si'
import { iconSize, LanguageModel } from '../model/LanguageModels';

export const backend: LanguageModel[] = [
  {
    id: 1,
    icon: <DiJava size={iconSize} />,
    technology: 'Java',
    experience: 'Experienced',
    isNotable: true,
    info: [
      'First language learned',
      'Used throughout High School/College as part of courses',
      'Used at Prudential in conjunction with Spring Boot',
    ]
  },
  {
    id: 2,
    icon: <DiPython size={iconSize} />,
    technology: 'Python',
    experience: 'Experienced',
    isNotable: true,
    info: [
      'Learned in 2020',
      'Used throughout College as part of courses',
      'Used at Prudential in conjunction with Flask and FastAPI',
    ]
  },
  {
    id: 3,
    icon: <SiCplusplus size={iconSize} />,
    technology: 'C++',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 4,
    icon: <SiCsharp size={iconSize} />,
    technology: 'C#',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 5,
    icon: <SiC size={iconSize} />,
    technology: 'C',
    experience: 'Experienced',
    isNotable: true
  },
  {
    id: 9,
    icon: <SiNodedotjs size={iconSize} />,
    technology: 'Node.js',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 12,
    icon: <SiFlask size={iconSize} />,
    technology: 'Flask',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 13,
    icon: <SiFastapi size={iconSize} />,
    technology: 'FastAPI',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 10,
    icon: <SiSpringboot size={iconSize} />,
    technology: 'Springboot',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 11,
    icon: <SiRust size={iconSize} />,
    technology: 'Rust',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 14,
    icon: <SiDeno size={iconSize} />,
    technology: 'Deno',
    experience: 'Beginner',
    isNotable: true
  }
]