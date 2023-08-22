// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>
//         <div className="bg-gray-900 py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center   text-white">
//             <img  src="/assets/img/logo.png" alt='/' />
//             <h1 className='text-4xl'>bitnine</h1>
//           </div>
//           <div className="flex space-x-4">
//           <div className="nav-link-wrapper">
//             <NavLink
//               to="/home"
//               className="text-white hover:text-yellow-500 transition-colors duration-300"
//             >
//               PRODUCT
//             </NavLink>
//           </div>
//             <NavLink
//               to="/user-cases"
//               className="text-white hover:text-yellow-500 transition-colors duration-300"
//             >
//               USER CASES
//             </NavLink>
//             <NavLink
//               to="/services"
//               className="text-white hover:text-yellow-500 transition-colors duration-300"
//             >
//               SERVICES
//             </NavLink>
//             <NavLink
//               to="/resources"
//               className="text-white hover:text-yellow-500 transition-colors duration-300"
//             >
//               RESOURCES
//             </NavLink>
//             <NavLink
//               to="/blog"
//               className="text-white hover:text-yellow-500 transition-colors duration-300"
//             >
//               BLOG
//             </NavLink>
//             <NavLink
//               to="/company"
//               className="text-white hover:text-yellow-500 transition-colors duration-300"
//             >
//               COMPANY
//             </NavLink>
//             <NavLink
//               to="/ir"
//               className="text-white hover:text-yellow-500 transition-colors duration-300"
//             >
//               IR
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and "bitnine" text */}
          <div className="flex items-center text-white">
            <img src="/assets/img/logo.png" alt="/" className="w-12 h-auto" />
            <h1 className='text-2xl md:text-4xl ml-2'>bitnine</h1>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Display the navigation links */}
          <div className={`lg:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="nav-link-wrapper">
              <NavLink
                to="/home"
                className={`text-white hover:text-yellow-500 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black py-2 px-4 rounded-md' : ''}`}
              >
                PRODUCT
              </NavLink>
            </div>
            <NavLink
              to="/user-cases"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black py-2 px-4 rounded-md' : ''}`}
            >
              USER CASES
            </NavLink>
            <NavLink
              to="/services"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black py-2 px-4 rounded-md' : ''}`}
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/resources"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black py-2 px-4 rounded-md' : ''}`}
            >
              RESOURCES
            </NavLink>
            <NavLink
              to="/blog"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black py-2 px-4 rounded-md' : ''}`}
            >
              BLOG
            </NavLink>
            <NavLink
              to="/company"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black py-2 px-4 rounded-md' : ''}`}
            >
              COMPANY
            </NavLink>
            <NavLink
              to="/ir"
              className={`text-white hover:text-yellow-500 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black py-2 px-4 rounded-md' : ''}`}
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
