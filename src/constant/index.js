import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn, FaBootstrap, FaGithub, FaMicrosoft } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { MdApi } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { SiAnsys, SiConfluence } from "react-icons/si";
import { MdEngineering, MdScience, MdPsychology } from "react-icons/md";
import { FaBrain, FaChartLine } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


import college_img from "../assets/college.jpeg";
import school_img from "../assets/school.jpeg";
import hmcImage from "../assets/hmc.png";
import nustImage from "../assets/university.png";
import ultimusImage from "../assets/ultimus.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import university_img from "../assets/university.png";
//import uni_icon from '../assets/university.ico'
 //import school_icon from '../assets/school.ico'
 //import college_icon from '../assets/college.ico'
export const navbarData = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Skills",
    link: "skill",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Projects",
    link: "project",
  },

  {
    title: "Education",
    link: "education",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export const socialLinks = [
  {
    id: "instagram",
    link: "https://www.instagram.com/ahmad_moiz03/",
    icon: FaInstagram,
  },
  
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/moiz-ahmad-3312a4228/",
    icon: FaLinkedinIn,
  },
  {
    id: "github",
    link: "https://github.com/Moiz-meji",
    icon: FaGithub,
  },
];
export const experience = [
  {
    name: "Heavy Mechanical Complex (HMC)",
    image: hmcImage,
    date: "June 2024 - Sep 2024",
    position: "Internee Mechanical Engineer",
    location: "Taxila, Pakistan",
    about:
      "Assisted in production planning, quality control, and mechanical operations. Worked with teams on feasibility studies, BOQs, and fatigue analysis for industrial components. Analyzed performance data and provided recommendations to enhance production reliability.",
  },
  {
    name: "NUST",
    image: nustImage,
    date: "Apr 2023 - Sep 2023 | Oct 2024 - Jan 2025",
    position: "Research Analyst",
    location: "Islamabad, Pakistan",
    about:
      "Co-authored 8 research and review papers across diverse topics, focusing on structured academic writing. Specialized in academic editing and formatting using IEEE, APA, and Chicago citation styles. Conducted in-depth literature reviews and supported journal/conference paper submissions. Assisted in writing summaries, discussions, and data-backed analysis sections of research publications.",
  },
  {
    name: "Ultimus Int.",
    image: ultimusImage,
    date: "Dec 2022 - May 2025",
    position: "Technical Writer",
    location: "Königsbrunn, Germany (Remote)",
    about:
      "Created and maintained technical documentation including user guides, product manuals, and software release notes. Collaborated with product and engineering teams to gather requirements and translate complex technical concepts into accessible documentation. Developed structured content using Confluence and Word; ensured consistency and compliance with documentation standards. Contributed to the creation of API documentation for software platforms, including integration workflow.",
  },
];
export const educationData = [
  {
    AcademyName: "Nust University",
    image: university_img,
    degree: "Bachlor of Science in Mechanical Engineering",
    date: "sep 2021 - jun 2025",
    about:
      "I'm Moiz, a graduate mechanical engineer with a focus on simulations, system modeling, and technical writing. I've worked on projects involving Kalman Filter-based parameter estimation, MATLAB/Simulink modeling, and CFD/structural analysis using ANSYS and SolidWorks. Alongside engineering, I've contributed to research papers and technical documentation, combining hands-on expertise with clear, effective communication.",
  },
  {
    AcademyName: "F.G Sir Syed College Mall Road Rawalpindi",
    image: college_img, // Replace with your image path
    degree: "FSC in Pre-Engineering",
    date: "Apr 2019 - Apr 2021",
    about:
      "I completed my FSc in Pre-Engineering in 2021, where I focused on subjects like mathematics, physics, and chemistry. This helped me develop a strong analytical mindset and a deeper understanding of the technical principles that I continue to apply  today.",
  },
  {
    AcademyName: "SLS High School",
    image: school_img, // Replace with your image path
    degree: "Matric in Science (Biology)",
    date: "Apr 19 - Jan 2019",
    about:
      "In 2019, I graduated with my Matriculation in Science, which introduced me to key subjects like biology, physics, and chemistry. This early education sparked my interest in engineering and set the stage for my future academic pursuits.",
  },
];

export const skillsData = [
  {
    title: "SOLIDWORKS",
    icon: MdEngineering,
    color: "#FF0000",
    level: 90,
  },
  {
    title: "ANSYS Mechanical",
    icon: SiAnsys,
    color: "#FFB71B",
    level: 85,
  },
  {
    title: "ANSYS Fluent",
    icon: SiAnsys,
    color: "#FFB71B",
    level: 80,
  },
  {
    title: "Primavera P6",
    icon: MdEngineering,
    color: "#0066CC",
    level: 75,
  },
  {
    title: "MATLAB/Simulink",
    icon: MdScience,
    color: "#0076A8",
    level: 85,
  },
  {
    title: "AI Integration",
    icon: FaBrain,
    color: "#FF6B6B",
    level: 80,
  },
  {
    title: "Microsoft Office 365",
    icon: FaMicrosoft,
    color: "#217346",
    level: 90,
  },
  {
    title: "Problem Solving",
    icon: FaLightbulb,
    color: "#FFD700",
    level: 90,
  },
  {
    title: "Research & Development",
    icon: MdScience,
    color: "#4CAF50",
    level: 85,
  },
  {
    title: "Decision Making",
    icon: MdPsychology,
    color: "#9C27B0",
    level: 85,
  },
  {
    title: "Critical Thinking",
    icon: FaBrain,
    color: "#3F51B5",
    level: 90,
  },
  {
    title: "Process Optimization",
    icon: FaChartLine,
    color: "#FF9800",
    level: 80,
  },
  {
    title: "Confluence",
    icon: SiConfluence,
    color: "#172B4D",
    level: 85,
  },
  {
    title: "API Documentation",
    icon: MdApi,
    color: "#607D8B",
    level: 80,
  }
];

export const skills = [
  {
    title: "SOLIDWORKS",
    icon: MdEngineering,
  },
  {
    title: "ANSYS Mechanical",
    icon: SiAnsys,
  },
  {
    title: "ANSYS Fluent",
    icon: SiAnsys,
  },
  {
    title: "Primavera P6",
    icon: MdEngineering,
  },
  {
    title: "MATLAB/Simulink",
    icon: MdScience,
  },
  {
    title: "AI Integration",
    icon: FaBrain,
  },
  {
    title: "Microsoft Office 365",
    icon: FaMicrosoft,
  },
  {
    title: "Problem Solving",
    icon: FaLightbulb,
  },
  {
    title: "Research & Development",
    icon: MdScience,
  },
  {
    title: "Decision Making",
    icon: MdPsychology,
  },
  {
    title: "Critical Thinking",
    icon: FaBrain,
  },
  {
    title: "Process Optimization",
    icon: FaChartLine,
  },
  {
    title: "Confluence",
    icon: SiConfluence,
  },
  {
    title: "API Documentation",
    icon: MdApi,
  }
];
export const projects = [
  {
    title: "Estimation of Vehicle Parameters for Dynamic Simulations",
    image: image1,
    description: "Real-time estimation of vehicle mass and COG height using RECKF and CarSim-MATLAB co-simulation.",
    details: `Objective\nTo develop a reliable estimation algorithm for vehicle mass and Center of Gravity (COG) height using real-time data.\n\nMethodology\nImplemented a Robust Embedded Cubature Kalman Filter (RECKF) to accurately estimate vehicle parameters. The RECKF combines the advantages of UKF and RECKF, yielding faster convergence and enhanced accuracy.\nIntegrated CarSim and MATLAB/Simulink in a co-simulation environment to facilitate real-time data processing. The ABS vehicle model from CarSim provided high-fidelity input data.\nValidated the estimation model through simulations with varying initial mass guesses to test robustness and stability.\n\nResults\nAchieved a convergence time of less than 3 seconds, with an estimation error below 0.5% from the actual mass value.\nDemonstrated robustness with low and high initial mass guesses, showcasing the method's ability to adapt under variable conditions.\n\nKey Takeaways\nThe combination of UKF and RECKF significantly outperforms traditional techniques in terms of speed and accuracy.\nReal-time co-simulation with CarSim is essential for capturing dynamic changes in vehicle parameters.`
  },
  {
    title: "AI-Based Smart Cold Storage System",
    image: image2,
    description: "Intelligent temperature control system with predictive AI and anomaly detection.",
    details: `Objective\nTo develop an intelligent temperature control system for cold storage facilities.\n\nMethodology\nDesigned the system using Arduino and DHT11 sensors to monitor temperature changes.\nIntegrated YOLO V8 and machine learning algorithms to predict temperature variations based on environmental data.\nDeveloped an anomaly detection module to identify temperature irregularities, enabling proactive maintenance.\n\nResults\nImproved cold storage efficiency by 20% through predictive temperature management.\nEnhanced system reliability by implementing real-time data acquisition and anomaly detection.\n\nKey Takeaways\nAI integration significantly improves the accuracy and efficiency of temperature control systems.\nThe anomaly detection module ensures early identification of faults, reducing maintenance costs.`
  },
  {
    title: "Nano-Fluid-Based Heat Transfer System",
    image: image3,
    description: "Enhanced thermal efficiency system using Al2O3-based nanofluids.",
    details: `Objective\nTo enhance the thermal efficiency of heat transfer systems using nano-fluids.\n\nMethodology\nModeled the system using CFD simulations to assess thermal conductivity improvements.\nUsed Al2O3-based nanofluid, known for its superior heat transfer properties compared to conventional fluids.\nConducted experimental testing to validate simulation results.\n\nResults\nAchieved a 25% increase in thermal efficiency compared to conventional fluid systems.\nDemonstrated the effectiveness of nano-fluids in high-temperature environments.\n\nKey Takeaways\nIntegrating nano-fluids in thermal systems can substantially improve heat transfer performance.\nCombining CFD modeling with experimental validation ensures accurate prediction of thermal behavior.`
  },
  {
    title: "Smart Pedometer with ESP-32 & MPU-6050",
    image: image4,
    description: "Cost-effective, accurate pedometer for real-time step tracking.",
    details: `Objective\nTo develop a cost-effective, accurate pedometer for real-time step tracking.\n\nMethodology\nBuilt the device using ESP-32 and MPU-6050 sensors, employing signal processing algorithms for motion detection.\nIntegrated the Blynk IoT platform for visualizing step count and user-defined goals.\n\nResults\nAchieved approximately 90% accuracy in motion detection.\nEnabled real-time monitoring through mobile connectivity.\n\nKey Takeaways\nEmbedded systems development using IoT platforms enhances the functionality of wearable devices.\nIntegrating motion sensors improves the reliability of step-counting algorithms.`
  },
  {
    title: "Moon Rover Tyre Design for Martian Terrain",
    image: image5,
    description: "Non-pneumatic tyre design and analysis for Martian terrain exploration.",
    details: `Objective\nTo design a durable, non-pneumatic tyre suitable for Martian terrain exploration.\n\nMethodology\nCreated a 3D-printed tyre prototype using FDM technology and SolidWorks CAD modeling.\nPerformed structural analysis to simulate Martian conditions, focusing on deflection and load-bearing capacity.\n\nResults\nAchieved 1.78 mm deflection under an 80N load, validating the tyre's structural integrity.\nDemonstrated the feasibility of non-pneumatic tyre designs for space applications.\n\nKey Takeaways\nAdvanced CAD modeling combined with FEA analysis provides valuable insights into the performance of space exploration components.\nNon-pneumatic tyres offer durability and reduced maintenance compared to traditional pneumatic designs.`
  },
  {
    title: "Human Powered Vehicle",
    image: image6,
    description: "Design and implementation of a highly efficient human-powered vehicle.",
    details: `Objective\nTo design and build a vehicle solely powered by human effort with maximum output efficiency.\n\nMethodology\nUtilized aerodynamic and ergonomic principles to reduce drag and improve power transfer.\nIncorporated lightweight materials and efficient gearing mechanisms to maximize propulsion.\n\nResults\nSecured 2nd position in the competition, showcasing the success of the design strategy.\nCreated a simplistic yet highly efficient vehicle that stood out from competitors.\n\nKey Takeaways\nDemonstrated skills in CAD modeling, mechanical design, and power transmission analysis.\nEffective teamwork and prototyping led to a successful competition outcome.`
  },
  {
    title: "ASME XRC Autonomous Vehicle",
    image: image7,
    description: "CAD modeling and algorithm development for an autonomous vehicle competition.",
    details: `Objective\nTo develop a CAD model of an autonomous vehicle and implement control algorithms for the ASME XRC Challenge.\n\nMethodology\nCreated a detailed and optimized vehicle model using SolidWorks, focusing on structural integrity and maneuverability.\nDeveloped and implemented path planning and control algorithms to navigate the race track autonomously.\n\nResults\nSecured 1st position in the event, demonstrating excellent performance in both design and coding aspects.\nSuccessfully integrated mechanical design with autonomous control systems.\n\nKey Takeaways\nApplied advanced skills in CAD design and autonomous vehicle control.\nEffective algorithm development and competition strategy proved crucial for success.`
  },
  {
    title: "Book Store System",
    image: image8,
    description: "C++ based application for managing bookstore inventory and operations.",
    details: `Objective\nTo develop a user-friendly software application for managing bookstore inventory and operations.\n\nMethodology\nImplemented separate interfaces for customers and administrators to enhance usability.\nDeveloped robust inventory management functions including adding, updating, and removing books.\nIncorporated input validation and data management to maintain system reliability.\n\nResults\nCreated a functional C++ application with a minimalistic interface for ease of use.\nSuccessfully implemented file handling and data structures for efficient book management.\n\nKey Takeaways\nApplied C++ programming skills to develop a practical software solution.\nDemonstrated capabilities in user interface design and software development practices.`
  },
  {
    title: "Flow Simulation in Heat Exchangers",
    image: image9,
    description: "CFD analysis of fluid flow and heat transfer in heat exchangers using ANSYS and SolidWorks.",
    details: `Objective\nTo analyze fluid flow and heat transfer characteristics in simple flow and cross-flow heat exchangers using computational fluid dynamics (CFD) simulations.\n\nMethodology\nPerformed simulations in two different software environments (ANSYS Fluent and SolidWorks Flow Simulation) to validate results.\nCreated heat exchanger geometries in SolidWorks and imported them into ANSYS for detailed analysis.\nApplied structured and unstructured meshes to optimize accuracy versus computation time.\nUtilized k-ε and k-ω turbulence models for accurate flow prediction and enabled thermal coupling for conjugate heat transfer assessment.\n\nResults\nSimple flow showed more uniform temperature distribution, while cross-flow exhibited enhanced thermal mixing.\nCross-flow exchangers demonstrated higher heat transfer rates due to increased turbulence.\nSuccessfully validated simulation results from both ANSYS Fluent and SolidWorks platforms.\n\nKey Takeaways\nDemonstrated proficiency in CFD simulation, ANSYS Fluent, and SolidWorks Flow Simulation.\nConfirmed that cross-flow exchangers are more effective for applications requiring rapid heat dissipation.`
  },
  {
    title: "Heating and Cooling Load Calculation of a Single-Story Building",
    image: image1,
    description: "Analysis of heating and cooling requirements for a single-story building using manual calculations and HAP software.",
    details: `Objective\nTo estimate the energy requirements for maintaining comfortable indoor temperatures in a single-story building through heating and cooling load calculations.\n\nMethodology\nImplemented two methodologies for calculating heating and cooling loads:\nManual Calculation: Applied fundamental heat transfer equations for walls, roof, ventilation, infiltration, and internal heat gains.\nHAP Software Calculation: Used simulation software for accurate, time-dependent load profiling.\nAccounted for factors such as building geometry, material properties, weather data, and occupancy patterns.\nGenerated hourly load profiles to identify peak heating and cooling requirements.\n\nResults\nManual method provided detailed insight into heat transfer calculations.\nHAP software delivered quick, automated, and precise results for complex building analysis.\nBoth methods produced comparable results, validating the reliability of the calculations.\n\nKey Takeaways\nDeveloped skills in thermal analysis, building energy modeling, and HVAC load calculations.\nDemonstrated the ability to validate results through multiple calculation methodologies.`
  },
];