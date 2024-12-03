import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import './languages.css'
import '../About/about.css'
import { frontend } from './data/frontend.jsx'
import { backend } from './data/backend.jsx';
import { database } from './data/database.jsx';
import { tools } from './data/tools.jsx';
import { editors } from './data/editors.jsx';
import { other } from './data/other.jsx';

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
          categories.map(({ id, name, key, data }) => {
            const notableItemsCount = data.filter(item => item.isNotable).length
            const totalItemsCount = data.length
            delay += 100
            return (
              <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={1} delay={delay} animateOnce={true}>
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
                              <h3>
                                {icon}&nbsp;{technology}
                              </h3>
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
                    notableItemsCount != totalItemsCount && (
                      <a className='btn r_btn see_more_tech' onClick={() => toggleBoolean(key)}>
                        {booleanState[key] ? 'See Less' : 'See More'}
                      </a>
                    )}
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