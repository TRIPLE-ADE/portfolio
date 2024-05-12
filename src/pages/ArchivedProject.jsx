import MainLayout from "../layout/MainLayout";
import { Projects } from "../constants";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { section } from "../style";
import { Link } from "react-router-dom";

const ArchivedProject = () => {
  return (
    <MainLayout>
      <Link to="/" className="cursor-pointer block mb-4">
        <FaArrowLeft className="inline mr-2" />
        Go Back
      </Link>
      <h1 className={`${section.heading} mb-5`}>Full Projects</h1>
      <div>
        {Projects.map((project) => (
          <div key={project.name}>
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
                      <FaGithub className="inline text-2xl mr-3" />
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
            <hr className="my-2" />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default ArchivedProject;
