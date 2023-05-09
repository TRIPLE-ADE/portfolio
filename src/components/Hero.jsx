import {emoji, resume, hero} from '../assets'
import { section } from '../style'

const Hero = () => (
    <section className='relative mt-5 mb-20'>
      <div className='flex items-center justify-between flex-col md:flex-row'>
        <div className='mb-10 sm:mb-0'>
          <h1 className={`${section.heading}`}>Hi, <img src={emoji} alt="" className='inline w-12 md:w-24' /> I am <br /> Abdulrasheed <br /> Abdulsalam</h1>
          <p className={`${section.textPaddingY} ${section.textLgDefault} ${section.textSmall}`}>Frontend Developer</p>
          <p className={`${section.textPaddingY} ${section.textLgDefault} ${section.textLarge}`}>I have passion for developing software and solving problems</p>
          <a href={resume} download className={`${section.button} button border-2 `}>Download CV</a>
        </div>
        <div>
          <img src={hero} alt='Hero Image' />
        </div>
      </div>
        {/* <img src={divider} alt="" className='absolute -right-80'/> */}
    </section>
  )

export default Hero