import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "./Logo"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-black py-14 px-5">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-start lg:justify-between px-5 space-y-7">
                <div className="flex flex-col space-y-2">
                    <div className="uppercase text-white">Work with me</div>
                    <div className="text-3xl lg:text-5xl font-bold text-white"> 
                        Let s build something great together 
                    </div>
                </div>
                <Link to="mailto:princy.workspace@gmail.com" className="fade-in-fast cursor-pointer text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 group mt-3">
                    <span>Get in touch</span>
                    <FontAwesomeIcon icon={faArrowRight}  className='w-5 h-5 group-hover:-rotate-45 transition-all duration-300'/>
                </Link>
            </div>
        </div>
        <div className="container mx-auto h-px bg-gray-800 my-14"></div>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-20 px-5 space-y-10 lg:space-y-0">
                <div>
                    <Link aria-current="page" href="/" className="router-link-active router-link-exact-active">
                        <Logo className="h-10"/>
                    </Link>
                    <p className="mt-5 text-base text-white"> 
                        I&apos;m a seasoned French web developer fluent in Javascript, passionate about crafting vibrant digital stories and turning ideas into captivating online experiences.
                    </p>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Sections</p>
                    <div className="grid grid-cols-1 gap-y-5 gap-x-5">
                        <Link href="#projects" className="hover:text-[#5E17EB] transition-all duration-300">Project</Link>
                        <Link href="#about" className="hover:text-[#5E17EB] transition-all duration-300">About me</Link>
                        <Link href="#skills" className="hover:text-[#5E17EB] transition-all duration-300">Skills</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Location</p>
                    <p>Île de France in </p>
                    <p>the Paris region, 75020</p>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Say Hi :)</p>
                    <Link to="mailto:princy.workspace@gmail.com" rel="noopener noreferrer" className="hover:text-[#5E17EB] transition-all duration-300">princy.workspace@gmail.com</Link>
                    <Link to="tel:+33663546522" rel="noopener noreferrer" className="hover:text-[#5E17EB] transition-all duration-300">+33 6 63 54 65 22</Link>
                    <div className="grid grid-cols-6">
                        <Link to="https://www.linkedin.com/in/princy-and/" rel="noopener noreferrer" target="blank">
                            <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8 text-white hover:text-[#5E17EB] transition-all duration-300' />
                        </Link>
                        <Link to="https://github.com/PrAndrian" rel="noopener noreferrer" target="blank">
                            <FontAwesomeIcon icon={faGithub} className='w-8 h-8 text-white hover:text-[#5E17EB] transition-all duration-300'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto border-t border-gray-800 mt-10">
            <div className="flex items-center justify-start text-white fade-in-fa mt-5">
                <p className="prose lg:text-right text-white"> © 2023 All rights reserved. Princy And. </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer