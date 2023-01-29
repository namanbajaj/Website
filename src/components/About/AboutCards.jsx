import React from 'react'

import { IoIosSchool } from 'react-icons/io'
import { AiFillCode } from 'react-icons/ai'
import { CgHomeScreen } from 'react-icons/cg'

const iconSize = 125;

const AboutCards = () => {
    return (
        <div className='cards_overview'>
            <div className='languages cards'>
                <div className='card'>
                    <h2>Rutgers University - New Brunswick</h2>
                    <div className='content_cards'>
                        <h3 className='logo center_text'>
                            <IoIosSchool size={iconSize} />
                        </h3>

                        <h5 className='text-light center_text'>
                            GPA: 3.97/4.00
                            <br />
                            Major: BS in Computer Science & Math
                            <br />
                            Graduation Date: May 2024
                        </h5>
                    </div>
                </div>

                <div className='card'>
                    <h2>Aspiring Software Developer</h2>
                    <div className='content_cards'>
                        <h3 className='logo center_text'>
                            <AiFillCode size={iconSize} />
                        </h3>

                        <h5 className='text-light center_text'>
                            Upcoming Prudential Software Engineer Intern
                            <br />
                            Always working on hobby projects
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
                            Frontend and Backend projects
                            <br />
                            Mobile, Web, and Desktop applications
                            <br />
                            For full list of technologies and projects, see below
                        </h5>
                    </div>
                </div>

            </div>

            <div className='about__me__geninfo'>
                <h5>
                    Hi! I'm a Software Developer currently enrolled at Rutgers University - New Brunswick majoring in Computer Science (BS) and Mathematics.
                    <br />
                    <br />
                    I've worked with a variety of technologies through hobby projects and undergraduate courses and am continously learning new frameworks, technologies, langauges, and Computer Science topics and applying them through personal projects.
                    <br />
                    <br />
                </h5>

                <br />
                <br />

                <h1 className='working_on'>
                    Currently Working On:
                </h1>
                <ul className='working_on_list'>
                    <li className='main_list_item'>
                        <h2>Developing Android Apps using Kotlin </h2>
                        <ul className='working_on_list'>
                            <li>
                                <h2>
                                    Google Play Store Link: <a href='https://play.google.com/store/apps/developer?id=NBaj'>NBaj</a>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    Five Minute Workout App
                                </h2>
                            </li>
                        </ul>
                    </li>
                    <li className='main_list_item'>
                        <h2>Learning Swift for IOS App Development </h2>
                    </li>

                    <li className='main_list_item'>
                        <h2> Working on projects for Internet Technology (class) </h2>
                    </li>

                    <li className='main_list_item'>
                        <h2>Developing mobile games using the Unity engine </h2>
                    </li>

                    <li className='main_list_item'>
                        <h2> Working on and maintaining currently published projects and apps</h2>
                        <ul className='working_on_list'>
                            <li>
                                <h2> This Website (last updated 1/28/2023)</h2>
                            </li>

                            <li>
                                <h2> Android Apps (last updated can be seen in app description in Play Store) </h2>
                            </li> 
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutCards