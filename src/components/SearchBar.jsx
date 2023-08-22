import React, { useState } from "react";
import { FaRegWindowClose, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-center rounded-lg overflow-hidden h-14 w-52 ml-[-40px] mr-30">
      <input
        className={`bg-gray-600 px-10 pt-3 rounded-lg h-10 w-52 mt-[-2px] border-none transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        type="text"
        placeholder="SEARCH"
      />
      {isOpen ? (
        <button
          onClick={toggleSearch}
          className={`absolute top-4 ml-150 opacity-100 transition-opacity`}
        >
          <FaRegWindowClose className="w-7 h-5 text-gray-300  " />
        </button>
      ) : (
        <button
          onClick={toggleSearch}
          className={`absolute top-4 ml-150 opacity-100 transition-opacity `}
        >
          <FaSearch className="w-5 h-5 text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
