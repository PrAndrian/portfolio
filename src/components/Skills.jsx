import SkillCard from "./SkillCard"
import {skills} from '../mockData'

const Skills = () => {
  return (
    <section className='bg-white py-5 px-5 lg:py-0 xl:py-20 lg:px-10 xl:px-5'>
        <div className='container mx-auto'>
          <div className="flex items-center space-x-10">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold flex-shrink text-motion"> My Strength </h2>
            <div className="flex-1 bg-gray-200 h-px"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 relative gap-10">
            {skills.map((skill,i)=>
              <SkillCard 
                key={i} 
                tag={skill.tag}
                title={skill.title} 
                description={skill.description}
              />
            )}
            <SkillCard 
                tag={""}
                title={"Let's Chat"} 
                description={"If you're intrigued by my skill set, let's have a chat! I'm enthusiastic about discussing how my expertise in frontend web development, particularly in JavaScript, could contribute to and elevate your projects. Let's connect and explore the possibilities together!"}
              />
          </div>
        </div>
    </section>
  )
}

export default Skills