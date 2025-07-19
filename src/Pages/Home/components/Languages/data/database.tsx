import React from 'react';
import { DiMysql, DiSqllite } from 'react-icons/di';
import { SiMicrosoftsqlserver, SiPostgresql } from 'react-icons/si'
import Icons from '../../../../../Shared/Icons/Icons';
import { iconSize, LanguageModel } from '../model/LanguageModels';

export const database: LanguageModel[] = [
    {
        id: 1,
        icon: <DiMysql size={iconSize} />,
        technology: 'MySQL',
        experience: 'Intermediate',
        isNotable: true,
    },
    {
        id: 2,
        icon: <DiSqllite size={iconSize} />,
        technology: 'SQLite',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 3,
        icon: <Icons name="jdbc" size={iconSize} />,
        technology: 'JDBC',
        experience: 'Experienced',
        isNotable: false
    },
    {
        id: 4,
        icon: <SiMicrosoftsqlserver size={iconSize} />,
        technology: 'Microsoft SQL',
        experience: 'Intermediate',
        isNotable: true
    },
    {
      id: 5,
      icon: <SiPostgresql size={iconSize} />,
      technology: 'PostgreSQL',
      experience: 'Intermediate',
      isNotable: true
  }
]