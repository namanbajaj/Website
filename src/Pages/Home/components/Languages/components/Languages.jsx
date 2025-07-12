import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import '../css/languages.css'
import '../../About/css/about.css'
import { frontend } from '../data//frontend.jsx'
import { backend } from '../data//backend.jsx';
import { database } from '../data//database.jsx';
import { tools } from '../data//tools.jsx';
import { editors } from '../data//editors.jsx';
import { other } from '../data//other.jsx';
import { IoInformationCircleOutline } from 'react-icons/io5';

const Languages = () => {
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
    {
      id: 3,
      name: 'Database Technologies',
      key: 'database',
      data: database
    },
    {
      id: 4,
      name: 'Developer Tools',
      key: 'tools',
      data: tools
    },
    {
      id: 5,
      name: 'Editors/IDEs',
      key: 'editors',
      data: editors
    },
    {
      id: 6,
      name: 'Other',
      key: 'other',
      data: other
    },
  ]

  var delay = 0;

  const [notes, setNotes] = useState({
    frontend: { name: '', notes: [''] },
    backend: { name: '', notes: [''] },
    database: { name: '', notes: [''] },
    tools: { name: '', notes: [''] },
    editors: { name: '', notes: [''] },
    other: { name: '', notes: [''] }
  });

  const setCategoryNotes = (key, value) => {
    setNotes(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <section id='Languages'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1} delay={delay} animateOnce={true}>
        <div className='l_t_header'>
          <h1>
            Languages and Technologies
          </h1>
        </div>
      </ScrollAnimation>
      <div className='languages'>
        {
          categories.map((category) => {
            const notableItemsCount = category.data.filter(item => item.isNotable).length
            const totalItemsCount = category.data.length
            delay += 100
            return (
              <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={1} delay={delay} animateOnce={true}>
                <div className='category' key={category.id}>
                  <div className='category_inner'>
                    <div className='category_front'>
                      <h2>{category.name}</h2>
                      <div className='content'>
                        {
                          category.data.map(({ id, icon, technology, experience, isNotable, info }) => {
                            const isVisible = booleanState[category.key] || isNotable
                            return (isVisible) ? (
                              <article
                                key={id}
                                className='details'
                              >
                                <div className='language_item' onClick={() => {
                                  if (info) {
                                    document.getElementsByClassName('category')[category.id - 1].firstChild.classList.add('rotate_transform')
                                  }
                                  setCategoryNotes(categories[category.id - 1].key, { name: technology, notes: info })
                                }}>
                                  <h3>
                                    {icon}&nbsp;{technology}
                                  </h3>
                                  <div className={'experience_info_container' + (info ? ' set_cursor_click' : '')}>
                                    {info && <IoInformationCircleOutline />}
                                    <h5 className='text-light'>
                                      {experience}
                                    </h5>
                                  </div>
                                </div>
                              </article>
                            ) : null
                          })
                        }
                      </div>
                      {
                        notableItemsCount !== totalItemsCount && (
                          <a className='btn r_btn see_more_tech' onClick={() => toggleBoolean(category.key)}>
                            {booleanState[category.key] ? 'See Less' : 'See More'}
                          </a>
                        )}
                    </div>
                    <div className='category_back'>
                      <h2>{notes[categories[category.id - 1].key].name}</h2>
                      <div className='note_grid'>
                        {
                          notes[categories[category.id - 1].key].notes?.map((note) => {
                            return <div><h3>{note}</h3></div>
                          })
                        }
                      </div>
                      <a className='btn' onClick={() => {
                        document.getElementsByClassName('category')[category.id - 1].firstChild.classList.remove('rotate_transform')
                      }}>Go back</a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            )
          })
        }
      </div>
    </section >
  )
}

export default Languages