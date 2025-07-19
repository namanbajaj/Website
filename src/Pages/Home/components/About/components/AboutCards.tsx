import React from 'react'

import { cards_data } from '../data/CardsData'
import { cd_data } from '../data/CurrentDevData'
import { gi_data } from '../data/GenInfoData'

import '../css/about.css'
import ScrollAnimation from 'react-animate-on-scroll'

export default function AboutCards() {
  return (
    <div className='cards_overview'>
      <div className='info_cards'>
        {cards_data.map((card) => {
          return (
            <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={1} animateOnce={true}>
              <div className='card' key={card.key}>
                <h2>{card.title}</h2>
                <div className='content_cards'>
                  <h3 className='logo center_text'>
                    {card.logo}
                  </h3>

                  <h5 className='text-light center_text'>
                    {card.info.map((item, index) => (
                      <div className='about_me_line_item' key={index}>
                        {window.screen.width <= 600 && '- '}{item}
                      </div>
                    )
                    )}
                  </h5>
                </div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>

      <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={1} animateOnce={true}>
        <div className='about__me__geninfo'>
          <div className='about_me_text_info'>
            <h5>
              {gi_data.map((data, index) =>
              (
                <div key={index}>
                  {data}
                  <br /> <br />
                </div>
              )
              )}
            </h5>
          </div>

          <div className='about_me_development'>
            <h1 className='working_on'>
              Current Development:
            </h1>
            <ul className='working_on_list'>
              {cd_data.map((data) => {
                return (
                  <li className='main_list_item' key={data.key}>
                    <h2>{data.main_bullet}</h2>
                    <ul className='working_on_list'>
                      {data.sub_bullets && data.sub_bullets.map((item, index) => (
                        <li key={index}>
                          <h2 dangerouslySetInnerHTML={{ __html: item }} />
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
