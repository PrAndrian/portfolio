
import PropTypes from 'prop-types';

const ProjectSteps = ({steps}) => {
  return (
    <div  className="container mx-auto lg:px-10">
          {steps.map((step,i)=>
            <div key={step.title} className="grid grid-cols-1 lg:grid-cols-2 items-center border-gray-200 fade-in-fast pt-5 pb-10 [&:not(div:last-child)]:border-b">
                  <div className="flex items-center lg:space-x-10">
                      <div  className="rollingText text-[100px] lg:text-[200px] font-bold bg-white text-stroke text-stroke-2 text-fill-white w-20 lg:w-32 leading-tight">{i+1}</div>
                      <div  className="font-bold text-[#5E17EB] text-4xl lg:text-5xl uppercase">{step.title}</div>
                  </div>
                  <div className="prose prose-lg">
                      <p>{step.description}</p>
                  </div>
            </div>
          )}
    </div>
  )
}

ProjectSteps.propTypes  = {
  steps:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default ProjectSteps