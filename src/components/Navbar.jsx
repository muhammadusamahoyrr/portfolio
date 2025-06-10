import React, { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarData } from "../constant";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
          current = section.id;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setIsMobileMenuOpen(false);
    }
  };

  const NavLinkItem = ({ data }) => {
    const isActive = activeLink === data.link;

    return (
      <a
        onClick={() => scrollToSection(data.link)}
        className="relative group cursor-pointer"
      >
        <span
          className={`text-lg transition-colors ${
            isActive ? "text-accent" : "text-gray-300 hover:text-white"
          }`}
        >
          {data.title}
        </span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
            layoutId="nav-underline"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </a>
    );
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
            MoizAhmad
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navbarData.map((data, index) => (
            <NavLinkItem key={index} data={data} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="p-2 md:hidden text-gray-300 hover:text-white transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <RiMenu3Line size={24} className="text-white" />
          )}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 px-4 top-16 flex flex-col gap-4 bg-black/95 backdrop-blur-lg pt-4"
            >
              {navbarData.map((data, index) => (
                <a
                  key={index}
                  onClick={() => scrollToSection(data.link)}
                  className="text-2xl text-white font-light py-4 border-b border-white/10 hover:text-accent transition-colors cursor-pointer"
                >
                  {data.title}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;