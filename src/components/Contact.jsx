import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="py-40 mt-20 bg-center bg-cover bckg-fundamental">
      <div className="container flex flex-col px-5 mx-auto space-y-10 text-center xl:space-y-8 lg:px-0">
        <div className="text-4xl font-bold text-white xl:text-6xl 2xl:text-7xl fade-in-fast">
          I would love to hear from you.
        </div>
        <p className="mx-auto text-white xl:max-w-xl 2xl:text-xl 2xl:max-w-2xl fade-in-fast">
          Let&apos;s collaborate and bring your digital dreams to life. Start
          our coding journey together by diving into a conversation.
        </p>
        <Link
          to="mailto:princy.workspace@gmail.com"
          className="mx-auto text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 mr-auto mt-4 hover:opacity-80 group fade-in-fast"
        >
          <span>Start a project</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-5 h-5 transition-all duration-300 group-hover:-rotate-45"
          />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
