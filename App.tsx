import React from "react"
import { Header } from "./components/header"
import { About } from "./components/about"
import { Portfolio } from "./components/portfolio"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { PROJECTS } from "./mocks/data"

const App = () => {
  return (
    <div className="container">
      <Header />
      {PROJECTS.map((project) => (
        <Portfolio project={project} key={project.id} />
      ))}
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
