import { ScrollRestoration } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useTitle } from "../hooks/useTitle";

const Home = () => {
  useTitle(`Princy And. - JavaScript developer`);
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollRestoration />
    </>
  );
};

export default Home;
