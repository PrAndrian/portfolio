import { useState,useEffect } from "react"
import Menu from "./Menu";

const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickBuger = () =>{
        setIsOpen(true)
    }

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsAtTop(scrollTop === 0);
      };
  
      // Ajoute un écouteur d'événement pour le scroll
      window.addEventListener('scroll', handleScroll);
  
      // Nettoie l'écouteur d'événement lors du démontage du composant
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    return (
        <>
            <Menu isOpen={isOpen} setState={setIsOpen} />
            <nav className="w-full fixed left-0 z-[888] top-5">
                <div className={"flex items-center gap-5 px-[21px] rounded-full py-4 text-center w-fit my-0 mx-auto transition-all duration-1000"} style={{background:"black", transform : `translate(0px,${isAtTop?"-150px":"0px"})`}}>
                    <a href="/" className="">
                        <img src="https://www.fundamental.bg/logo-white.svg" alt="fundamental-logo" />
                    </a>
                    <button className="py-2 px-4 rounded bg-[#3EC091] text-lg font-semibold 2xl:text-xl hidden lg:block xl:flex transition-all duration-300 hover:bg-white hover:text-[#3EC091]"  href="#">
                        Start our journey
                    </button>
                    <a className="cursor-pointer" onClick={handleClickBuger}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:text-[#3EC091] transition-all duration-300 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </a>
                </div>
            </nav>

            <nav className="absolute left-0 py-6 w-full transition-all duration-300 z-[900] lg:px-10 top-5">
                <div className="container mx-auto items-center justify-between flex px-5">
                    <a href="/" className="">
                        <img src="https://www.fundamental.bg/logo-white.svg" alt="fundamental-logo" />
                    </a>
                    
                    <ul className="text-lg flex items-center space-x-10 text-white hidden lg:flex">
                        <li>
                            <a className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-[#3EC091]" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-[#3EC091]" href="#">
                                Project
                            </a>
                        </li>
                        <li>
                            <a className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-[#3EC091]" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <button className="py-2 px-4 rounded bg-[#3EC091] text-lg font-semibold 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:bg-white hover:text-[#3EC091]"  href="#">
                                Start our journey
                            </button>
                        </li>
                    </ul>

                    <button onClick={handleClickBuger} className="cursor-pointer xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:text-[#3EC091] transition-all duration-300 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar