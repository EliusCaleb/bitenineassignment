import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center text-white">
            <img src="/assets/img/logo.png" alt="/" className="w-12 h-auto" />
            <h1 className="text-2xl md:text-4xl ml-2">bitnine</h1>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={`lg:flex space-x-4 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="nav-link-wrapper">
              <NavLink
                to="/"
                className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                  isMobileMenuOpen ? "bg-black py-2 px-4 rounded-md" : ""
                }`}
              >
                PRODUCT
              </NavLink>
            </div>
            <NavLink
              to="/user-cases"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                isMobileMenuOpen ? "bg-black py-2 px-4 rounded-md" : ""
              }`}
            >
              USER CASES
            </NavLink>
            <NavLink
              to="/services"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                isMobileMenuOpen ? "bg-black py-2 px-4 rounded-md" : ""
              }`}
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/resources"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                isMobileMenuOpen ? "bg-black py-2 px-4 rounded-md" : ""
              }`}
            >
              RESOURCES
            </NavLink>
            <NavLink
              to="/blog"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                isMobileMenuOpen ? "bg-black py-2 px-4 rounded-md" : ""
              }`}
            >
              BLOG
            </NavLink>
            <NavLink
              to="/company"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                isMobileMenuOpen ? "bg-black py-2 px-4 rounded-md" : ""
              }`}
            >
              COMPANY
            </NavLink>
            <NavLink
              to="/ir"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                isMobileMenuOpen ? "bg-black py-2 px-4 rounded-md" : ""
              }`}
            >
              IR
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
