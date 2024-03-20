import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollDownIcon = () => {
  return (
    <div className="absolute bottom-20">
      <span className="flex items-center justify-center w-10 h-16 text-white border-2 border-white rounded-full">
        <FontAwesomeIcon
          icon={faArrowDown}
          className="w-6 h-6 animate-bounce"
        />
      </span>
    </div>
  );
};

export default ScrollDownIcon;
