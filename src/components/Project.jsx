import React, { useState } from "react";
import { projects } from "../constant/index";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LivePreview from "./LivePreview";

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots) => (
      <div className="slick-dots-container">
        <ul className="space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 border border-accent rounded-full" />
    ),
  };

  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-br from-black to-[#1a1a1a] py-20"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>

        <Slider {...settings} className="overflow-visible">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 cursor-pointer transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
                onClick={() => setActiveProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-4 py-2 bg-accent text-white rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors">
                   <a href={project.link}> View Project</a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        {/* {activeProject && (
          <LivePreview
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )} */}
      </div>
    </section>
  );
};

export default Project;
