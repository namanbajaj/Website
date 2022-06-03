import React from 'react'

import { DiJava, DiPython, DiHtml5, DiCss3, DiJsBadge, DiReact, DiUnitySmall, DiGit } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiC, SiR, SiKotlin, SiIntel } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'

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
                        <article className='details'>

                            <h4>
                                <h3><DiHtml5 size={35}></DiHtml5>&nbsp;HTML5</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><DiCss3 size={35}></DiCss3>&nbsp;CSS3</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>


                        <article className='details'>

                            <h4>
                                <h3><DiJsBadge size={35}></DiJsBadge>&nbsp;JavaScript</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><DiReact size={35}></DiReact>&nbsp;React</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><SiKotlin size={35}></SiKotlin>&nbsp;Kotlin</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                    </div>
                </div>

                <div className='backend'>
                    <h2>Backend Development</h2>
                    <div className='content'>
                        <article className='details'>

                            <h4>
                                <h3><DiJava size={35}></DiJava>&nbsp;Java</h3>
                                <h5 className='text-light'>Experienced</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><DiPython size={35}></DiPython>&nbsp;Python</h3>
                                <h5 className='text-light'>Experienced</h5>
                            </h4>
                        </article>


                        <article className='details'>

                            <h4>
                                <h3><SiCplusplus size={35}></SiCplusplus>&nbsp;C++</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><SiCsharp size={35}></SiCsharp>&nbsp;C#</h3>
                                <h5 className='text-light'>Experienced</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><SiC size={35}></SiC>&nbsp;C</h3>
                                <h5 className='text-light'>Experienced</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><SiR size={35}></SiR>&nbsp;R</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>


                        <article className='details'>

                            <h4>
                                <h3><SiIntel size={35}></SiIntel>&nbsp;x86 ASM</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><AiOutlineConsoleSql size={35}></AiOutlineConsoleSql>&nbsp;SQL</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                    </div>
                </div>

                <div className='other'>
                    <h2>Other Technologies</h2>
                    <div className='content'>
                        <article className='details'>

                            <h4>
                                <h3><DiUnitySmall size={35}></DiUnitySmall>&nbsp;Unity</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>

                        <article className='details'>

                            <h4>
                                <h3><DiGit size={35}></DiGit>&nbsp;Git</h3>
                                <h5 className='text-light'>Intermediate</h5>
                            </h4>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Languages