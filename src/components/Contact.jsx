import { section } from "../style";
import { useForm } from "@formspree/react";
import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
const Contact = () => {
  const initialValues = {
      firstName : '',
      lastName : '',
      email: '',
      phoneNumber: '',
      message: ''
  }
  
  const [state, handleSubmit] = useForm("mnqyrvpe");
  const [form, setForm] = useState(initialValues)
  
  const handleFormChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    const inputValue = {
      ...form, [name]: value
    }
    setForm(inputValue)
  }
  return (
    <section id="contact">
      <h2 className={`${section.heading} ${section.MarginY}`}> Contact </h2>
      {/* form section start */}
      {state.succeeded && <p>Thanks for joining!</p>}
      <form
        className="grid sm:grid-cols-2 gap-10 md:w-[80%] m-auto"
        autoComplete="OFF"
        onSubmit={handleSubmit}
      >
        <div className={`${section.formGroup}`}>
          <label 
            htmlFor="first-name" 
            className={`${section.formLabel}`}
          >
            FirstName
          </label>
          <input
            type="text"
            name="firstName"
            className={`${section.formInput}`}
            value={form.firstName}
            onChange={handleFormChange}
          />
          <hr className={`${section.formLine}`} />
        </div>
        <div className={`${section.formGroup}`}>
          <label 
            htmlFor="last-name" 
            className={`${section.formLabel}`}
          >
            LastName
          </label>
          <input
            type="text"
            name="lastName"
            className={`${section.formInput}`}
            value={form.lastName}
            onChange={handleFormChange}
          />
          <hr className={`${section.formLine}`} />
        </div>
        <div className={`${section.formGroup}`}>
          <label 
            htmlFor="email" 
            className={`${section.formLabel}`}
          >
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            className={`${section.formInput}`} 
            value={form.email}
            onChange={handleFormChange}
            />
          <hr className={`${section.formLine}`} />
        </div>
        <div className={`${section.formGroup}`}>
          <label 
            htmlFor="phone-number" 
            className={`${section.formLabel}`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            className={`${section.formInput} `}
            value={form.phoneNumber}
            onChange={handleFormChange}
          />
          <hr className={`${section.formLine}`} />
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className={`bg-gray-100 dark:bg-deep-blue border border-deep-blue  text-deep-blue dark:text-deep-gray dark:border-deep-gray p-3 outline-none sm:col-span-2`}
          value={form.message}
          onChange={handleFormChange}
        ></textarea>
       <div className="flex items-center gap-4">
        <button
            type="submit"
            disabled={state.submitting}
            className={`${section.button} button`}
            onClick={() => setForm(initialValues)}
          >
            Submit
          </button>
          {state.submitting && <FaCircleNotch className={`text-3xl animate-spin text-deep-blue dark:text-deep-gray`}/>}
       </div>
      </form>
    </section>
  );
};

export default Contact;
