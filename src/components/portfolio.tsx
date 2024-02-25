import React from "react"
import { Project } from "../types/projects"

export interface PortfolioProps {
  project: Project
}

export const Portfolio = ({ project }: PortfolioProps) => {
  const { id, title, description, madeWith, link, imageUrl, alt } = project
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="left-side-portfolio">
        <div className="project-title-div">
          <h1 className="project-title">
            <span className="project-number">0{id}.</span> {title}
          </h1>
        </div>
        <div className="border-description">
          <div className="project-description">
            <p>{description}</p>
          </div>
          <div className="project-made-with">
            <p>Made with: {madeWith}</p>
          </div>
          
            <a href={link} target="_blank" rel="noreferrer">
              <button className="button-left-website">
              GO TO WEBSITE
          </button>
            </a>
        </div>
      </div>
      <div className="right-side">
        <div className="project-image">
          <img src={imageUrl} alt={alt}></img>
        </div>
      </div>
    </div>
  )
}
