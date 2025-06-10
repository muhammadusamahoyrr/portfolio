import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Input from "./Input";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

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
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          reset();
        },
        (error) => {
          toast.error("Failed to send message");
          console.error("Error:: ", error);
        }
      );
  };

  // Reusable contact method component
  const ContactMethod = ({ icon: Icon, title, value }) => (
    <motion.li
      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-accent/30 transition-all"
      whileHover={{ y: -5 }}
    >
      <Icon className="text-3xl text-accent flex-shrink-0" />
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </motion.li>
  );

  return (
    <section
      id="contact"
      className="w-full font-sans py-20 px-4 sm:px-8 bg-gradient-to-br from-black to-[#1a1a1a]"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-white"
        >
          Contact
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to say hello?
              <br />
              I'd love to hear from you!
            </p>

            <ul className="space-y-4">
              <ContactMethod
                icon={MdOutlineEmail}
                title="Email"
                value="moizmeji2003@gmail.com"
              />
              <ContactMethod
                icon={FaPhone}
                title="Phone"
                value="(+92)-300-7887876"
              />
              <ContactMethod
                icon={FaLocationDot}
                title="Location"
                value="Islamabad, Pakistan"
              />
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-6"
          >
            {[
              {
                name: "from_name",
                type: "text",
                label: "Name",
                required: true,
              },
              {
                name: "email",
                type: "email",
                label: "Email",
                validation: {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                },
              },
              {
                name: "subject",
                type: "text",
                label: "Subject",
                required: true,
              },
              {
                name: "message",
                type: "textarea",
                label: "Message",
                required: true,
              },
            ].map((field, index) => (
              <div key={field.name} className="space-y-2">
                <label className="text-gray-300 text-sm">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    {...register(
                      field.name,
                      field.validation || { required: field.required }
                    )}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                    rows="4"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                ) : (
                  <Input
                    {...register(
                      field.name,
                      field.validation || { required: field.required }
                    )}
                    type={field.type}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                )}
                {errors[field.name] && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors[field.name].message || `${field.label} is required`}
                  </p>
                )}
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-accent to-white/10 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <FaPaperPlane className="text-xl" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
