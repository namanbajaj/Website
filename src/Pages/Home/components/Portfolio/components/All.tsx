import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'animate.css';

import { data } from '../data/data'

import { SiGithub } from 'react-icons/si'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'
import { FaFilter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const iconSize = 25;

const All = () => {
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
        document.getElementsByClassName('z_index_fix')[0].classList.add('scroll_animation_fix')
      } else {
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('z_index_fix')[0].classList.remove('scroll_animation_fix')
      }
      return newState;
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup_background')) {
      closePopup();
    }
  };

  const filteredProjects = data.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'notable') return project.isNotable;
    return true;
  });

  const sortedData = filteredProjects.sort((a, b) => {
    if (sortBy === 'dateOfFirstUpdate') {
      return sortOrder === 'asc'
        ? new Date(a.dateOfFirstUpdate).getTime() - new Date(b.dateOfFirstUpdate).getTime()
        : new Date(b.dateOfFirstUpdate).getTime() - new Date(a.dateOfFirstUpdate).getTime();
    }
    if (sortBy === 'dateOfLastUpdate') {
      return sortOrder === 'asc'
        ? new Date(a.dateOfLastUpdate).getTime() - new Date(b.dateOfLastUpdate).getTime()
        : new Date(b.dateOfLastUpdate).getTime() - new Date(a.dateOfLastUpdate).getTime();
    }
    return 0;
  });

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
        <button className='btn close_popup_btn' onClick={() => closePopup()}>
          X
        </button>
      </div>
    )
  }

  const closePopup = () => {
    setIsPopupVisible(false);
    document.body.classList.remove('no-scroll');
    document.getElementsByClassName('z_index_fix')[0].classList.remove('scroll_animation_fix')
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
    <div>
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.5} animateOnce={true}>
        <FilterButtonsObject className='filter_buttons' />

        <a className='filter_button btn portfolio_btns' onClick={() => handlePopupVisible()}><FaFilter /></a>
        {isPopupVisible && (
          <FilterPopup />
        )}
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.5} delay={500} animateOnce={true} className='z_index_fix'>
        <div className='portfolio__container'>
          {
            sortedData.map(({ id, image, icons, title, github, text, demo, links }) => {
              const demobutton = <a className="btn portfolio_btns" id='demo_button'> <RiVideoLine size={iconSize} /> </a>;
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <Popup
                      trigger={<a href="#!"><img src={image} alt={title} /></a>}
                      modal
                      contentStyle={{ width: '30%', height: 'auto' }}
                      disabled={window.screen.width < 600}
                    >
                      {
                        // @ts-ignore - issue with reactjs-popup library
                        close => (
                          <div>
                            <div className='popup_background' onClick={
                              () => {
                                close()
                              }
                            }></div>
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
                      trigger={<a className="btn portfolio_btns"> <AiOutlineInfoCircle size={iconSize} /> </a>}
                      modal
                    >
                      {
                        // @ts-ignore - issue with reactjs-popup library
                        close => (
                          <div>
                            <div className='popup_background' onClick={
                              () => {
                                close()
                              }
                            }></div>
                            <div className="pop_up_window animate__animated animate__zoomIn">
                              <div className="pop_up_header"> {title} </div>
                              <div className="pop_up_content">
                                <span>
                                  {
                                    text.map((item) => {
                                      return (
                                        <div>
                                          {"- " + item}
                                        </div>
                                      )
                                    })
                                  }
                                </span>
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
                          </div>
                        )}
                    </Popup>

                    {github != null ?
                      (
                        <a href={github} className='btn portfolio_btns' target='_blank'><SiGithub size={iconSize} /></a>
                      ) : null
                    }

                    {demo != null ? (
                      < Popup
                        trigger={demobutton}
                        modal
                      >
                        {
                          // @ts-ignore - issue with reactjs-popup library
                          close => (
                            <div className="pop_up_window_video animate__animated animate__zoomIn">
                              <div className="pop_up_content_video">
                                <div className='player-wrapper'>
                                  <ReactPlayer
                                    src={demo}
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
                        (link.value[0] === '/' &&
                          <Link to={link.value} className='btn old_button' key={index}>
                            {link.icon}
                          </Link>
                        )
                      ))
                    ) : null
                    }
                  </div>
                </article>
              )
            })
          }
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default All