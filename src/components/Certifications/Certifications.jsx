import React, { useState } from 'react'
import './certifications.css'
import ScrollAnimation from 'react-animate-on-scroll';

import { data } from './data'
import { FaFilter } from 'react-icons/fa6';

const Certifications = () => {
  const [filter, setFilter] = useState('certifications');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
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
    if (filter === 'certifications') return project.type === 'certification';
    if (filter === 'coursework') return project.type === 'coursework';
  });

  const FilterButtonsObject = ({ className }) => {
    return (
      <div className={className}>
        <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'btn' : 'active btn'}>
          All
        </button>
        <button onClick={() => handleFilterChange('certifications')} className={filter === 'certifications' ? 'btn' : 'active btn '}>
          Certifications
        </button>
        <button onClick={() => handleFilterChange('coursework')} className={filter === 'coursework' ? 'btn' : 'active btn '}>
          Coursework
        </button>
        <div className='vert_line' style={{ visibility: 'hidden' }}></div>
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

  const isMobile = window.screen.width <= 600

  return (
    <section id='Certifications'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={isMobile ? 0 : 1} animateOnce={true} offset={isMobile ? 0 : 150}>
        <div className="introtext">
          <h1>
            Certifications & Coursework
          </h1>
        </div>

        <FilterButtonsObject className='filter_buttons' />

        <a className='filter_button btn portfolio_btns' onClick={() => handlePopupVisible()}><FaFilter /></a>
        {isPopupVisible && (
          <FilterPopup
            onClose={() => setIsPopupVisible(false)}
            onFilterChange={handleFilterChange}
          />
        )}

        <div className="certifications_grid">
          {
            filteredProjects.map(({ id, title, company, date, link }) => {
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
      </ScrollAnimation>
    </section >
  )
}

export default Certifications