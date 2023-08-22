import React from "react";
import { Link } from "react-router-dom";

const FooterLink = () => {
  return (
    <div>
    <div className="max-w-screen-2xl mx-auto flex justify-center items-start gap-14 mb-20 ml-30 mt-20">
      <div className="footer-section">
        <p className="footer-title text-lg font-semibold text-center">
          PRODUCTS
        </p>
        <Link className="footer-link" to="/relational-database">
          Relational Database
        </Link>
        <br/>
        <Link className="footer-link" to="/graph-database">
          Graph Database
        </Link>
        <br/>
        <Link className="footer-link" to="/graph-based-solution">
          Graph-based Solution
        </Link>
      </div>

      <div className="footer-section ml-4">
        <Link className="footer-title footer-title-link" to="/use-cases">
          USE CASES
        </Link>
      </div>

      <div className="footer-section ml-4">
        <Link className="footer-title footer-title-link" to="/services">
          SERVICES
        </Link>
      </div>

      <div className="footer-section ml-4">
        <p className="footer-title text-lg font-semibold text-center">
          RESOURCES
        </p>
        <Link className="footer-link" to="/documentation">
          Documentation
        </Link>
        <br/>
        <Link className="footer-link" to="/learn">
          Learn
        </Link>
      </div>

      <div className="footer-section ml-4">
        <Link className="footer-title footer-title-link" to="/blog">
          BLOG
        </Link>
      </div>

      <div className="footer-section ml-4">
        <p className="footer-title text-lg font-semibold text-center">
          COMPANY
        </p>
        <Link className="footer-link" to="/about-us">
          About Us
        </Link>
        <br/>
        <Link className="footer-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </div>
  );
};

export default FooterLink;
