import React, { ReactElement, useState } from "react";

import "./class.css"
import Popup from "reactjs-popup";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface TechModel {
  tech: string,
  icon: ReactElement
}

interface ProjectModel {
  title: string,
  image: string,
  text: string[]
}

interface ClassModel {
  className: string,
  url: string,
  techs: TechModel[],
  projects: ProjectModel[]
};

const iconSize = 25;

const swiper_breakpoints = {
  1600: {
    slidesPerView: 4.5
  },
  1024: {
    slidesPerView: 3.5
  },
  600: {
    slidesPerView: 2.5
  }
};

export default function Class(props: ClassModel) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const maskClass = `carousel-wrapper 
    ${isBeginning ? 'is-start' : ''} 
    ${isEnd ? 'is-end' : ''}`;

  return (
    <section id="ClassItem">
      <>
        <div className="class_intro"><h1>{props.className}</h1></div>
        <div className="class_link">
          <a className="btn" href={props.url} target="_blank">Class Link</a>
        </div>
        <br />
        <br />
        <div className="class_item_intro"><h3>Languages, Techs, & Tools</h3></div>
        <div className="omscs_languages">
          {
            props.techs.map((item) => {
              return (
                <div className="omscs_tech_item">
                  <div className="omscs_tech_item_icon">
                    {item.icon}
                  </div>
                  <div className="omscs_tech_item_text">
                    {item.tech}
                  </div>
                </div>
              )
            })
          }
        </div>
        <br />
        <div className="class_item_intro"><h3>Projects/Classwork</h3></div>
        <div className={"omscs_portfolio_container " + maskClass}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1.5}
            breakpoints={swiper_breakpoints}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsBeginning(false);
              setIsEnd(false);
            }}
          >
            {props.projects.map((item) => {
              return (
                <SwiperSlide>
                  <article className='omscs_portfolio_item'>
                    <div className="omscs_portfolio__item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="omscs_portfolio_cta_text">
                      <h3 className='title_and_languages'>
                        <div className='portfolio_item_title_text'>{item.title}</div>
                      </h3>

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
                                  <div className="pop_up_header"> {item.title} </div>
                                  <div className="pop_up_content">
                                    <span>
                                      {
                                        item.text.map((item) => {
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
                      </div>

                    </div>
                  </article>
                </SwiperSlide>)
            })}
          </Swiper>
        </div>
        <br /><br />
      </>
    </section>
  );
}