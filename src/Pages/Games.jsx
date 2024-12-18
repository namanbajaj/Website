import React from 'react'
import '../components/Portfolio/portfolio.css'

import { data } from './data/games';
import { techs } from './data/techs'

import 'animate.css';
import Popup from 'reactjs-popup'

import { SiGithub } from 'react-icons/si'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'
import Footer from '../components/Footer/Footer';

const iconSize = 25;

const Games = () => {
  return (
    <section id='games'>
      <a href="/#" className='btn home_btn'>Home</a>

      <div className='l_t_header'>
        <h1>
          Languages and Technologies
        </h1>
      </div>
      <div className='languages'>
        <div className='category'>
          <h2>Tools</h2>
          <div className='games content'>
            {
              techs.map(({ id, icon, technology }) => {
                return (
                  <article
                    key={id}
                    className='details'
                  >
                    <div className='icon_flex_block'>
                      <h3>
                        {icon}
                      </h3>
                      <h3>{technology}</h3>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='gap'></div>

      <div className='portfolio_intro_text'>
        <h1>Games</h1>
      </div>

      <div className='portfolio__container'>
        {
          data.map(({ id, image, icons, title, github, text, links }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <Popup
                    trigger={<a href="#!"><img src={image} alt={title} /></a>}
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
                    trigger={<a className="btn portfolio_btns"> <AiOutlineInfoCircle size={iconSize} /> </a>}
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

                  {github != null ?
                    (
                      <a href={github} className='btn portfolio_btns' target='_blank'><SiGithub size={iconSize} /></a>
                    ) : null
                  }

                  {links != null ? (
                    links.map((link, index) => (
                      (link.value[0] === 'h' &&
                        <a
                          href={link.value} className='btn old_button' target='_blank' key={index}>
                          {link.icon}
                        </a>)
                      ||
                      (link.value[0] === '/' && <a
                        href={link.value} className='btn old_button' key={index}>
                        {link.icon}
                      </a>)
                    ))
                  ) : null
                  }
                </div>
              </article>
            )
          })
        }
      </div>
    <Footer/>
    </section >

  )
}

export default Games
