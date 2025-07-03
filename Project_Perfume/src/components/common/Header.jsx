

import React, { useState } from "react";
import { FiMenu, FiSearch, FiX, FiChevronRight } from "react-icons/fi";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    "Latest Launch",
    "Shop by Collection",
    "Our Bestsellers",
    "About Vesarii",
  ];

  return (
    <>
      <header className={`transition-all duration-300 ${darkMode ? "bg-[#220104]" : "bg-[#F2F2F2]"}`}>
        {/* Top Banner */}
        <div className="bg-black text-white text-center py-2">
          <p className="text-[18px] font-inter">Free Delivery on Orders Over $999</p>
        </div>

        {/* Header Row */}
        <div className="flex items-center justify-between px-6 py-4 relative">
          {/* Menu Icon */}
          <button onClick={() => setMenuOpen(true)} className="text-2xl z-50">
            <FiMenu className={darkMode ? "text-white" : "text-black"} />
          </button>

          {/* Logo in Center */}
          <h1
            className={`text-[36px] md:text-[48px] font-dm-serif absolute left-1/2 transform -translate-x-1/2 ${
              darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"
            }`}
          >
            <a href="/">Vesarii</a>
          </h1>

          {/* Search Icon */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-2xl z-50">
            <FiSearch className={darkMode ? "text-white" : "text-black"} />
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="text-right px-6 py-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded transition-colors ${
              darkMode ? "bg-[#dab61f] text-[#0d0603]" : "bg-[#79300f] text-white"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* Sidebar Menu Overlay */}
      {menuOpen && (
        <>
          {/* Dim background */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-[80%] max-w-sm h-full bg-white z-50 shadow-lg p-6 overflow-y-auto rounded-r-xl">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FiX />
              </button>
            </div>

            <hr className="mb-4" />

            {/* Navigation Items */}
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-[18px] font-medium">
                  <a href={`#${item.toLowerCase().replace(/ /g, "")}`}>{item}</a>
                  <FiChevronRight />
                </li>
              ))}
            </ul>

            {/* Tabs at bottom */}
            <div className="flex justify-between mt-8 space-x-2">
              <button className="flex-1 border px-4 py-2 rounded-lg font-semibold">
                Fashion & Accessories
              </button>
              <button className="flex-1 border px-4 py-2 rounded-lg font-semibold bg-gray-100">
                Fragrance & Beauty
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
