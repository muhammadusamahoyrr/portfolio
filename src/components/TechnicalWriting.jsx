import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import tec1 from "../assets/tec1.jpg";
import tec2 from "../assets/tec2.jpg";
import tec3 from "../assets/tec3.jpg";
import tec4 from "../assets/tec4.jpg";
import tec5 from "../assets/tec5.jpg";
import tec6 from "../assets/tec6.jpg";

const technicalDocs = [
  {
    title: "Intern CDWS User Guide",
    description: "Comprehensive guide for CDWS workspace configuration and user interface",
    link: "https://drive.google.com/file/d/1LWMDvJPtAf8CEXDq-t5HUUVRFMZAnpkt/view",
    image: tec1,
    category: "User Documentation",
    pages: "140 pages",
  },
  {
    title: "Support Services & Policies Guide",
    description: "Detailed documentation of support services and organizational policies",
    link: "https://drive.google.com/file/d/1pQZwT--VlPiQ0cgJIb-dAKhpdIGJF-DY/view",
    image: tec2,
    category: "Policy Documentation",
    pages: "25 pages",
  },
  {
    title: "Ultimus DPA Suite Training",
    description: "Comprehensive training materials for Ultimus DPA Suite implementation",
    link: "https://drive.google.com/file/d/1ZDBJnaIjp9TFfQkJRE_eKv3S7bTNF4HM/view",
    image: tec3,
    category: "Training Materials",
    pages: "100 pages",
  },
  {
    title: "Ultimus 2024 Process Designer Help",
    description: "Detailed help manual for Ultimus Process Designer 2024",
    link: "https://drive.google.com/file/d/1WBCHYiJaPHPAiky6z0U_YR3G4fCs61_q/view",
    image: tec4,
    category: "Technical Manual",
    pages: "45 pages",
  },
  {
    title: "Ultimus BPM API Documentation",
    description: "Comprehensive API documentation for Ultimus BPM integration",
    link: "https://drive.google.com/file/d/1LvrEZiGv_QkMr3oh04R3_Vm9_3X7mKll/view",
    image: tec5,
    category: "API Documentation",
    pages: "45 pages",
  },
  {
    title: "Abrasive Water Jet Machining",
    description: "Book chapter on current research aspects of abrasive water-jet machining",
    link: "https://www.degruyterbrill.com/document/doi/10.1515/9783111240244-003/html",
    image: tec6,
    category: "Academic Writing",
    status: "Peer-Reviewed",
  },
];

const TechnicalWriting = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextDoc = () => {
    setActiveIndex((prev) => (prev + 1) % technicalDocs.length);
  };

  const prevDoc = () => {
    setActiveIndex((prev) => (prev - 1 + technicalDocs.length) % technicalDocs.length);
  };

  return (
    <section id="technical-writing" className="w-full bg-gradient-to-br from-black to-[#1a1a1a] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          Technical Documentation
        </motion.h2>

        {/* Documentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalDocs.map((doc, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all group shadow-lg hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={doc.image} alt={doc.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-end p-4">
                  {/* Optional overlay content like title or category if needed here */}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-[#282828] text-accent text-xs font-semibold px-3 py-1 rounded-full">{doc.category}</span>
                  {doc.pages && <span className="bg-[#282828] text-gray-400 text-xs px-3 py-1 rounded-full">{doc.pages}</span>}
                </div>
                <div className="flex flex-col flex-grow min-h-[150px]">
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 flex-shrink-0">{doc.title}</h3>
                  <p className="text-gray-400 mb-4 overflow-y-auto pr-2 custom-scrollbar max-h-28">{doc.description}</p>
                  {doc.status && (
                    <span className="bg-[#282828] text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-2 block w-fit flex-shrink-0">{doc.status}</span>
                  )}
                </div>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/80 transition-colors mt-auto flex-shrink-0"
                >
                  View Document <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Document Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#181818] rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-accent text-sm font-medium">
                      {technicalDocs[activeIndex].category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {technicalDocs[activeIndex].title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="aspect-video bg-black/50 rounded-lg mb-6">
                  <iframe
                    src={technicalDocs[activeIndex].link}
                    className="w-full h-full rounded-lg"
                    title={technicalDocs[activeIndex].title}
                  />
                </div>
                <p className="text-gray-300 mb-6">{technicalDocs[activeIndex].description}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevDoc}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" /> Previous
                  </button>
                  <a
                    href={technicalDocs[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/80 transition-colors"
                  >
                    Open Document <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={nextDoc}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    Next <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechnicalWriting; 