import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-gray-800 text-white fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={closeMenu} className="text-xl font-bold">
              Port<span className="text-blue-400">folio</span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#certificates" className="hover:text-blue-400">Certificates</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <a href="#home" onClick={closeMenu} className="text-xl font-bold">
              Port<span className="text-blue-400">folio</span>
            </a>
            <button onClick={toggleMenu} aria-label="Close menu">
              <FaTimes size={24} />
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
