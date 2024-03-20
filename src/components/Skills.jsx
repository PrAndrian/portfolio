import { skills } from "../mockData";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-5 py-5 bg-white lg:py-0 xl:py-20 lg:px-10 xl:px-5"
    >
      <div className="container mx-auto">
        <div className="flex items-center space-x-10">
          <h2 className="flex-shrink text-3xl font-bold lg:text-5xl xl:text-6xl text-motion">
            {" "}
            My Strength{" "}
          </h2>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="relative grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, i) => (
            <SkillCard
              key={i}
              tag={skill.tag}
              title={skill.title}
              description={skill.description}
            />
          ))}
          <SkillCard
            title={"Interested ?"}
            description={
              "If you're intrigued by my skill set, let's have a chat! I'm enthusiastic about discussing how my expertise in frontend web development, particularly in JavaScript, could contribute to and elevate your projects. Let's connect and explore the possibilities together!"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
