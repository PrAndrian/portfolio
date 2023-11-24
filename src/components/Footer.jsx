const Footer = () => {
  return (
    <footer className="bg-black py-14 px-5">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-start lg:justify-between px-5 space-y-7">
                <div className="flex flex-col space-y-2">
                    <div className="uppercase text-white">Work with us</div>
                    <div className="text-3xl lg:text-5xl font-bold text-white"> 
                        Let s build something great together 
                    </div>
                </div>
                <a href="/start-a-project" className="fade-in-fast cursor-pointer text-lg transition-all duration-300 bg-[#3EC091] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 group mt-3">
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
                        <img src="https://www.fundamental.bg/logo-white.svg" alt="Fundamental Studio Ltd" className="h-5"/>
                    </a>
                    <p className="mt-5 text-base text-white"> 
                        Fundamental Studio is a modern digital company, offering different kind of services at your disposal. 
                    </p>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Pages</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-5">
                        <a href="/about" className="hover:text-[#3EC091] transition-all duration-300">About us</a>
                        <a href="/services" className="hover:text-[#3EC091] transition-all duration-300">Services</a>
                        <a href="/projects" className="hover:text-[#3EC091] transition-all duration-300">Portfolio</a>
                        <a href="/process" className="hover:text-[#3EC091] transition-all duration-300">Our Process</a>
                        <a href="/careers" className="hover:text-[#3EC091] transition-all duration-300">Careers</a>
                        <a href="/feed" className="hover:text-[#3EC091] transition-all duration-300">Feed</a>
                        <a href="/contacts" className="hover:text-[#3EC091] transition-all duration-300">Contact us</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Location</p>
                    <p className="">Fundamental Studio Ltd.</p>
                    <p>70-72 Cherni vrah blvd.</p>
                    <p>Sofia, Bulgaria 1407</p>
                </div>
                <div className="flex flex-col space-y-5 text-white">
                    <p className="font-bold">Say Hi :)</p>
                    <a href="mailto:hello@fundamental.bg" rel="noopener noreferrer" className="hover:text-[#3EC091] transition-all duration-300">hello@fundamental.bg</a>
                    <a href="tel:+359895697410" rel="noopener noreferrer" className="hover:text-[#3EC091] transition-all duration-300">+359 895 69 74 10</a>
                    <div className="grid grid-cols-6">
                        <a href="https://www.facebook.com/studio.fundamental" rel="noopener noreferrer" target="blank" className="hover:text-[#3EC091] transition-all duration-300">A</a>
                        <a href="https://www.instagram.com/fundamental.studio/" rel="noopener noreferrer" target="blank" className="hover:text-[#3EC091] transition-all duration-300">B</a>
                        <a href="https://www.linkedin.com/company/fundamental-studio-ltd" rel="noopener noreferrer" target="blank" className="hover:text-[#3EC091] transition-all duration-300">C</a>
                        <a href="https://www.behance.net/fundamendalstudio" rel="noopener noreferrer" target="blank" className="hover:text-[#3EC091] transition-all duration-300">D</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto border-t border-gray-800 py-5 px-5 mt-10"><div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-white space-y-5 lg:space-y-0 fade-in-fa"><div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:space-x-5 space-y-2.5 lg:space-y-0"><a href="/cookie-policy" className="hover:text-[#3EC091] transition-all duration-300"> Cookie Policy </a><a href="/terms-of-use" className="hover:text-[#3EC091] transition-all duration-300"> Terms of use </a><a href="/privacy-policy" className="hover:text-[#3EC091] transition-all duration-300"> Privacy Policy</a></div><p className="flex-1 prose lg:text-right text-white"> © 2016 - 2023 All rights reserved. Fundamental Studio Ltd. </p></div></div>
    </footer>
  )
}

export default Footer