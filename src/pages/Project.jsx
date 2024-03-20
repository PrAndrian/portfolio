import { ScrollRestoration, useLoaderData } from "react-router-dom";
import HeroProject from "../components/HeroProject";
import ProjectDescription from "../components/ProjectDescription";
import ProjectImages from "../components/ProjectImages";
import ProjectSteps from "../components/ProjectSteps";
// import ProjectRelated from "../components/ProjectRelated";
import Contact from "../components/Contact";
import { useTitle } from "../hooks/useTitle";

const Project = () => {
  const projectData = useLoaderData();

  const {
    // id,
    url,
    title,
    description,
    company,
    year,
    images,
    steps,
    website,
  } = projectData;

  useTitle(`Project -${title}`);

  return (
    <>
      <HeroProject title={title} url={url} />
      <section className="px-5 py-5 bg-white lg:pt-20">
        <ProjectDescription
          title={title}
          description={description}
          company={company}
          year={year}
          url={website}
        />
        <ProjectImages images={images} />
        <ProjectSteps steps={steps} />
        {/* <ProjectRelated id={id}/> */}
      </section>
      <Contact />
      <ScrollRestoration />
    </>
  );
};

export default Project;
