import { DiGit, DiLinux, DiTerminal } from 'react-icons/di';
import { SiUnrealengine, SiApachetomcat, SiGradle, SiNpm, SiUnity } from 'react-icons/si'
import Icons from '../../Icons/Icons.jsx';
import { iconSize } from './iconSize.jsx';

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
        id: 1,
        icon: <SiUnity size={iconSize} />,
        technology: 'Unity',
        experience: 'Beginner',
        isNotable: true
    },
    {
        id: 2,
        icon: <SiUnrealengine size={iconSize} />,
        technology: 'Unreal',
        experience: 'Beginner',
        isNotable: true
    },
    {
        id: 3,
        icon: <Icons name="raylib" size={iconSize} />,
        technology: 'raylib',
        experience: 'Intermediate',
        isNotable: true
    },
]