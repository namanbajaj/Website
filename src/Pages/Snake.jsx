const Snake = () => {
  return (
    <div className="snake_page_container">
      <h1 className="snake_error">1300px width required</h1>
      <div className="snake_container">
        <h1>
          Snake built in raylib
        </h1>
        <h2>Fullscreen recommended</h2>
        <iframe src="https://namanbajaj.github.io/GameServer/Snake/snake.html" title='snake' frameborder="0" height='1000px' width='1300px' allowFullScreen={true} scrolling="no"></iframe>
        <div className="game_nav_btns">
          <a href="/#portfolio" className="btn">Home</a>
          <a href="/games" className="btn">Games</a>
        </div>
      </div>
    </div>
  )
}

export default Snake