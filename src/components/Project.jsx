import { section } from "../style";
import { Projects } from "../constants";
const Project = () => (
  <section id="projects">
    <h2 className={`${section.heading} ${section.MarginY}`}> Project </h2>
    <div className={`${section.layout}`}>
      
      {Projects.map((project) => (
        <div key={project.id}>
          <div className="overflow-hidden hover:cursor-pointer hover:scale-105">
            <img src={project.image} alt="" className="object-cover w-full h-52" />
          </div>
          <div>
            <p className={`${section.textSmall} ${section.textLgDefault} ${section.textPaddingY}`}>
              {project.work}
            </p>
            <p className={`sm:text-sm text-xs text-deep-green dark:text-deep-gray`}>
              {project.name}
            </p>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Project;
