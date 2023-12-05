import { ScrollRestoration, useLoaderData } from "react-router-dom";
import HeroProject from "../components/HeroProject";

const Project = () => {
  const projectData = useLoaderData ();

  const {
    url,
    title
  } = projectData

  return (
    <>
      <HeroProject title={title} url={url}/>
      <ScrollRestoration />
    </>
  )
}

export default Project