import React from 'react'
import './welcome.css'
import Links from './Links'
import ME from '../../assets/me.jpeg'
import Socials from './Socials'


const Welcome = () => {
    return (
        <section id='welcome'>
            <header>
                <div className="container header__container">
                    <h1>Naman Bajaj</h1>
                    <h5>Software Developer</h5>

                    <Links />
                    <Socials />

                    <div className="me">
                        <img src={ME} alt="" />
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Welcome