import React from 'react'
import './portfolio.css'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import 'animate.css';

import ReactLogo from '../../assets/websiteportfolio.png'
import PhotosAndroidPhoto from '../../assets/PAPhoto.png'
import PhotosAndroidDemo from '../../assets/PADemo.mp4'
import PhotosDesktopPhoto from '../../assets/PDPhoto.png'
import PhotosDesktopDemo from '../../assets/PDDEMO.mp4'
import ChessPhoto from '../../assets/CPhoto.png'
import ChessDemo from '../../assets/CDemo.mp4'
import SongLibraryPhoto from '../../assets/SLPhoto.png'
import SongLibraryDemo from '../../assets/SLDemo.mp4'
import ColorGamePhoto from '../../assets/CGPhoto.png'
import ColorGameDemo from '../../assets/CGDemo.mp4'
import UniversityPhoto from '../../assets/UniversityPhoto.png'
import UniversityDemo from '../../assets/UniversityDemo.mp4'

import { DiJava, DiPython, DiHtml5, DiCss3, DiJsBadge, DiReact, DiUnitySmall, DiGit, DiEclipse, DiMysql } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiC, SiR, SiKotlin, SiIntel, SiAdobeillustrator, SiAdobephotoshop, SiUnrealengine, SiAndroidstudio, SiGradle, SiApachetomcat } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'

const iconSize = 30;

const data = [
  {
    id: 7,
    image: UniversityPhoto,
    title:
      <h3 className='title_and_languages'>
        <div className='portfolio_item_title_text'>University Registration System</div>
        <div className='icon_under'>
          <DiJava size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp; <DiMysql size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <DiHtml5 size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp; <SiApachetomcat size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp; <DiEclipse size={iconSize} />
        </div>
      </h3>,
    github: 'https://github.com/namanbajaj/University-Registration-System',
    text:
      <span>
        University registration system built with HTML and Java frontend and MySQL backend. <br/>
        Java and MySQL interact via JDBC. <br/>
        Used Apache Tomcat for local server and Eclipse as IDE. <br/>
        Allows department administrators to add professors, students, and courses. <br/>
        Professors can view students that are taking their course and assign grades. <br/>
        Students can see courses that they are taking and their grades in those courses, in addition to registering for new courses if prerequisites are met. <br></br>
      </span>,
    demo: UniversityDemo
  },
  {
    id: 6,
    image: ColorGamePhoto,
    title:
      <h3 className='title_and_languages'>
        <div className='portfolio_item_title_text'>Color Game</div>
        <div className='icon_under'>
          <SiKotlin size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <SiGradle size={iconSize} />
        </div>
      </h3>,
    github: 'https://github.com/namanbajaj/Color-Guessing-Game',
    text:
      <span>
        Color guessing game built with Kotlin in Android Studio. <br />
        Has 3 difficulty modes, each with their own high scores. <br />
        Implements coroutines for timer function and color changing title. <br />
        Responsive according to whether user has dark mode turned on. <br />
        Works well with variety of screen sizes and orientations. <br />
      </span>,
    demo: ColorGameDemo
  },
  {
    id: 1,
    image: ReactLogo,
    title:
      <h3 className='title_and_languages'>
        <div className='portfolio_item_title_text'>This Website</div>
        <div className='icon_under'>
          <DiReact size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <DiHtml5 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <DiCss3 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <DiJsBadge size={iconSize} />
        </div>
      </h3>,
    github: 'https://github.com/namanbajaj/Website',
    text: 'This website was written using JavaScript, ReactJS, and CSS',
  },

  {
    id: 2,
    image: PhotosAndroidPhoto,
    title:
      <h3 className='title_and_languages'>
        <div className='portfolio_item_title_text'>Photos Library (Android)</div>
        <div className='icon_under'>
          <DiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <SiGradle size={iconSize} />
        </div>
      </h3>,
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
    title:
    <h3 className='title_and_languages'>
    <div className='portfolio_item_title_text'>Photos Library (Desktop)</div>
    <div className='icon_under'>
      <DiJava size={iconSize} />
    </div>
  </h3>,
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
    title: 
    <h3 className='title_and_languages'>
    <div className='portfolio_item_title_text'>ASCII Based Chess</div>
    <div className='icon_under'>
      <DiJava size={iconSize} />
    </div>
  </h3>,
    github: 'https://github.com/namanbajaj/Chess',
    text:
      <span>
        Fully implemented chess game using ASCII art. <br />
        Built from scratch using object-oriented design patterns. <br />
        Supports advanced chess moves such as En Passant and castling.
      </span>,
    demo: ChessDemo
  }
  // {
  //   id: 5,
  //   image: SongLibraryPhoto,
  //   title:
  //   <h3 className='title_and_languages'>
  //   <div className='portfolio_item_title_text'>Song Library</div>
  //   <div className='icon_under'>
  //     <DiJava size={iconSize} />
  //   </div>
  // </h3>,
  //   github: 'https://github.com/namanbajaj/Song-Library',
  //   text:
  //     <span>
  //       Song library built using JavaFX. <br />
  //       Allows users to manage songs.
  //     </span>,
  //   demo: SongLibraryDemo,
  //   technologies: <DiJava s></DiJava>
  // }
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
                <div>{title}</div>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <Popup
                    trigger={<a className="btn"> Additional Info </a>}
                    modal
                  >
                    {close => (
                      <div className="pop_up_window animate__animated animate__zoomIn">
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
                        <div className="pop_up_window_video animate__animated animate__zoomIn">
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
