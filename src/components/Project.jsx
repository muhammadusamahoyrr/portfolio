import Masonry from "react-masonry-css";
import { projects } from "../constant/index";
import { motion } from "framer-motion";

const Project = () => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1
  };

  return (
    <section id="project" className="w-full bg-gradient-to-br from-black to-[#1a1a1a] py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
             <div
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 cursor-pointer transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 mb-6"
                onClick={() => setActiveProject(project)}
              >
                {/* Your project card content (same as before) */}
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 line-clamp-3 leading-relaxed">{project.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-4 py-2 bg-accent text-white rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors">
                    <a href={project.link}>View Project</a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Project;