import React from 'react';
import { DiGit, DiLinux, DiTerminal } from 'react-icons/di';
import { SiApachetomcat, SiGradle, SiJenkins, SiMicrosoftazure, SiNpm, SiPostman } from 'react-icons/si'
import Icons from '../../../Shared/Icons/Icons';
import { FaAws, FaChrome, FaDocker, FaSalesforce } from 'react-icons/fa6';
import { iconSize, LanguageModel } from '../model/LanguageModels';

export const tools: LanguageModel[] = [
  {
    id: 1,
    icon: <FaAws size={iconSize} />,
    technology: 'AWS',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 2,
    icon: <SiMicrosoftazure size={iconSize} />,
    technology: 'Azure',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 3,
    icon: <FaSalesforce size={iconSize} />,
    technology: 'Salesforce',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 4,
    icon: <DiGit size={iconSize} />,
    technology: 'Git',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 5,
    icon: <DiTerminal size={iconSize} />,
    technology: 'Command Line',
    experience: 'Intermediate',
    isNotable: false
  },
  {
    id: 6,
    icon: <DiLinux size={iconSize} />,
    technology: 'Linux',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 7,
    icon: <SiApachetomcat size={iconSize} />,
    technology: 'Apache Tomcat',
    experience: 'Intermediate',
    isNotable: false
  },
  {
    id: 8,
    icon: <Icons name="scenebuilder" size={iconSize} />,
    technology: 'Scene Builder',
    experience: 'Experienced',
    isNotable: false
  },
  {
    id: 9,
    icon: <SiGradle size={iconSize} />,
    technology: 'Gradle',
    experience: 'Intermediate',
    isNotable: false
  },
  {
    id: 11,
    icon: <SiPostman size={iconSize} />,
    technology: 'Postman',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 12,
    icon: <SiJenkins size={iconSize} />,
    technology: 'Jenkins',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 13,
    icon: <FaDocker size={iconSize} />,
    technology: 'Docker',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 14,
    icon: <FaChrome size={iconSize} />,
    technology: 'Chromium DevTools',
    experience: 'Experienced',
    isNotable: false
  }
]