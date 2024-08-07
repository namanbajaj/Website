import React, { useState } from 'react'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import 'animate.css';

import { data } from './data'

import { SiGithub } from 'react-icons/si'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'

import { FaFilter } from "react-icons/fa6";

const iconSize = 25;

const All = () => {
  const [filter, setFilter] = useState('notable');
  const [sortBy, setSortBy] = useState('dateOfFirstUpdate');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setIsPopupVisible(false);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setIsPopupVisible(false);
  };

  const handleSortOrderChange = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    setIsPopupVisible(false);
  };

  const handlePopupVisible = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup_background')) {
      setIsPopupVisible(false);
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
        ? new Date(a.dateOfFirstUpdate) - new Date(b.dateOfFirstUpdate)
        : new Date(b.dateOfFirstUpdate) - new Date(a.dateOfFirstUpdate);
    }
    if (sortBy === 'dateOfLastUpdate') {
      return sortOrder === 'asc'
        ? new Date(a.dateOfLastUpdate) - new Date(b.dateOfLastUpdate)
        : new Date(b.dateOfLastUpdate) - new Date(a.dateOfLastUpdate);
    }
    return 0;
  });

  const FilterPopup = ({ onClose, onFilterChange, onSortChange, onSortOrderChange }) => {
    return (
      <div className='popup_background' onClick={handleOverlayClick}>
        <div className='popup'>
          <div className='filter_buttons_popup'>
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
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='filter_buttons'>
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
      </div>

      <a className='filter_button btn portfolio_btns' onClick={() => handlePopupVisible()}><FaFilter /></a>
      {isPopupVisible && (
        <FilterPopup
          onClose={() => setIsPopupVisible(false)}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          onSortOrderChange={handleSortOrderChange}
        />
      )}
      <div className='portfolio__container'>
        {
          sortedData.map(({ id, image, icons, title, github, text, demo, links }) => {
            const demobutton = <a className="btn portfolio_btns" id='demo_button'> <RiVideoLine size={iconSize} /> </a>;
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <Popup
                    trigger={<a href="javascript:void(0);"><img src={image} alt={title} /></a>}
                    modal
                    contentStyle={{ width: '30%', height: 'auto' }}
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
                    trigger={<a className="btn portfolio_btns"> <AiOutlineInfoCircle size={iconSize} /> </a>}
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
                      <a href={github} className='btn portfolio_btns' target='_blank'><SiGithub size={iconSize} /></a>
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
                                controls={1}
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
                    links.map((link) => (
                      (link.value[0] === 'h' &&
                        <a
                          href={link.value} className='btn old_button' target='_blank'>
                          {link.icon}
                        </a>)
                      ||
                      (link.value[0] === '/' && <a
                        href={link.value} className='btn old_button'>
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
    </div>
  )
}


export default All