import { Skills } from "../constants";
import { section } from "../style";
// import { divider } from "../assets"
const About = () => (
  <section id="about" className="relative">
    <div>
      <h2 className={`${section.heading} ${section.MarginY}`}>About</h2>
      <div className="sm:w-[70%] m-auto">
        <p
          className={`${section.textSmall} ${section.textPaddingY} ${section.textLarge} text-center text-deep-gray`}
        >
          Hi, I am Abdulrasheed Abdulsalam. A student of Federal University of Technology Minna and a member of Microsoft ADC Student League(MASL). 
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          A Frontend Developer with a strong passion for building 
          interactive websites, I have transformed into a dedicated and diligent 
          front-end developer, accumulating over a year of valuable experience. 
          My expertise lies in designing websites that are both engaging and optimized 
          for search engines, ensuring a positive impact on your business. Collaborating
          closely with product designers and web developers, I bring ideas to
          life through seamless implementation. Beyond technical proficiency, I
          excel in interpersonal skills and thrive in team environments. My
          enthusiasm for problem-solving and embracing challenges drives my
          constant growth and knowledge expansion.
        </p>
      </div>
      <p
        className={`${section.textPaddingY} mt-8 text-center text-deep-blue font-poppins text-2xl sm:text-4xl font-bold dark:text-gray`}
      >
        Skills
      </p>
      <div
        className={`grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:w-[90%] md:w-[80%] m-auto`}
      >
        {Skills.map((skill) => (
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
