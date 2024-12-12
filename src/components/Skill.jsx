import React from "react";
import { easeInOut, motion } from "framer-motion";
import {
  frontendSkill,
  backendSkill,
  msOfficeSkill,
  otherSkill,
} from "../constant/index";
const Skill = () => {
  return (
    <section id="skill" className="w-full font-sans py-5 mb-20 ">
      <h1 
      style={{textShadow:'-2px -7px 0px  #D97706'}}
      className="text-white lg:text-6xl text-5xl font-bold text-center mb-28">
        Skills
      </h1>
      <motion.div
        animate={{
          opacity: [0, 1],
          x: [-100, 0],
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10  sm:px-3 md:px-16 px-1 "
      >
        <motion.div
        whileHover={{
          rotateX:'10deg',
          rotateY:'-15deg',
          transition:{
            duration:0.3
          },
          boxShadow:'0px 6px 14px #D97706'
        }}
         className="bg-black border border-accent border-opacity-50 p-5 flex flex-col items-center rounded-xl space-y-5 ">
          <h1 className="text-secondary md:text-4xl text-3xl font-bold">
            Frontend
          </h1>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            {frontendSkill.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-3 rounded-xl border border-accent flex justify-center items-center space-x-2 shadow-sm shadow-accent"
              >
                <span className="text-xl sm:text-2xl md:text-3xl text-accent">
                  {skill.icon && <skill.icon />}
                </span>
                <h6 className="text-secondary md:text-xl">{skill.title}</h6>
              </div>
            ))}
          </div>
        </motion.div>
        {/* backend data */}
        <motion.div
         whileHover={{
          rotateX:'10deg',
          rotateY:'-15deg',
          transition:{
            duration:0.3
          },
          boxShadow:'0px 6px 14px #D97706'
        }}
         className="bg-transparent opacity-90 border border-accent border-opacity-50  p-5 flex flex-col items-center rounded-xl space-y-5 ">
          <h1 className="text-secondary md:text-4xl text-3xl font-bold">
            Backend
          </h1>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            {backendSkill.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-3 rounded-xl border border-accent flex justify-center items-center space-x-2 shadow-sm shadow-accent"
              >
                <span className="text-xl sm:text-2xl md:text-3xl text-accent">
                  {skill.icon && <skill.icon />}
                </span>
                <h6 className="text-secondary md:text-xl">{skill.title}</h6>
              </div>
            ))}
          </div>
        </motion.div>
        {/* ms office */}
        <motion.div
         whileHover={{
          rotateX:'10deg',
          rotateY:'-15deg',
          transition:{
            duration:0.3
          },
          boxShadow:'0px 6px 14px #D97706'
        
        }}
         className="bg-transparent opacity-90 border border-accent border-opacity-50 p-5 flex flex-col items-center rounded-xl space-y-5 ">
          <h1 className="text-secondary md:text-4xl text-3xl font-bold">
            Ms Office
          </h1>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            {msOfficeSkill.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-3 rounded-xl border border-accent flex justify-center items-center space-x-2 shadow-sm shadow-accent"
              >
                <span className="text-xl sm:text-2xl md:text-3xl text-accent">
                  {skill.icon && <skill.icon />}
                </span>
                <h6 className="text-secondary md:text-xl">{skill.title}</h6>
              </div>
            ))}
          </div>
        </motion.div>
        {/* other skills */}
        <motion.div
         whileHover={{
          rotateX:'10deg',
          rotateY:'-15deg',
          transition:{
            duration:0.3
          },
          boxShadow:'0px 6px 14px #D97706'
        }}
         className="borde bg-transparent opacity-90 border border-accent border-opacity-50 p-5 flex flex-col items-center rounded-xl space-y-5 ">
          <h1 className="text-secondary md:text-4xl text-3xl font-bold">Other</h1>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            {otherSkill.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-3 rounded-xl border border-accent flex justify-center items-center space-x-2 shadow-sm shadow-accent"
              >
                <span className="text-xl sm:text-2xl md:text-3xl text-accent">
                  {skill.icon && <skill.icon />}
                </span>
                <h6 className="text-secondary md:text-xl">{skill.title}</h6>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skill;
