import React from 'react'

import Icons from '../../../../../Shared/Icons/Icons.jsx';

import Snake from '../assets/snake.png'
import PongPhoto from '../assets/pong_photo.png'
import DiagPhoto from '../assets/diagonal_runner_photo.png'
import ColorGamePhoto from '../assets/guess_the_color_photo.png'

import { SiCsharp, SiAndroid, SiWindows, SiUnity, SiLinux, SiRaylib, SiWebassembly, SiCplusplus, SiKotlin, SiAndroidstudio, SiGradle } from 'react-icons/si'
import { FaGamepad } from 'react-icons/fa'

const iconSize = 25;

export const data = [
  {
    id: 1,
    image: Snake,
    title: 'Snake Game',
    icons: <div className='icon_under'>
      <SiCplusplus size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiLinux size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiRaylib size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiWebassembly size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    text: <span>
      - Snake game written in C++ using raylib <br />
      - Supports keyboard and mouse controls <br />
      - Coded in Linux and compiled to Linux and WebAssembly <br />
      - Many features
    </span>,
    links: [
      {
        icon: <FaGamepad size={iconSize} />,
        value: '/snake'
      }
    ],
    isNotable: false,
    type: 'game',
    dateOfLastUpdate: '2024-06-24',
    dateOfFirstUpdate: '2024-06-20'
  },
  // Diagonal Runner (Infinite Running Game)
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
  // Pong Clone
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
  // Color Guessing Game
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
]