import React from "react"

export const Header = () => {
  return (
    <div className="header-container" id="home">
      <nav>
        <div className="logo">Luka's Portfolio</div>

        <div className="nav-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu__item" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="menu__item" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu__item" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="left-side">
        {/*<div className="greeting">
          <h4>HI EVERYONE!</h4>
        </div>*/}
        <div className="name">
          <h1 className="first-row">Hi there, I'm</h1>
          <h1 className="second-row">Luka Milanovic</h1>
          <h1 className="third-row">a web developer</h1>
          <h4 className="about-me">
            Passionate for designing websites, web apps, and always curious to
            learn more.
          </h4>
        </div>

        <a href="#contact">
          <button className="button-left">GET IN TOUCH</button>
        </a>
      </div>
      <div className="right-side">
        <div className="my-image">
          <img src="https://i.imgur.com/dRH5FnC.jpeg" alt="me"></img>
        </div>
        <a href="#about">
          <button className="button-right">ABOUT ME</button>
        </a>
      </div>
      <div className="portfolio-title">
        <h1>My Projects</h1>
      </div>
    </div>
  )
}
