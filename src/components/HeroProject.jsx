import PropTypes from "prop-types"

const HeroProject = ({title,url}) => {
  return (
    <header 
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center header"
        style={{backgroundImage: `url(${url})`}}
      >
        <div className="brightness-50 h-screen bg-black w-full opacity-75 "></div>
        <h1 className="
            absolute
            leading-tight 
            text-5xl 
            lg:text-[90px]
            xl:text-[120px]
            2xl:text-[140px]
            xl:max-w-8xl
            2xl:max-w-8xl
            font-bold 
            text-center 
            text-white
            lg:space-x-7 
            transition-all duration-300
          "
        >
          {title}
        </h1>
      </header>
  )
}

HeroProject.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default HeroProject