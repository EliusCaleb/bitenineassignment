// import React from "react";
// import { Link } from "react-router-dom";

// const FooterLink = () => {
//   return (
//     <div>
//     <div className="max-w-screen-2xl mx-auto flex justify-center items-start gap-14 mb-20 ml-30 mt-20">
//       <div className="footer-section">
//         <p className="footer-title text-lg font-semibold text-center">
//           PRODUCTS
//         </p>
//         <Link className="footer-link" to="/relational-database">
//           Relational Database
//         </Link>
//         <br/>
//         <Link className="footer-link" to="/graph-database">
//           Graph Database
//         </Link>
//         <br/>
//         <Link className="footer-link" to="/graph-based-solution">
//           Graph-based Solution
//         </Link>
//       </div>

//       <div className="footer-section ml-4">
//         <Link className="footer-title footer-title-link" to="/use-cases">
//           USE CASES
//         </Link>
//       </div>

//       <div className="footer-section ml-4">
//         <Link className="footer-title footer-title-link" to="/services">
//           SERVICES
//         </Link>
//       </div>

//       <div className="footer-section ml-4">
//         <p className="footer-title text-lg font-semibold text-center">
//           RESOURCES
//         </p>
//         <Link className="footer-link" to="/documentation">
//           Documentation
//         </Link>
//         <br/>
//         <Link className="footer-link" to="/learn">
//           Learn
//         </Link>
//       </div>

//       <div className="footer-section ml-4">
//         <Link className="footer-title footer-title-link" to="/blog">
//           BLOG
//         </Link>
//       </div>

//       <div className="footer-section ml-4">
//         <p className="footer-title text-lg font-semibold text-center">
//           COMPANY
//         </p>
//         <Link className="footer-link" to="/about-us">
//           About Us
//         </Link>
//         <br/>
//         <Link className="footer-link" to="/contact">
//           Contact
//         </Link>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default FooterLink;
import React from "react";
import { Link } from "react-router-dom";

const FooterLink = () => {
  return (
    <div className="max-w-screen-3xl mx-auto flex flex-wrap justify-center items-start gap-4 md:gap-14 mb-4 md:mb-20 mt-4 md:mt-20 p-4 md:p-0">
      <div className="w-full md:w-1/6">
        <p className="footer-title text-lg font-semibold text-center text-white">
          PRODUCTS
        </p>
        <Link className="footer-link" to="/relational-database">
          Relational Database
        </Link>
        <br />
        <Link className="footer-link" to="/graph-database">
          Graph Database
        </Link>
        <br />
        <Link className="footer-link" to="/graph-based-solution">
          Graph-based Solution
        </Link>
      </div>
      <div className="w-full md:w-1/6 mt-4 md:mt-0">
        <Link className="footer-title footer-title-link text-white" to="/services">
          SERVICES
        </Link>
      </div>

      <div className="w-full md:w-1/6 mt-4 md:mt-0">
        <p className="footer-title text-lg font-semibold text-center text-white">
          RESOURCES
        </p>
        <Link className="footer-link" to="/documentation">
          Documentation
        </Link>
        <br />
        <Link className="footer-link" to="/learn">
          Learn
        </Link>
      </div>

      <div className="w-full md:w-1/6 mt-4 md:mt-0">
        <Link className="footer-title footer-title-link text-white" to="/blog">
          BLOG
        </Link>
      </div>

      <div className="w-full md:w-1/6 mt-4 md:mt-0">
        <p className="footer-title text-lg font-semibold text-center text-white">
          COMPANY
        </p>
        <Link className="footer-link" to="/about-us">
          About Us
        </Link>
        <br />
        <Link className="footer-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default FooterLink;
