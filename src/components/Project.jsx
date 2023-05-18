import { section } from "../style";
import { Projects } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Project = () => (
  <section id="projects">
    <h2 className={`${section.heading} ${section.MarginY}`}> Project </h2>
    <div className={`${section.layout}`}>
     {/* mapping through projects array of objects  */}
      {Projects.map((project) => (
        <div key={project.id}>
          <div className="overflow-hidden hover:cursor-pointer hover:scale-105">
            <img src={project.image} alt="" className="object-cover w-full h-52" />
          </div>
          <div>
            <p className={`${section.textSmall} ${section.textLgDefault} ${section.textPaddingY}`}>
              {project.work} 
            </p>
            <div className="flex items-center justify-between text-deep-blue dark:text-gray">
              <p className={`sm:text-sm text-xs text-deep-green dark:text-deep-gray`}>
                {project.name} 
              </p>
             <div className="justify-self-end">
              <a href={project.github} target="_blank" rel="noreferrer"><FaGithub className="inline"/> </a> 
              <a href={project.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt className="inline"/></a>
             </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Project;
