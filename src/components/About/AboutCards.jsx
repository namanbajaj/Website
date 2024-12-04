import React from 'react'

import { cards_data } from './data/CardsData'
import { cd_data } from './data/CurrentDevData'
import { gi_data } from './data/GenInfoData'

import './about.css'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutCards = () => {
  const isMobile = window.screen.width <= 600

  return (
    <div className='cards_overview'>
      <div className='info_cards'>
        {cards_data.map(({ key, title, logo, info }) => {
          return (
            <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={isMobile ? 0 : 1} animateOnce={true} offset={isMobile ? 0 : 150}>
              <div className='card' key={key}>
                <h2>{title}</h2>
                <div className='content_cards'>
                  <h3 className='logo center_text'>
                    {logo}
                  </h3>

                  <h5 className='text-light center_text'>
                    {info.map((item, index) => (
                      <div className='about_me_line_item' key={index}>{window.screen.width <= 600 && '- '}{item}</div>
                    )
                    )}
                  </h5>
                </div>
              </div>
            </ScrollAnimation>
          )
        }
        )}
      </div>
      <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={isMobile ? 0 : 1} animateOnce={true} offset={isMobile ? 0 : 150}>
        <div className='about__me__geninfo'>
          <div className='about_me_text_info'>
            <h5>
              {gi_data.map((item, index) =>
                (<div key={index}>{item} <br /> <br /></div>)
              )}
            </h5>
          </div>

          <div className='about_me_development'>
            <h1 className='working_on'>
              Current Development:
            </h1>
            <ul className='working_on_list'>
              {cd_data.map(({ key, main_bullet, sub_bullets }) => {
                return (
                  <li className='main_list_item' key={key}>
                    <h2>{main_bullet}</h2>
                    <ul className='working_on_list'>
                      {sub_bullets.map((item, index) => (
                        <li key={index}>
                          <h2 dangerouslySetInnerHTML={{ __html: item }}>
                          </h2>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </ScrollAnimation >
    </div>

  )
}

export default AboutCards