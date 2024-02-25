import React from "react"

export const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Contact me</h1>
      <div className="contact-info">
        <div className="email">
          <a href="mailto:luka.milanovic@rocketmail.com?Subject=Some%20subject">
            Email: luka.milanovic@rocketmail.com
          </a>
        </div>
        <div className="phone">
          <a href="tel:0046707901840">Phone: +46 707901840</a>
        </div>
        <div className="cv">
          <a href="https://www.canva.com/design/DAFSlDLmBU0/79DEXATzofQczBNEqzxHiQ/view?utm_content=DAFSlDLmBU0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
            Click here to check out my CV!
          </a>
        </div>
      </div>
    </div>
  )
}
