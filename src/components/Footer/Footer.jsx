import React from 'react'
import './footer.css'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Designed by Naman Bajaj</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#languages">Languages</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.instagram.com/naman.bajaj_/" target='_blank'><FaInstagram /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Naman Bajaj. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer