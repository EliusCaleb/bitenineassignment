import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center   text-white">
            <img  src="/assets/img/logo.png" alt='/' />
            <h1 className='text-4xl'>bitnine</h1>
          </div>
          <div className="flex space-x-4">
          <div className="nav-link-wrapper">
            <NavLink
              to="/home"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              PRODUCT
            </NavLink>
          </div>
            <NavLink
              to="/user-cases"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              USER CASES
            </NavLink>
            <NavLink
              to="/services"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/resources"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              RESOURCES
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              BLOG
            </NavLink>
            <NavLink
              to="/company"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              COMPANY
            </NavLink>
            <NavLink
              to="/ir"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              IR
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar