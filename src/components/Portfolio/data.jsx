import React from 'react'

import Icons from '../Icons/Icons.jsx';

import ReactLogo from '../../assets/website_portfolio_photo.png'
import PhotosAndroidPhoto from '../../assets/android_photos_app_photo.png'
import PhotosAndroidDemo from '../../assets/android_photos_app_demo.mp4'
import PhotosDesktopPhoto from '../../assets/desktop_photos_app_photo.png'
import PhotosDesktopDemo from '../../assets/desktop_photos_app_demo.mp4'
import ChessPhoto from '../../assets/chess_photo.png'
import ChessDemo from '../../assets/chess_demo.mp4'
import SongLibraryPhoto from '../../assets/song_library_photo.png'
import SongLibraryDemo from '../../assets/song_library_demo.mp4'
import ColorGamePhoto from '../../assets/guess_the_color_photo.png'
import UniversityPhoto from '../../assets/university_management_photo.png'
import UniversityDemo from '../../assets/university_management_demo.mp4'
import QuizGamePhoto from '../../assets/quizbiz_photo.png'
import CurrencyConverterPhoto from '../../assets/currency_converter_photo.png'
import CTerminalPhoto from '../../assets/c_terminal_photo.png'
import SwiftStrokesPhoto from '../../assets/swiftstrokes.png'
import PrologInterpreter from '../../assets/prolog_interpriter_photo.png'
import PongPhoto from '../../assets/pong_photo.png'
import DiagPhoto from '../../assets/diagonal_runner_photo.png'
import Threads from '../../assets/threads.png'
import Memory from '../../assets/memory.png'
import FS from '../../assets/fs.png'

import { SiCsharp, SiC, SiKotlin, SiAndroidstudio, SiGradle, SiApachetomcat, SiSqlite, SiAndroid, SiMysql, SiEclipseide, SiHtml5, SiReact, SiCss3, SiJson, SiVisualstudio, SiWindows, SiPython, SiUnity, SiLinux } from 'react-icons/si'
import { DiProlog } from 'react-icons/di';
import { DiJava, DiJavascript } from 'react-icons/di';

const iconSize = 25;

export const data = [
    {
        id: 17,
        image: FS,
        title: 'File System using FUSE',
        icons: <div className='icon_under'>
            <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiLinux size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/CS416/tree/Main/Project_4',
        text: <span>
            - File system written in C using FUSE <br />
            - Implements basic file system operations such as open, close, read, write, etc <br />
            - Supports multiple levels of directories <br />
            - Supports file and directory permissions <br />
        </span>,
        isNotable: true,
        type: 'other',
        dateOfLastUpdate: '2023-12-13',
        dateOfFirstUpdate: '2023-12-13'
    },
    {
        id: 16,
        image: Memory,
        title: 'User-level Memory Management',
        icons: <div className='icon_under'>
            <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiLinux size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/CS416/tree/Main/Project_3',
        text: <span>
            - User-level memory management written in C <br />
            - Translates virtual addresses to physical addresses using page tables <br />
            - Implements Transition Lookaside Buffer (TLB) <br />
        </span>,
        isNotable: true,
        type: 'other',
        dateOfLastUpdate: '2023-11-22',
        dateOfFirstUpdate: '2023-11-22'
    },
    {
        id: 15,
        image: Threads,
        title: 'User-level Thread Library and Scheduler',
        icons: <div className='icon_under'>
            <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiLinux size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/CS416/tree/Main/Project_2',
        text: <span>
            - User-level thread library and scheduler written in C <br />
            - Supports thread creation, scheduling, and synchronization <br />
            - Supports preemption and priority scheduling <br />
            - Implements PSJF and MLFQ scheduling algorithms <br />
        </span>,
        isNotable: true,
        type: 'other',
        dateOfLastUpdate: '2023-10-25',
        dateOfFirstUpdate: '2023-10-25'
    },
    {
        id: 14,
        image: DiagPhoto,
        title: 'Infinite Running Game',
        icons: <div className='icon_under'>
            <SiUnity size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiCsharp size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiAndroid size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        text: <span>
            - Infinite running game made in Unity <br />
        </span>,
        links: [
            {
                icon: <SiAndroid size={iconSize} />,
                value: 'https://play.google.com/store/apps/details?id=com.NBaj.DiagonalRunner',
            }
        ],
        isNotable: false,
        type: 'game',
        dateOfLastUpdate: '2023-04-11',
        dateOfFirstUpdate: '2023-04-11'
    },
    {
        id: 13,
        image: PongPhoto,
        title: 'Pong Clone',
        icons: <div className='icon_under'>
            <SiUnity size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiCsharp size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiWindows size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiAndroid size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Mini-Tennis',
        text: <span>
            - Pong clone made in Unity <br />
            - Supports single player and multiplayer <br />
            - Supports keyboard, mouse, and touchscreen controls <br />
            - Supports Android and Windows <br />
        </span>,
        links: [
            {
                icon: <SiWindows size={iconSize} />,
                value: 'https://github.com/namanbajaj/Mini-Tennis/releases',
            },
            {
                icon: <SiAndroid size={iconSize} />,
                value: 'https://play.google.com/store/apps/details?id=com.NBaj.Pong',
            },
        ],
        isNotable: false,
        type: 'game',
        dateOfLastUpdate: '2023-03-27',
        dateOfFirstUpdate: '2023-01-12'
    },
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
            - Prolog interpreter written in Python <br />
            - Supports basic Prolog syntax such as facts, rules, queries, etc <br />
            - Supports unification, backtracking, and negation <br />
        </span>,
        isNotable: false,
        type: 'other',
        dateOfLastUpdate: '2023-05-02',
        dateOfFirstUpdate: '2023-05-02'
    },
    {
        id: 11,
        image: SwiftStrokesPhoto,
        title: 'SwiftStrokes',
        icons: <div className='icon_under'>
            <SiKotlin size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiAndroid size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiGradle size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <Icons name='xml' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/DrawingApp',
        text: <span>
            - Android application that allows users to draw on a canvas and save their drawings <br />
            - Implements a custom view that allows users to draw on the canvas <br />
            - Allows users to set background image to trace
        </span>,
        isNotable: true,
        links: [
            {
                icon: <SiAndroid size={iconSize} />,
                value: 'https://play.google.com/store/apps/details?id=com.nbaj.drawingapp',
            }
        ],
        type: 'app',
        dateOfLastUpdate: '2023-07-18',
        dateOfFirstUpdate: '2022-12-12'
    },
    {
        id: 10,
        image: CTerminalPhoto,
        title: 'Custom Shell',
        icons: <div className='icon_under'>
            <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/CS214/tree/main/hw3',
        text: <span>
            - Custom shell written in C for Linux. <br />
            - Built in commands such as bg, cd, jobs, etc <br />
            - Supports moving jobs between background and foreground <br />
            - Supports suspending and resuming jobs <br />
        </span>,
        isNotable: false,
        type: 'other',
        dateOfLastUpdate: '2022-12-11',
        dateOfFirstUpdate: '2022-12-11'
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
                - Currency converter application built for Windows environments using WPF frontend and C# backend <br />
                - Uses Open Exchange Rates API to retrieve latest exchange rates for over 170 currencies and calculates based on user entered value <br />
                - Implements multithreading and async/await functionality for exchange rate retrieval <br />
            </span>,
        isNotable: false,
        links: [
            {
                icon: <SiWindows size={iconSize} />,
                value: 'https://github.com/namanbajaj/CurrencyConverter/releases'
            }
        ],
        type: 'app',
        dateOfLastUpdate: '2022-12-12',
        dateOfFirstUpdate: '2022-11-10'
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
                - Educational application built for Android systems built in Android Studio <br />
                - Uses Kotlin for front end and SQLite for back end <br />
                - Allows users to create, edit, delete, and do quizzes <br />
                - Implements multi-threading using Kotlin concurrency for database loading <br />
            </span>,
        links: [
            {
                icon: <SiAndroid size={iconSize} />,
                value: 'https://play.google.com/store/apps/details?id=com.namanbajaj.quizapp',
            }
        ],
        isNotable: true,
        type: 'app',
        dateOfLastUpdate: '2023-07-18',
        dateOfFirstUpdate: '2022-08-26'
    },
    {
        id: 7,
        image: UniversityPhoto,
        title: 'University Registration System',
        icons: <div className='icon_under'>
            <DiJava size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <SiMysql size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiHtml5 size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <SiApachetomcat size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <SiEclipseide size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <Icons name='jdbc' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/University-Registration-System',
        text:
            <span>
                - University registration system built with HTML and Java frontend and MySQL backend. <br />
                - Java and MySQL interact via JDBC. <br />
                - Used Apache Tomcat for local server and Eclipse as IDE. <br />
                - Allows department administrators to add professors, students, and courses. <br />
                - Professors can view students that are taking their course and assign grades. <br />
                - Students can see courses that they are taking and their grades in those courses, in addition to registering for new courses if prerequisites are met. <br />
            </span>,
        demo: UniversityDemo,
        isNotable: true,
        type: 'app',
        dateOfLastUpdate: '2022-08-13',
        dateOfFirstUpdate: '2022-08-13'
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
                - Color guessing game built with Kotlin in Android Studio. <br />
                - Has 3 difficulty modes, each with their own high scores. <br />
                - Implements coroutines for timer function and color changing title. <br />
                - Responsive according to whether user has dark mode turned on. <br />
                - Works well with variety of screen sizes and orientations. <br />
            </span>,
        links: [
            {
                icon: <SiAndroid size={iconSize} />,
                value: 'https://play.google.com/store/apps/details?id=com.nbaj.colorguessinggame',
            }
        ],
        isNotable: false,
        type: 'app',
        dateOfLastUpdate: '2023-07-18',
        dateOfFirstUpdate: '2022-08-19'
    },
    {
        id: 1,
        image: ReactLogo,
        title: 'Personal Portfolio',
        icons: <div className='icon_under'>
            <SiReact size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiHtml5 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiCss3 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <DiJavascript size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Website',
        text: 'This website was written using JavaScript, ReactJS, and CSS',
        isNotable: true,
        type: 'web',
        dateOfLastUpdate: '2024-07-05',
        dateOfFirstUpdate: '2022-06-01'
    },
    {
        id: 2,
        image: PhotosAndroidPhoto,
        title: 'Photos Library (Android)',
        icons: <div className='icon_under'>
            <DiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiAndroid size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <SiAndroidstudio size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <SiGradle size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <Icons name='xml' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Photos-Library-Android',
        text:
            <span>
                - Photos library manager written for Android devices.<br />
                - Supports accessing filesystem to add photos to library. <br />
                - Users can create, delete, and rename albums. <br />
                - Users can add, delete, and move photos, in addition to displaying them in a larger display and showing all tags. <br />
                - Users can add tags to pictures and search by those tag values. <br />
                - Larger photo display has slideshow functionality.
            </span>,
        demo: PhotosAndroidDemo,
        isNotable: false,
        type: 'app',
        dateOfLastUpdate: '2022-04-28',
        dateOfFirstUpdate: '2022-04-28'
    },
    {
        id: 3,
        image: PhotosDesktopPhoto,
        title: 'Photos Library (Desktop)',
        icons: <div className='icon_under'>
            <DiJava size={iconSize} />&nbsp;&nbsp; &nbsp;&nbsp;
            <Icons name='javafx' size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <Icons name='xml' size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <Icons name='scenebuilder' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Photos-Library-Android',
        text:
            <span>
                - Photos library manager written for Desktop environments using JavaFX.<br />
                - Supports accessing filesystem to add photos to library. <br />
                - Users can create, delete, and rename albums. <br />
                - Users can add, delete, and move photos, in addition to displaying them in a larger display and showing all tags. <br />
                - Users can add tags to pictures and search by those tag values. <br />
                - Larger photo display has slideshow functionality. <br />
                - Users can search by tags and dates.
            </span>,
        demo: PhotosDesktopDemo,
        isNotable: false,
        type: 'app',
        dateOfLastUpdate: '2022-04-02',
        dateOfFirstUpdate: '2022-04-02'
    },
    {
        id: 4,
        image: ChessPhoto,
        title: 'ASCII Chess',
        icons: <div className='icon_under'>
            <DiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Chess',
        text:
            <span>
                - Fully implemented chess game using ASCII art. <br />
                - Built from scratch using object-oriented design patterns. <br />
                - Supports advanced chess moves such as En Passant and castling.
            </span>,
        demo: ChessDemo,
        isNotable: false,
        type: 'app',
        dateOfLastUpdate: '2022-03-20',
        dateOfFirstUpdate: '2022-03-20'
    },
    {
        id: 5,
        image: SongLibraryPhoto,
        title: 'Song Library',
        icons: <div className='icon_under'>
            <DiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
            <Icons name='javafx' size={iconSize} /> &nbsp;&nbsp; &nbsp;&nbsp;
            <Icons name='scenebuilder' size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
        </div>,
        github: 'https://github.com/namanbajaj/Song-Library',
        text:
            <span>
                - Song library built using JavaFX. <br />
                - Allows users to manage songs.
            </span>,
        demo: SongLibraryDemo,
        isNotable: false,
        type: 'app',
        dateOfLastUpdate: '2022-02-15',
        dateOfFirstUpdate: '2022-02-15'
    }
]