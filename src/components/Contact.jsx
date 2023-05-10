import { section } from "../style"
const Contact = () => (
    <section id="contact">
      <h2 className={`${section.heading} ${section.MarginY}`}> Contact </h2>
      <form>
        <div className="grid sm:grid-cols-2 gap-10 md:w-[80%] m-auto ">
          <div className={`${section.formGroup}`}>
            <label htmlFor="first-name">FirstName</label>
            <input type="text" name="first-name" className={`${section.formInput} input--group`}/>
            <hr className=" border-[0.8px] border-deep-blue dark:border-gray" />
          </div>
          <div className={`${section.formGroup}`}>
            <label htmlFor="last-name">LastName</label>
            <input type="text" name="last-name" className={`${section.formInput}`}/> 
            <hr className=" border-[0.8px] border-deep-blue dark:border-gray" />
          </div>
         <div className={`${section.formGroup}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className={`${section.formInput}`}/>
            <hr className=" border-[0.8px] border-deep-blue dark:border-gray" />
          </div>
         <div className={`${section.formGroup}`}>
            <label htmlFor="phone-number">Phone Number</label>
            <input type="tel" name="phone-number" className={`${section.formInput} `}/>
            <hr className=" border-[0.8px] border-deep-blue dark:border-gray" />
         </div>
         <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className={`bg-gray-100 dark:bg-deep-blue border border-deep-blue  text-deep-blue dark:text-gray dark:border-gray p-3 outline-none sm:col-span-2`}></textarea>
          <button type="submit" className={`${section.button} button`}>Submit</button>
        </div>
      </form>
    </section>
  )

export default Contact