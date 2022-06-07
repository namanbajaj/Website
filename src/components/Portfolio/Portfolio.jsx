import React from 'react'
import './portfolio.css'

import Popup from 'reactjs-popup'
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton, BigPlayButton
} from 'video-react';

import videoreactcss from '../../../node_modules/video-react/dist/video-react.css'

import ReactLogo from '../../assets/websiteportfolio.png'

const data = [
  {
    id: 1,
    image: ReactLogo,
    title: 'This Website',
    github: 'https://github.com/namanbajaj/Website',
    text: 'This website was written using JavaScript, ReactJS, and CSS',
  },
  {
    id: 2,
    image: ReactLogo,
    title: 'Photos Library (Android)',
    github: 'https://github.com/namanbajaj/Photos-Library-Android',
    text: '',
    // demo: vid
  },
  {
    id: 3,
    image: ReactLogo,
    title: 'Photos Library (Android)',
    github: 'https://github.com/namanbajaj/Photos-Library-Android',
    text: '',
    // demo: vid
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>My Recent Work</h1>
      </div>
      {/* <div className="container video__container">
      <Player className='video'
                              playsInline
                              src={vid}
                              fluid={false}
                              width={1000}
                              height={50}
                            >
                              <BigPlayButton position="center" />
                            </Player>
      </div> */}

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, text, demo }) => {
            const demobutton = <a className="btn" id='demo_button'> Demo </a>;

            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <Popup
                    trigger={<a className="btn"> Additional Info </a>}
                    modal
                  >
                    {close => (
                      <div className="pop_up_window">
                        <div className="pop_up_header"> {title} </div>
                        <div className="pop_up_content">
                          {text}
                        </div>
                        <div className="pop_up_actions">
                          <a
                            className="btn"
                            onClick={() => {
                              close();
                            }}
                          >
                            Close
                          </a>
                        </div>
                      </div>
                    )}
                  </Popup>
                  {demo != null ? (
                    < Popup
                      trigger={demobutton}
                      modal
                    >
                      {close => (
                        <div className="pop_up_window_video">
                          <div className="pop_up_content_video">
                            <Player className='video'
                              playsInline
                              src={demo}
                              fluid={false}
                              width={720}
                              height={480}
                            >
                              <BigPlayButton position="center" />
                            </Player>
                          </div>
                          <div className="pop_up_actions">
                            <a
                              className="btn"
                              onClick={() => {
                                close();
                              }}
                            >
                              Close
                            </a>
                          </div>
                        </div>
                      )}
                    </Popup>
                  ) : <p></p>
                  }
                </div>
              </article>
            )
          })
        }

      </div>
    </section >
  )
}

export default Portfolio
