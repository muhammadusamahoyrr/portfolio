import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/index";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_z306apb",
        "template_8i8pe3o",
        form.current,
        "BfF_X9ufx8ue8XzXX"
      )
      .then(
        (response) => {
          alert("Form has been submitted successfully");
          reset(); // Reset form fields
        },
        (error) => {
          alert("Failed to submit the form");
          console.error("Error:: ", error);
        }
      );
  };
  return (
    <section
      id="contact"
      className="w-full font-sans py-10 px-1 bg-black mb-20 md:mb-40"
    >
      <h1
        className="text-white lg:text-6xl text-5xl font-bold text-center mb-10"
        style={{ textShadow: "-2px -7px 0px #D97706" }}
      >
        Contact
      </h1>
      <div className="flex flex-col justify-center md:flex-row gap-5">
        {/* Left Section */}
        <div className="text-white flex flex-col  items-center sm:items-start justify-center md:text-start rounded-lg w-full md:max-w-[40%]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accent">
            Get In Touch
          </h2>
          <p className="text-secondary leading-relaxed text-center sm:text-start">
            Feel free to reach out to me for any <br/>inquiries, collaborations, or
            great opportunities.
          </p>
          <ul className="mt-6 space-y-2 flex flex-col items-center sm:items-start  text-gray-400">
            <li className="text-accent">
              <MdOutlineEmail className="inline-block mr-1 text-xl md:text-2xl" />
              <span className="text-white ml-1">youremail@example.com</span>
            </li>
            <li className="text-accent">
              <FaPhone className="inline-block mr-1 text-xl md:text-2xl" />
              <span className="text-white ml-1">+123 456 7890</span>
            </li>
            <li className="text-accent">
              <FaLocationDot className="inline-block mr-1 md:text-2xl" />
              <span className="text-white ml-1">Your City, Country</span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <form
        autoComplete="off"
          className="w-full md:max-w-[40%] !bg-black bg-opacity-60 p-6 rounded-lg drop-shadow-md"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="space-y-5 bg-black">
            <Input
             
              className="outline-none border border-secondary focus:border-accent bg-transparent text-white p-3 rounded-lg autofill:text-white"
              type="text"
              placeholder="Name"
              {...register("from_name", { required: true })}
              aria-invalid={errors.from_name ? "true" : "false"}
            />
            {errors.from_name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}

            <Input
              className="outline-none border border-secondary focus:border-accent bg-transparent text-white p-3 rounded-lg"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email format",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              className="outline-none border border-secondary focus:border-accent bg-transparent p-3 rounded-lg text-white"
              type="text"
              placeholder="Subject"
              {...register("subject", { required: true })}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject?.type === "required" && (
              <p className="text-red-500">Subject is required</p>
            )}
            <textarea
              className="outline-none border border-secondary focus:border-accent bg-transparent p-3 rounded-lg text-white w-full"
              rows="4"
              placeholder="Message"
              {...register("message", { required: true })}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message?.type === "required" && (
              <p className="text-red-500">Message is required</p>
            )}
            <button
              className="w-full text-lg bg-accent hover:bg-orange-500 text-white py-3 rounded-lg transition-all"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
