import { emoji, resume, divider } from "../assets";
import { section } from "../style";
import Typewriter from "react-ts-typewriter";

const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col justify-center">
    {/* Hero text Content */}
    <div className="mb-10 sm:mb-0 w-[100%]">
      <h1 className={`${section.heading}`}>
        Hi, <img src={emoji} alt="" className="inline w-12 md:w-24" /> I am{" "}
        <br /> Abdulrasheed Abdulsalam
      </h1>
      <p
        className={`${section.textPaddingY} ${section.textLgDefault} ${section.textSmall}`}
      >
        <Typewriter
          speed={50}
          text={["Software Engineer"]}
          loop={false}
          cursor={false}
        />
      </p>
      <p
        className={`${section.textPaddingY} ${section.textLgDefault} ${section.textLarge}`}
      >
        <Typewriter
          speed={100}
          text={[
            "I have a passion for developing innovative software solutions.",
            "I excel at problem-solving and enjoy sharing my expertise with others.",
            "I am experienced in a variety of technologies including JavaScript, TypeScript, Next.js, React.js and more.",
          ]}
          loop={true}
        />
      </p>
      <a href={resume} aria-label="Download my CV" download className={`${section.button} button`}>
        Download CV
      </a>
    </div>
    <div className="absolute -left-80 -bottom-40">
      <img src={divider} alt="page-divider" />
    </div>
  </section>
);

export default Hero;