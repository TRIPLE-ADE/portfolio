import { skills } from "../constants";
import { section } from "../style";
// import { divider } from "../assets"
const About = () => (
  <section id="about" className="relative">
    <div>
      <h2 className={`${section.heading} ${section.MarginBottom}`}>About</h2>
      <div className="sm:w-[70%] m-auto">
        <p
          className={`${section.textLgDefault} ${section.textPaddingY} ${section.textLarge} text-center`}
        >
          Hi, I am Abdulrasheed. A Frontend Developer from Nigeria.
        </p>
        <p
          className={`${section.textPaddingY} ${section.text}`}
        >
          My passion for building interactive websites has led me to become a
          dedicated and hard-working front-end developer with over a year of
          experience. My proven track record of designing interactive and
          SEO-friendly websites will add value to your business. The
          implementation of designs is done in collaboration with product
          designers and web developers. In addition to my technical skills, I
          also have excellent interpersonal skills and a strong sense of
          teamwork. To grow and expand my knowledge, I enjoy solving problems
          and facing challenges.
        </p>
      </div>
      <div
        className={`grid  grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:w-[90%] md:w-[80%] m-auto`}
      >
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center">
            <img src={skill.icon} alt={skill.text} className="w-24" />
            <p className={`${section.textLgDefault} ${section.textLarge}`}>
              {skill.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* <img src={divider} alt="" className='absolute -left-80'/> */}
  </section>
);

export default About;
