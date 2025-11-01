
import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Brandgrowvideo = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = textRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // when element enters the viewport
            if (rect.top < windowHeight * 0.8) {
                element.classList.add("reveal-active");
            } else {
                element.classList.remove("reveal-active");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="hero-section  flex items-center justify-start relative h-screen w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div ref={textRef} className="hero-content relative z-10 text-white max-w-3xl px-6 text-left">
                {/* Play Button */}
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="flex items-center mb-4">
                    <button className="play-btn group">
                        <FaPlay className="text-white text-xl group-hover:text-orange-400" />
                        <div className="pulse-ring"></div>
                    </button>
                    <div className="ml-4">
                        <p className="font-semibold text-sm leading-tight">See How We</p>
                        <p className="font-semibold text-sm leading-tight">Help Brands Grow</p>
                    </div>
                </div>

                {/* Heading */}
                <h1 data-aos="zoom-in-right" className="text-4xl md:text-7xl font-bold mb-4">
                    Transform Your Business with <span className="text-orange-500">Velpix</span>
                </h1>

                {/* Description */}
                <p data-aos="zoom-in-right" className="text-lg text-gray-200 mb-3">
                    Take your digital marketing to the next level with data-driven strategies
                    and innovative solutions.
                </p>
                <p data-aos="zoom-in-right" className="text-lg text-gray-200">
                    Let’s create something amazing together!
                </p>
            </div>
        </section>
    );
};

export default Brandgrowvideo;
