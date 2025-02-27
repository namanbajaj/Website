import { DiVisualstudio, DiVim, DiEclipse } from 'react-icons/di';
import { SiVisualstudiocode, SiAndroidstudio, SiGnuemacs, SiIntellijidea } from 'react-icons/si'
import { iconSize } from './iconSize.jsx';

export const editors = [
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
        id: 5,
        icon: <DiVim size={iconSize} />,
        technology: 'Vim',
        experience: 'Beginner',
        isNotable: false
    },
    {
        id: 6,
        icon: <SiGnuemacs size={iconSize} />,
        technology: 'Emacs',
        experience: 'Beginner',
        isNotable: false
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