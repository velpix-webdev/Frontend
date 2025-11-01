import React, { useState, useEffect, useRef } from "react";
import { FiPhone, FiSearch, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrolled]);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  const navItems = [
    { name: "Home", dropdown: ["Home 1", "Home 2"] },
    { name: "About", dropdown: ["Who We Are", "Team"] },
    { name: "Services", dropdown: ["Design", "Development", "Marketing"] },
    { name: "Project", dropdown: ["Portfolio", "Case Studies"] },
    { name: "Contact", dropdown: ["Contact Us", "Support"] },
  ];

  return (
    <nav
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black py-2 shadow-md text-white"
          : "bg-white py-4 text-black"
      }`}
    >
      <div className="container mx-auto p-[px] px-4 flex justify-between items-center">
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

    
        <div className="flex-grow"></div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <button
                onClick={() => toggleDropdown(item.name)}
                className={`flex items-center gap-1.5 ${
                  scrolled
                    ? "text-white hover:text-orange-400"
                    : "text-gray-800 hover:text-orange-500"
                } transition-colors duration-200 font-medium py-2 px-3 text-lg`}
              >
                {item.name}
                <FaChevronDown
                  size={10}
                  className="mt-0.5 transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-1 w-48 bg-white text-black rounded-lg shadow-xl py-1 transition-all duration-300 origin-top transform ${
                  dropdownOpen === item.name
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {item.dropdown.map((sub, idx) => (
                  <a
                    key={idx}
                    href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2.5 text-base hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                    onClick={closeAllMenus}
                    role="button"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </li>
          ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3 ml-6">
          <a
            href="tel:+1333888899"
            className={`flex items-center gap-2 ${
              scrolled 
                ? "bg-orange-500 hover:bg-orange-600 text-black"
                : "bg-orange-500 hover:bg-orange-600 text-black"
            } px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200`}
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
          <button className={`${
            scrolled 
              ? 'bg-white hover:bg-gray-100 text-black' 
              : 'bg-black hover:bg-gray-800 text-white'
          } px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-colors duration-200`}>
            Get In Touch <FiArrowUpRight />
          </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-2xl ${scrolled ? 'text-white hover:text-orange-400' : 'text-black hover:text-orange-500'}`}
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
        onClick={closeAllMenus}
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
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl hover:text-orange-500"
            >
              <FiX />
            </button>
          </div>

          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-gray-700">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center text-white hover:text-orange-500 transition-colors duration-200"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown && item.dropdown.length > 0 && (
                    <FaChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.dropdown && item.dropdown.length > 0 && (
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                      dropdownOpen === item.name 
                        ? 'max-h-96 opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 -translate-y-2'
                    }`}
                  >
                    <ul className="bg-white shadow-lg">
                      {item.dropdown.map((sub, idx) => (
                        <li key={idx} className="transition-all duration-300 hover:bg-gray-100">
                          <button
                            className="w-full text-left px-10 py-3 text-sm text-gray-800 hover:text-orange-500 transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault();
                              closeAllMenus();
                            }}
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

            <div className="px-6 py-4 mt-4 space-y-4">
              <a
                href="tel:+1333888899"
                className="inline-flex items-center gap-3 text-orange-400 hover:text-orange-500 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                <FiPhone size={18} />
                <span>+1 (333) 8888 99</span>
              </a>

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Get In Touch <FiArrowUpRight />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
