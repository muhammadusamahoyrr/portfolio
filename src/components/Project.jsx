import Masonry from "react-masonry-css";
import { projects } from "../constant/index";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const parseSection = (section) => {
  // Extract heading and content
  const [heading, ...rest] = section.split("\n").filter(Boolean);
  const content = rest.join("\n").trim();
  // If content has multiple lines, use bullets
  if (content.includes("\n") || heading.toLowerCase().includes("key takeaway") || heading.toLowerCase().includes("results")) {
    return (
      <div key={heading} className="mt-4">
        <div className="font-semibold text-accent mb-2 text-lg">{heading}</div>
        <ul className="list-disc list-inside text-gray-300">
          {content.split("\n").filter(Boolean).map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    );
  }
  // Otherwise, just show as paragraph
  return (
    <div key={heading} className="mt-4">
      <div className="font-semibold text-accent mb-2 text-lg">{heading}</div>
      <div className="text-gray-300 whitespace-pre-line">{content}</div>
    </div>
  );
};

const formatDetails = (details) => {
  // Split by sections for better formatting
  return details
    .split(/\n(?=[A-Z][a-z]+:|Objective|Methodology|Results|Key Takeaways)/g)
    .map((section, idx) => parseSection(section));
};

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1
  };
  const openModal = (idx) => setActiveIndex(idx);
  const closeModal = () => setActiveIndex(null);
  const goPrev = () => setActiveIndex((i) => (i > 0 ? i - 1 : projects.length - 1));
  const goNext = () => setActiveIndex((i) => (i < projects.length - 1 ? i + 1 : 0));
  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

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
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-[420px] min-h-[420px] max-h-[420px] transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 mb-6"
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <button
                    className="mt-auto px-4 py-2 bg-accent text-white rounded-lg hover:bg-orange-600 transition-colors"
                    onClick={() => openModal(index)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Modal for project details */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#181818] rounded-2xl shadow-2xl max-w-2xl w-full p-0 relative text-white flex flex-col"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {/* Sticky header with close and navigation */}
                <div className="sticky top-0 z-10 bg-[#181818] rounded-t-2xl flex items-center justify-between px-8 pt-8 pb-4 border-b border-white/10">
                  <h3 className="text-2xl font-bold text-accent">{activeProject.title}</h3>
                  <div className="flex gap-2 items-center">
                    <button
                      className="px-3 py-1 bg-accent/20 text-accent rounded-lg hover:bg-accent/40 transition-colors"
                      onClick={goPrev}
                      aria-label="Previous"
                    >
                      &#8592;
                    </button>
                    <button
                      className="px-3 py-1 bg-accent/20 text-accent rounded-lg hover:bg-accent/40 transition-colors"
                      onClick={goNext}
                      aria-label="Next"
                    >
                      &#8594;
                    </button>
                    <button
                      className="ml-2 text-gray-400 hover:text-accent text-2xl font-bold"
                      onClick={closeModal}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                {/* Scrollable content */}
                <div className="overflow-y-auto max-h-[70vh] px-8 pb-8 pt-2">
                  {formatDetails(activeProject.details)}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Project;