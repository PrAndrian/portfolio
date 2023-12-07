import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectCard = ({
    title,
    url,
    columns,
    widthInfo,
    year,
    id,
    tags
}) => {
  return (
    <div 
        className={`bg-bottom rounded-xl relative w-full p-5 xl:p-10 flex flex-col min-h-[600px] lg:min-h-[700px] transition-all duration-300 fade-in-fast col-span-3 ${columns === 1 ? "lg:col-span-1" : columns === 2 ? "lg:col-span-2" : "lg:col-span-3"}`}
        style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover", 
            translate: "none", 
            rotate: "none", 
            scale: "none", 
            opacity: 1, 
            transform: "translate(0px, 0px)"
        }}
    >
        <Link to={`/project/${id}`} >
            <div className={`absolute rounded-xl p-5 xl:p-10 bg-white bottom-5 right-5 flex xl:flex-col items-center xl:items-start  justify-between group has-motion w-[87.5%] ${widthInfo}`}>
                <div className='justify-between items-center hidden xl:flex w-full'>
                    <div className="flex items-center justify-between w-full">
                        <div className='flex flex-wrap gap-2 pr-2'>
                            {tags?.map((tag,i)=>
                                <span key={i} className="px-3 py-1 rounded items-center text-white" style={{backgroundColor: tag.includes("X")? "orange":"purple"}}>
                                    {tag}
                                </span>
                            )}
                        </div>
                        <p className='font-semibold'>{year}</p>
                    </div>
                </div>
                <span className="text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mt-0 xl:mt-10 lg:flex">
                    {title}
                </span>
                <button className="text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-2 px-4 lg:py-3 lg:px-6 rounded font-bold flex items-center space-x-2  hover:opacity-80 group lg:mt-5">
                    <span>See all</span> 
                    <FontAwesomeIcon icon={faArrowRight}  className='w-5 h-5 group-hover:-rotate-45 transition-all duration-300'/>
                </button>
            </div>
        </Link>
    </div>
  )
}

ProjectCard.propTypes  = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    columns: PropTypes.number.isRequired,
    widthInfo : PropTypes.string.isRequired,
    tags : PropTypes.arrayOf(PropTypes.string),
}

export default ProjectCard