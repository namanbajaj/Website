import { SiUnity, SiUnrealengine } from 'react-icons/si';
import Icons from '../../Icons/Icons.jsx';
import { iconSize } from './iconSize.jsx';

export const gaming = [
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