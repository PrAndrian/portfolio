import { useState,useEffect, useRef } from "react"
import Menu from "./Menu";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const elementRef = useRef(null);

    const handleOpenMenu = () =>{
        setIsOpen(true)
    }

    useEffect(() => {
        const handleScroll = () => {        
            if (elementRef.current) {
                const elementPosition = elementRef.current.getBoundingClientRect();
                const isElementVisible = elementPosition.top < window.innerHeight && elementPosition.bottom >= 0;
        
                if (!isElementVisible) {
                    setIsAtTop(false);
                }else{
                    setIsAtTop(true);
                }

            }
        }
  
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
            <nav className="w-full fixed z-[888] left-0 top-5">
                <div className={"flex items-center gap-5 px-[21px] rounded-full py-4 text-center w-fit my-0 mx-auto transition-all duration-500"} style={{background:"black", transform : `translate(0px,${isAtTop?"-150px":"0px"})`}}>
                    <Link to="/">
                        <Logo classNames="h-10"/>
                    </Link>
                    <button className="py-2 px-4 rounded-full bg-[#5E17EB] text-lg font-semibold 2xl:text-xl hidden lg:block xl:flex transition-all duration-300 hover:bg-white hover:text-[#5E17EB]"  to="#">
                        Start our journey
                    </button>
                    <button className="cursor-pointer" onClick={handleOpenMenu}>
                        <FontAwesomeIcon icon={faBars} className="w-8 h-8 hover:text-[#5E17EB] transition-all duration-300 text-white"/>
                    </button>
                </div>
            </nav>

            <nav ref={elementRef} className="absolute left-0 py-6 w-full transition-all duration-300 z-[900] lg:px-10 top-5">
                <div className="container mx-auto items-center justify-between flex px-5">
                    <Link to="/" className="">
                        <Logo classNames="h-10"/>
                    </Link>
                    
                    <ul className="text-lg flex items-center space-x-10 text-white hidden lg:flex">
                        <li>
                            <Link to="/" className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-indigo-500" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/#projects" className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-indigo-500" >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/#about" className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-indigo-500">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/#skills" className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-indigo-500">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <button className="py-2 px-4 rounded bg-[#5E17EB] text-lg font-semibold 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:bg-white hover:text-[#5E17EB]"  to="#">
                                Start our journey
                            </button>
                        </li>
                    </ul>

                    <button onClick={handleOpenMenu} className="cursor-pointer xl:hidden">
                        <FontAwesomeIcon icon={faBars} className="w-8 h-8 hover:text-[#5E17EB] transition-all duration-300 text-white"/>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar