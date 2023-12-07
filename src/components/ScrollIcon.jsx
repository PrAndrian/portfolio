import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollDownIcon = () => {
  return (
    <div className="absolute bottom-20">
        <span className="h-16 w-10 border-2 border-white text-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowDown} className="animate-bounce w-6 h-6"/>
        </span>
    </div>
  );
};

export default ScrollDownIcon;
