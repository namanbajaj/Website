import './css/lib.css'

import { useState } from 'react'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import Icons from '../../Shared/Icons/Icons.jsx';

import { DiHtml5, DiCss3, DiJava, DiPython } from 'react-icons/di';
import { SiGithub, SiAndroid, SiC, SiLinux, SiDocker, SiReact } from 'react-icons/si'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'
import { GoLinkExternal } from "react-icons/go";
import { FaFilter } from "react-icons/fa6";

import FS from '../Home/components/Portfolio/assets/fs.png'
import SongLibraryDemo from '../Home/components/Portfolio/assets/song_library_demo.mp4'
import Docker_Cert from '../Home/components/Certifications/assets/Docker.png'
import CLF02_Cert from '../Home/components/Certifications/assets/aws-certified-cloud-practitioner.png'

const iconSize_exp = 150;
const iconSize_lang = 35;
const iconSize_port = 25;
const iconSize_cert = 100;

const experience_item = {
  id: 4,
  title: 'Prudential',
  subtitle: 'Test Experience',
  date: 'Jan 1970 - Jan 2038',
  description:
    <ul className='r_list'>
      <div className='session_name'>First Rotation</div>
      <div className='line'></div>
      <ul className='r_list'>
        <li>Test Popup</li>
      </ul>
    </ul>,
  icon: 'prudential',
}

const frontend = [
  {
    id: 1,
    icon: <DiHtml5 size={iconSize_lang} />,
    technology: 'HTML5',
    experience: 'Intermediate',
    isNotable: true
  },
  {
    id: 2,
    icon: <DiCss3 size={iconSize_lang} />,
    technology: 'CSS3',
    experience: 'Intermediate',
    isNotable: false
  }
]

const backend = [
  {
    id: 1,
    icon: <DiJava size={iconSize_lang} />,
    technology: 'Java',
    experience: 'Experienced',
    isNotable: true
  },
  {
    id: 2,
    icon: <DiPython size={iconSize_lang} />,
    technology: 'Python',
    experience: 'Experienced',
    isNotable: false
  }
]

const categories = [
  {
    id: 1,
    name: 'Frontend Development',
    key: 'frontend',
    data: frontend
  },
  {
    id: 2,
    name: 'Backend Development',
    key: 'backend',
    data: backend
  },
]

const port_data = [
  {
    id: 17,
    image: FS,
    title: 'File System using FUSE',
    icons: <div className='icon_under'>
      <SiC size={iconSize_port} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <SiLinux size={iconSize_port} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <DiJava size={iconSize_port} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <DiPython size={iconSize_port} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <DiHtml5 size={iconSize_port} /> &nbsp;&nbsp;  &nbsp;&nbsp;
      <DiCss3 size={iconSize_port} /> &nbsp;&nbsp;  &nbsp;&nbsp;
    </div>,
    github: 'https://github.com/namanbajaj/CS416/tree/Main/Project_4',
    text: <span>
      - File system written in C using FUSE <br />
      - Implements basic file system operations such as open, close, read, write, etc <br />
      - Supports multiple levels of directories <br />
      - Supports file and directory permissions <br />
    </span>,
    links: [
      {
        icon: <SiAndroid size={iconSize_port} />,
        value: 'https://play.google.com/store/apps/details?id=com.namanbajaj.quizapp',
      },
      {
        icon: <GoLinkExternal size={iconSize_port} />,
        value: '/#'
      }
    ],
    isNotable: true,
    type: 'other',
    demo: SongLibraryDemo,
    dateOfLastUpdate: '2023-12-13',
    dateOfFirstUpdate: '2023-12-13'
  },
]

const cert_data = [
  {
    id: 13,
    title: 'Getting Started with Docker',
    company: <SiDocker size={iconSize_cert} />,
    date: 'Jan 2025',
    link: Docker_Cert,
    type: 'coursework'
  },
  {
    id: 11,
    title: 'AWS CLF-02 Certification',
    company: <img src={CLF02_Cert} alt="" className='cert_image' />,
    date: 'Dec 2024',
    link: 'https://www.credly.com/badges/7b1eefa9-9700-4e4b-b5c4-8344661127e0/public_url',
    type: 'certification'
  },
]

const Lib = () => {
  const [booleanState, setBooleanState] = useState({
    frontend: false,
    backend: false,
    database: false,
    tools: false,
    other: false,
    editors: false
  });

  const toggleBoolean = (key) => {
    setBooleanState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const [filter, setFilter] = useState('notable');
  const [sortBy, setSortBy] = useState('dateOfFirstUpdate');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleSortOrderChange = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handlePopupVisible = () => {
    setIsPopupVisible((prevState) => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');

      }
      return newState;
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup_background')) {
      setIsPopupVisible(false);
      document.body.classList.remove('no-scroll');
    }
  };

  const FilterButtonsObject = ({ className }) => {
    return (
      <div className={className}>
        <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'btn' : 'active btn'}>
          All Projects
        </button>
        <button onClick={() => handleFilterChange('notable')} className={filter === 'notable' ? 'btn' : 'active btn '}>
          Notable Projects
        </button>
        <div className='vert_line'></div>
        <div className='horiz_line'></div>
        <button onClick={() => handleSortChange('dateOfFirstUpdate')} className={sortBy === 'dateOfFirstUpdate' ? 'btn' : 'active btn '}>
          Sort by Date of First Release
        </button>
        <button onClick={() => handleSortChange('dateOfLastUpdate')} className={sortBy === 'dateOfLastUpdate' ? 'btn' : 'active btn '}>
          Sort by Date of Last Update
        </button>
        <div className='vert_line'></div>
        <div className='horiz_line'></div>
        <button onClick={handleSortOrderChange} className='btn'>
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
        <button className='btn close_popup_btn' onClick={() => {
          setIsPopupVisible(false);
          document.body.classList.remove('no-scroll');
        }}>
          X
        </button>
      </div>
    )
  }

  const FilterPopup = () => {
    return (
      <div className='popup_background' onClick={handleOverlayClick}>
        <div className='popup'>
          <FilterButtonsObject className='filter_buttons_popup' />
        </div>
      </div>
    )
  }

  return (
    <div className="lib_container">
      <a className='btn test_btn'>Button</a>

      <div className="experience_grid">
        <article className="experience_item" key={experience_item.id}>
          <h2 className='item_title_text'>{experience_item.title}</h2>
          <h3 className='icon'>
            <Icons name={experience_item.icon} size={iconSize_exp} />
          </h3>
          <div className='full_grid'>
            <div className='info_grid'>
              <h3>{experience_item.subtitle}</h3>
              <p>{experience_item.date}</p>
            </div>
            {(experience_item.description != null) ? (
              <Popup
                trigger={<a className="btn r_btn"> Responsibilities </a>}
                modal
                onOpen={() => document.body.classList.add('modal-open')}
                onClose={() => document.body.classList.remove('modal-open')}
              >
                {close => (
                  <div className="pop_up_window animate__animated animate__zoomIn">
                    <div className="pop_up_header"> {experience_item.title} </div>
                    <div className="pop_up_content">
                      {experience_item.description}
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
            ) : null}
          </div>
        </article>
      </div>

      <div className='languages'>
        {
          categories.map(({ id, name, key, data }) => {
            const notableItemsCount = data.filter(item => item.isNotable).length
            const totalItemsCount = data.length
            return (
              <div className='category' key={id}>
                <h2>{name}</h2>
                <div className='content'>
                  {
                    data.map(({ id, icon, technology, experience, isNotable }) => {
                      const isVisible = booleanState[key] || isNotable
                      return (isVisible) ? (
                        <article
                          key={id}
                          className='details'
                        >
                          <div>
                            <a>
                              <h3>
                                {icon}&nbsp;{technology}
                              </h3>
                            </a>
                            <h5 className='text-light'>
                              {experience}
                            </h5>
                          </div>
                        </article>
                      ) : null
                    })
                  }
                </div>
                {
                  notableItemsCount !== totalItemsCount && (
                    <a className='btn r_btn see_more_tech' onClick={() => toggleBoolean(key)}>
                      {booleanState[key] ? 'See Less' : 'See More'}
                    </a>
                  )}
              </div>
            )
          })
        }
      </div>

      <div className='portfolio__container scroll_animation_fix'>
        {
          port_data.map(({ id, image, icons, title, github, text, demo, links }) => {
            const demobutton = <a className="btn portfolio_btns" id='demo_button'> <RiVideoLine size={iconSize_port} /> </a>;
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <Popup
                    trigger={<a href="#!"><img src={image} alt={title} /></a>}
                    modal
                    contentStyle={{ width: '30%', height: 'auto' }}
                    disabled={window.screen.width < 600}
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
                <div className="portfolio__item-cta">
                  <Popup
                    trigger={<a className="btn portfolio_btns"> <AiOutlineInfoCircle size={iconSize_port} /> </a>}
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

                  {github != null ?
                    (
                      <a href={github} className='btn portfolio_btns' target='_blank'><SiGithub size={iconSize_port} /></a>
                    ) : null
                  }

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
                                controls={true}
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
                  {links != null ? (
                    links.map((link, index) => (
                      (link.value[0] === 'h' &&
                        <a
                          href={link.value} className='btn old_button' target='_blank'
                          key={index}
                        >
                          {link.icon}
                        </a>)
                      ||
                      (link.value[0] === '/' && <a
                        href={link.value} className='btn old_button'
                        key={index}
                      >
                        {link.icon}
                      </a>)
                    ))
                  ) : null
                  }
                </div>
              </article>
            )
          })
        }

      </div>

      <div>
        <FilterButtonsObject className='filter_buttons' />

        <a className='filter_button btn portfolio_btns' onClick={() => handlePopupVisible()}><FaFilter /></a>
        {isPopupVisible && (
          <FilterPopup
            onClose={() => setIsPopupVisible(false)}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            onSortOrderChange={handleSortOrderChange}
          />
        )}

        <h1 className='lib_set_margin'>Currently sorting
          <strong>{' ' + filter}</strong> projects by date of
          <strong>{sortBy === 'dateOfFirstUpdate' ? ' release date' : ' last date of update'}</strong> in
          <strong>{sortOrder === 'asc' ? ' ascending' : ' descending'}</strong> order
        </h1>
      </div>

      <div className="certifications_grid">
        {
          cert_data.map(({ id, title, company, date, link }) => {
            return (
              <div className="certification" key={id}>
                <h2 className='item_title_text'>{title}</h2>
                <h3 className='icon'>{company}</h3>
                <div className='grid_info'>
                  <h5 className='date'>{date}</h5>
                  <a className='btn c_btn' href={link} target="_blank" rel="noreferrer">View Certificate</a>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Lib