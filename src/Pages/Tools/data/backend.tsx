import React from 'react';
import { DiJava, DiPython } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiC, SiNodedotjs, SiRust, SiSpringboot, SiFlask, SiFastapi, SiDeno } from 'react-icons/si'
import { iconSize, LanguageModel } from '../model/LanguageModels';

export const backend: LanguageModel[] = [
  {
    id: 1,
    icon: <SiNodedotjs size={iconSize} />,
    technology: 'Node.js',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 2,
    icon: <SiFlask size={iconSize} />,
    technology: 'Flask',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 3,
    icon: <SiFastapi size={iconSize} />,
    technology: 'FastAPI',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 4,
    icon: <SiSpringboot size={iconSize} />,
    technology: 'Springboot',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 5,
    icon: <SiDeno size={iconSize} />,
    technology: 'Deno',
    experience: 'Beginner',
    isNotable: true
  }
]