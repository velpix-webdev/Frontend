import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaPlay, FaCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="bg-gradient-to-r from-orange-30 to-black py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE */}
                <div data-aos="fade-right" className="space-y-6">
                    <p data-aos="zoom-in-down"className="text-orange-500 font-semibold tracking-wider uppercase">
                        About Us
                    </p>
                    <h2 data-aos="flip-up" className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        Fueling Growth <br /> With Smarter <br /> SEO Strategies.
                    </h2>

                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine" className="rounded-2xl  overflow-hidden mt-8">
                        <div className="relative overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                className="w-full h-full object-cover transition-all duration-300"
                            />
                            <div 
                                className="absolute inset-0 bg-gradient-to-r from-white via-white to-amber-300 opacity-0 group-hover:opacity-30 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"
                                style={{
                                    pointerEvents: 'none',
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6 text-gray-700">
                    <div className="grid  grid-cols-2 gap-4">
                        <div className="relative overflow-hidden group rounded-xl">
                            <img 
                                data-aos="fade-right"
                                data-aos-offset="500"
                                data-aos-easing="ease-in-sine"
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                                alt="Strategy meeting"
                                className="w-full h-full object-cover transition-all duration-300"
                            />
                            <div 
                                className="absolute inset-0 bg-gradient-to-r from-white via-white to-amber-300 opacity-0 group-hover:opacity-30 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"
                                style={{
                                    pointerEvents: 'none',
                                }}
                            />
                        </div>
                        <div className="relative overflow-hidden group rounded-xl">
                            <img 
                                data-aos="fade-right"
                                data-aos-offset="400"
                                data-aos-easing="ease-in-sine"
                                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=600&q=80"
                                alt="SEO discussion"
                                className="w-full h-full object-cover transition-all duration-300"
                            />
                            <div 
                                className="absolute inset-0 bg-gradient-to-r from-white via-white to-amber-300 opacity-0 group-hover:opacity-30 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"
                                style={{
                                    pointerEvents: 'none',
                                }}
                            />
                        </div>
                    </div>

                    <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="mt-4 text-gray-600 leading-relaxed">
                        Our digital services empower brands with innovative strategies and
                        solutions for sustainable growth and engagement.
                    </p>

                    <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="text-gray-500 leading-relaxed">
                        Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi
                        nullam. Molestie nunc non blandit massa enim nec. Felis bibendum ut
                        tristique et egestas quis ipsum suspendisse ultrices.
                    </p>

                    {/* Watch Intro Button */}
                    <div
                        data-aos="zoom-in"
                        className="flex items-center gap-3 mt-6 bg-white rounded-full shadow-md px-5 py-3 w-fit hover:shadow-lg transition"
                    >
                        <div className="bg-orange-500 text-white rounded-full p-3">
                            <FaPlay size={14} />
                        </div>
                        <p className="font-semibold text-gray-800">Watch Intro</p>
                    </div>

                    {/* Feature List */}
                    <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="space-y-3 mt-4">
                        {[
                            "Results-Driven Optimization",
                            "Keyword Research Excellence",
                            "Tailored Marketing Solutions",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <FaCheck className="text-orange-500" />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Contact , Read More */}
                    <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-black text-white p-3 rounded-full">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Call us (toll free)</p>
                                <p className="font-semibold text-lg text-gray-900">
                                    +1 (333) 4444 55
                                </p>
                            </div>
                        </div>

                        <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-orange-600 transition-all">
                            Read More <FiArrowUpRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
