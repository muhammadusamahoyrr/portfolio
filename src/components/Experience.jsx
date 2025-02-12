import React from "react";
import { motion } from "framer-motion";
import { experience } from "../constant/index";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full bg-gradient-to-br from-black to-[#1a1a1a] py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0  overflow-hidden">
        <motion.div
          className="absolute top-56 right-24 w-96 h-96 bg-gradient-to-r from-[#D97706]/20 to-transparent rounded-full blur-3xl opacity-30"
          animate={{
            x: [-100, 100],
            y: [-50, 50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-white md:text-6xl font-bold text-center mb-16 md:mb-24"
        >
          Experience
        </motion.h2>

        <VerticalTimeline
          lineColor="rgba(217, 119, 6, 0.1)"
          className="!max-w-[1000px] mx-auto"
        >
          {experience.map((data, index) => (
            <VerticalTimelineElement
              key={index}
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(12px)",
                borderRadius: "16px",
                border: "1px solid rgba(217, 119, 6, 0.15)",
                boxShadow: "0 4px 30px rgba(217, 119, 6, 0.05)",
                padding: "1.5rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(217, 119, 6, 0.3)",
              }}
              iconStyle={{
                background: "rgba(0, 0, 0, 0.8)",
                border: "2px solid #D97706",
                boxShadow: "0 0 15px rgba(217, 119, 6, 0.3)",
                backgroundSize: "cover",
                backgroundImage: `url(${data.image})`,
              }}
              date={
                <motion.span
                  className="text-accent/80 font-medium text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {data.date}
                </motion.span>
              }
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-14 h-14 rounded-lg border border-accent/20 p-1"
                      src={data.image}
                      alt={data.name}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {data.name}
                    </h3>
                    {/* <p className="text-accent text-sm font-medium">
                      {data.role || "Position"}
                    </p> */}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed text-base">
                    {data.about}
                  </p>

                  {data.skills && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {data.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
