import React from "react";
import { iconSize, LanguageModel } from "../model/LanguageModels";

import { DiJava, DiJsBadge, DiPython } from "react-icons/di";
import { SiCplusplus, SiCsharp, SiC, SiKotlin, SiRust, SiTypescript, SiSalesforce } from "react-icons/si";

export const languages: LanguageModel[] = [
  {
    id: 1,
    icon: <DiJava size={iconSize} />,
    technology: 'Java',
    experience: 'Experienced',
    isNotable: true,
  },
  {
    id: 2,
    icon: <DiPython size={iconSize} />,
    technology: 'Python',
    experience: 'Experienced',
    isNotable: true,
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
    id: 6,
    icon: <DiJsBadge size={iconSize} />,
    technology: 'JavaScript',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 7,
    icon: <SiTypescript size={iconSize} />,
    technology: 'TypeScript',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 8,
    icon: <SiRust size={iconSize} />,
    technology: 'Rust',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 9,
    icon: <SiKotlin size={iconSize} />,
    technology: 'Kotlin',
    experience: 'Experienced',
    isNotable: true
  },
  {
    id: 10,
    icon: <SiSalesforce size={iconSize} />,
    technology: 'Apex',
    experience: 'Intermediate',
    isNotable: true
  }
]