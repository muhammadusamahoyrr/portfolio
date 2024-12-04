import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { socialLinks } from "../constant";
import resume from "../assets/Resume.pdf";
import image from "../assets/personal_image.jpg"; // Ensure the file name and extension are correct

import { easeInOut, motion } from "framer-motion";
const HeroComponent = () => {
  const handleDownload = (e) => {};
  return (
    <section
      id="about"
      className="about flex flex-col-reverse sm:flex-row justify-evenly items-center pt-36 pb-8 mb-20"
    >
      <motion.div
        animate={{
          opacity: [0, 1],
          x: [-100, 0],
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="btext-center sm:text-start w-2/4"
      >
        <h1
          className="text-white text-center sm:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
        "
        >
          Hi,
          <br className="" />
          I'm Faizan
        </h1>
        <h2 className="text-accent text-xl font-bold text-center sm:text-start  sm:text-2xl md:text-3xl xl:text-4xl leading-tight">
          <Typewriter
            words={["Web Developer", "Tech Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <div className="">
          <p className="text-white hidden sm:inline-block text-sm md:text-xl my-4 max-w-md">
            Passionate full-stack developer dedicated to creating impactful
            digital experiences. With a strong foundation in modern web
            technologies and a commitment to problem-solving, I strive to
            deliver efficient, user-friendly solutions. Let’s build something
            great together.
          </p>

          <button className="bg-accent  hidden text-start rounded-md py-2 px-5 font-semibold font-sans text-white hover:bg-white hover:text-accent hover:border-accent duration-150 transition ease-in-out sm:block drop-shadow-md shadow-lg shadow-accent">
            <a href={resume} download="Resume">
              Resume
            </a>
          </button>
        </div>
      </motion.div>

      <motion.div
    
        className="mb-5 sm:mb-0"
        animate={{
          opacity: [0, 1],
          x: [100, 0],
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        <motion.div
          className="rounded-full"
           whileHover={{
            rotateX:'-10deg',
            rotateY:'-20deg',
          }}
          transition={{duration:0.5, ease:easeInOut}}
        >
          <img
         
            src={image}
            alt="image"
            className="lg:w-96 lg:h-96 md:w-64 md:h-64 sm:w-56 sm:h-56 w-48 h-48 rounded-full border-2 border-accent object-center object-cover drop-shadow-lg shadow-md shadow-accent"
          />
        </motion.div>
        <div className="gap-x-4 mt-6 hidden sm:flex justify-center">
          {socialLinks.map((social) => (
            <motion.a
              whileHover={{
                scale: 1.2,
                y: -5,
                color: "#ffa500", // Change to orange
                boxShadow: "0px 4px 10px rgba(255, 165, 0, 0.5)", // Glow effect
              }}
              transition={{ type: "spring", stiffness: 300 }}
              href={social.link}
              key={social.id}
              className="bg-secondary inline-block border  ease-in-out rounded-full p-2 text-accent"
            >
              {<social.icon />}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroComponent;
