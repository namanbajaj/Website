import React from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'animate.css';

import { data } from '../data/data'

import { SiGithub } from 'react-icons/si'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const iconSize = 25;

const RUAll = () => {
  return (
    <div>
      <div className='portfolio__container'>
        {
          data.map(({ id, image, icons, title, github, text, demo, links }) => {
            const demobutton = <a className="btn portfolio_btns" id='demo_button'> <RiVideoLine size={iconSize} /> </a>;
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <Popup
                    trigger={<a href="#!"><img src={image} alt={title} /></a>}
                    modal
                    contentStyle={{ width: '30%', height: 'auto' }}
                    disabled={window.screen.width < 600}
                  >
                    {
                      // @ts-ignore - issue with reactjs-popup library
                      close => (
                        <div>
                          <div className='popup_background' onClick={
                            () => {
                              close()
                            }
                          }></div>
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
                    {
                      // @ts-ignore - issue with reactjs-popup library
                      close => (
                        <div>
                          <div className='popup_background' onClick={
                            () => {
                              close()
                            }
                          }></div>
                          <div className="pop_up_window animate__animated animate__zoomIn">
                            <div className="pop_up_header"> {title} </div>
                            <div className="pop_up_content">
                              <span>
                                {
                                  text.map((item) => {
                                    return (
                                      <div>
                                        {"- " + item}
                                      </div>
                                    )
                                  })
                                }
                              </span>
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
                      {
                        // @ts-ignore - issue with reactjs-popup library
                        close => (
                          <div className="pop_up_window_video animate__animated animate__zoomIn">
                            <div className="pop_up_content_video">
                              <div className='player-wrapper'>
                                <ReactPlayer
                                  src={demo}
                                  controls={true}
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
                    links.map((link, index) => (
                      (link.value[0] === 'h' &&
                        <a
                          href={link.value} className='btn old_button' target='_blank'
                          key={index}
                        >
                          {link.icon}
                        </a>)
                      ||
                      (link.value[0] === '/' &&
                        <Link to={link.value} className='btn old_button' key={index}>
                          {link.icon}
                        </Link>
                      )
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

export default RUAll