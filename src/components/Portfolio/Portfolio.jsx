import React from 'react'
import './portfolio.css'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'


import ReactLogo from '../../assets/websiteportfolio.png'
import PhotosAndroidPhoto from '../../assets/PAPhoto.png'
import PhotosAndroidDemo from '../../assets/PADemo.mp4'
import PhotosDesktopPhoto from '../../assets/PDPhoto.png'
import PhotosDesktopDemo from '../../assets/PDDEMO.mp4'
import ChessPhoto from '../../assets/CPhoto.png'
import ChessDemo from '../../assets/CDemo.mp4'
import SongLibraryPhoto from '../../assets/SLPhoto.png'
import SongLibraryDemo from '../../assets/SLDemo.mp4'

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
    image: PhotosAndroidPhoto,
    title: 'Photos Library (Android)',
    github: 'https://github.com/namanbajaj/Photos-Library-Android',
    text:
      <span>
        Photos library manager written for Android devices.<br />
        Supports accessing filesystem to add photos to library. <br />
        Users can create, delete, and rename albums. <br />
        Users can add, delete, and move photos, in addition to displaying them in a larger display and showing all tags. <br />
        Users can add tags to pictures and search by those tag values. <br />
        Larger photo display has slideshow functionality.
      </span>,
    demo: PhotosAndroidDemo
  },

  {
    id: 3,
    image: PhotosDesktopPhoto,
    title: 'Photos Library (Desktop)',
    github: 'https://github.com/namanbajaj/Photos-Library-Android',
    text:
      <span>
        Photos library manager written for Desktop environments using JavaFX.<br />
        Supports accessing filesystem to add photos to library. <br />
        Users can create, delete, and rename albums. <br />
        Users can add, delete, and move photos, in addition to displaying them in a larger display and showing all tags. <br />
        Users can add tags to pictures and search by those tag values. <br />
        Larger photo display has slideshow functionality. <br />
        Users can search by tags and dates.
      </span>,
    demo: PhotosDesktopDemo
  },
  {
    id: 4,
    image: ChessPhoto,
    title: 'ASCII Based Chess',
    github: 'https://github.com/namanbajaj/Chess',
    text:
      <span>
        Fully implemented chess game using ASCII art. <br />
        Built from scratch using object-oriented design patterns. <br />
        Supports advanced chess moves such as En Passant and castling.
      </span>,
    demo: ChessDemo
  },
  {
    id: 5,
    image: SongLibraryPhoto,
    title: 'Song Library',
    github: 'https://github.com/namanbajaj/Song-Library',
    text:
      <span>
        Song library built using JavaFX. <br />
        Allows users to manage songs.
      </span>,
    demo: SongLibraryDemo
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>My Recent Work</h1>
      </div>

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
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url={demo}
                                controls={1}
                                width='100%'
                                height='100%'
                                className='.react-player'>
                              </ReactPlayer>
                            </div>
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
