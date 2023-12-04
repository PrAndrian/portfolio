import Logo from "./Logo"

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
                <a href="/start-a-project" className="fade-in-fast cursor-pointer text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 group mt-3">
                    <span>Get in touch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:-rotate-45 transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div className="container mx-auto h-px bg-gray-800 my-14"></div>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-20 px-5 space-y-10 lg:space-y-0">
                <div>
                    <a aria-current="page" href="/" className="router-link-active router-link-exact-active">
                        <Logo className="h-5"/>
                    </a>
                    <p className="mt-5 text-base text-white"> 
                    I&apos;m a seasoned French web developer fluent in Javascript, passionate about crafting vibrant digital stories and turning ideas into captivating online experiences.
                    </p>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Sections</p>
                    <div className="grid grid-cols-1 gap-y-5 gap-x-5">
                        <a href="#projects" className="hover:text-[#5E17EB] transition-all duration-300">Project</a>
                        <a href="#about" className="hover:text-[#5E17EB] transition-all duration-300">About me</a>
                        <a href="#skills" className="hover:text-[#5E17EB] transition-all duration-300">Skills</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Location</p>
                    <p>Île de France in </p>
                    <p>the Paris region, 75020</p>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Say Hi :)</p>
                    <a href="mailto:princy.workspace@gmail.com" rel="noopener noreferrer" className="hover:text-[#5E17EB] transition-all duration-300">princy.workspace@gmail.com</a>
                    <a href="tel:+33663546522" rel="noopener noreferrer" className="hover:text-[#5E17EB] transition-all duration-300">+33 6 63 54 65 22</a>
                    <div className="grid grid-cols-6">
                        <a href="https://www.linkedin.com/in/princy-and/" rel="noopener noreferrer" target="blank" className="hover:text-[#5E17EB] transition-all duration-300">Linkedin</a>
                        <a href="https://github.com/PrAndrian" rel="noopener noreferrer" target="blank" className="hover:text-[#5E17EB] transition-all duration-300">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto border-t border-gray-800 py-5 px-5 mt-10"><div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-white space-y-5 lg:space-y-0 fade-in-fa"><div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:space-x-5 space-y-2.5 lg:space-y-0"><a href="/cookie-policy" className="hover:text-[#5E17EB] transition-all duration-300"> Cookie Policy </a><a href="/terms-of-use" className="hover:text-[#5E17EB] transition-all duration-300"> Terms of use </a><a href="/privacy-policy" className="hover:text-[#5E17EB] transition-all duration-300"> Privacy Policy</a></div><p className="flex-1 prose lg:text-right text-white"> © 2016 - 2023 All rights reserved. Fundamental Studio Ltd. </p></div></div>
    </footer>
  )
}

export default Footer