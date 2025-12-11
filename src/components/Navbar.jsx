import React, { useState, useEffect } from "react";
import { FiPhone, FiSearch, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const closeMenu = () => setMenuOpen(false);

  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black py-2 shadow-md text-white"
          : "bg-white py-4 text-black"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-20" : "h-[110px]"
            }`}
          />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {/* Desktop Navigation */}
          <ul className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    scrolled
                      ? "text-white hover:text-orange-400"
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4 ml-6">
            <a
              href="tel:+1333888899"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
            >
              <FiPhone className="flex-shrink-0" />
              <span>+1 (333) 8888 99</span>
            </a>
            <button
              className="bg-orange-500 hover:bg-orange-400 p-2.5 rounded-full transition-colors duration-200"
              aria-label="Search"
            >
              <FiSearch size={18} className="text-black" />
            </button>
            <button
              className={`px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-colors duration-200 ${
                scrolled
                  ? "bg-white hover:bg-gray-100 text-black"
                  : "bg-black hover:bg-gray-800 text-white"
              }`}
            >
              Get In Touch <FiArrowUpRight />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-2xl ${
            scrolled ? "text-white hover:text-orange-400" : "text-black hover:text-orange-500"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed left-0 top-0 h-full w-4/5 max-w-sm bg-black text-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
            </div>
            <button
              onClick={closeMenu}
              className="text-white text-2xl hover:text-orange-500"
            >
              <FiX />
            </button>
          </div>

          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-gray-700">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block w-full text-left px-6 py-4 text-white hover:text-orange-400 transition-colors duration-200 font-medium"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="p-6 border-t border-gray-700">
            <a
              href="tel:+1333888899"
              className="flex items-center justify-center gap-3 bg-orange-500 text-black hover:bg-orange-400 px-6 py-3 rounded-lg font-medium transition-colors duration-200 mb-4"
              onClick={closeMenu}
            >
              <FiPhone />
              <span>+1 (333) 8888 99</span>
            </a>
            <button 
              className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Get In Touch <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
