import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Menu = ({isOpen,setState}) => {

    useEffect(() => {
        if (isOpen) {
          // Ajoutez la classe pour masquer la barre de défilement
          document.body.classList.add('hide-scroll');
        } else {
          // Supprimez la classe pour restaurer la barre de défilement
          document.body.classList.remove('hide-scroll');
        }
      }, [isOpen]);

    const handleClose = () =>{
        setState(false)
    }

    return (
        <>
            <div className='fixed w-full h-screen bg-green-500 z-[950] transition-all duration-500' style={{top:`${isOpen ? "0%" : "-100%"}`}}></div>
            <nav className='background-menu fixed w-full h-screen p-10 z-[999] transition-all duration-1000' style={{top:`${isOpen ? "0%" : "-100%"}`}}>
                <div className='container mx-auto flex flex-col justify-between h-full z-40 relative'>
                    <div className="flex items-center justify-between">
                        <a aria-current="page" href="/" className="router-link-active router-link-exact-active">
                        <img src="https://www.fundamental.bg/logo-white.svg" alt="fundamental-logo" />
                        </a>
                        <div className="space-x-10 items-center hidden lg:flex">
                            <a href="/start-a-project" className="cursor-pointer text-lg transition-all duration-300 bg-[#3EC091] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 group">
                                <span>Start a project</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:-rotate-45 transition-all duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                </svg>
                            </a>
                            <a onClick={handleClose} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white cursor-pointer hover:opacity-70 transition-all duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </a>
                        </div>
                        <a className="lg:hidden" onClick={handleClose} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white cursor-pointer hover:opacity-70 transition-all duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                        <ul className="flex flex-col space-y-5">
                            <li className="-translate-y-[15px] opacity-0 blur-md hidden lg:flex" style={{translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", transform: "translate(0px, 15px)", opacity: 1}}>
                                <a aria-current="page" href="/" className="router-link-active router-link-exact-active text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#3EC091] transition-all duration-300"> Home </a>
                            </li>
                            <li className="-translate-y-[15px] opacity-0 blur-md" style={{translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", transform: "translate(0px, 15px)", opacity: 1}}>
                                <a href="/services" className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#3EC091] transition-all duration-300"> Services </a>
                            </li>
                            <li className="-translate-y-[15px] opacity-0 blur-md" style={{translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", transform: "translate(0px, 15px)", opacity: 1}}>
                                <a href="/projects" className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#3EC091] transition-all duration-300"> Portfolio </a>
                            </li>
                            <li className="-translate-y-[15px] opacity-0 blur-md" style={{translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", transform: "translate(0px, 15px)", opacity: 1}}>
                                <a href="/about" className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#3EC091] transition-all duration-300"> About us </a>
                            </li>
                            <li className="-translate-y-[15px] opacity-0 blur-md" style={{translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", transform: "translate(0px, 15px)", opacity: 1}}>
                                <a href="/process" className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#3EC091] transition-all duration-300"> Our Process </a>
                            </li>
                            <li className="-translate-y-[15px] opacity-0 blur-md" style={{translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", transform: "translate(0px, 15px)", opacity: 1}}>
                                <a href="/feed" className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold hover:text-[#3EC091] transition-all duration-300"> Feed </a>
                            </li>
                            <li className="-translate-y-[15px] opacity-0 blur-md flex lg:hidden" style={{translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", transform: "translate(0px, 15px)", opacity: 1}}>
                                <a href="/start-a-project" className="text-3xl xl:text-5xl 2xl:text-6xl text-white font-visby font-bold group flex items-center gap-x-2.5">
                                    <span className="group-hover:text-[#3EC091] transition-all duration-300"> Start a project </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 -rotate-45 mt-1 group-hover:text-[#3EC091] transition-all duration-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 lg:space-x-5 space-y-2.5 lg:space-y-0">
                            <div className="border-2 border-gray-400 p-7 rounded-lg w-80 items-start flex flex-col justify-between">
                                <div className="bg-[#3EC091] rounded-full p-3 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div className="text-4xl text-white font-visby font-bold lg:mt-32">23:02</div>
                                <div className="text-xl text-white font-visby mt-2">Europe/Sofia</div>
                            </div>
                            <a href="https://open.spotify.com/playlist/3SZXkFtrZmiPH4sPsBa2hq" rel="noopener noreferrer" target="blank" className="" >
                                <div className="border-2 border-gray-400 p-7 rounded-lg w-80 h-auto place-self-stretch transition-all duration-300 hover:opacity-70 items-start flex flex-col justify-between">
                                    <div className="bg-[#3EC091] rounded-full p-3 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"></path>
                                        </svg>
                                    </div>
                                    <div className="text-4xl text-white font-visby font-bold mt-32"> Fundamental </div>
                                    <div className="text-xl text-white font-visby mt-2"> Our playlist on Spotify.</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="https://open.spotify.com/playlist/3SZXkFtrZmiPH4sPsBa2hq" rel="noopener noreferrer" target="blank" className="flex lg:hidden">
                            <div className="mt-5 flex space-x-2.5 items-center border-2 border-gray-400 p-3 rounded-lg place-self-stretch transition-all duration-300 hover:border-[#3EC091] group">
                                <div className="text-xl text-white font-visby"> Listen to our vibes. </div>
                            </div>
                        </a>
                    </div>
                    

                    <div className="flex  flex-col lg:flex-row items-start lg:items-center lg:justify-between xl:gap-y-5">
                        <a href="mailto:hello@fundamental.bg" rel="noopener noreferrer" className="text-white font-bold font-visby text-xl hover:text-[#3EC091] transition-all duration-300"> hello@fundamental.bg </a>
                        <a href="tel:+359895697410" rel="noopener noreferrer" className="text-white font-bold font-visby text-xl hover:text-[#3EC091] transition-all duration-300"> +359 895 69 74 10 </a>
                        <div className="grid grid-cols-5 gap-x-7 items-end">
                            <a href="https://www.facebook.com/studio.fundamental" rel="noopener noreferrer" target="blank" className="hover:opacity-80 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" style={{fill:"#000000"}}>
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}>
                                        <g transform="scale(8.53333,8.53333)">
                                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/studio.fundamental" rel="noopener noreferrer" target="blank" className="hover:opacity-80 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" style={{fill:"#000000"}}>
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}>
                                        <g transform="scale(8.53333,8.53333)">
                                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/studio.fundamental" rel="noopener noreferrer" target="blank" className="hover:opacity-80 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" style={{fill:"#000000"}}>
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}>
                                        <g transform="scale(8.53333,8.53333)">
                                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/studio.fundamental" rel="noopener noreferrer" target="blank" className="hover:opacity-80 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" style={{fill:"#000000"}}>
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}>
                                        <g transform="scale(8.53333,8.53333)">
                                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>  
                </div>
            </nav>
        </>
    )
}

Menu.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    setState : PropTypes.func.isRequired,
}

export default Menu