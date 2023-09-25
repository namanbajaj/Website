import React from 'react'
import './experience.css'
import Icons from '../Icons/Icons.jsx'
import Popup from 'reactjs-popup'

import { data } from './data.jsx'

const iconSize = 150;

const Experience = () => {
  return (
    <section id='Experience'>
      <div className="introtext">
        <h1>
          Work Experience
        </h1>
      </div>

      <div className="experience_grid">
        {data.map((item) => (
          <article className="experience_item">
            <h2 className='item_title_text'>{item.title}</h2>
            <h3 className='icon'>
              <Icons name={item.icon} size={iconSize} />
            </h3>
            <div className='full_grid'>
              <div className='info_grid'>
                <h3>{item.subtitle}</h3>
                <p>{item.date}</p>
              </div>
              {(item.description != null) ? (
                <Popup
                  trigger={<a className="btn r_btn"> Responsibilities </a>}
                  modal
                  onOpen={() => document.body.classList.add('modal-open')}
                  onClose={() => document.body.classList.remove('modal-open')}              
                >
                  {close => (
                    <div className="pop_up_window animate__animated animate__zoomIn">
                      <div className="pop_up_header"> {item.title} </div>
                      <div className="pop_up_content">
                        {item.description}
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
        ))}
      </div>

    </section>
  )
}

export default Experience