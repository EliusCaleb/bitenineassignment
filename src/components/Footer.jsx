
import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6">
      <FooterLink />
      <footer className="flex flex-col md:flex-row justify-between ml-5 bg-gray-900 text-white py-6 mt-2">
        <div className="text-center mb-4">
          <p className="text-gray-500">
            &copy; 2023 by Bitnine Global Inc. All Rights Reserved.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-4 md:mt-0">
          <div className="hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500">
            <Link to="#">
              <FaGithub className="text-xl" />
            </Link>
          </div>

          <div className="hover:bg-white hover:text-red-900 p-2 rounded-full transition duration-500">
            <Link to="#">
              <FaYoutube className="text-xl" />
            </Link>
          </div>
          <div className="hover:bg-white hover:text-blue-900 p-2 rounded-full transition duration-500">
            <Link to="#">
              <FaLinkedinIn className="text-xl" />
            </Link>
          </div>
          <div className="hover:bg-gray-900 hover:text-blue-700 p-2 rounded-full transition duration-500">
            <Link to="#">
              <FaFacebook className="text-xl" />
            </Link>
          </div>
          <div className="hover:bg-gray-900 hover:text-blue-900 p-2 rounded-full transition duration-500">
            <Link to="#">
              <FaTwitter className="text-xl" />
            </Link>
          </div>
        </div>
      </footer>

      <div className="flex justify-center mt-4">
        <button className="text-gray-900 bg-white font-semibold px-4 py-2 mr-4 rounded-full hover:bg-gray-200 transition duration-300">
          Apache AGE
        </button>
        <button className="text-gray-900 bg-white font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Footer;

