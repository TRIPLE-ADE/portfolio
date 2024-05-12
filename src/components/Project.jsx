import { section } from "../style";
import { divider } from "../assets";
import { Projects } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => (
  <section id="projects">
    <h2 className={`${section.heading} ${section.MarginY}`}> Project</h2>
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10`}>
      {/* mapping through projects array of objects  */}
      {Projects.slice(0, 6).map((project, index) => (
        <div key={project.name}>
          <div className="overflow-hidden hover:cursor-pointer hover:scale-105">
            <img
              src={project.image}
              alt=""
              className="object-cover w-full h-52"
            />
          </div>
          <div>
            <p
              className={`${section.textSmall} ${section.textLgDefault} ${section.textPaddingY}`}
            >
              {project.name}
            </p>
            <div className="flex items-center justify-between text-deep-blue dark:text-gray">
              <p
                className={`sm:text-sm text-xs text-deep-green dark:text-deep-gray`}
              >
                {project.stack}
              </p>
              <div className="justify-self-end">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub className="inline text-2xl mr-2" />{" "}
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="inline text-2xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Link
      to="/archived-projects"
      className={`${section.button} button`}
      unstable_viewTransition
    >
      See More
    </Link>
    <div className="absolute -left-40 ">
      <img src={divider} alt="page-divider" />
    </div>
  </section>
);

export default Project;
