import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
  return (
    <div className="bckg-fundamental bg-cover bg-center py-40 mt-20" >
        <div className="container mx-auto text-center flex flex-col space-y-10 xl:space-y-8 px-5 lg:px-0">
            <div className="text-white text-4xl xl:text-6xl 2xl:text-7xl font-bold fade-in-fast">
                I would love to hear from you.
            </div>
            <p className="text-white xl:max-w-xl mx-auto 2xl:text-xl 2xl:max-w-2xl fade-in-fast">
                Let&apos;s collaborate and bring your digital dreams to life. Start our coding journey together by diving into a conversation.
            </p>
            <a href="/start-a-project" className="mx-auto text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold flex items-center space-x-2 mr-auto mt-4 hover:opacity-80 group fade-in-fast">
                <span>Start a project</span>
                <FontAwesomeIcon icon={faArrowRight}  className='w-5 h-5 group-hover:-rotate-45 transition-all duration-300'/>
            </a>
        </div>
    </div>
  )
}

export default Contact