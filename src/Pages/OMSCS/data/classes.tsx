import React from 'react'
import { FaNetworkWired } from 'react-icons/fa6';
import { SiLinux, SiPython, SiVisualstudiocode, SiVmware } from 'react-icons/si'

import SN_image from '../assets/SN.jpg'
import STP_image from '../assets/STP.png'
import DVR_image from '../assets/DVR.png'
import { TbCloudNetwork } from 'react-icons/tb';

const iconSize = 75;

export const classData = [
  {
    id: 1,
    className: 'Computer Networks (Spring 2026)',
    url: 'https://omscs.gatech.edu/cs-6250-computer-networks',
    summary: 'Computer networking',
    techs: [
      {
        tech: 'Python',
        icon: <SiPython size={iconSize} />
      },
      {
        tech: 'VSCode',
        icon: <SiVisualstudiocode size={iconSize} />
      },
      {
        tech: 'Linux',
        icon: <SiLinux size={iconSize} />
      },
      {
        tech: 'VMWare',
        icon: <SiVmware size={iconSize} />
      },
      {
        tech: 'Mininet',
        icon: <TbCloudNetwork size={iconSize} />
      },
      {
        tech: 'Network Programming',
        icon: <FaNetworkWired size={iconSize} />
      },
    ],
    projects: [
      {
        title: 'Distance Vector Routing',
        image: DVR_image,
        text: [
          'Implemented Distance Vector Routing algorithm using Bellman-Ford algorithm',
          'Links included positive and negative values to simulate business relationships between Autonomous Systems'
        ]
      },
      {
        title: 'Spanning Tree Protocol',
        image: STP_image,
        text: [
          'Created distributed algorithm that determined ideal network topology using Spanning Tree Protocol (SPT) for an arbitrary number of switches and initial topology',
        ]
      },
      {
        title: 'Simulating Networks',
        image: SN_image,
        text: [
          'Setup and used mininet in a Linux VM to simulate network topologies',
          'Created various topologies, such as those used to represent data centers'
        ]
      }
    ]
  },
]