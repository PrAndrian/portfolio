import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

const SkillCard = ({title,description,tag}) => {
  return (
    <div className='relative bckg-fundamental rounded-lg p-10 text-white flex flex-col space-y-5 lg:space-y-5 items-start transition-all duration-300 overflow-hidden h-auto lg:h-[500px] shadow hover:shadow-2xl hover:scale-105'>
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-1"></div>
        {tag ?        
            <div className="w-24 h-20 -mt-32 -ml-1 -mb-14 z-20">
                <span className="px-3 py-1 rounded text-white" style={{background : tag === "Softskill" ? "blue" : "purple"}}>
                    {tag}
                </span>
            </div>
            :
            <div></div>
        }
        <span className="text-3xl font-visby font-bold z-20">{title}</span>
        <div className="z-20 h-40">
            <p className="">{description}</p>
        </div>
        {!tag ?
            <button className="bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold items-center space-x-2 group w-40 flex z-20">
                <span>Let&apos;s chat!</span>
                <FontAwesomeIcon icon={faArrowRight}  className="w-5 h-5 group-hover:-rotate-45 transition-all duration-300"/>
            </button>
            :
            <div></div>
        } 
    </div>
  )
}

SkillCard.propTypes  = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string,
}

export default SkillCard