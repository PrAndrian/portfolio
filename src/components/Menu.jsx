import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "./Logo";

const Menu = ({ isOpen, setState }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };
    if (isOpen) {
      // Ajoutez la classe pour masquer la barre de défilement
      document.body.classList.add("hide-scroll");
    } else {
      // Supprimez la classe pour restaurer la barre de défilement
      document.body.classList.remove("hide-scroll");
    }

    // Mettez à jour l'heure toutes les secondes
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [isOpen]);

  // Obtenez l'heure et les minutes de la France
  const franceTime = new Date(
    currentTime.toLocaleString("en-US", { timeZone: "Europe/Paris" })
  );

  const hours = franceTime.getHours();
  const minutes = franceTime.getMinutes();

  const handleClose = () => {
    setState(false);
  };

  return (
    <>
      <div
        className="fixed w-full h-screen z-[950] transition-all duration-500"
        style={{
          top: `${isOpen ? "0%" : "-200%"}`,
          backgroundColor: "#5E17EB",
        }}
      ></div>
      <nav
        className="background-menu fixed w-full h-screen p-10 z-[999] transition-all duration-1000"
        style={{ top: `${isOpen ? "0%" : "-200%"}` }}
      >
        <div className="container relative z-40 flex flex-col justify-between h-full mx-auto">
          <div className="flex items-center justify-between">
            <Link
              onClick={handleClose}
              aria-current="page"
              to="/"
              className="router-link-active router-link-exact-active"
            >
              <Logo classNames="h-10" />
            </Link>
            <div className="items-center hidden space-x-10 lg:flex">
              <Link
                to="mailto:princy.workspace@gmail.com"
                className="cursor-pointer text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 group"
              >
                <span>Start a project</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-5 h-5 transition-all duration-300 group-hover:-rotate-45"
                />
              </Link>
              <button onClick={handleClose}>
                <FontAwesomeIcon
                  icon={faX}
                  className="w-8 h-8 text-white transition-all duration-300 cursor-pointer hover:opacity-70"
                />
              </button>
            </div>
            <button className="lg:hidden" onClick={handleClose}>
              <FontAwesomeIcon
                icon={faX}
                className="w-8 h-8 text-white transition-all duration-300 cursor-pointer hover:opacity-70"
              />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <ul className="flex flex-col space-y-5">
              <li
                className="-translate-y-[15px] opacity-0 blur-md hidden lg:flex"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  filter: "blur(0px)",
                  transform: "translate(0px, 15px)",
                  opacity: 1,
                }}
              >
                <Link
                  aria-current="page"
                  onClick={handleClose}
                  to="/"
                  className="router-link-active router-link-exact-active text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#5E17EB] transition-all duration-300"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li
                className="-translate-y-[15px] opacity-0 blur-md"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  filter: "blur(0px)",
                  transform: "translate(0px, 15px)",
                  opacity: 1,
                }}
              >
                <Link
                  to="/#projects"
                  onClick={handleClose}
                  className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#5E17EB] transition-all duration-300"
                >
                  {" "}
                  Projects{" "}
                </Link>
              </li>
              <li
                className="-translate-y-[15px] opacity-0 blur-md"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  filter: "blur(0px)",
                  transform: "translate(0px, 15px)",
                  opacity: 1,
                }}
              >
                <Link
                  to="/#about"
                  onClick={handleClose}
                  className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#5E17EB] transition-all duration-300"
                >
                  {" "}
                  About Me{" "}
                </Link>
              </li>
              <li
                className="-translate-y-[15px] opacity-0 blur-md"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  filter: "blur(0px)",
                  transform: "translate(0px, 15px)",
                  opacity: 1,
                }}
              >
                <Link
                  to="/#skills"
                  onClick={handleClose}
                  className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#5E17EB] transition-all duration-300"
                >
                  {" "}
                  Skills{" "}
                </Link>
              </li>
              <li
                className="-translate-y-[15px] opacity-0 blur-md flex lg:hidden"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  filter: "blur(0px)",
                  transform: "translate(0px, 15px)",
                  opacity: 1,
                }}
              >
                <Link
                  to="#"
                  className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold group flex items-center gap-x-2.5"
                >
                  <span className="group-hover:text-[#5E17EB] transition-all duration-300">
                    {" "}
                    Start a project{" "}
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='className="w-7 h-7 -rotate-45 mt-1 group-hover:text-[#5E17EB] transition-all duration-300"'
                  />
                </Link>
              </li>
            </ul>
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 lg:space-x-5 space-y-2.5 lg:space-y-0">
              <div className="flex flex-col items-start justify-between border-2 border-gray-400 rounded-lg p-7 w-80">
                <div className="bg-[#5E17EB] rounded-full p-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="text-4xl font-bold text-white font-visby lg:mt-32">
                  {hours}:{minutes < 10 ? `0${minutes}` : minutes}
                </div>
                <div className="mt-2 text-xl text-white font-visby">
                  Europe/France
                </div>
              </div>
              <Link
                to="https://open.spotify.com/playlist/143W2Bzlc6fvmPi5ragAT2"
                rel="noopener noreferrer"
                target="blank"
                className=""
              >
                <div className="flex flex-col items-start justify-between h-auto transition-all duration-300 border-2 border-gray-400 rounded-lg p-7 w-80 place-self-stretch hover:opacity-70">
                  <div className="bg-[#5E17EB] rounded-full p-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-32 text-4xl font-bold text-white font-visby">
                    {" "}
                    Songs{" "}
                  </div>
                  <div className="mt-2 text-xl text-white font-visby">
                    {" "}
                    My playlist on Spotify.
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <Link
              to="https://open.spotify.com/intl-fr/artist/1dABGukgZ8XKKOdd2rVSHM"
              rel="noopener noreferrer"
              target="blank"
              className="flex lg:hidden"
            >
              <div className="mt-5 flex space-x-2.5 items-center border-2 border-gray-400 p-3 rounded-lg place-self-stretch transition-all duration-300 hover:border-[#5E17EB] group">
                <div className="text-xl text-white font-visby">
                  {" "}
                  Listen to my vibes.{" "}
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-start space-y-4 lg:flex-row lg:items-center lg:justify-between xl:gap-y-5 lg:space-y-0">
            <Link
              to="mailto:princy.workspace@gmail.com"
              rel="noopener noreferrer"
              className="text-white font-bold font-visby text-xl hover:text-[#5E17EB] transition-all duration-300"
            >
              princy.workspace@gmail.com
            </Link>
            <Link
              to="tel:+33663546522"
              rel="noopener noreferrer"
              className="text-white font-bold font-visby text-xl hover:text-[#5E17EB] transition-all duration-300"
            >
              {" "}
              +33 6 63 54 65 22{" "}
            </Link>
            <div className="grid items-end grid-cols-2 gap-x-7">
              <Link
                to="https://www.linkedin.com/in/princy-and/"
                rel="noopener noreferrer"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-8 h-8 text-white hover:text-[#5E17EB] transition-all duration-300"
                />
              </Link>
              <Link
                to="https://github.com/PrAndrian"
                rel="noopener noreferrer"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-8 h-8 text-white hover:text-[#5E17EB] transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Menu;
