import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../constant";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Ensure this import is included

const Skill = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section
      id="skill"
      className="w-full py-20 bg-gradient-to-br from-black to-[#1a1a1a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Technical Arsenal
        </motion.h1>

        {/* Skills List */}
        <div className="max-w-2xl mx-auto flex justify-center gap-5 flex-wrap">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center px-4 py-3 border border-white/10
                         bg-gradient-to-tr from-white/5 to-black  
                         rounded-md cursor-pointer relative"
            >
              <skill.icon
                style={{ color: skill.color }}
                className="lg:text-4xl md:text-3xl text-xl"
              />
              <p className="text-white">{skill.title}</p>

              {/* AboutSkill Tooltip */}
              {activeSkill && activeSkill.title === skill.title && (
                <AboutSkill
                  title={activeSkill.title}
                  level={activeSkill.level}
                  icon={activeSkill.icon}
                  color={activeSkill.color}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// AboutSkill Component
const AboutSkill = ({ title, level, icon: Icon, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute z-[9999] top-[110%] md:left-1/2 transform -translate-x-1/2 
                 bg-black text-white p-3 rounded-md shadow-lg w-48"
    >
      <div className="flex items-center gap-2">
        <Icon style={{ color: color }} className="text-3xl" />
        <p className="font-semibold">{title}</p>
      </div>

      <div className="w-20 h-20 mx-auto my-2">
        <CircularProgressbar
          value={level}
          text={`${level}%`}
          styles={buildStyles({
            textSize: "14px",
            pathColor: color,
            textColor: "#fff",
            trailColor: "#444",
          })}
        />
      </div>

      <p className="text-xs text-gray-400 text-center">
        {title} proficiency is at {level}%
      </p>
    </motion.div>
  );
};

export default Skill;
