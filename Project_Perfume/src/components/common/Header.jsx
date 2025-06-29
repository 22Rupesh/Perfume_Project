// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-[#fff9c7] py-4 px-6">
//       {/* Top banner */}
//       <div className="bg-black text-white text-center py-2 mb-4">
//         <p className="text-[22px] font-inter">Free Delivery on Orders Over $999</p>
//       </div>

//       {/* Main header */}
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <h1 className="text-[60px] font-dm-serif text-[#79300f] leading-[83px]">
//             <a href="/">
//             Vesarii</a>
            
//           </h1>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           <a
//             href="#latest"
//             className="text-[25px] font-alata text-[#79300f] hover:opacity-80 transition-opacity"
//           >
//             Latest Launch
//           </a>
//           <a
//             href="#collection"
//             className="text-[25px] font-alata text-[#79300f] hover:opacity-80 transition-opacity"
//           >
//             Shop by Collection
//           </a>
//           <a
//             href="#bestsellers"
//             className="text-[25px] font-alata text-[#79300f] hover:opacity-80 transition-opacity"
//           >
//             Our Bestsellers
//           </a>
//           <a
//             href="#about"
//             className="text-[25px] font-alata text-[#79300f] hover:opacity-80 transition-opacity"
//           >
//             About Vesarii
//           </a>
//         </nav>

//         {/* Right side actions */}
//         <div className="flex items-center space-x-6">
//           <span className="text-[22px] font-inter text-[#79300f]">Select Location</span>
//           <span className="text-[22px] font-inter text-[#79300f]">Search</span>
//           <img
//             src="/images/img_image_18.png"
//             alt="User profile"
//             href="/"
//             className="w-[42px] h-[42px]"
//           />
//           <img
//             src="/images/img_image_16.png"
//             alt="Cart"
//             className="w-[53px] h-[53px]"
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React from "react";

// const Header = ({ darkMode, setDarkMode }) => {
//   return (
//     <header className={`py-4 px-6 ${darkMode ? "bg-[#220104]" : "bg-[#C0BA87]"} transition-all duration-300`}>
//       {/* Top Banner */}
//       <div className="bg-black text-white text-center py-2 mb-4">
//         <p className="text-[22px] font-inter">Free Delivery on Orders Over $999</p>
//       </div>

//       {/* Main Header */}
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <h1 className={`text-[60px] font-dm-serif leading-[83px] ${darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"}`}>
//             <a href="/">Vesarii</a>
//           </h1>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           {["Latest Launch", "Shop by Collection", "Our Bestsellers", "About Vesarii"].map((item, index) => (
//             <a
//               key={index}
//               href={`#${item.toLowerCase().replace(/ /g, "")}`}
//               className={`text-[25px] font-alata hover:opacity-80 transition-opacity ${
//                 darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"
//               }`}
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//         {/* Right Side Actions */}
//         <div className="flex items-center space-x-6">
//           <span className={`text-[22px] font-inter ${darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"}`}>Select Location</span>
//           <span className={`text-[22px] font-inter ${darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"}`}>Search</span>
//           <img src="/images/img_image_18.png" alt="User profile" className="w-[42px] h-[42px]" />
//           <img src="/images/img_image_16.png" alt="Cart" className="w-[53px] h-[53px]" />
//         </div>
//       </div>

//       {/* Dark Mode Toggle */}
//       <div className="mt-4 text-right">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className={`px-4 py-2 rounded transition-colors ${
//             darkMode ? "bg-[#dab61f] text-[#0d0603]" : "bg-[#79300f] text-white"
//           }`}
//         >
//           {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;




import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`transition-all duration-300 ${darkMode ? "bg-[#220104]" : "bg-[#F2F2F2]"}`}>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2">
        <p className="text-[18px] font-inter">Free Delivery on Orders Over $999</p>
      </div>

      {/* Header: Top Row */}
      <div className="flex items-start justify-between px-8 pt-4 pb-2">
        {/* Left Column: Logo + Navigation */}
        <div>
          <h1
            className={`text-[48px] md:text-[60px] font-dm-serif leading-none ${
              darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"
            }`}
          >
            <a href="/">Vesarii</a>
          </h1>

          {/* Nav Menu directly below Logo */}
          <nav className="flex space-x-8 mt-4">
            {["Latest Launch", "Shop by Collection", "Our Bestsellers", "About Vesarii"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                className={`text-[18px] md:text-[20px] font-alata font-medium hover:opacity-80 transition-opacity ${
                  darkMode ? "text-white" : "text-[#79300f]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center space-x-6 pt-4">
          <span
            className={`text-[18px] md:text-[20px] font-inter ${
              darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"
            }`}
          >
            Select Location
          </span>
          <span
            className={`text-[18px] md:text-[20px] font-inter ${
              darkMode ? "text-[#EDD1D1]" : "text-[#79300f]"
            }`}
          >
            Search
          </span>
          
          <img src="/images/img_image_18.png" alt="User profile" className="w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />
          <a href="/product-cart">
          <img src="/images/img_image_16.png" alt="Cart" className="w-[34px] h-[34px] md:w-[40px] md:h-[40px]" />
          </a>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="text-right px-6 py-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded transition-colors ${
            darkMode ? "bg-[#dab61f] text-[#0d0603]" : "bg-[#79300f] text-white"
          }`}
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
