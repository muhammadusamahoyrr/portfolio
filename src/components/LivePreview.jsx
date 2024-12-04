import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const LivePreview = ({ project, onclose, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-auto ${className}`}
    >
      {/* Outer section - Now scrollable */}
      <div
        className="relative max-w-4xl w-full bg-primary border border-accent rounded-lg overflow-hidden"
        style={{
          maxHeight: "90vh", // Limits max height
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:bg-red-600 rounded-full p-2"
          onClick={onclose}
        >
          <X />
        </button>

        {/* Scrollable Content */}
        <div className="flex flex-col justify-between p-4 space-y-4 h-full">
          {/* Project Image */}
          <div className="h-72 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={project.image}
              alt="website_image"
            />
          </div>

          {/* Project Languages */}
          <div className="my-4 flex flex-wrap justify-start gap-2">
            {project.language.map((lan, index) => (
              <span
                key={index}
                className="py-1 px-3 text-accent rounded-lg border border-accent"
              >
                {lan}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h1 className="text-2xl sm:text-3xl text-orange-600 font-semibold">
            {project.title}
          </h1>

          {/* Created Date */}
          <span className="text-sm text-gray-600">{project.created}</span>

          {/* Project Description */}
          <p className="line-clamp-3 mt-1 text-white">{project.description}</p>

          {/* Buttons */}
          <div className="flex items-center justify-evenly gap-x-10 pb-5 mt-auto">
            <button className="py-3 flex-1 px-4 text-accent text-xl rounded-lg border bg-white border-accent transition duration-200 hover:bg-accent hover:text-white">
              Get Code
            </button>
            <button className="py-3 flex-1 px-5 text-white rounded-lg text-xl border bg-accent border-accent transition duration-200 hover:text-accent hover:bg-white">
              <a href={project.link}>Live Preview</a>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LivePreview;
