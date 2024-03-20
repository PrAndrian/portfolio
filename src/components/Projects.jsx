import { projects } from "../mockData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="px-5 py-10 bg-white lg:py-20">
      <div className="container mx-auto">
        <header className="flex flex-row items-center justify-between mb-10 lg:space-x-10 lg:space-y-5">
          <h2 className="flex-shrink text-3xl font-bold lg:text-6xl">
            Projects
          </h2>
          <span className="flex-1 hidden h-px bg-gray-200 w-96 lg:flex"></span>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {projects?.map((project) => (
            <ProjectCard
              key={project?.id}
              id={project?.id}
              title={project?.title}
              year={project?.year}
              url={project?.url}
              columns={3}
              widthInfo={project?.columns === 1 ? "lg:w-[92.5%]" : "lg:w-1/2"}
              tags={project?.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
