import React from 'react'
import { FaNetworkWired } from 'react-icons/fa6';
import { SiCplusplus, SiLinux, SiPython, SiVmware } from 'react-icons/si'
import { TbCloudNetwork, TbSql, TbCpu } from 'react-icons/tb';
import { DiDatabase } from 'react-icons/di';

// Computer Networks
import SN_image from '../assets/SN.jpg'
import STP_image from '../assets/STP.png'
import DVR_image from '../assets/DVR.png'
import SDN_FW from '../assets/SDN_FW.jpg'
import BGPHJ_image from '../assets/BGPHJ.png'
import BGPM_image from '../assets/BGPM.png'
import KN_image from '../assets/KN.png'

// Database Systems Implementation
import FF_image from '../assets/flat-files.png'
import BM_image from '../assets/BM.png'
import BTree_image from '../assets/BTree.png'
import RTree_image from '../assets/RTree.png'
import Parser_image from '../assets/Parser.png'

const iconSize = 75;

export const classData = [{
  id: 2,
  className: 'Database System Implementation (Summer 2026)',
  url: 'https://omscs.gatech.edu/cs-6422-database-system-implementation',
  techs: [
    {
      tech: 'SQL',
      icon: <TbSql size={iconSize} />
    },
    {
      tech: 'C++',
      icon: <SiCplusplus size={iconSize} />
    },
    {
      tech: 'Multithreading',
      icon: <TbCpu size={iconSize} />
    },
    {
      tech: 'Databases',
      icon: <DiDatabase size={iconSize} />
    }
  ],
  projects: [
    {
      title: 'Operators',
      image: Parser_image,
      text: [
        'Implemented physical database operators using the iterator model',
        'Implemented small query parser and executor',
        'Implemented various SQL functions, such as Except/ExceptAll, Intersect/IntersectAll, Hash Aggregation, Hash Join, Sort, Union/UnionAll',
        'Parses queries using regex and builds model for execution'
      ]
    },
    {
      title: 'R-Tree',
      image: RTree_image,
      text: [
        'Implemented custom on disk R tree to store and retrieve multi dimensional data',
        'Supports inserting 2D rectangles (MBRs), splitting pages when they overflow, maintaining parent bounding boxes, and answering spatial queries such as window (rectangle) queries and k-nearest neighbor queries'
      ]
    },
    {
      title: 'B+ Tree',
      image: BTree_image,
      text: [
        'Implemented custom B+ tree, leaf nodes, and inner nodes to facilitate indices in a database system',
        'Implemented persistence using meta page and saving using given buffer manager',
        'Implemented various functions that leverage utility of B+ Tree, including range queries and lookup'
      ]
    },
    {
      title: 'Buffer Manager',
      image: BM_image,
      text: [
        'Implemented custom Buffer Manager that allowed pages to be loaded, unloaded, and accessed concurrently by multiple threads',
        'Fetched and saved pages to and from disk using given Storage Manager',
        'Implemented 2Q policy for page eviction and replacement',
        'Implemented coarse and fine grained locks for maximal performance and concurrency',
        'Implemented constructors and functions for Page Guard class, such as copy constructor, utilizing RAII principles'
      ]
    },
    {
      title: 'Flat File Database',
      image: FF_image,
      text: [
        'Implemented flat file database in C++',
        'Creates 3 tables; users, posts, and engagements',
        'Loads tables both sequentially and in parallel',
        'Allows reading/updating of various information in tables',
        'Ensures referential integrity',
        'Uses indices for faster retrieval',
        'Uses atomic operations for durable reads/updates'
      ]
    }
  ]
},
{
  id: 1,
  className: 'Computer Networks (Spring 2026)',
  url: 'https://omscs.gatech.edu/cs-6250-computer-networks',
  techs: [
    {
      tech: 'Python',
      icon: <SiPython size={iconSize} />
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
    }
  ],
  projects: [
    {
      title: 'Kubernetes Networking',
      image: KN_image,
      text: [
        'Ran networks inside Kubernetes',
        'Traced packets, and created and debugged network policies'
      ]
    },
    {
      title: 'BGP Measurements',
      image: BGPM_image,
      text: [
        'Analyzed historical BGP data using PyBGPStream'
      ]
    },
    {
      title: 'BGP Hijacking',
      image: BGPHJ_image,
      text: [
        'Configured routers and prefixes in mininet to simulate BGP hijacking'
      ]
    },
    {
      title: 'SDN Firewall',
      image: SDN_FW,
      text: [
        'Implemented a simple SDN firewall that dropped or accepted packets based on preconfigured rules'
      ]
    },
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