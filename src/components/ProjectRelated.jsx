import ProjectCard from './ProjectCard'
import { projects } from '../mockData'
import PropTypes from 'prop-types';

const ProjectRelated = ({id}) => {
  return (
    <div className='container mx-auto'>
          <header className="flex flex-row items-center lg:space-x-10 lg:space-y-5 justify-between mb-10">
              <h2 className="text-3xl lg:text-6xl font-bold flex-shrink">See other projects</h2>
              <span className="flex-1 bg-gray-200 w-96 h-px hidden lg:flex"></span>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {projects?.filter((project)=>project.id != id)
              .map((project,i)=>
                  <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      year={project.year}
                      url={project.url} 
                      columns={i+1}
                      widthInfo={project.columns === 1 ? "lg:w-[92.5%]" : "lg:w-1/2"}
                  />
              )}
          </div>
    </div>
  )
}

ProjectRelated.propTypes ={
    id : PropTypes.string.isRequired,
}

export default ProjectRelated