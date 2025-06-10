import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { socialLinks } from "../constant";
import resume from "../assets/Resume.pdf";
import image from "../assets/personal_image.jpg";
import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse sm:flex-row justify-evenly items-center px-4 sm:px-8 pt-32 overflow-hidden backdrop-blur-xl bg-black/30"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute md:w-96 md:h-96 w-36 h-36  bg-gradient-to-b from-accent/30 to-transparent rounded-full blur-3xl opacity-30"
          animate={{
            x: [-100, 100],
            y: [-50, 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute md:w-96 md:h-96 w-36 h-36 bg-gradient-to-b from-accent/30 to-transparent rounded-full blur-3xl opacity-30 "
          animate={{
            x: [100, -100],
            y: [50, -50],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
      </div>

      {/* Text Content */}
      <motion.div
        className="text-center sm:text-start w-full sm:w-1/2 z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Hi, <br className=" sm:hidden md:block" />
          I'm <span className="text-accent">Moiz</span>
        </h1>
        <h2 className="text-accent text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold mt-4">
          <Typewriter
            words={["Mechanical Testing & Industrial ","Research & Structured Technical Writing ",
              "Simulation & Analysis "]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg my-6 max-w-md mx-auto sm:mx-0">
          Building digital experiences that matter.
        </p>
        <div className="flex gap-4 justify-center sm:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white rounded-lg py-3 px-6 font-semibold flex items-center gap-2 shadow-lg shadow-accent/50 hover:shadow-accent/70 transition-all"
          >
            <ArrowDownToLine className="animate-bounce" />
            <a href={resume} download="Resume">
              Download Resume
            </a>
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white border border-white/20 rounded-lg py-3 px-6 font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            <a href="#about">Learn More</a>
          </motion.button> */}
        </div>
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        className="relative z-10 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="rounded-full overflow-hidden border-4 border-accent/20 hover:border-accent/50 transition-all"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={image}
            alt="Faizan"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
          />
        </motion.div>
        <div className="flex gap-4 mt-6 justify-center">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-accent transition-all"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroComponent;
