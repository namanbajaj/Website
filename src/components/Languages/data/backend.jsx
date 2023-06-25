import { DiJava, DiPython, DiProlog } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiC, SiOcaml, SiExpress, SiNodedotjs } from 'react-icons/si'
import { iconSize } from './iconSize.jsx';


export const backend = [
    {
        id: 1,
        icon: <DiJava size={iconSize} />,
        technology: 'Java',
        experience: 'Experienced',
        isNotable: true
    },
    {
        id: 2,
        icon: <DiPython size={iconSize} />,
        technology: 'Python',
        experience: 'Experienced',
        isNotable: true
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
        icon: <SiOcaml size={iconSize} />,
        technology: 'OCaml',
        experience: 'Beginner',
        isNotable: false
    },
    {
        id: 7,
        icon: <DiProlog size={iconSize} />,
        technology: 'Prolog',
        experience: 'Intermediate',
        isNotable: false
    },
    {
        id: 8,
        icon: <SiExpress size={iconSize} />,
        technology: 'Express',
        experience: 'Intermediate',
        isNotable: false
    },
    {
        id: 9,
        icon: <SiNodedotjs size={iconSize} />,
        technology: 'Node.js',
        experience: 'Intermediate',
        isNotable: true
    },
]