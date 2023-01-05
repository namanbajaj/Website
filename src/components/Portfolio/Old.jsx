import React from 'react'
import './portfolio.css'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'animate.css';
import Collapsible from 'react-collapsible';

import { data } from './data'

const Old = () => {
  return (
    // <div className='older_projects_full'>
    // <div className='older_projects_intro'>
    //   <h1>Older Projects</h1>
    // </div>

    <Collapsible trigger="Older Projects >" triggerWhenOpen="Older Projects v" className='older_projects_intro' openedClassName='older_projects_intro'>
      <div className="portfolio__container_old">
        {
          data.map(({ id, image, icons, title, github, text, demo, link, isOldProject }) => {
            if (isOldProject) {
              const demobutton = <a className="btn old_button" id='demo_button'> Video Demo </a>;

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
                    {github != null ?
                      (
                        <a href={github} className='btn old_button' target='_blank'>Github</a>
                      ) : <p></p>
                    }

                    <Popup
                      trigger={<a className="btn old_button"> More Info </a>}
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
                              className="btn old_button"
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
                                className="btn old_button"
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

                    {link != null ? (
                      <a
                        href={link} className='btn old_button' target='_blank'>
                        Link
                      </a>
                    ) : <p></p>
                    }
                  </div>
                </article>
              )
            }
          })
        }
      </div>
    </Collapsible>
    // </div>
  )
}

export default Old