import { projects } from "../mockData"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section id="projects" className='bg-white py-10 lg:py-20 px-5'>
        <div className="container mx-auto">
            <header className="flex flex-row items-center lg:space-x-10 lg:space-y-5 justify-between mb-10">
                <h2 className="text-3xl lg:text-6xl font-bold flex-shrink">Projects</h2>
                <span className="flex-1 bg-gray-200 w-96 h-px hidden lg:flex"></span>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {projects?.map((project)=>
                    <ProjectCard 
                        key={project?.id}
                        id={project?.id}
                        title={project?.title}
                        year={project?.year}
                        url={project?.url} 
                        columns={1}
                        widthInfo={project?.columns === 1 ? "lg:w-[92.5%]" : "lg:w-1/2"}
                        tags={project?.tags}
                    />
                )}
            </div>
        </div>
    </section>
  )
}

export default Projects