import React from 'react'

import { DiJava, DiPython, DiHtml5, DiCss3, DiJsBadge, DiReact, DiUnitySmall, DiGit, DiMysql, DiSqllite, DiVisualstudio, DiVim, DiEclipse, DiLinux } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiC, SiR, SiKotlin, SiIntel, SiAdobeillustrator, SiAdobephotoshop, SiUnrealengine, SiVisualstudiocode, SiAndroidstudio, SiGnuemacs, SiMicrosoftoffice, SiApache, SiApachetomcat, SiBlender, SiGimp, SiInkscape, SiGradle, SiBootstrap, SiOcaml } from 'react-icons/si'
import Icons from '../Icons/Icons.jsx';

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
        experience: 'Experienced'
    },
    {
        id: 6,
        icon: <Icons name="javafx" size={iconSize} />,
        technology: 'JavaFX',
        experience: 'Experienced'
    },
    {
        id: 7,
        icon: <SiBootstrap size={iconSize} />,
        technology: 'Bootstrap',
        experience: 'Beginner'
    },
    {
        id: 8,
        icon: <Icons name="wpf" size={iconSize} />,
        technology: 'WPF',
        experience: 'Beginner'
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
        icon: <SiOcaml size={iconSize} />,
        technology: 'OCaml',
        experience: 'Beginner'
    }
]

const database = [
    {
        id: 1,
        icon: <DiMysql size={iconSize} />,
        technology: 'MySQL',
        experience: 'Intermediate'
    },
    {
        id: 2,
        icon: <DiSqllite size={iconSize} />,
        technology: 'SQLite',
        experience: 'Intermediate'
    },
    {
        id: 3,
        icon: <Icons name="jdbc" size={iconSize} />,
        technology: 'JDBC',
        experience: 'Experienced'
    },
]

const tools = [
    {
        id: 1,
        icon: <DiGit size={iconSize} />,
        technology: 'Git',
        experience: 'Intermediate'
    },
    {
        id: 8,
        icon: <DiLinux size={iconSize} />,
        technology: 'Linux',
        experience: 'Intermediate'
    },
    {
        id: 9,
        icon: <SiUnrealengine size={iconSize} />,
        technology: 'Unreal',
        experience: 'Beginner'
    },
    {
        id: 10,
        icon: <DiUnitySmall size={iconSize} />,
        technology: 'Unity',
        experience: 'Beginner'
    },
    {
        id: 11,
        icon: <SiApachetomcat size={iconSize} />,
        technology: 'Apache Tomcat',
        experience: 'Intermediate'
    },
    {
        id: 12,
        icon: <Icons name="scenebuilder" size={iconSize} />,
        technology: 'Scene Builder',
        experience: 'Experienced'
    },
    {
        id: 13,
        icon: <SiGradle size={iconSize} />,
        technology: 'Gradle',
        experience: 'Intermediate'
    }
]

const other = [
    {
        id: 1,
        icon: <SiAdobeillustrator size={iconSize} />,
        technology: 'Illustrator',
        experience: 'Intermediate'
    },
    {
        id: 2,
        icon: <SiAdobephotoshop size={iconSize} />,
        technology: 'Photoshop',
        experience: 'Intermediate'
    },
    {
        id: 3,
        icon: <SiMicrosoftoffice size={iconSize} />,
        technology: 'Office',
        experience: 'Experienced'
    },
    {
        id: 4,
        icon: <SiBlender size={iconSize} />,
        technology: 'Blender',
        experience: 'Beginner'
    },
    {
        id: 5,
        icon: <SiGimp size={iconSize} />,
        technology: 'GIMP',
        experience: 'Intermediate'
    },
    {
        id: 6,
        icon: <SiInkscape size={iconSize} />,
        technology: 'Inkscape',
        experience: 'Intermediate'
    }
]

const editors = [
    {
        id: 2,
        icon: <SiVisualstudiocode size={iconSize} />,
        technology: 'VS Code',
        experience: 'Experienced'
    },
    {
        id: 3,
        icon: <DiVisualstudio size={iconSize} />,
        technology: 'Visual Studio',
        experience: 'Intermediate'
    },
    {
        id: 4,
        icon: <SiAndroidstudio size={iconSize} />,
        technology: 'Android Studio',
        experience: 'Experienced'
    },
    {
        id: 5,
        icon: <DiVim size={iconSize} />,
        technology: 'Vim',
        experience: 'Beginner'
    },
    {
        id: 6,
        icon: <SiGnuemacs size={iconSize} />,
        technology: 'Emacs',
        experience: 'Beginner'
    },
    {
        id: 7,
        icon: <DiEclipse size={iconSize} />,
        technology: 'Eclipse',
        experience: 'Experienced'
    },
]


const Languages = () => {
    return (
        <div>
            <div className='introtext'>
                <h5>Languages and Technologies That I'm Familiar With:</h5>
            </div>
            <div className='languages'>
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

                <div className='database'>
                    <h2>Database Technologies</h2>
                    <div className='content'>
                        {
                            database.map(({ id, icon, technology, experience }) => {
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

                <div className='devtools'>
                    <h2>Developer Tools</h2>
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

                <div className='editors'>
                <h2>Editors/IDEs</h2>
                <div className='content'>
                    {
                        editors.map(({ id, icon, technology, experience }) => {
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
                <h2>Other Tools</h2>
                <div className='content'>
                    {
                        other.map(({ id, icon, technology, experience }) => {
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
        </div >

    )
}

export default Languages