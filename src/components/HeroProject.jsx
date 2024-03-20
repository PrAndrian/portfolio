import PropTypes from "prop-types";
import ScrollDownIcon from "./ScrollIcon";

const HeroProject = ({ title, url }) => {
  return (
    <header
      className="flex flex-col items-center justify-center h-screen bg-center bg-no-repeat bg-cover header"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="w-full h-screen bg-black brightness-50 opacity-60 "></div>
      <h1
        className="
            absolute
            text-white
            text-5xl 
            lg:text-[90px]
            xl:text-[120px]
            2xl:text-[140px]
            xl:max-w-8xl
            2xl:max-w-8xl
            font-black 
            text-center 
            lg:space-x-7 
            transition-all duration-300
          "
      >
        {title}
      </h1>
      <ScrollDownIcon />
    </header>
  );
};

HeroProject.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default HeroProject;
