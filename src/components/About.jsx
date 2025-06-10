import React from "react";
import image from "../assets/personal_image.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
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
          I'm <span className="text-accent font-semibold">Moiz</span>, a <span className="text-accent font-semibold">graduate mechanical engineer</span> with a strong foundation in <span className="text-accent font-semibold">mechanical systems</span>, <span className="text-accent font-semibold">simulations</span>, and <span className="text-accent font-semibold">applied research</span>—complemented by extensive experience in <span className="text-accent font-semibold">technical writing</span>. I bring together hands-on engineering expertise and the ability to communicate complex ideas with clarity and precision.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Over the years, I've worked on a wide range of technical projects, from <span className="text-accent font-semibold">vehicle parameter estimation using Kalman Filters</span> and <span className="text-accent font-semibold">dynamic system modeling in MATLAB/Simulink</span> to <span className="text-accent font-semibold">CFD and structural simulations in ANSYS and SolidWorks</span>. Alongside this, I've developed a solid track record in <span className="text-accent font-semibold">technical documentation, research papers, and academic writing</span>, contributing to publications and collaborating with researchers on high-impact topics in engineering and education.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          My experience spans <span className="text-accent font-semibold">real-world internships</span>, <span className="text-accent font-semibold">collaborative research</span>, and <span className="text-accent font-semibold">independent developments</span> supported by strong skills in <span className="text-accent font-semibold">CAD, system analysis, simulation, and writing</span>. Whether I'm building models, analyzing data, or crafting detailed documentation, I focus on <span className="text-accent font-semibold">accuracy, innovation, and effective communication</span>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Let's connect and build something amazing together!
        </p>
      </motion.div>
    </div>
  </section>
  );
};

export default About;
