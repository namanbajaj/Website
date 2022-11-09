import React from 'react'
import './portfolio.css'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import 'animate.css';

import Icons from '../Icons/Icons.jsx';

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
import QuizGamePhoto from '../../assets/QGPhoto.png'
import CurrencyConverterPhoto from '../../assets/CCPhoto.png'

import { SiCplusplus, SiCsharp, SiC, SiR, SiKotlin, SiIntel, SiAdobeillustrator, SiAdobephotoshop, SiUnrealengine, SiAndroidstudio, SiGradle, SiApachetomcat, SiSqlite, SiAndroid, SiJava, SiMysql, SiEclipseide, SiHtml5, SiReact, SiCss3, SiJavascript, SiVisualstudiocode, SiJson, SiVisualstudio, SiWindows } from 'react-icons/si'

const iconSize = 30;

const data = [
  {
    id: 9,
    image: CurrencyConverterPhoto,
    title: 'Currency Converter',
    icons: <div className='icon_under'>
    <SiCsharp size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    <Icons name='wpf' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    <SiJson size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
    <SiWindows size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    <SiVisualstudio size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
  </div>,
  github: 'https://github.com/namanbajaj/CurrencyConverter',
  text:
    <span>
      Currency converter application built for Windows environments using WPF frontend and C# backend <br />
      Uses Open Exchange Rates API to retrieve latest exchange rates for over 170 currencies and calculates based on user entered value <br />
      Implements multithreading and async/await functionality for exchange rate retrieval <br />
    </span>
  },
  {
    id: 8,
    image: QuizGamePhoto,
    title: 'Quiz App',
    icons:
      <div className='icon_under'>
        <SiKotlin size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        <SiSqlite size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
        <SiAndroid size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
        <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        <SiGradle size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        <Icons name='xml' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      </div>,
    github: 'https://github.com/namanbajaj/Quiz-App',
    text:
      <span>
        Educational application built for Android systems built in Android Studio <br />
        Uses Kotlin for front end and SQLite for back end <br />
        Allows users to create, edit, delete, and do quizzes <br />
        Implements multi-threading using Kotlin concurrency for database loading <br />
      </span>,
      link: 'https://play.google.com/store/apps/details?id=com.namanbajaj.quizapp'
  },
  {
    id: 7,
    image: UniversityPhoto,
    title: 'University Registration System',
    icons: <div className='icon_under'>
      <SiJava size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
      <SiMysql size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiHtml5 size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
      <SiApachetomcat size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
      <SiEclipseide size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
      <Icons name='jdbc' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/University-Registration-System',
    text:
      <span>
        University registration system built with HTML and Java frontend and MySQL backend. <br />
        Java and MySQL interact via JDBC. <br />
        Used Apache Tomcat for local server and Eclipse as IDE. <br />
        Allows department administrators to add professors, students, and courses. <br />
        Professors can view students that are taking their course and assign grades. <br />
        Students can see courses that they are taking and their grades in those courses, in addition to registering for new courses if prerequisites are met. <br />
      </span>,
    demo: UniversityDemo
  },
  // {
  //   id: 6,
  //   image: ColorGamePhoto,
  //   title: 'Color Game',
  //   icons: <div className='icon_under'>
  //     <SiKotlin size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
  //     <SiAndroid size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
  //     <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
  //     <SiGradle size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
  //     <Icons name='xml' size={iconSize} />
  //   </div>,
  //   github: 'https://github.com/namanbajaj/Color-Guessing-Game',
  //   text:
  //     <span>
  //       Color guessing game built with Kotlin in Android Studio. <br />
  //       Has 3 difficulty modes, each with their own high scores. <br />
  //       Implements coroutines for timer function and color changing title. <br />
  //       Responsive according to whether user has dark mode turned on. <br />
  //       Works well with variety of screen sizes and orientations. <br />
  //     </span>,
  //   demo: ColorGameDemo,
  //   link: 'https://play.google.com/store/apps/details?id=com.nbaj.colorguessinggame'
  // },
  {
    id: 1,
    image: ReactLogo,
    title: 'React Website',
    icons: <div className='icon_under'>
      <SiReact size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiHtml5 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiCss3 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiJavascript size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/Website',
    text: 'This website was written using JavaScript, ReactJS, and CSS',
  },
  {
    id: 2,
    image: PhotosAndroidPhoto,
    title: 'Photos Library (Android)',
    icons: <div className='icon_under'>
      <SiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiAndroid size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
      <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiGradle size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <Icons name='xml' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
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
    icons: <div className='icon_under'>
      <SiJava size={iconSize} />&nbsp;&nbsp; &nbsp;&nbsp;
      <Icons name='javafx' size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
      <Icons name='xml' size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
      <Icons name='scenebuilder' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
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
      <SiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
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
  },
  // {
  //   id: 5,
  //   image: SongLibraryPhoto,
  //   title:
  //   <h3 className='title_and_languages'>
  //   <div className='portfolio_item_title_text'>Song Library</div>
  //   <div className='icon_under'>
  //     <SiJava size={iconSize} />
  //   </div>
  // </h3>,
  //   github: 'https://github.com/namanbajaj/Song-Library',
  //   text:
  //     <span>
  //       Song library built using JavaFX. <br />
  //       Allows users to manage songs.
  //     </span>,
  //   demo: SongLibraryDemo,
  //   technologies: <SiJava s></SiJava>
  // },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>My Recent Work</h1>
      </div>

      <div className="portfolio__container">
        {
          data.map(({ id, image, icons, title, github, text, demo, link }) => {
            const demobutton = <a className="btn" id='demo_button'> Video Demo </a>;

            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  {/* <img src={image} alt={title} /> */}
                  <Popup
                    trigger={<a href="javascript:void(0);"><img src={image} alt={title} /></a>}
                    modal
                    contentStyle={{ width: '30%', height: 'auto' }}
                  >
                    {close => (
                      <div className="pop_up_window animate__animated animate__zoomIn">
                        <div className="pop_up_header"> {title} </div>
                        <div className="pop_up_content">
                          {<img src={image} alt={title} />}
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
                </div>
                <div>
                  <h3 className='title_and_languages'>
                    <div className='portfolio_item_title_text'>{title}</div>
                    {icons}
                  </h3>
                </div>
                {/* <h3 className='title_and_languages'>
        <div className='portfolio_item_title_text'>Quiz App</div>
        <div className='icon_under'>
          <SiKotlin size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <SiSqlite size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp; <SiAndroid size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp; <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp; <SiGradle size={iconSize} />
        </div>
      </h3>, */}
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <Popup
                    trigger={<a className="btn"> More Info </a>}
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
                  ) : null
                  }

                  {link != null ? (
                    <a href={link} className='btn' target='_blank'>
                      Link
                    </a>
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
