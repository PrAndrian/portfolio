const About = () => {
  return (
    <section className="py-20 scrollable-wrapper px-5 lg:px-10 xl:px-0">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-5 lg:space-y-0 lg:space-x-5 xl:space-x-0 xl:px-5 items-center" >
                <div className="flex flex-col space-y-5 lg:space-y-7 items-start" >
                    <div className="px-5 py-3 rounded-lg items-center text-[#3EC091] border border-[#3EC091] fade-in-fast">
                        Fundamentals of Web Developement
                    </div>
                    <div className="text-3xl xl:text-5xl 2xl:text-6xl font-bold xl:max-w-lg 2xl:max-w-2xl fade-in-fast"> 
                       Javascript Magician
                    </div>
                    <p className="xl:max-w-xl 2xl:max-w-2xl 2xl:text-xl fade-in-fast"> 
                        Hey! I&apos;m a french web developer fluent in Javascript, on a coding journey for over 2 years. I find joy in turning challenges into vibrant digital stories, bridging the gap between ideas and their online presence.
                        I&apos;ve recently completed my journey at OpenClassrooms, I&apos;m a storyteller at heart, a problem-solving enthusiast, and always ready to bring your digital ideas to life.
                    </p>
                    <a href="#about" className="text-lg transition-all duration-300 bg-[#3EC091] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 mr-auto mt-4 hover:opacity-80" >
                        <span >Let&apos;s chat!</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" ></path>
                        </svg>
                    </a>
                </div>
                <div style={{backgroundImage: `image-set(
                    url(https://www.fundamental.bg/img/fundamental-team.avif) type('image/avif'),
                    url(https://www.fundamental.bg/img/fundamental-team.webp) type('image/webp')
                )`}}
                className="bg-cover bg-[25%_50%] lg:bg-center h-[400px] xl:bg-cover xl:bg-[20%] 2xl:bg-cover rounded-lg z-20 w-full xl:h-[650px]" ></div>
            </div>
        </div>
        <div className="flex mt-[-60px] items-center overflow-hidden text-[100px] lg:text-[130px] "> 
            <div className="whitespace-nowrap font-bold rollingText">
                <div className="rightToLeft flex gap-2 ">
                    <p className="mb-0">Software Development<span className="text-[#C0E8DA] opacity-50">·</span>Javascript<span className="text-[#C0E8DA] opacity-50">·</span>UX/UI<span className="text-[#C0E8DA] opacity-50">·</span></p>
                    <p className="mb-0">Software Development<span className="text-[#C0E8DA] opacity-50">·</span>Javascript<span className="text-[#C0E8DA] opacity-50">·</span>UX/UI<span className="text-[#C0E8DA] opacity-50">·</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About