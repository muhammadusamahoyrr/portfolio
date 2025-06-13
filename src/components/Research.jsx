import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Import research images
import res1 from "../assets/res1.png";
import res2 from "../assets/res2.png";
import res3 from "../assets/res3.png";
import res4 from "../assets/res4.png";
import res5 from "../assets/res5.png";
import res6 from "../assets/res6.png";
import res7 from "../assets/res7.png";
import res8 from "../assets/res8.png";

const researchPapers = [
  {
    title: "Design, Analysis, and Comparison of Non-Pneumatic and Hybrid Tyres",
    description: "This research focuses on the development and analysis of hybrid tyres designed specifically for Martian terrain.",
    link: "#", // Placeholder link
    category: "Mechanical Engineering",
    status: "Published",
    image: res1,
    year: 2023,
    details: `Research Overview\nThis research focuses on the development and analysis of hybrid tyres designed specifically for Martian terrain. The project involved creating a CAD model using SolidWorks, followed by 3D printing the tyre using FDM (Fused Deposition Modeling) technology. The primary aim was to design a robust, non-pneumatic tyre capable of enduring harsh planetary conditions while maintaining optimal performance.\n\nMethodology and Key Findings:\nDesign and Simulation: The hybrid tyre design combined non-pneumatic structural features with hybrid material composition to enhance durability and load-bearing capacity.\nStructural Analysis: Performed finite element analysis (FEA) to simulate loading scenarios.\nPerformance Comparison: Benchmarked the hybrid tyre against conventional pneumatic models, demonstrating superior durability and reduced maintenance requirements.\nContribution: Proposed a novel tyre design with improved resistance to deformation, suitable for planetary exploration missions.\nSkills Demonstrated: CAD modeling, FDM technology, structural analysis, and material optimization.`,
  },
  {
    title: "Abrasive Water Jet Machining – Book Chapter",
    description: "This book chapter presents a comprehensive exploration of Abrasive Water Jet (AWJ) machining, focusing on its application in processing composite materials.",
    link: "https://www.degruyterbrill.com/document/doi/10.1515/9783111240244-003/html",
    category: "Manufacturing Technology",
    status: "Published",
    image: res2,
    year: 2024,
    details: `Research Overview\nThis book chapter presents a comprehensive exploration of Abrasive Water Jet (AWJ) machining, focusing on its application in processing composite materials. It delves into AWJ principles, including material removal mechanisms, operational parameters, and cutting performance on layered composites.\n\nKey Highlights:\nAWJ Efficiency: Demonstrated how AWJ machining provides high precision, minimal thermal damage, and superior cutting efficiency, especially when dealing with tough composite structures.\nLiterature Insight: Compared AWJ machining with traditional techniques, highlighting its advantages in cutting fiber-reinforced materials.\nApplication Scope: Discussed practical implementations in aerospace and automotive industries, emphasizing its role in achieving fine surface finishes.\nSkills Demonstrated: Technical writing, comparative analysis, and advanced manufacturing insights`,
  },
  {
    title: "Extreme Condition Composites and Their Applications: A Review",
    description: "This review paper examines composites developed to endure extreme conditions, including high temperature, corrosion, and abrasive environments.",
    link: "#", // Placeholder link
    category: "Materials Science",
    status: "Published",
    image: res3,
    year: 2022,
    details: `Research Overview\nThis review paper examines composites developed to endure extreme conditions, including high temperature, corrosion and abrasive environments. It systematically reviews current materials research, focusing on performance metrics and potential application areas.\n\nKey Highlights:\nMaterial Assessment: Evaluated composites like ceramic matrix composites (CMCs) and metal matrix composites (MMCs) for their resilience.\nResearch Gaps: Identified the challenges of maintaining mechanical integrity in hostile environments.\nApplication Insights: Provided case studies where these composites are used in aerospace and industrial applications, showcasing their ability to withstand operational stress.\nSkills Demonstrated: Data synthesis, critical analysis, and technical review writing.`,
  },
  {
    title: "Advances and Challenges in AWJ Machining on Layered Fiber Composites",
    description: "This study investigates the unique challenges posed by Abrasive Water Jet (AWJ) machining when applied to layered fiber composites.",
    link: "#", // Placeholder link
    category: "Composite Materials",
    status: "Under Review",
    image: res4,
    year: 2023,
    details: `Research Overview\nThis study investigates the unique challenges posed by Abrasive Water Jet (AWJ) machining when applied to layered fiber composites. The research focuses on optimizing cutting parameters to enhance machining accuracy and surface quality.\n\nMethodology and Key Findings:\nExperimental Setup: Conducted trials varying abrasive particle size and water pressure.\nResults: Identified a correlation between particle size and surface roughness, with optimal parameters significantly reducing delamination.\nPractical Implications: Suggested a parameter optimization framework to achieve cleaner cuts in fiber composites, especially for aerospace components.\nSkills Demonstrated: Experimental analysis, machining optimization, and statistical evaluation.`,
  },
  {
    title: "Failure Analysis of Centrifugal Pump Impeller in Sand-Water Flow",
    description: "This study addresses the problem of erosion-induced failure in centrifugal pump impellers operating in sand-water environments.",
    link: "#", // Placeholder link
    category: "Failure Analysis",
    status: "Under Review",
    image: res5,
    year: 2021,
    details: `Research Overview\nThis study addresses the problem of erosion-induced failure in centrifugal pump impellers operating in sand-water environments. The primary objective was to understand the wear mechanisms and propose design modifications to increase impeller lifespan.\n\nMethodology and Key Findings:\nSimulation: Utilized CFD and Discrete Phase Modeling (DPM) to replicate erosion patterns under variable operational conditions.\nResults: Identified critical wear zones and suggested material enhancements to minimize erosion.\nDesign Improvements: Proposed geometry adjustments that reduce high-velocity impacts, thereby increasing durability.\nSkills Demonstrated: CFD simulation, wear analysis, and material optimization.`,
  },
  {
    title: "Assessment of Impact Resistance Characteristics of 3D-Printed Polymers",
    description: "This study evaluates the impact resistance of various 3D-printed polymers by subjecting them to mechanical stress tests.",
    link: "#", // Placeholder link
    category: "Additive Manufacturing",
    status: "Published",
    image: res6,
    year: 2022,
    details: `Research Overview\nThis study evaluates the impact resistance of various 3D-printed polymers by subjecting them to mechanical stress tests. The aim was to determine the most resilient material for load-bearing applications.\n\nKey Findings:\nMaterial Testing: Evaluated impact absorption in PLA, ABS, and composite blends.\nResults: Identified composite polymer with 20% higher impact resistance compared to standard PLA.\nApplication: Findings support the selection of 3D-printed materials for structural components in dynamic environments.\nSkills Demonstrated: Material testing, impact analysis, and conference presentation.`,
  },
  {
    title: "Nano-Fluid-Based Heat Transfer Systems for Solar Panel Cooling",
    description: "This collaborative research project focuses on enhancing the cooling efficiency of solar panels using Al2O3-based nanofluids.",
    link: "#", // Placeholder link
    category: "Renewable Energy",
    status: "In Progress",
    image: res7,
    year: 2024,
    details: `Research Overview\nThis collaborative research project focuses on enhancing the cooling efficiency of solar panels using Al2O3-based nanofluids. The aim is to improve heat dissipation and maintain optimal panel temperatures, thereby increasing energy conversion efficiency and system lifespan.\n\nKey Highlights:\nSimulation Approach: Conducted CFD analysis to simulate the heat transfer performance of nano-fluids. Preliminary results indicate a 25% increase in thermal efficiency compared to conventional cooling fluids. Analyzed the effect of nano-fluid concentration on cooling efficiency and temperature distribution.\nValidation: Experimental setups are being prepared to validate the simulation outcomes. Real-world testing will compare temperature reduction rates between traditional fluids and nanofluids in solar panel cooling systems.\nCollaborative Efforts: NUST and KFUPM researchers are working together to optimize nano-fluid formulation and improve heat exchange efficiency. Joint data analysis sessions to interpret simulation results and experimental findings.\nPotential Applications: Primarily focused on solar panel cooling to maintain optimal efficiency during peak sunlight exposure. Extended applications may include cooling systems for high-performance electronics and automotive components.\nSkills Demonstrated: CFD modeling, thermal analysis, experimental validation, interdisciplinary collaboration, research methodology in nano-fluid applications.`,
  },
  {
    title: "AI-Based Smart Cold Storage System",
    description: "This project aims to develop an AI-driven temperature control system for cold storage environments.",
    link: "#", // Placeholder link
    category: "AI Integration",
    status: "In Progress",
    image: res8,
    year: 2024,
    details: `Research Overview\nThis project aims to develop an AI-driven temperature control system for cold storage environments. Integrating Arduino, DHT11 sensors, and YOLO V8 algorithms, the system predicts temperature changes and implements real-time adjustments.\n\nMethodology and Key Features:\nTemperature Prediction: Utilizes machine learning algorithms to forecast temperature variations.\nAnomaly Detection: Incorporates AI-based fault detection to maintain optimal storage conditions.\nEfficiency Improvement: Early results indicate 20% energy savings through dynamic control.\nSkills Demonstrated: AI integration, real-time monitoring, and control system design.`,
  },
];

const parseResearchDetails = (details) => {
  return details
    .split(/\n(?=[A-Z][a-z]+:)/g)
    .map((section, idx) => {
      const [heading, ...rest] = section.split("\n").filter(Boolean);
      const content = rest.join("\n").trim();

      if (content.includes("\n")) {
        return (
          <div key={heading} className="mt-4">
            <h4 className="font-semibold text-accent mb-2 text-lg">{heading}</h4>
            <ul className="list-disc list-inside text-gray-300">
              {content.split("\n").filter(Boolean).map((line, i) => (
                <li key={i}>{line.startsWith("-") ? line.substring(1).trim() : line}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        return (
          <div key={heading} className="mt-4">
            <h4 className="font-semibold text-accent mb-2 text-lg">{heading}</h4>
            <p className="text-gray-300 whitespace-pre-line">{content}</p>
          </div>
        );
      }
    });
};

const Research = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);

  const openModal = (paper) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPaper(null);
  };

  return (
    <section id="research" className="w-full bg-gradient-to-br from-black to-[#1a1a1a] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          My Research
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all group shadow-lg hover:shadow-xl hover:shadow-accent/20 flex flex-col hover:scale-[1.02]"
            >
              <div className="relative bg-gradient-to-br from-black/20 to-black/50 p-6 flex items-center justify-center h-64 overflow-hidden">
                {paper.image && <img src={paper.image} alt={paper.title} className="w-full h-full object-contain" />}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-[#282828] text-accent text-xs font-semibold px-3 py-1 rounded-full">{paper.category}</span>
                  {paper.year && <span className="bg-[#282828] text-gray-400 text-xs px-3 py-1 rounded-full">{paper.year}</span>}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 mt-auto">{paper.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{paper.description}</p>
                <div className="flex justify-end items-center mt-auto pt-4 border-t border-white/5">
                  <button
                    onClick={() => openModal(paper)}
                    className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/80 transition-colors cursor-pointer"
                  >
                    Read More <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Details Modal */}
        <AnimatePresence>
          {isModalOpen && selectedPaper && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#181818] rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative text-white flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-accent">{selectedPaper.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{selectedPaper.category} {selectedPaper.year && `(${selectedPaper.year})`}</p>
                    {/* Status tag in modal */}
                    {selectedPaper.status && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold mt-2 inline-block text-white bg-[#282828]`}>
                        {selectedPaper.status.replace(/\(.*?\)/g, '').trim()}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors text-2xl font-bold"
                  >
                    &times;
                  </button>
                </div>
                <div className="overflow-y-auto pr-4 custom-scrollbar">
                  {parseResearchDetails(selectedPaper.details)}
                </div>
                {selectedPaper.link && selectedPaper.link !== "#" && (
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                    <a
                      href={selectedPaper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/80 transition-colors"
                    >
                      Go to Publication <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Research; 