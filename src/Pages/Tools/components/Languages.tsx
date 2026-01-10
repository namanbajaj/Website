import React from 'react';
import { useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import '../css/languages.css'
import '../../Home/components/About/css/about.css'
import { frontend } from '../data/frontend'
import { backend } from '../data/backend';
import { database } from '../data/database';
import { tools } from '../data/tools';
import { editors } from '../data/editors';
import { other } from '../data/other';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { cloneDeep } from 'lodash';
import { useLongPress } from 'use-long-press';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';


export default function Languages() {
  const [categories, setCategories] = useState([
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
  ])

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

  useEffect(() => {
    const lastNoteFetchTime = parseInt(localStorage.getItem("lastNoteFetchTime"))
    const lastNoteFetch = localStorage.getItem("lastNoteFetch")
    if (
      lastNoteFetchTime === null ||
      ((Date.now() - lastNoteFetchTime) / 86400000) >= 1 ||
      lastNoteFetch === null
    ) {
      var url = 'https://personal-portfolio-backend.deno.dev/fetchJSON?filename=languages_info.json'

      if (window.location.href.includes('localhost')) {
        url = 'https://personal-portfolio-backend.deno.dev/fetchJSON?filename=languages_info.json&password=' + process.env.REACT_APP_FETCH_JSON_PASSWORD
        // url = 'http://localhost:8000/fetchJSON?filename=languages_info.json&password=' + process.env.REACT_APP_FETCH_JSON_PASSWORD
      }


      fetch(url)
        .then(response => response.json())
        .then(data => {
          if ('Error' in data) {
            console.log("Error with fetch: " + data["Error"])
          }
          else {
            localStorage.setItem("lastNoteFetchTime", Date.now().toString())
            localStorage.setItem("lastNoteFetch", JSON.stringify(data))

            const newCategories = cloneDeep(categories)

            newCategories.forEach(category => {
              category.data.forEach(tech => {
                if (tech.technology in data) {
                  tech.info = data[tech.technology]
                }
              });
            })

            setCategories(newCategories)
          }
        })
        .catch(err => console.log(err))
    }

    else {
      const data = JSON.parse(lastNoteFetch)

      const newCategories = cloneDeep(categories)

      newCategories.forEach(category => {
        category.data.forEach(tech => {
          if (tech.technology in data) {
            tech.info = data[tech.technology]
          }
        });
      })

      setCategories(newCategories)
    }
  }, []);


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

  const handlers = useLongPress(() => {
    localStorage.setItem("lastNoteFetchTime", (Date.now() - 86400001).toString())
  },
    {
      threshold: 2000
    }
  )

  var delay = 0;

  return (
    <>
      <Header />
      <section id='Languages'>
        <div className='l_t_header'>
          <h1 {...handlers()}>
            Languages and Technologies
          </h1>
        </div>
        <div className='languages'>
          {
            categories.map((category) => {
              const notableItemsCount = category.data.filter(item => item.isNotable).length
              const totalItemsCount = category.data.length
              delay += 100
              return (
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
                                    (document
                                      .getElementsByClassName('category')[category.id - 1]
                                      .firstChild as HTMLElement)
                                      .classList
                                      .add('rotate_transform')
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
                          notes[categories[category.id - 1].key].notes?.map((note, index) => {
                            if (
                              index === notes[categories[category.id - 1].key].notes.length - 1 &&
                              note.includes('Experience:')
                            ) {
                              const monthYearExp = note.split(': ')[1]
                              const expDate = new Date(monthYearExp.split('-').reverse().join('-') + '-01').getTime()
                              note = 'Experience: ' + parseInt((((new Date()).getTime() - (expDate)) / 31556952000).toString()) + ' years'
                            }
                            return <div>
                              <h3>
                                {note}
                              </h3>
                            </div>
                          })
                        }
                      </div>
                      <a className='btn' onClick={() => {
                        (document.getElementsByClassName('category')[category.id - 1].firstChild as HTMLElement).classList.remove('rotate_transform')
                      }}>
                        Go back
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section >
      <Footer />
    </>
  )
}