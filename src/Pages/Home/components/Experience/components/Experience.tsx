import React, { useState } from 'react'

import '../css/experience.css'

import Popup from 'reactjs-popup'
import ScrollAnimation from 'react-animate-on-scroll';

import Icons from '../../../../../Shared/Icons/Icons';

import { data } from '../data/data'

const iconSize = 150;

function CloseButton({ close }) {
  return (<div>
    <a
      className="btn"
      onClick={() => close()}
    >
      Close
    </a>
  </div>
  )
}

export default function Experience() {
  var duration = 0;
  const [count, setCount] = useState(0);
  return (
    <section id='Experience'>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1.5} animateOnce={true}>
        <div className="introtext">
          <h1>
            Work Experience
          </h1>
        </div>
      </ScrollAnimation>

      <div className="experience_grid">
        {data.map((item) => {
          duration += 100
          return (
            <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={1} delay={duration} animateOnce={true}>
              <article className="experience_item" key={item.id}>
                <h2 className='item_title_text'>{item.title}</h2>
                <h3 className='icon'>
                  <Icons name={item.icon} size={iconSize} />
                </h3>
                <div className='full_grid'>
                  <div className='info_grid'>
                    <h3>{item.subtitle}</h3>
                    <p>{item.date}</p>
                  </div>
                  {(item.description != null) && (
                    <Popup
                      trigger={<a className="btn r_btn"> Responsibilities </a>}
                      modal
                      onOpen={() => {
                        document.body.classList.add('modal-open')
                        setCount(0)
                        document.getElementById('prev_btn_resp_popup')?.classList.add('btn_disabled');
                      }}
                      onClose={() => document.body.classList.remove('modal-open')}
                    >
                      {
                        // @ts-ignore - issue with reactjs-popup library
                        ((close) => (
                          <div>
                            <div className='popup_background' onClick={() => close()} />
                            <div className="pop_up_window animate__animated animate__zoomIn">
                              <div className="pop_up_header"> {item.title} </div>

                              {
                                <div className="pop_up_content">
                                  {
                                    item.do_multi_page ?
                                      item.description.props.children.toReversed()[count] :
                                      item.description
                                  }
                                </div>
                              }

                              {
                                item.do_multi_page ? <div className='pop_up_actions prev_next_popup_btn'>
                                  <a className='btn' id='prev_btn_resp_popup' onClick={() => {
                                    document.getElementById('next_btn_resp_popup').classList.remove('btn_disabled');
                                    if (count - 1 === 0) {
                                      document.getElementById('prev_btn_resp_popup').classList.add('btn_disabled');
                                    }
                                    if (count !== 0) {
                                      setCount(count - 1)
                                    }
                                  }}>
                                    Newer
                                  </a>

                                  <CloseButton close={close} />
                                  
                                  <a className='btn' id='next_btn_resp_popup' onClick={() => {
                                    document.getElementById('prev_btn_resp_popup').classList.remove('btn_disabled');
                                    if (count + 1 === item.description.props.children.length - 1) {
                                      document.getElementById('next_btn_resp_popup').classList.add('btn_disabled');
                                    }
                                    if (count !== item.description.props.children.length - 1) {
                                      setCount(count + 1)
                                    }
                                  }}>Older</a>
                                </div> :
                                  <div className="pop_up_actions">
                                    <CloseButton close={close} />
                                  </div>
                              }
                            </div>
                          </div>
                        ))
                      }
                    </Popup>
                  )}
                </div>
              </article>
            </ScrollAnimation>
          )
        })}
      </div>
    </section>
  )
}
