import PropTypes from 'prop-types';

const ProjectDescription = ({title,description,company,year}) => {
  return (
    <div className="container mx-auto lg:px-8">
        <div className="flex items-center space-x-10">
            <div className="flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold flex-shrink">{title}</h2>
            </div>
            <div className="flex-1 bg-gray-200 h-px hidden lg:flex"></div>
            <a target="blank" className="hidden lg:flex text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold items-center space-x-2 mr-auto hover:opacity-80 group">
                <span>See it in action</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:rotate-45 transition-all duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                </svg>
            </a>
        </div>
        <div className="prose prose-lg text-black flex flex-col lg:w-1/2">
            <div className="mt-5">
                <p className="my-5">{description}</p>
            </div>
            <div className="flex items-center space-x-10">
                <div className="flex-shrink text-3xl font-bold">{company}</div>
                <div className="flex-1 bg-gray-200 h-px"></div>
                <div className="flex-shrink text-3xl font-bold">{year}</div>
            </div>
        </div>
    </div>
  )
}

ProjectDescription.propTypes  = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    company:PropTypes.string.isRequired,
    year:PropTypes.string.isRequired
}

export default ProjectDescription