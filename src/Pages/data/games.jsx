import React from 'react'

import Icons from '../../components/Icons/Icons';

import Snake from '../../assets/snake.png'

import { SiLinux, SiRaylib, SiWebassembly, SiCplusplus } from 'react-icons/si'

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
        icon: <SiWebassembly size={iconSize} />,
        value: '/snake'
      }
    ],
    isNotable: false,
    type: 'game',
    dateOfLastUpdate: '2024-06-24',
    dateOfFirstUpdate: '2024-06-20'
  },
]