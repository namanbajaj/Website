import React from 'react'
import './experience.css'
import Icons from '../Icons/Icons.jsx'
import Popup from 'reactjs-popup'

const iconSize = 150;

const data = [
  {
    id: 3,
    title: 'Prudential',
    subtitle: 'Software Engineering Intern',
    date: 'Jun 2023 - Aug 2023',
    description: 'Starting later this summer',
    icon: 'prudential',
  },

  {
    id: 2,
    title: 'Rutgers University - New Brunswick',
    subtitle: 'Math Grader',
    date: 'Jan 2023 - May 2023',
    description: <ul className='r_list'>
      <li>Current Position</li>
      <li>Grading for 01:640:300- Introduction to Mathematical Reasoning</li>
      <li>Grading homework for 20+ students</li>
      <li>Helping students with their questions</li>
    </ul>,
    icon: 'rutgers',
  },

  {
    id: 1,
    title: 'Dow Jones',
    subtitle: 'Finance Intern',
    date: 'Jun 2021 - Aug 2021',
    description: <ul className='r_list'>
      <li>Finance Intern on Dow Jones FSMR (Financial Systems and Management Reporting) Team</li>
      <li>Worked with SAP S/4 Hana ERP System including SAP Fiori, SAP GUI, BPC, and Microsoft Analysis for Office for Reporting</li>
      <li>Built automation model in Excel for detailed testing and validation of FX Impact at the line item level, involved pulling 25+ reports to build model</li>
      <li>Contributed to 15+ finance projects, such as Business Area implementation, roll forward balances, FX validation</li>
      <li>5+ presentations, including presentation on how to retain Wall Street Journal subscribers' post-graduation presented to CEO and CFO, and presentation of Excel Automation Project presented company-wide</li>
    </ul>,
    icon: 'dowjones',
  },
]


const Experience = () => {
  return (
    <section id='Experience'>
      <div className="introtext">
        <h1>
          Work Experience
        </h1>
      </div>

      <div className="experience_grid">
        {data.map((item) => (
          <article className="experience_item">
            <h2 className='item_title_text'>{item.title}</h2>
            <h3 className='icon'>
              <Icons name={item.icon} size={iconSize} />
            </h3>
            <div className='full_grid'>
              <div className='info_grid'>
                <h3>{item.subtitle}</h3>
                <p>{item.date}</p>
              </div>
              <Popup
                trigger={<a className="btn r_btn"> Responsibilities </a>}
                modal
              >
                {close => (
                  <div className="pop_up_window animate__animated animate__zoomIn">
                    <div className="pop_up_header"> {item.title} </div>
                    <div className="pop_up_content">
                      {item.description}
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
        ))}
      </div>

    </section>
  )
}

export default Experience