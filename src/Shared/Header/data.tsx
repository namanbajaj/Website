import React from "react";
import { BsCodeSquare, BsTools } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";

export const data = [
  {
    link: '/',
    text: 'Home',
    icon: <FiHome />
  },
  {
    link: '/projects',
    text: 'Projects',
    icon: <BsTools />,
  },
  {
    link: '/tools',
    text: 'Technologies & Tools',
    icon: <BsCodeSquare />,
  },
  {
    link: '/omscs',
    text: 'OMSCS Journey',
    icon: <FaGraduationCap />,
  },
  {
    link: '/games',
    text: 'Games',
    icon: <IoGameController />,
  },
]