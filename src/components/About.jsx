import { Skills } from "../constants";
import { section } from "../style";
import { divider } from "../assets";

const About = () => (
  <section id="about" className="relative">
    <div>
      <h2 className={`${section.heading} ${section.MarginY}`}>About</h2>
      <div className="w-11/12 m-auto">
        <p className={`${section.textPaddingY} ${section.text}`}>
          Hi there! I'm Abdulrasheed Abdulsalam. I'm a dynamic Software Engineer
          fueled by a fervent passion for crafting captivating web applications.
          With over a year of dedicated experience, I've honed my skills to
          seamlessly blend creativity with technical prowess.
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          Specializing in designing websites that not only captivate but also
          rank high on search engines, I ensure your digital presence leaves a
          lasting impression. Collaborating closely with designers and
          developers, I breathe life into ideas through meticulous
          implementation. Beyond technical finesse, my strength lies in
          fostering effective communication and thriving in collaborative
          environments. My relentless drive for problem-solving fuels my
          constant pursuit of growth and knowledge expansion.
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          Let's collaborate to turn your digital vision into a reality that
          resonates with your audience and drives your business forward!
        </p>
        {/* <p className={`${section.textPaddingY} ${section.text}`}>
          Hi, I am Abdulrasheed Abdulsalam. A Software Engineer with a strong
          passion for building interactive websites, I have transformed into a
          dedicated and diligent Software developer, accumulating over a year of
          valuable experience.
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          My expertise lies in designing websites that are both engaging and
          optimized for search engines, ensuring a positive impact on your
          business. Collaborating closely with designers and developers, I bring
          ideas to life through seamless implementation. Beyond technical
          proficiency, I excel in interpersonal skills and thrive in team
          environments. My enthusiasm for problem-solving and embracing
          challenges drives my constant growth and knowledge expansion.
        </p> */}
        <p
          className={`${section.textPaddingY} mt-8 text-center text-deep-blue font-poppins text-2xl sm:text-4xl font-bold dark:text-gray`}
        >
          Skills
        </p>
        <div
          className={`grid sm:grid-cols-3 md:grid-cols-4 gap-7 m-auto max-w-2xl`}
        >
          {Skills.map((skill) => (
            <div key={skill.text} className="flex items-center gap-2">
              <img src={skill.icon} alt={skill.text} className="w-12" />
              <p
                className={`${section.textLgDefault} ${section.textSmall} break-normal`}
              >
                {skill.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute -right-80 -bottom-40">
      <img src={divider} alt="page-divider" />
    </div>
  </section>
);

export default About;
