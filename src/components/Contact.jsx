// import { useRef } from 'react';
import { section } from "../style"
const Contact = () => {
    return(
      <section id="contact">
        <h2 className={`${section.heading} ${section.MarginY}`}> Contact </h2>
        {/* form section start */}
        <form method="POST" name="contact" data-netlify="true" className="grid sm:grid-cols-2 gap-10 md:w-[80%] m-auto ">
          <div className={`${section.formGroup}`}>
            <label htmlFor="first-name" className={`${section.formLabel}`}>FirstName</label>
            <input type="text" name="first-name" className={`${section.formInput}`}/>
            <hr className={`${section.formLine}`}  />
          </div>
          <div className={`${section.formGroup}`}>
            <label htmlFor="last-name" className={`${section.formLabel}`}>LastName</label>
            <input type="text" name="last-name" className={`${section.formInput}`}/> 
            <hr  className={`${section.formLine}`} />
          </div>
          <div className={`${section.formGroup} relative`}>
            <label htmlFor="email" className={`${section.formLabel}`}>Email</label>
            <input type="email" name="email" className={`${section.formInput}`}/>
            <hr  className={`${section.formLine}`}  />
          </div>
          <div className={`${section.formGroup}`}>
            <label htmlFor="phone-number" className={`${section.formLabel}`}>Phone Number</label>
            <input type="tel" name="phone-number" className={`${section.formInput} `}/>
            <hr className={`${section.formLine}`} />
          </div>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className={`bg-gray-100 dark:bg-deep-blue border border-deep-blue  text-deep-blue dark:text-gray dark:border-gray p-3 outline-none sm:col-span-2`}></textarea>
          <button type="submit" className={`${section.button} button`}>Submit</button>
        </form>
      </section>
  );   
}

export default Contact