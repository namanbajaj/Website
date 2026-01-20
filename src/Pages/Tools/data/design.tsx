import React from 'react';
import { SiAdobeillustrator, SiAdobephotoshop, SiBlender, SiGimp, SiInkscape } from 'react-icons/si'
import { TbBrandOffice } from 'react-icons/tb';
import { iconSize, LanguageModel } from '../model/LanguageModels';

export const design: LanguageModel[] = [
    {
        id: 1,
        icon: <SiAdobeillustrator size={iconSize} />,
        technology: 'Illustrator',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 2,
        icon: <SiAdobephotoshop size={iconSize} />,
        technology: 'Photoshop',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 3,
        icon: <TbBrandOffice size={iconSize} />,
        technology: 'Office',
        experience: 'Experienced',
        isNotable: true
    },
    {
        id: 4,
        icon: <SiBlender size={iconSize} />,
        technology: 'Blender',
        experience: 'Beginner',
        isNotable: true
    },
    {
        id: 5,
        icon: <SiGimp size={iconSize} />,
        technology: 'GIMP',
        experience: 'Intermediate',
        isNotable: true
    },
    {
        id: 6,
        icon: <SiInkscape size={iconSize} />,
        technology: 'Inkscape',
        experience: 'Intermediate',
        isNotable: true
    }
]