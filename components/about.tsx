import React from "react"

export const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title">About Me</h1>
      <div className="centered-about">
        <div className="my-about-image">
          <img src="https://i.imgur.com/wu6Ps0Q.jpeg" alt="me"></img>
          <div className="about-description">
            <p>
              I view myself as a hungry learner, and a great team worker, with a
              huge passion for creating and designing websites. My goal is to
              keep improving and become an amazing web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
