import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_8lav6fn",
        "template_q1c17ox",
        form.current,
        "LfrAkRUfvQV8F4M99"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="flex flex-col justify-center items-center md:ml-auto md:py-8">
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 mt-5">
            I'm interested in job opportunities - However, if you have other
            request or question, don't hesitate to use the form.
          </p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Your Name</label>
            <input
              autoComplete="off"
              type="text"
              id="name"
              name="user_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Your Email
            </label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="user_email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
