import PropTypes from "prop-types";
import { projects } from "../mockData";
import ProjectCard from "./ProjectCard";

const ProjectRelated = ({ id }) => {
  return (
    <div className="container mx-auto lg:px-10">
      <header className="flex flex-row items-center justify-between mb-10 lg:space-x-10 lg:space-y-5">
        <h2 className="flex-shrink text-3xl font-bold lg:text-3xl">
          See other projects
        </h2>
        <span className="flex-1 hidden h-px bg-gray-200 w-96 lg:flex"></span>
      </header>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {projects
          ?.filter((project) => project.id != id)
          .map((project, i) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              year={project.year}
              url={project.url}
              columns={i + 1}
              widthInfo={project.columns === 1 ? "lg:w-[92.5%]" : "lg:w-1/2"}
            />
          ))}
      </div>
    </div>
  );
};

ProjectRelated.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectRelated;
