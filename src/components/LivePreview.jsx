import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const LivePreview = ({ project, onClose, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center ${className}`}
    >
      {/* Close Button */}
      <button
        aria-label="Close Live Preview"
        className="absolute top-4 right-6 text-white hover:bg-red-600 rounded-full p-2"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Outer Container */}
      <div className="relative max-w-3xl w-full bg-gray-900 shadow-lg overflow-hidden rounded-lg">
        {/* Scrollable Content */}
        <div className="flex flex-col justify-between p-6 space-y-6 h-full max-h-[90vh] overflow-y-auto">
          {/* Project Image */}
          <div className="h-64 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Project Languages */}
          {project.language.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.language.map((lang, index) => (
                <span
                  key={index}
                  className="py-1 px-3 text-accent rounded-lg border border-accent bg-gray-800"
                >
                  {lang}
                </span>
              ))}
            </div>
          )}

          {/* Project Title */}
          <h1 className="text-2xl sm:text-3xl text-orange-500 font-semibold">
            {project.title}
          </h1>

          {/* Created Date */}
          <span className="text-sm text-gray-400">
            Created: {project.created}
          </span>

          {/* Project Description */}
          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          {/* Action Buttons */}
          <div className="flex justify-evenly gap-4 mt-auto">
            <button
              className="py-2 px-6 flex-1 bg-white text-accent text-lg font-semibold rounded-lg border border-accent hover:bg-accent hover:text-white transition"
              onClick={() => window.open(project.codeLink, "_blank")}
            >
              Get Code
            </button>
            <button className="py-2 px-6 flex-1 bg-accent text-white text-lg font-semibold rounded-lg border border-accent hover:bg-white hover:text-accent transition">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Preview
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};



export default LivePreview;
