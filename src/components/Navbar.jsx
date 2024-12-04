import React, { useEffect, useState } from "react";
import { navbarData } from "../constant";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { RiMenu3Line } from "react-icons/ri";
import { X } from "lucide-react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import '../style.css'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="w-full  bg-black  text-softGray py-6 flex justify-between items-center font-sans fixed z-50 text-gray-100">
      {/* Logo Section */}
      <div className="text-[1rem] md:text-lg tracking-normal font-bold pl-7 italic">
        <h1 className="text-accent">
         FaizanSiddique
        </h1>
      </div>
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex md:gap-x-5 md:pr-16 pr-7 text-sm md:text-[12px] sm:text-[10px] lg:text-lg">
        {navbarData.map((data, index) => (
          <NavLink
            key={index}
            smooth
            to={`/#${data.link}`}
            activeClassName="selected"
            activeStyle={{ color: "#D97706" }}
            className={`md:text-lg text-[1.2rem] active:text-accent`}
          >
            {data.title}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="text-lg pr-7 inline-block md:hidden">
        <button onClick={toggleMenu}>
          {isMobileMenuOpen ? <X /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="flex md:hidden flex-col shadow-2xl bg-white/5 text-white absolute top-14 w-full px-7 py-4 z-50">
          {navbarData.map((data, index) => (
            <NavLink
              key={index}
              smooth
              to={`/#${data.link}`}
              className="py-2 text-lg hover:bg-accent  rounded-lg px-1 inline-block"
              onClick={closeMenu} // Close the menu after a link is clicked
            >
              {data.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
