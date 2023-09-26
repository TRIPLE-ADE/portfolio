import { emoji, resume, hero } from "../assets";
import { section } from "../style";
import Typewriter from "react-ts-typewriter";

const Hero = () => (
  <section className="relative mt-5 mb-20">
    <div className="flex flex-col items-center justify-between md:flex-row">
      {/* Hero text Content */}
      <div className="mb-10 sm:mb-0 w-[100%]">
        <h1 className={`${section.heading}`}>
          Hi, <img src={emoji} alt="" className="inline w-12 md:w-24" /> I am{" "}
          <br /> Abdulrasheed <br /> Abdulsalam
        </h1>
        <p className={`${section.textPaddingY} ${section.textLgDefault} ${section.textSmall}`}>
          <Typewriter
            speed={50}
            text={["Frontend Developer"]}
            loop={false}
            cursor={false}
          />
        </p>
        <p className={`${section.textPaddingY} ${section.textLgDefault} ${section.textLarge}`}>
          <Typewriter
            speed={100}
            text={["I have passion for developing software", "I love solving problems and sharing experience"]}
            loop={true}
          />
        </p>
        <a
          href={resume}
          download
          className={`${section.button} button`}
        >
          Download CV
        </a>
      </div>
      {/* Hero Image */}
      <div>
        <img src={hero} alt="Hero Image" />
      </div>
    </div>
    {/* <img src={divider} alt="" className='absolute -right-80'/> */}
  </section>
);

export default Hero;
