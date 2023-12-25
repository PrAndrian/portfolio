import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section id="about" className="py-20 scrollable-wrapper px-5 lg:px-10 xl:px-0">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-5 lg:space-y-0 lg:space-x-5 xl:space-x-0 xl:px-5 items-center" >
                <div className="flex flex-col space-y-5 lg:space-y-7 items-start" >
                    <div className="px-5 py-3 rounded-lg items-center text-[#5E17EB] border border-[#5E17EB] fade-in-fast">
                        Fundamentals of Web Developement
                    </div>
                    <div className="text-3xl xl:text-5xl 2xl:text-6xl font-bold xl:max-w-lg 2xl:max-w-2xl fade-in-fast"> 
                       Javascript Magician
                    </div>
                    <p className="xl:max-w-xl 2xl:max-w-2xl 2xl:text-xl fade-in-fast"> 
                        Hey! I&apos;m a french web developer fluent in Javascript, on a coding journey for over 2 years. I find joy in turning challenges into vibrant digital stories, bridging the gap between ideas and their online presence.
                        I&apos;ve recently completed my journey at OpenClassrooms, I&apos;m a storyteller at heart, a problem-solving enthusiast, and always ready to bring your digital ideas to life.
                    </p>
                    <div className="flex items-center gap-5">
                        <Link to="https://drive.google.com/file/d/1zRR6FnXE6ajpMrO2ON1ELwUFgiOcCBKU/view?usp=sharing" className="text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 mr-auto hover:opacity-80" >
                            <span >See my resume !</span>
                            <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 -rotate-45"/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/princy-and/" rel="noopener noreferrer" target="blank">
                            <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8 text-black hover:text-[#5E17EB] transition-all duration-300' />
                        </Link>
                        <Link to="https://github.com/PrAndrian" rel="noopener noreferrer" target="blank">
                            <FontAwesomeIcon icon={faGithub} className='w-8 h-8 text-black hover:text-[#5E17EB] transition-all duration-300'/>
                        </Link>
                    </div>
                </div>
                <div style={{backgroundImage: `url('https://media.licdn.com/dms/image/D4E03AQEe1ADlLjXbzA/profile-displayphoto-shrink_800_800/0/1697386030055?e=1707955200&v=beta&t=7-A4osTAu9eYkFfbeeOTGR3SxVbRWdxi1Cj7PSSQdXQ')`}}
                className="bg-cover bg-[25%_50%] lg:bg-center h-[400px] xl:bg-cover xl:bg-[20%] 2xl:bg-cover rounded-lg z-20 w-full xl:h-[650px]" ></div>
            </div>
        </div>
        <div className="flex mt-[-100px] items-center overflow-hidden text-[100px] lg:text-[130px] "> 
            <div className="whitespace-nowrap font-bold rollingText">
                <div className="rightToLeft flex gap-2">
                    <p className="mb-0">Software Development<span className="text-[#5E17EB] opacity-50">·</span>Javascript<span className="text-[#5E17EB] opacity-50">·</span>UX/UI<span className="text-[#5E17EB] opacity-50">·</span></p>
                    <p className="mb-0">Software Development<span className="text-[#5E17EB] opacity-50">·</span>Javascript<span className="text-[#5E17EB] opacity-50">·</span>UX/UI<span className="text-[#5E17EB] opacity-50">·</span></p>
                </div>
            </div>
        </div>
        <div className="flex mt-[-30px] justify-end items-center overflow-hidden text-[100px] lg:text-[130px]"> 
            <div className="whitespace-nowrap font-bold rollingText ">
                <div className="leftToRight flex gap-2">
                    <p className="mb-0">Software Development<span className="text-[#5E17EB] opacity-50">·</span>Javascript<span className="text-[#5E17EB] opacity-50">·</span>UX/UI<span className="text-[#5E17EB] opacity-50">·</span></p>
                    <p className="mb-0">Software Development<span className="text-[#5E17EB] opacity-50">·</span>Javascript<span className="text-[#5E17EB] opacity-50">·</span>UX/UI<span className="text-[#5E17EB] opacity-50">·</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About