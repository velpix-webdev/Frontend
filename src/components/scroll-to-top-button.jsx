"use client";

import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed z-[999] rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        bg-[#007bff]/80
        hover:bg-[#007bff]
        hover:scale-105
        
        // Mobile styles
        w-[45px] h-[45px] bottom-20 right-5
        
        // Desktop styles
        md:w-[50px] md:h-[50px] md:bottom-[100px] md:right-[30px]

        // Visibility transition
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <img
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a21ebbad-0aa4-4741-8626-006b2c1b75a9-balajidarshanbooking-com/assets/images/up-arrow-19.svg"
        alt="Scroll to top"
        className="w-6 h-6 invert"
      />
    </button>
  );
};

export default ScrollToTopButton;