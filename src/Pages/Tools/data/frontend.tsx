import React from 'react';
import { DiHtml5, DiCss3, DiReact, DiAngularSimple } from 'react-icons/di';
import { SiStreamlit, SiSalesforce } from 'react-icons/si'
import Icons from '../../../Shared/Icons/Icons';
import { iconSize, LanguageModel } from '../model/LanguageModels';

export const frontend: LanguageModel[] = [
  {
    id: 1,
    icon: <DiReact size={iconSize} />,
    technology: 'React',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 2,
    icon: <DiAngularSimple size={iconSize} />,
    technology: 'Angular',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 3,
    icon: <DiHtml5 size={iconSize} />,
    technology: 'HTML5',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 4,
    icon: <DiCss3 size={iconSize} />,
    technology: 'CSS3',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 5,
    icon: <SiSalesforce size={iconSize} />,
    technology: 'LWC/Aura',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 6,
    icon: <Icons name="javafx" size={iconSize} />,
    technology: 'JavaFX',
    experience: 'Experienced',
    isNotable: false
  },
  {
    id: 7,
    icon: <Icons name="wpf" size={iconSize} />,
    technology: 'WPF',
    experience: 'Beginner',
    isNotable: false
  },
  {
    id: 8,
    icon: <SiStreamlit size={iconSize} />,
    technology: 'Streamlit',
    experience: 'Intermediate',
    isNotable: false
  }
]