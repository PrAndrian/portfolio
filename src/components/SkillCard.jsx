import PropTypes from "prop-types"

const SkillCard = ({title,description,tag}) => {
  return (
    <div className='relative bckg-fundamental rounded-lg p-10 text-white flex flex-col space-y-2 items-start transition-all duration-300 overflow-hidden h-auto lg:h-[500px] shadow hover:shadow-2xl hover:scale-105'>
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-1"></div>
        {tag &&        
            <div className="w-24 h-20 -mt-32 -ml-1 -mb-14 z-20">
                <span className="px-3 py-1 rounded text-white" style={{background : tag === "Softskill" ? "blue" : "purple"}}>
                    {tag}
                </span>
            </div>
        }
        <span className="text-3xl font-visby font-bold z-20">{title}</span>
        <div className="z-20 h-40">
            <p>{description}</p>
        </div>
        {!tag &&
            <button className="bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold items-center space-x-2 group w-40 flex z-20">
                <span>Read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:-rotate-45 transition-all duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
            </button>
        } 
    </div>
  )
}

SkillCard.propTypes  = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
}

export default SkillCard