import React from 'react'

import { DiJava, DiPython, DiHtml5, DiCss3, DiJsBadge, DiReact, DiUnitySmall, DiGit } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiC, SiR, SiKotlin, SiIntel, SiAdobeillustrator, SiAdobephotoshop, SiUnrealengine } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'

const iconSize = 35;

const frontend = [
    {
        id: 1,
        icon: <DiHtml5 size={iconSize} />,
        technology: 'HTML5',
        experience: 'Intermediate'
    },
    {
        id: 2,
        icon: <DiCss3 size={iconSize} />,
        technology: 'CSS3',
        experience: 'Intermediate'
    },
    {
        id: 3,
        icon: <DiJsBadge size={iconSize} />,
        technology: 'JavaScript',
        experience: 'Intermediate'
    },
    {
        id: 4,
        icon: <DiReact size={iconSize} />,
        technology: 'React',
        experience: 'Intermediate'
    },
    {
        id: 5,
        icon: <SiKotlin size={iconSize} />,
        technology: 'Kotlin',
        experience: 'Intermediate'
    }
]

const backend = [
    {
        id: 1,
        icon: <DiJava size={iconSize} />,
        technology: 'Java',
        experience: 'Experienced'
    },
    {
        id: 2,
        icon: <DiPython size={iconSize} />,
        technology: 'Python',
        experience: 'Experienced'
    },
    {
        id: 3,
        icon: <SiCplusplus size={iconSize} />,
        technology: 'C++',
        experience: 'Intermediate'
    },
    {
        id: 4,
        icon: <SiCsharp size={iconSize} />,
        technology: 'C#',
        experience: 'Intermediate'
    },
    {
        id: 5,
        icon: <SiC size={iconSize} />,
        technology: 'C',
        experience: 'Experienced'
    },
    {
        id: 6,
        icon: <SiR size={iconSize} />,
        technology: 'R',
        experience: 'Intermediate'
    },
    {
        id: 7,
        icon: <SiIntel size={iconSize} />,
        technology: 'x86 ASM',
        experience: 'Intermediate'
    },
    {
        id: 8,
        icon: <AiOutlineConsoleSql size={iconSize} />,
        technology: 'SQL',
        experience: 'Intermediate'
    }
]

const tools = [
    {
        id: 1,
        icon: <DiUnitySmall size={iconSize} />,
        technology: 'Unity',
        experience: 'Intermediate'
    },
    {
        id: 2,
        icon: <DiGit size={iconSize} />,
        technology: 'Git',
        experience: 'Experienced'
    },
    {
        id: 3,
        icon: <SiUnrealengine size={iconSize} />,
        technology: 'Unreal',
        experience: 'Intermediate'
    },
    {
        id: 4,
        icon: <SiAdobeillustrator size={iconSize} />,
        technology: 'Illustrator',
        experience: 'Intermediate'
    },
    {
        id: 5,
        icon: <SiAdobephotoshop size={iconSize} />,
        technology: 'Photoshop',
        experience: 'Intermediate'
    }
]


const Languages = () => {
    return (
        <div>
            <div className='introtext'>
                <h5>Languages and Technologies That I'm Familiar With:</h5>
            </div>
            <div className='container languages'>
                <div className='frontend'>
                    <h2>Frontend Development</h2>
                    <div className='content'>
                        {
                            frontend.map(({ id, icon, technology, experience }) => {
                                return (
                                    <article key={id} className='details' >
                                        <h4>
                                            <h3>
                                                {icon}&nbsp;{technology}
                                            </h3>
                                            <h5 className='text-light'>
                                                {experience}
                                            </h5>
                                        </h4>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='backend'>
                    <h2>Backend Development</h2>
                    <div className='content'>
                        {
                            backend.map(({ id, icon, technology, experience }) => {
                                return (
                                    <article key={id} className='details' >
                                        <h4>
                                            <h3>
                                                {icon}&nbsp;{technology}
                                            </h3>
                                            <h5 className='text-light'>
                                                {experience}
                                            </h5>
                                        </h4>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='other'>
                    <h2>Other Technologies</h2>
                    <div className='content'>
                        {
                            tools.map(({ id, icon, technology, experience }) => {
                                return (
                                    <article key={id} className='details' >
                                        <h4>
                                            <h3>
                                                {icon}&nbsp;{technology}
                                            </h3>
                                            <h5 className='text-light'>
                                                {experience}
                                            </h5>
                                        </h4>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Languages