import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import { ScrollRestoration } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"

const Home = () => {
  useTitle(`Princy And. - JavaScript developer`)
  return (
    <>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <ScrollRestoration />
  </>
  )
}

export default Home