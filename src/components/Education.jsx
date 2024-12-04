import React from "react";
import { educationData } from "../constant/index";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <section
    id="education"
     className="w-full bg-black py-10 mb-20">
      <h1
        style={{ textShadow: "-2px -7px 0px #D97706" }}
        className="text-white lg:text-6xl text-5xl font-bold text-center mb-20 font-sans"
      >
        Education
      </h1>
      <VerticalTimeline>
        {educationData.map((data, index) => (
          <VerticalTimelineElement
          date={<span className="hidden lg:inline-block" style={{ color: "#D97706", fontSize: "1.2rem", fontWeight: "bold", textShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)"}}>{data.date}</span>}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
              border: "1px solid #D97706",
              borderRadius: "12px",
              boxShadow: "0 2px 5px rgba(217, 119, 6, 0.8)", // Orange glow shadow
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(217, 119, 6, 0.8)", // Orange arrow
            }}
            iconStyle={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover", 
              backgroundPosition: "center", 
            }}
            key={index}
          >
            <div className="flex">
              <img
                className="w-16 h-16 rounded-lg mr-4"
                src={data.image}
                alt={`${data.AcademyName} logo`}
              />

              <div>
                <h1 className="md:text-xl text-md  text-white ">
                  {data.AcademyName}
                </h1>
                <h4 style={{ color: "#D97706" }} className="">
                  {data.degree}
                </h4>
                <span className="text-sm text-secondary/40">
                  {data.date}
                </span>
              </div>
            </div>
            <p className="text-gray-300 line-clamp-3 sm:line-clamp-none">{data.about}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
