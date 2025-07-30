import React from 'react';

import '../css/welcome.css'
import Links from './Links'
import ME from '../assets/me.jpg'
import Socials from './Socials'

import Particles from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim'
import { useMemo } from 'react';
import { MoveDirection, OutMode } from '@tsparticles/engine';

export default function Welcome() {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const options = useMemo(
    () => ({
      "fullScreen": {
        "enable": false,
        "zIndex": -5
      },
      "fpsLimit": 60,
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
          "direction": MoveDirection.none,
          "random": false,
          "straight": false,
          "out_mode": OutMode.out,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "events": {
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
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true,
    }), []
  )

  return (
    <header id='welcome'>
      <Particles
        className='particles'
        init={particlesInit}
        options={options}
      />

      <div className="header_container">
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