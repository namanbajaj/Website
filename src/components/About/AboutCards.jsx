import React from 'react'

import { IoIosSchool } from 'react-icons/io'
import { AiFillCode } from 'react-icons/ai'
import { CgHomeScreen } from 'react-icons/cg'

import './about.css'

const iconSize = 125;

const AboutCards = () => {
    return (
        <div className='cards_overview'>
            <div className='info_cards'>
                <div className='card'>
                    <h2>Rutgers University - New Brunswick</h2>
                    <div className='content_cards'>
                        <h3 className='logo center_text'>
                            <IoIosSchool size={iconSize} />
                        </h3>

                        <h5 className='text-light center_text'>
                            GPA: 3.86/4.00
                            <br />
                            BS in Computer Science (Honors) & Mathematics
                            <br />
                            Graduated Summa Cum Laude
                        </h5>
                    </div>
                </div>

                <div className='card'>
                    <h2>Software Developer</h2>
                    <div className='content_cards'>
                        <h3 className='logo center_text'>
                            <AiFillCode size={iconSize} />
                        </h3>

                        <h5 className='text-light center_text'>
                            Global Technology Rotation Associate at Prudential (Current Rotation: Full stack Developer)
                            <br />
                            Working on hobby projects
                        </h5>
                    </div>
                </div>

                <div className='card'>
                    <h2>20+ Projects</h2>
                    <div className='content_cards'>
                        <h3 className='logo center_text'>
                            <CgHomeScreen size={iconSize} />
                        </h3>

                        <h5 className='text-light center_text'>
                            Frontend, Backend, & Full Stack projects
                            <br />
                            Mobile, Web, and Desktop applications
                            <br />
                            For a full list of technologies and projects, see below
                        </h5>
                    </div>
                </div>

            </div>

            <div className='about__me__geninfo'>
                <h5>
                    Hi! I'm a Global Rotation Associate at Prudential Financial, currently working as a full stack developer. I graduated from Rutgers University - New Brunswick with a major in Computer Science (BS) and Mathematics (Summa Cum Laude).
                    <br />
                    <br />
                    I've worked with a variety of technologies through hobby projects and undergraduate courses and am continously learning new frameworks, technologies, languages, and Computer Science topics and applying them through personal projects.
                    <br />
                    <br />
                </h5>

                <br />
                <br />

                <h1 className='working_on'>
                    Current Development:
                </h1>
                <ul className='working_on_list'>
                    <li className='main_list_item'>
                        <h2>Developing Android Apps using Kotlin </h2>
                        <ul className='working_on_list'>
                            <li>
                                <h2>
                                    Google Play Store Link: <a href='https://play.google.com/store/apps/dev?id=5692626467682406083'>NBaj</a>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    Current Project(s) in Progress: Five Minute Workout App, Grocery Store App
                                </h2>
                            </li>
                        </ul>
                    </li>
                    <li className='main_list_item'>
                        <h2>Learning game development </h2>
                        <ul className='working_on_list'>
                            <li>
                                <h2>
                                    For projects, <a href='/games'>see gaming portion of website</a>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    Current development: Creating games with raylib
                                </h2>
                            </li>
                        </ul>
                    </li>
                    <li className='main_list_item'>
                        <h2> Improving and maintaining currently published projects and apps</h2>
                        <ul className='working_on_list'>
                            <li>
                                <h2>
                                    Most recently updated project: <a href="/">This website</a>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    Other recently updated project(s): Updated most Android apps to latest Android API version
                                </h2>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutCards