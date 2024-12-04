import React, { useState } from "react";
import { projects } from "../constant/index";
import { motion } from "framer-motion";
import LivePreview from "./LivePreview";
const Project = () => {
  const [activeProject, setActiveProject] = useState(null);
  const handleOpenProject = (project) => {
    setActiveProject(project);
  };
  console.log(activeProject);

  const handleCloseActiveProject = () => {
    setActiveProject(null);
  };
  return (
    <>
      <section id="project" className="w-full font-sans bg-black py-5  mb-20 ">
        <h1 
         style={{textShadow:'-2px -7px 0px  #D97706'}}
        className="text-white sm:pt-20 lg:text-6xl text-5xl  font-bold font-sans drop-shadow-lg md:mb-28 mb-14 text-center ">
          Pojects
        </h1>
        <div className="sm:px-3 md:px-16 px-1 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 md:gap-10 ">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ y:-10}}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="p-5 cursor-pointer rounded-xl bg-transparent opacity-90 border border-accent drop-shadow-md shadow-md  hover:shadow-accent text-white relative"
              onClick={() => handleOpenProject(project)}
            >
             <a href={project.link}>
              <div className="h-56 rounded-xl">
                <img
                  className="w-full h-full rounded-xl"
                  src={project.image}
                  alt="website_1"
                />
              </div>
              <div className="my-4 flex flex-wrap justify-start gap-2">
                {project.language.map((lan, index) => (
                  <span
                    key={index}
                    className="sm:py-2 py-1 sm:px-3 px-2 text-secondary rounded-xl border border-accent bg-accent drop-shadow-md"
                  >
                    {lan}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl text-accent sm:text-3xl mb-3 font-semibold">
                {project.title}
              </h1>
              <span className="font-semibold text-secondary opacity-30">
                {project.created}
              </span>
              <p className="line-clamp-3 mt-1">{project.description}</p>
              {/* lvie preview */}
              </a>
            </motion.div>
          ))}
          
        </div>
      </section>
    </>
  );
};

export default Project;
