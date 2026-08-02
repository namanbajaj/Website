import React from 'react'

import Icons from '../../../Shared/Icons/Icons';

import ReactLogo from '../assets/website_portfolio_photo.png'
import QuizGamePhoto from '../assets/quizbiz_photo.png'
import CurrencyConverterPhoto from '../assets/currency_converter_photo.png'
import SwiftStrokesPhoto from '../assets/swiftstrokes.png'
import kp from '../assets/kp.png'
import Deno from '../assets/Deno.png'

import { SiCsharp, SiKotlin, SiAndroidstudio, SiGradle, SiSqlite, SiAndroid, SiHtml5, SiReact, SiCss3, SiJson, SiVisualstudio, SiWindows, SiTypescript, SiGithub, SiDeno } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi';
import { ProjectModel } from '../model/PortfolioModels.js';

const iconSize = 25;

export const data: ProjectModel[] = [
  // Backend for Portfolio
  {
    id: 22,
    image: Deno,
    title: 'Personal Portfolio Backend',
    icons: <div className='icon_under'>
      <SiDeno size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiTypescript size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    text: [
      "Backend written for this portfolio",
      "Written using Deno, Oak, and TypeScript",
      "Deployed using Deno Deploy",
      "Speeds up development by preventing need to redeploy upon simple changes",
      "Currently pulls additional notes for certain languages/techs"
    ],
    isNotable: true,
    type: 'web',
    dateOfLastUpdate: '2025-07-15',
    dateOfFirstUpdate: '2025-07-15'
  },
  // Kayla Portfolio
  {
    id: 21,
    image: kp,
    title: 'Personal Portfolio',
    icons: <div className='icon_under'>
      <SiReact size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiHtml5 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiCss3 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiTypescript size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiGithub size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    text: [
      "Personal portfolio website written in ReactJS, TypeScript, HTML, and CSS",
      "Hosted on GitHub Pages"
    ],
    links: [
      {
        icon: <FiExternalLink size={iconSize} />,
        value: 'https://www.kaylaramnarain.com'
      }
    ],
    isNotable: true,
    type: 'web',
    dateOfLastUpdate: '2025-02-27',
    dateOfFirstUpdate: '2024-07-01'
  },
  // Drawing App (SwiftStrokes)
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
    text: [
      "Android application that allows users to draw on a canvas and save their drawings",
      "Implements a custom view that allows users to draw on the canvas",
      "Allows users to set background image to trace"
    ],
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
  // Currency Converter
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
    text: [
      "Currency converter application built for Windows environments using WPF frontend and C# backend",
      "Uses Open Exchange Rates API to retrieve latest exchange rates for over 170 currencies and calculates based on user entered value",
      "Implements multithreading and async/await functionality for exchange rate retrieval"
    ],
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
  // Quiz App
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
    text: [
      "Educational application built for Android systems built in Android Studio",
      "Uses Kotlin for front end and SQLite for back end",
      "Allows users to create, edit, delete, and do quizzes",
      "Implements multi-threading using Kotlin concurrency for database loading"
    ],
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
  // Personal Portfolio
  {
    id: 1,
    image: ReactLogo,
    title: 'Personal Portfolio',
    icons: <div className='icon_under'>
      <SiReact size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiHtml5 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiCss3 size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiTypescript size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiGithub size={iconSize} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/Website',
    text: [
      "This website was written using TypeScript, ReactJS, and CSS"
    ],
    links: [
      {
        icon: <FiExternalLink size={iconSize} />,
        value: '/#'
      }
    ],
    isNotable: true,
    type: 'web',
    dateOfLastUpdate: '2025-7-23',
    dateOfFirstUpdate: '2022-06-01'
  }
]
