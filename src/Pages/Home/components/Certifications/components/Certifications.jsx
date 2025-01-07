import React, { useState } from 'react'
import '../css/certifications.css'
import ScrollAnimation from 'react-animate-on-scroll';

import { data } from '../data/data'
import { FaFilter } from 'react-icons/fa6';

const Certifications = () => {
  const [filter, setFilter] = useState('certifications');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // setIsPopupVisible(false);
    // document.body.classList.remove('no-scroll');
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
        <button className='btn close_popup_btn' onClick={() => {
          setIsPopupVisible(false);
          document.body.classList.remove('no-scroll');
        }}>
          X
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

  return (
    <section id='Certifications'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
        <div className="introtext">
          <h1>
            Certifications & Coursework
          </h1>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
        <FilterButtonsObject className='filter_buttons' />
      </ScrollAnimation>

      <a className='filter_button btn portfolio_btns' onClick={() => handlePopupVisible()}><FaFilter /></a>
      {isPopupVisible && (
        <FilterPopup
          onClose={() => setIsPopupVisible(false)}
          onFilterChange={handleFilterChange}
        />
      )}

      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
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