import { section } from "../style";
import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
const Contact = () => {
  //Initialize form input values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  // Setting state handler
  const [form, setForm] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  //handle form input change events
  const handleFormChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    const inputValue = {
      ...form,
      [name]: value,
    };
    setForm(inputValue);
    setMessage(null);
  };
  //handle submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      //email address validation
      if (
        !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(form.email)
      ) {
        setMessage("Please enter a valid email address.");
        setIsLoading(false);
        return;
      }

      //data sending throught API
      const response = await fetch("https://formspree.io/f/xlekvlpv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: form }),
      });

      //Checking response status
      if (response.ok) {
        setMessage(
          "Thank you for getting in touch with us. We will respond shortly."
        );
        // Reset loading state
        setIsLoading(false);
        // Reset form data
        setForm(initialValues);
      } else {
        // Reset loading state
        setIsLoading(false);
        throw new Error("Failed to submit form");
      }
      //Error handling
    } catch (error) {
      // Reset loading state
      setIsLoading(false);
      setMessage(
        "Sorry, there was an error submitting the form. Please try again later."
      );
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };
  return (
    <section id="contact">
      <h2 className={`${section.heading} ${section.MarginY}`}> Contact </h2>
      {/* form section start */}
      {/* form message */}
      {message && (
        <p className="mb-5 text-center text-deep-blue dark:text-gray">
          {message}
        </p>
      )}
      <div className="border-gray border p-5 md:p-20">
        <form
          className="grid sm:grid-cols-2 gap-10 m-auto w-full"
          onSubmit={handleSubmit}
          method="POST"
        >
          {/* formGroup */}
          <div className={`${section.formGroup}`}>
            <label htmlFor="firstName" className={`${section.formLabel}`}>
              FirstName
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={`${section.formInput}`}
              value={form.firstName}
              onChange={handleFormChange}
              autoComplete="true"
              required
            />
          </div>
          {/* formGroup */}
          <div className={`${section.formGroup}`}>
            <label htmlFor="lastName" className={`${section.formLabel}`}>
              LastName
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={`${section.formInput}`}
              value={form.lastName}
              onChange={handleFormChange}
              autoComplete="true"
              required
            />
          </div>
          {/* formGroup */}
          <div className={`${section.formGroup}`}>
            <label htmlFor="email" className={`${section.formLabel}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`${section.formInput}`}
              value={form.email}
              onChange={handleFormChange}
              autoComplete="true"
              required
            />
          </div>
          {/* formGroup */}
          <div className={`${section.formGroup}`}>
            <label htmlFor="phoneNumber" className={`${section.formLabel}`}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className={`${section.formInput} `}
              value={form.phoneNumber}
              onChange={handleFormChange}
              autoComplete="true"
              required
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className={`bg-gray-100 dark:bg-deep-blue border border-deep-blue  text-deep-blue dark:text-gray dark:border-deep-gray p-3 outline-none sm:col-span-2`}
            value={form.message}
            onChange={handleFormChange}
            required
          ></textarea>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`${section.button} button ${
                isLoading ? "cursor-auto" : "cursor-pointer"
              }`}
            >
              Submit
            </button>

            {/* Loader for form submission */}
            {isLoading && (
              <FaCircleNotch
                className={`text-3xl animate-spin text-deep-blue dark:text-deep-gray`}
              />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
