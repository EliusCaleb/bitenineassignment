import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaFacebook,
  } from "react-icons/fa";
import { PiMediumLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
      <div className="ml-4 mr-4">
        <select className="border p-2 rounded">
          <option value="english">English</option>
          <option value="korean">Korean</option>
        </select>
      </div>
      <div className="flex items-center">
          <SearchBar/>

        <div className="ml-4">
          <Link to="/contact" className="text-white hover:text-antiquewhite">
            CONTACT
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-yellow-600 hover:text-white">
            <FaGithub size={10} className="github-icon w-8 h-8" />
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-white hover:text-red-600">
            <FaYoutube size={10} className="youtube-icon w-8 h-8" />
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-white hover:text-blue-600">
            <FaLinkedinIn size={10} className="linkedin-icon w-8 h-8" />
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-white hover:text-blue-600">
            <FaFacebook size={10} className="facebook-icon w-8 h-8" />
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-white hover:text-green-600">
            <PiMediumLogo className="medium-icon w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
