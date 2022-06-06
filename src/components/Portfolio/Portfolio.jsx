import React from 'react'
import './portfolio.css'

import Popup from 'reactjs-popup'

import IMG1 from '../../assets/websiteportfolio.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This Website',
    github: 'https://github.com/namanbajaj/Website',
    text: 'This website was written using JavaScript, ReactJS, and CSS'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_intro_text'>
        <h1>My Recent Work</h1>
      </div>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, text }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <Popup
                    trigger={<a className="btn"> Additional Info </a>}
                    modal
                  >
                    {close => (
                      <div className="pop_up_window">
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
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
