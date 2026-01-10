import React from 'react'

import '../css/languages.css'

import { data } from '../data/data'

export default function Languages() {
  return (
    <section id='Languages'>
      <div className='games_l_t_header'>
        <h1>
          Languages and Technologies
        </h1>
      </div>
      <div className='games_languages'>
        <div className='games_content'>
          {
            data.map(({ id, icon, technology }) => {
              return (
                <div key={id} className='game_tech_details'>
                  <div className='icon_flex_block'>
                    <h3 className='games_tech_label'>
                      {icon}
                    </h3>
                    <h3 className='games_tech_label'>{technology}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section >
  )
}