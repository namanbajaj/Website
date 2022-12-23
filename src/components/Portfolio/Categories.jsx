import React from 'react'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import './portfolio.css'

import { data } from './data'

const webProjects = data.filter((project) => project.type === 'Web');
const appProjects = data.filter((project) => project.type === 'App');
const otherProjects = data.filter((project) => project.type === 'Other');

const Categories = () => {
    return (
        <div>
      <div className='portfolio_intro_text'>
            <h1>Web Projects</h1>
            </div>
            <div className="portfolio__container">
                {
                    webProjects.map(({ id, image, icons, title, github, text, demo, link }) => {
                        const demobutton = <a className="btn" id='demo_button'> Video Demo </a>;

                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <Popup
                                        trigger={<a href="javascript:void(0);"><img src={image} alt={title} /></a>}
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
                                    {github != null ?
                                        (
                                            <a href={github} className='btn' target='_blank'>Github</a>
                                        ) : <p></p>
                                    }

                                    <Popup
                                        trigger={<a className="btn"> More Info </a>}
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
                                    {demo != null ? (
                                        < Popup
                                            trigger={demobutton}
                                            modal
                                        >
                                            {close => (
                                                <div className="pop_up_window_video animate__animated animate__zoomIn">
                                                    <div className="pop_up_content_video">
                                                        <div className='player-wrapper'>
                                                            <ReactPlayer
                                                                url={demo}
                                                                controls={1}
                                                                width='100%'
                                                                height='100%'
                                                                className='.react-player'>
                                                            </ReactPlayer>
                                                        </div>
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
                                    ) : null
                                    }

                                    {link != null ? (
                                        <a href={link} className='btn' target='_blank'>
                                            Link
                                        </a>
                                    ) : <p></p>
                                    }
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <br></br>
            <div className='portfolio_intro_text'>
            <h1>App Projects</h1>
            </div>
            <div className="portfolio__container">
            {
                    appProjects.map(({ id, image, icons, title, github, text, demo, link }) => {
                        const demobutton = <a className="btn" id='demo_button'> Video Demo </a>;

                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <Popup
                                        trigger={<a href="javascript:void(0);"><img src={image} alt={title} /></a>}
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
                                    {github != null ?
                                        (
                                            <a href={github} className='btn' target='_blank'>Github</a>
                                        ) : <p></p>
                                    }

                                    <Popup
                                        trigger={<a className="btn"> More Info </a>}
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
                                    {demo != null ? (
                                        < Popup
                                            trigger={demobutton}
                                            modal
                                        >
                                            {close => (
                                                <div className="pop_up_window_video animate__animated animate__zoomIn">
                                                    <div className="pop_up_content_video">
                                                        <div className='player-wrapper'>
                                                            <ReactPlayer
                                                                url={demo}
                                                                controls={1}
                                                                width='100%'
                                                                height='100%'
                                                                className='.react-player'>
                                                            </ReactPlayer>
                                                        </div>
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
                                    ) : null
                                    }

                                    {link != null ? (
                                        <a href={link} className='btn' target='_blank'>
                                            Link
                                        </a>
                                    ) : <p></p>
                                    }
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <br></br>
            <div className='portfolio_intro_text'>
            <h1>Other Projects</h1>
            </div>
            <div className="portfolio__container">
            {
                    otherProjects.map(({ id, image, icons, title, github, text, demo, link }) => {
                        const demobutton = <a className="btn" id='demo_button'> Video Demo </a>;

                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <Popup
                                        trigger={<a href="javascript:void(0);"><img src={image} alt={title} /></a>}
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
                                    {github != null ?
                                        (
                                            <a href={github} className='btn' target='_blank'>Github</a>
                                        ) : <p></p>
                                    }

                                    <Popup
                                        trigger={<a className="btn"> More Info </a>}
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
                                    {demo != null ? (
                                        < Popup
                                            trigger={demobutton}
                                            modal
                                        >
                                            {close => (
                                                <div className="pop_up_window_video animate__animated animate__zoomIn">
                                                    <div className="pop_up_content_video">
                                                        <div className='player-wrapper'>
                                                            <ReactPlayer
                                                                url={demo}
                                                                controls={1}
                                                                width='100%'
                                                                height='100%'
                                                                className='.react-player'>
                                                            </ReactPlayer>
                                                        </div>
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
                                    ) : null
                                    }

                                    {link != null ? (
                                        <a href={link} className='btn' target='_blank'>
                                            Link
                                        </a>
                                    ) : <p></p>
                                    }
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories