const Contact = () => {
  return (
    <div className="bckg-fundamental bg-cover bg-center py-40 mt-20" >
        <div className="container mx-auto text-center flex flex-col space-y-10 xl:space-y-8 px-5 lg:px-0">
            <div className="text-white text-4xl xl:text-6xl 2xl:text-7xl font-bold fade-in-fast">
                We would love to hear from you.
            </div>
            <p className="text-white xl:max-w-xl mx-auto 2xl:text-xl 2xl:max-w-2xl fade-in-fast">
                Fundamental Studio is a modern digital company, offering different kind of services at your disposal. We are your trustworthy partner. 
            </p>
            <a href="/start-a-project" className="mx-auto text-lg transition-all duration-300 bg-[#3EC091] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 mr-auto mt-4 hover:opacity-80 group fade-in-fast">
                <span>Start a project</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rotate-45 w-5 h-5 group-hover:rotate-0 transition-all duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                </svg>
            </a>
        </div>
    </div>
  )
}

export default Contact