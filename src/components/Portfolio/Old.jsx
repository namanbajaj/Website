import React from 'react'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'animate.css';
import Collapsible from 'react-collapsible';

import { data } from './data'
import { RiVideoLine } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const iconSize = 25;

const sortedData = data.sort((a, b) => {
  return a.dateOfLastUpdate < b.dateOfLastUpdate ? 1 : -1;  // Sort in descending order
  // return a.dateOfLastUpdate > b.dateOfLastUpdate ? 1 : -1;  // Sort in ascending order
});

const Old = () => {
  return (
    <Collapsible trigger="Other Projects >" triggerWhenOpen="Other Projects v" className='older_projects_intro' openedClassName='older_projects_intro'>
      <div className="portfolio__container_old">
        {
          sortedData.map(({ id, image, icons, title, github, text, demo, links, isNotable }) => {
            if (!isNotable) {
              const demobutton = <a className="btn old_button portfolio_btns" id='demo_button'> <RiVideoLine size={iconSize} /> </a>;
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
                      trigger={<a className="btn old_button portfolio_btns"> <AiOutlineInfoCircle size={iconSize} /> </a>}
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

                    {github != null ?
                      (
                        <a href={github} className='btn old_button portfolio_btns' target='_blank'><SiGithub size={iconSize} /></a>
                      ) : <p></p>
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

                    {links != null ? (
                      links.map((link) => (
                        <a
                          href={link.value} className='btn old_button portfolio_btns' target='_blank'>
                          {link.icon}
                        </a>
                      ))
                    ) : null
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