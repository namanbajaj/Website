import React from 'react';
import { DiVisualstudio, DiEclipse } from 'react-icons/di';
import { SiVisualstudiocode, SiAndroidstudio, SiIntellijidea } from 'react-icons/si'
import { iconSize, LanguageModel } from '../model/LanguageModels';

export const editors: LanguageModel[] = [
    {
        id: 2,
        icon: <SiVisualstudiocode size={iconSize} />,
        technology: 'VS Code',
        experience: 'Experienced',
        isNotable: true
    },
    {
        id: 3,
        icon: <DiVisualstudio size={iconSize} />,
        technology: 'Visual Studio',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 4,
        icon: <SiAndroidstudio size={iconSize} />,
        technology: 'Android Studio',
        experience: 'Experienced',
        isNotable: true
    },
    {
        id: 7,
        icon: <DiEclipse size={iconSize} />,
        technology: 'Eclipse',
        experience: 'Experienced',
        isNotable: true
    },
    {
      id: 8,
      icon: <SiIntellijidea size={iconSize} />,
      technology: 'IntelliJ',
      experience: 'Experienced',
      isNotable: true
  },
]