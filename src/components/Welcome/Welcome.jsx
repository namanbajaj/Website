import React from 'react'
import './welcome.css'
import Links from './Links'
import ME from '../../assets/me.png'

const Welcome = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>hello</h5>
                <h1>Naman</h1>
                <h5 className="text-light">developer</h5>
                <Links />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Welcome