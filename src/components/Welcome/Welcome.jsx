import React from 'react'
import './welcome.css'
import Links from './Links'
import ME from '../../assets/me.jpg'
import Socials from './Socials'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Welcome = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    return (
        <header id='welcome'>
            <Particles className='particles' init={particlesInit}
                options={{
                    "fullScreen": {
                        "enable": false,
                        "zIndex": -5
                    },
                    "fpsLimit": 120,
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 3,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 20,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse",
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 200,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 0.8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 50
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                }}
            />
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
    )
}

export default Welcome