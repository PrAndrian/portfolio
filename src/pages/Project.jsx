import { ScrollRestoration, useLoaderData } from "react-router-dom";
import HeroProject from "../components/HeroProject";
import ProjectDescription from "../components/ProjectDescription";
import ProjectImages from "../components/ProjectImages";
import ProjectSteps from "../components/ProjectSteps";
import ProjectRelated from "../components/ProjectRelated";

const Project = () => {
  const projectData = useLoaderData ();

  const {
    id,
    url,
    title
  } = projectData

  return (
    <>
      <HeroProject title={title} url={url}/>
      <section className="bg-white py-5 lg:py-10 px-5">
        <ProjectDescription/>
        <ProjectImages/>
        <ProjectSteps/>
        <ProjectRelated id={id}/>
        <ScrollRestoration />
      </section>
    </>
  )
}

export default Project