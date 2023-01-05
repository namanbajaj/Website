import React from 'react'

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
import UniversityPhoto from '../../assets/UniversityPhoto.png'
import UniversityDemo from '../../assets/UniversityDemo.mp4'
import QuizGamePhoto from '../../assets/QGPhoto.png'
import CurrencyConverterPhoto from '../../assets/CCPhoto.png'
import CTerminal from '../../assets/CTerminal.png'
import QDPhoto from '../../assets/QDPhoto.png'
import PrologInterpreter from '../../assets/PrologInterpreter.png'

import { SiCplusplus, SiCsharp, SiC, SiR, SiKotlin, SiIntel, SiAdobeillustrator, SiAdobephotoshop, SiUnrealengine, SiAndroidstudio, SiGradle, SiApachetomcat, SiSqlite, SiAndroid, SiJava, SiMysql, SiEclipseide, SiHtml5, SiReact, SiCss3, SiJavascript, SiVisualstudiocode, SiJson, SiVisualstudio, SiWindows, SiPython } from 'react-icons/si'
import { DiProlog } from 'react-icons/di';

const iconSize = 30;

export const data = [
    {
        id: 12,
        image: PrologInterpreter,
        title: 'Prolog Interpreter',
        icons: <div className='icon_under'>
            <DiProlog size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiPython size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            </div>,
        github: 'https://github.com/namanbajaj/CS314/tree/main/Final',
        text: <span>
            Prolog interpreter written in Python <br />
            Supports basic Prolog syntax such as facts, rules, queries, etc <br />
            Supports unification, backtracking, and negation <br />
        </span>,
        isOldProject: false,
        type: 'other'
    },
    {
        id: 11,
        image: QDPhoto,
        title: 'QuickDraw',
        icons: <div className='icon_under'>
            <SiKotlin size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiAndroid size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiGradle size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <Icons name='xml' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/DrawingApp',
        text: <span>
            Android application that allows users to draw on a canvas and save their drawings <br />
            Implements a custom view that allows users to draw on the canvas <br />
            Allows users to set background image to trace
        </span>,
        isOldProject: false,
        link: 'https://play.google.com/store/apps/details?id=com.nbaj.drawingapp',
        type: 'app'
    },
    {
        id: 10,
        image: CTerminal,
        title: 'Custom Shell',
        icons: <div className='icon_under'>
            <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/CS214/tree/main/hw3',
        text: <span>
            Custom shell written in C for Linux. <br />
            Built in commands such as bg, cd, jobs, etc <br />
            Supports moving jobs between background and foreground <br />
            Supports suspending and resuming jobs <br />
        </span>,
        isOldProject: false,
        type: 'other'
    },
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
        github: 'https://github.com/namanbajaj/CurrencyConverter/releases/tag/currency-converter%2Fv1.0',
        text:
            <span>
                Currency converter application built for Windows environments using WPF frontend and C# backend <br />
                Uses Open Exchange Rates API to retrieve latest exchange rates for over 170 currencies and calculates based on user entered value <br />
                Implements multithreading and async/await functionality for exchange rate retrieval <br />
            </span>,
        isOldProject: false,
        link: "https://github.com/namanbajaj/CurrencyConverter/releases",
        type: 'app'
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
        link: 'https://play.google.com/store/apps/details?id=com.namanbajaj.quizapp',
        isOldProject: false,
        type: 'app'
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
        demo: UniversityDemo,
        isOldProject: false,
        type: 'app'
    },
    {
        id: 6,
        image: ColorGamePhoto,
        title: 'Color Game',
        icons: <div className='icon_under'>
            <SiKotlin size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <SiAndroid size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiGradle size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <Icons name='xml' size={iconSize} />
        </div>,
        github: 'https://github.com/namanbajaj/Color-Guessing-Game',
        text:
            <span>
                Color guessing game built with Kotlin in Android Studio. <br />
                Has 3 difficulty modes, each with their own high scores. <br />
                Implements coroutines for timer function and color changing title. <br />
                Responsive according to whether user has dark mode turned on. <br />
                Works well with variety of screen sizes and orientations. <br />
            </span>,
        link: 'https://play.google.com/store/apps/details?id=com.nbaj.colorguessinggame',
        isOldProject: true,
        type: 'app'
    },
    {
        id: 1,
        image: ReactLogo,
        title: 'Personal Portfolio',
        icons: <div className='icon_under'>
            <SiReact size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiHtml5 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiCss3 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiJavascript size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Website',
        text: 'This website was written using JavaScript, ReactJS, and CSS',
        isOldProject: false,
        type: 'web'
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
        demo: PhotosAndroidDemo,
        isOldProject: true,
        type: 'app'
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
        demo: PhotosDesktopDemo,
        isOldProject: true,
        type: 'app'
    },
    {
        id: 4,
        image: ChessPhoto,
        title: 'ASCII Chess',
        icons: <div className='icon_under'>
            <SiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Chess',
        text:
            <span>
                Fully implemented chess game using ASCII art. <br />
                Built from scratch using object-oriented design patterns. <br />
                Supports advanced chess moves such as En Passant and castling.
            </span>,
        demo: ChessDemo,
        isOldProject: true,
        type: 'app'
    },
    {
        id: 5,
        image: SongLibraryPhoto,
        title: 'Song Library',
        icons: <div className='icon_under'>
            <SiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <Icons name='javafx' size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <Icons name='scenebuilder' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Song-Library',
        text:
            <span>
                Song library built using JavaFX. <br />
                Allows users to manage songs.
            </span>,
        demo: SongLibraryDemo,
        isOldProject: true,
        type: 'app'
    }
]