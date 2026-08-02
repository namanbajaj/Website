import React from 'react'

import Icons from '../../../Shared/Icons/Icons';

import PhotosAndroidPhoto from '../assets/android_photos_app_photo.png'
import PhotosAndroidDemo from '../assets/android_photos_app_demo.mp4'
import PhotosDesktopPhoto from '../assets/desktop_photos_app_photo.png'
import PhotosDesktopDemo from '../assets/desktop_photos_app_demo.mp4'
import ChessPhoto from '../assets/chess_photo.png'
import ChessDemo from '../assets/chess_demo.mp4'
import SongLibraryPhoto from '../assets/song_library_photo.png'
import SongLibraryDemo from '../assets/song_library_demo.mp4'
import UniversityPhoto from '../assets/university_management_photo.png'
import UniversityDemo from '../assets/university_management_demo.mp4'
import CTerminalPhoto from '../assets/c_terminal_photo.png'
import PrologInterpreter from '../assets/prolog_interpriter_photo.png'
import Threads from '../assets/threads.png'
import Memory from '../assets/memory.png'
import FS from '../assets/fs.png'
import AIAss1 from '../assets/AIA1.png'
import AIFP from '../assets/AIFP.png'

import { SiC, SiAndroidstudio, SiGradle, SiApachetomcat, SiAndroid, SiMysql, SiEclipseide, SiHtml5, SiPython, SiLinux } from 'react-icons/si'
import { DiProlog } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { ProjectModel } from '../model/PortfolioModels.js';

const iconSize = 25;

export const data: ProjectModel[] = [
  // Face and Digit Classification
  {
    id: 19,
    image: AIFP,
    title: 'Face and Digit Classification',
    icons: <div className='icon_under'>
      <SiPython size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    text: [
      "Implements face and digit classification using 2 layer neural network and perceptron",
      "Uses numpy for matrix operations"
    ],
    isNotable: true,
    type: 'other',
    dateOfLastUpdate: '2024-05-04',
    dateOfFirstUpdate: '2024-05-04'
  },
  // A* Pathfinding Visualizer
  {
    id: 18,
    image: AIAss1,
    title: 'A* Pathfinding Visualizer',
    icons: <div className='icon_under'>
      <SiPython size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    text: [
      "A* pathfinding visualizer written in Python",
      "Implements repeated forward A*, backwards A* and adaptive A*",
      "Visualizes pathfinding on a grid with obstacles",
      "Adaptive A* updates heuristic function based on previous runs",
      "Implements custom binary heap for priority queue"
    ],
    isNotable: false,
    type: 'other',
    dateOfLastUpdate: '2024-02-27',
    dateOfFirstUpdate: '2024-02-27'
  },
  // File System using FUSE
  {
    id: 17,
    image: FS,
    title: 'File System using FUSE',
    icons: <div className='icon_under'>
      <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiLinux size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/CS416/tree/Main/Project_4',
    text: [
      "File system written in C using FUSE",
      "Implements basic file system operations such as open, close, read, write, etc",
      "Supports multiple levels of directories",
      "Supports file and directory permissions"
    ],
    isNotable: true,
    type: 'other',
    dateOfLastUpdate: '2023-12-13',
    dateOfFirstUpdate: '2023-12-13'
  },
  // Memory Management 
  {
    id: 16,
    image: Memory,
    title: 'User-level Memory Management',
    icons: <div className='icon_under'>
      <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiLinux size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/CS416/tree/Main/Project_3',
    text: [
      "User-level memory management written in C",
      "Translates virtual addresses to physical addresses using page tables",
      "Implements Transition Lookaside Buffer (TLB)"
    ],
    isNotable: false,
    type: 'other',
    dateOfLastUpdate: '2023-11-22',
    dateOfFirstUpdate: '2023-11-22'
  },
  // Threads Library
  {
    id: 15,
    image: Threads,
    title: 'User-level Thread Library and Scheduler',
    icons: <div className='icon_under'>
      <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiLinux size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/CS416/tree/Main/Project_2',
    text: [
      "User-level thread library and scheduler written in C",
      "Supports thread creation, scheduling, and synchronization",
      "Supports preemption and priority scheduling",
      "Implements PSJF and MLFQ scheduling algorithms"
    ],
    isNotable: false,
    type: 'other',
    dateOfLastUpdate: '2023-10-25',
    dateOfFirstUpdate: '2023-10-25'
  },
  // Prolog Interpreter
  {
    id: 12,
    image: PrologInterpreter,
    title: 'Prolog Interpreter',
    icons: <div className='icon_under'>
      <DiProlog size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiPython size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/CS314/tree/main/Final',
    text: [
      "Prolog interpreter written in Python",
      "Supports basic Prolog syntax such as facts, rules, queries, etc",
      "Supports unification, backtracking, and negation"
    ],
    isNotable: false,
    type: 'other',
    dateOfLastUpdate: '2023-05-02',
    dateOfFirstUpdate: '2023-05-02'
  },
  // Custom Shell (Terminal in C)
  {
    id: 10,
    image: CTerminalPhoto,
    title: 'Custom Shell',
    icons: <div className='icon_under'>
      <SiC size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/CS214/tree/main/hw3',
    text: [
      "Custom shell written in C for Linux.",
      "Built in commands such as bg, cd, jobs, etc",
      "Supports moving jobs between background and foreground",
      "Supports suspending and resuming jobs"
    ],
    isNotable: false,
    type: 'other',
    dateOfLastUpdate: '2022-12-11',
    dateOfFirstUpdate: '2022-12-11'
  },
  // University Registration System
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
    text: [
      "University registration system built with HTML and Java frontend and MySQL backend.",
      "Java and MySQL interact via JDBC.",
      "Used Apache Tomcat for local server and Eclipse as IDE.",
      "Allows department administrators to add professors, students, and courses.",
      "Professors can view students that are taking their course and assign grades.",
      "Students can see courses that they are taking and their grades in those courses, in addition to registering for new courses if prerequisites are met."
    ],
    demo: UniversityDemo,
    isNotable: true,
    type: 'app',
    dateOfLastUpdate: '2022-08-13',
    dateOfFirstUpdate: '2022-08-13'
  },
  // Photos Library (Android)
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
    text: [
      "Photos library manager written for Android devices.",
      "Supports accessing filesystem to add photos to library.",
      "Users can create, delete, and rename albums.",
      "Users can add, delete, and move photos, in addition to displaying them in a larger display and showing all tags.",
      "Users can add tags to pictures and search by those tag values.",
      "Larger photo display has slideshow functionality."
    ],
    demo: PhotosAndroidDemo,
    isNotable: false,
    type: 'app',
    dateOfLastUpdate: '2022-04-28',
    dateOfFirstUpdate: '2022-04-28'
  },
  // Photos Library (Desktop)
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
    text: [
      "Photos library manager written for Desktop environments using JavaFX.",
      "Supports accessing filesystem to add photos to library.",
      "Users can create, delete, and rename albums.",
      "Users can add, delete, and move photos, in addition to displaying them in a larger display and showing all tags.",
      "Users can add tags to pictures and search by those tag values.",
      "Larger photo display has slideshow functionality.",
      "Users can search by tags and dates."
    ],
    demo: PhotosDesktopDemo,
    isNotable: false,
    type: 'app',
    dateOfLastUpdate: '2022-04-02',
    dateOfFirstUpdate: '2022-04-02'
  },
  // Terminal Chess
  {
    id: 4,
    image: ChessPhoto,
    title: 'ASCII Chess',
    icons: <div className='icon_under'>
      <DiJava size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/Chess',
    text: [
      "Fully implemented chess game using ASCII art.",
      "Built from scratch using object-oriented design patterns.",
      "Supports advanced chess moves such as En Passant and castling."
    ],
    demo: ChessDemo,
    isNotable: false,
    type: 'app',
    dateOfLastUpdate: '2022-03-20',
    dateOfFirstUpdate: '2022-03-20'
  },
  // Song Library
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
    text: [
      "Song library built using JavaFX.",
      "Allows users to manage songs."
    ],
    demo: SongLibraryDemo,
    isNotable: false,
    type: 'app',
    dateOfLastUpdate: '2022-02-15',
    dateOfFirstUpdate: '2022-02-15'
  }
]
