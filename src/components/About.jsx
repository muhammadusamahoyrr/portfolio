import React from "react";
import image from "../assets/personal_image.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    // <section className="flex justify-center gap-10">
    //   <h1
    //     style={{ textShadow: "-2px -7px 0px #D97706" }}
    //     className="text-white lg:text-6xl text-5xl font-bold text-center mb-20 font-sans"
    //   >
    //     About
    //   </h1>
    //   <div>
    //     <div>
    //         <img src="" alt="" />
    //     </div>
    //     <div>
    //         <p></p>
    //     </div>
    //   </div>
    // </section>
    <section
    id="about"
    className="relative py-20 px-4 sm:px-8 overflow-hidden"
    style={{
      background: "linear-gradient(45deg, #000000,  #0f0f0f)",
    }}
  >
    {/* Gradient Blobs for Background */}
    <div className="absolute  inset-0 overflow-hidden">
      <motion.div
        className="absolute md:w-96 md:h-96 w-36 h-36  bg-gradient-to-r from-accent/30 to-transparent rounded-full blur-3xl opacity-30"
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
        className="absolute md:w-96 md:h-96 w-36 h-36 bg-gradient-to-b from-accent/30 to-transparent rounded-full blur-3xl opacity-30"
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

    {/* Content */}
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Hi, I’m <span className="text-accent font-semibold">Faizan</span>, a passionate and detail-oriented{" "}
          <span className="text-accent font-semibold">Full-Stack Developer</span> with a love for building innovative
          and user-friendly digital experiences. With a strong foundation in modern web technologies and a knack for
          problem-solving, I specialize in creating scalable, efficient, and visually appealing applications that make
          an impact.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I am <span className="text-accent font-semibold">Software Engineering Student</span> working with technologies
          like <span className="text-accent font-semibold">JavaScript, React, Node.js, and MongoDB</span>, and I’m
          always eager to learn and adapt to new tools and frameworks. Whether it’s crafting seamless user interfaces
          or designing robust backend systems, I thrive on turning ideas into reality.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          When I’m not coding, you can find me exploring the latest tech trends, contributing to open-source projects,
          or experimenting with new programming languages. I believe in continuous learning and strive to deliver
          solutions that not only meet but exceed expectations.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Let’s connect and build something amazing together!
        </p>
      </motion.div>
    </div>
  </section>
  );
};

export default About;
