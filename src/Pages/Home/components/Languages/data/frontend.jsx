import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiAngularSimple } from 'react-icons/di';
import { SiKotlin, SiBootstrap, SiJquery, SiTypescript } from 'react-icons/si'
import Icons from '../../../../../Shared/Icons/Icons.jsx';
import { iconSize } from './iconSize.jsx';

export const frontend = [
    {
        id: 1,
        icon: <DiHtml5 size={iconSize} />,
        technology: 'HTML5',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 2,
        icon: <DiCss3 size={iconSize} />,
        technology: 'CSS3',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 3,
        icon: <DiJsBadge size={iconSize} />,
        technology: 'JavaScript',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 4,
        icon: <DiReact size={iconSize} />,
        technology: 'React',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 5,
        icon: <SiKotlin size={iconSize} />,
        technology: 'Kotlin',
        experience: 'Experienced',
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
        id: 8,
        icon: <Icons name="wpf" size={iconSize} />,
        technology: 'WPF',
        experience: 'Beginner',
        isNotable: false
    },
    {
        id: 10,
        icon: <DiAngularSimple size={iconSize} />,
        technology: 'Angular',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 11,
        icon: <SiTypescript size={iconSize} />,
        technology: 'TypeScript',
        experience: 'Intermediate',
        isNotable: true
    }
]