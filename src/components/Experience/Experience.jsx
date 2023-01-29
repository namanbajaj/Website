import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='Experience'>
      <div className="introtext">
        <h1>
          Work Experience
        </h1>
      </div>

      <div className="experience_grid">
        <article className="experience_item">
          <h2 className='item_title_text'>Prudential</h2>
          <h3>Software Engineering Intern</h3>
          <p>Jun 2023 - Aug 2023</p>
        </article>

        <article className="experience_item">
          <h2 className='item_title_text'>Rutgers University - New Brunswick</h2>
          <h3>Math Grader</h3>
          <p>Jan 2023 - May 2023</p>
        </article>

        <article className="experience_item">
          <h2 className='item_title_text'>Dow Jones</h2>
          <h3>Finance Intern</h3>
          <p>Jun 2021 - Aug 2021</p>
        </article>
      </div>

    </section>
  )
}

export default Experience