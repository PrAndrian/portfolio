import { ScrollRestoration, useLoaderData } from "react-router-dom";
import HeroProject from "../components/HeroProject";
import { projects } from "../mockData";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projectData = useLoaderData ();

  const {
    id,
    url,
    title
  } = projectData

  return (
    <>
      <HeroProject title={title} url={url}/>
      <section className="bg-white lg:py-10 px-5">
        <div className="container mx-auto">
          <div className="flex items-center space-x-10">
            <div className="flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold flex-shrink">My Intellect</h2>
            </div>
            <div className="flex-1 bg-gray-200 h-px hidden lg:flex"></div>
            <a target="blank" className="hidden lg:flex text-lg transition-all duration-300 bg-[#5E17EB] text-white flex-shrink py-3 px-6 rounded font-bold items-center space-x-2 mr-auto hover:opacity-80 group">
              <span>See it in action</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:rotate-45 transition-all duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
              </svg>
            </a>
          </div>
          <div className="prose prose-lg text-black flex flex-col">
            <div className="mt-5">
              <p className="my-5">My Intellect is an online register, dedicated for the students of Intellect Schools of languages. This app is fully functional and offers students opportunity to follow all the metrics important for each class they attend. Available sections in the app are as follows: attendance and test log, homework log and promotional section. Students of Intellect Schools also do their tests via the app, which is helpful and time-effective. The app is designed for iOS, Android and Huawei devices, double-checked and verified by more than 1500 people so far.</p>
            </div>
            <div className="flex items-center space-x-10">
              <div className="flex-shrink text-3xl font-bold">Intellect Schools Of Languages</div>
              <div className="flex-1 bg-gray-200 h-px"></div>
              <div className="flex-shrink text-3xl font-bold">2023</div>
            </div>
          </div>
        </div>
        <section  className="bg-white my-32 px-5">
          <div  className="lg:-rotate-6 px-5 lg:px-0">
            <div  className="grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-12 items-center justify-center">
              <img  src="//images.ctfassets.net/g6o2flkpydd9/1PEgZOenCyroM5f64XPut0/11385bd80909d3b75861bd23cc4ed28e/b1.png" className="object-scale-down rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-all duration-300"/>
              <img  src="//images.ctfassets.net/g6o2flkpydd9/itP8RsItq612zILaGVV1Q/97ce8cfe49c1a8cf2a61c60ecc2f5723/b3.png" className="object-scale-down rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-all duration-300"/>
              <img  src="//images.ctfassets.net/g6o2flkpydd9/6phQOwa0fIefUuMj9URcT7/3696546adab537787fb34f959624a0c1/b4.png" className="object-scale-down rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-all duration-300"/>
              <img  src="//images.ctfassets.net/g6o2flkpydd9/5Eg6zBjXL0Mzsv6GFWrRBS/19da541671f747f1109aef080b91c08f/b5.png" className="object-scale-down rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-all duration-300"/>
              <img  src="//images.ctfassets.net/g6o2flkpydd9/123KdaWYJohlKKQ8V67x41/374920bc322536a67123cee17291a7f8/Group_7608.png" className="object-scale-down rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-all duration-300"/>
              <img  src="//images.ctfassets.net/g6o2flkpydd9/5ShbZjBxaKgNxbt68GKWz9/6cde9bf7b66f916a88a9ed0d77c3e787/Group_7609.png" className="object-scale-down rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-all duration-300"/>
            </div>
          </div>
        </section>
        <div  className="container mx-auto">
          <div  className="grid grid-cols-1 lg:grid-cols-2 items-center border-gray-200 fade-in-fast pt-5 pb-10 border-b">
            <div  className="flex items-center lg:space-x-10">
              <div  className="rollingText text-[100px] lg:text-[200px] font-bold bg-white text-stroke text-stroke-2 text-fill-white w-20 lg:w-32 leading-tight">1</div>
              <div  className="font-bold text-[#5E17EB] text-4xl lg:text-5xl uppercase">OBJECTIVES</div>
            </div>
            <div  className="prose prose-lg">
              <p>This app is going to help people organize their studies better. It will have an easy access to a student&apos;s notes, activities, tests and a chat with support if needed. Intellect is not just another place where you can learn a foreign language. It&apos;s you own personal online classbook to make your daily tasks easier.</p>
            </div>
          </div>
        </div>
        <div className='container mx-auto'>
          <header className="flex flex-row items-center lg:space-x-10 lg:space-y-5 justify-between mb-10">
              <h2 className="text-3xl lg:text-6xl font-bold flex-shrink">See other projects</h2>
              <span className="flex-1 bg-gray-200 w-96 h-px hidden lg:flex"></span>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {projects?.filter((project)=>project.id != id)
              .map((project,i)=>
                  <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      year={project.year}
                      url={project.url} 
                      columns={i+1}
                      widthInfo={project.columns === 1 ? "lg:w-[92.5%]" : "lg:w-1/2"}
                  />
              )}
          </div>
        </div>
      </section> 
      <ScrollRestoration />
    </>
  )
}

export default Project