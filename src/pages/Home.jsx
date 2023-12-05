import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import { ScrollRestoration } from "react-router-dom"

const Home = () => {
  return (
    <>
        <Hero/>
        <Projects/>
        <About/>
        <Skills/>
        <Contact/>
        <ScrollRestoration />
  </>
  )
}

export default Home