import { DiGit, DiLinux, DiTerminal } from 'react-icons/di';
import { SiApachetomcat, SiGradle, SiJenkins, SiNpm, SiPostman } from 'react-icons/si'
import Icons from '../../../../../Shared/Icons/Icons.jsx';
import { iconSize } from './iconSize.jsx';
import { FaAws, FaDocker } from 'react-icons/fa6';

export const tools = [
  {
    id: 1,
    icon: <DiGit size={iconSize} />,
    technology: 'Git',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 2,
    icon: <DiTerminal size={iconSize} />,
    technology: 'Command Line',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 8,
    icon: <DiLinux size={iconSize} />,
    technology: 'Linux',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 11,
    icon: <SiApachetomcat size={iconSize} />,
    technology: 'Apache Tomcat',
    experience: 'Intermediate',
    isNotable: false
  },
  {
    id: 12,
    icon: <Icons name="scenebuilder" size={iconSize} />,
    technology: 'Scene Builder',
    experience: 'Experienced',
    isNotable: false
  },
  {
    id: 13,
    icon: <SiGradle size={iconSize} />,
    technology: 'Gradle',
    experience: 'Intermediate',
    isNotable: false
  },
  {
    id: 14,
    icon: <SiNpm size={iconSize} />,
    technology: 'NPM',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 15,
    icon: <SiPostman size={iconSize} />,
    technology: 'Postman',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 16,
    icon: <SiJenkins size={iconSize} />,
    technology: 'Jenkins',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 17,
    icon: <FaAws size={iconSize} />,
    technology: 'AWS',
    experience: 'Beginner',
    isNotable: true
  },
  {
    id: 18,
    icon: <FaDocker size={iconSize} />,
    technology: 'Docker',
    experience: 'Beginner',
    isNotable: true
  },
]