import React, { useState } from 'react'

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
    // {
    //   id: 7,
    //   name: 'Gaming',
    //   key: 'gaming',
    //   data: gaming
    // }
  ]

  return (
    <div>
      <div className='l_t_header'>
        <h1>
          Languages and Technologies
        </h1>
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
                          <h4>
                            <h3>
                              {icon}&nbsp;{technology}
                            </h3>
                            <h5 className='text-light'>
                              {experience}
                            </h5>
                          </h4>
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
            )
          })
        }
      </div>
    </div >
  )
}

export default Languages