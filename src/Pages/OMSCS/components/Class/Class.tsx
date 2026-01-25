import React, { ReactElement } from "react";

import "./class.css"
import Popup from "reactjs-popup";
import { AiOutlineInfoCircle } from "react-icons/ai";

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
  summary: string,
  techs: TechModel[],
  projects: ProjectModel[]
};

const iconSize = 25;

export default function Class(props: ClassModel) {
  return (
    <section id="ClassItem">
      <>
        <div className="class_intro"><h1>{props.className}</h1></div>
        <div className="class_link">
          <a className="btn" href={props.url} target="_blank">Class Link</a>
        </div>
        <br />
        <div className="summary_intro class_item_intro"><h3>Summary</h3></div>
        <div className="summary_text">
          {props.summary}
        </div>
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
        <div className="portfolio__container">
          {props.projects.map((item) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <h3 className='title_and_languages'>
                    <div className='portfolio_item_title_text'>{item.title}</div>
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
              </article>)
          })}
        </div>
        <br /><br />
      </>
    </section>
  );
}