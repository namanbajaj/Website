import React from "react";

import Footer from '../../Shared/Footer/Footer'
import './snake.css'
import { Link } from "react-router-dom";

const Snake = () => {
  return (
    <div className="snake_page_container">
      <h1 className="snake_error">1300px width required</h1>
      <div className="snake_container">
        <h1>
          Snake built in raylib
        </h1>
        <h2>Fullscreen recommended</h2>
        <iframe src="https://namanbajaj.github.io/GameServer/Snake/snake.html" title='snake' height='1000px' width='1300px' allowFullScreen={true} scrolling="no"></iframe>
        <div className="game_nav_btns">
          <Link to="/" className="btn">Home</Link>
          <Link to="/games" className="btn">Games</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Snake