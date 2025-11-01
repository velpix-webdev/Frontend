import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative   bg-[#0b0c10] text-gray-300 py-16 px-6 md:px-12 lg:px-20 mx-10 mt-20 rounded-t-3xl overflow-hidden">
            {/* Top Glow Effect */}
            <div className="absolute inset-0 rounded-t-3xl p-[1px]" style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(251,146,60,0.4) 50%, rgba(0,0,0,0) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                filter: 'blur(4px)',
                opacity: '0.8'
            }}></div>

            {/* Enhanced Outer Glow */}
            <div className="absolute inset-0 rounded-t-3xl overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-orange-500/10 to-transparent rounded-full filter blur-3xl"></div>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-t-3xl border border-transparent" style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(251,146,60,0.1) 50%, rgba(0,0,0,0) 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none'
            }}></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo nDescription */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                           
                            <h2 className="text-2xl font-bold text-orange-400 ">Velpix</h2>
                        </div>
                        <h3 className="text-lg font-semibold text-orange-400 mb-4">
                            Empowering Your Digital <br /> <span className="text-white">Success Story</span> 
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transforming businesses with cutting-edge digital solutions and innovative strategies that drive real results and sustainable growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-orange-400  font-semibold text-lg mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-orange-400 transition">Home</li>
                            <li className="hover:text-orange-400 transition">About Us</li>
                            <li className="hover:text-orange-400 transition">Service</li>
                            <li className="hover:text-orange-400 transition">Case Studies</li>
                            <li className="hover:text-orange-400 transition">Blog</li>
                            <li className="hover:text-orange-400 transition">Contact Us</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-orange-400  font-semibold text-lg mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-orange-400 transition">
                                Website Development
                            </li>
                            <li className="hover:text-orange-400 transition">
                                Digital Marketing
                            </li>
                            <li className="hover:text-orange-400 transition">
                                Social Media Marketing
                            </li>
                            <li className="hover:text-orange-400 transition">
                                Web Hosting
                            </li>
                            <li className="hover:text-orange-400 transition">
                                SEO Services
                            </li>
                            <li className="hover:text-orange-400 transition">
                                Logo & Poster Design
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-orange-400  font-semibold text-lg mb-4">
                            Contact Info
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>info@velpix.com</li>
                            <li>+91 98765 43210</li>
                            <li>Chennai, Tamil Nadu, India</li>
                        </ul>

                        {/* Social Icons */}
                        <div className="mt-6">
                            <h4 className="text-white font-semibold text-lg mb-3">
                                Social Media
                            </h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <FaFacebookF /> },
                                    { icon: <FaYoutube /> },
                                    { icon: <FaInstagram /> },
                                    { icon: <FaLinkedinIn /> },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 flex items-center justify-center bg-[#111317] rounded-lg text-orange-400 text-lg shadow-[0_0_10px_rgba(255,138,0,0.5)] hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-500 hover:text-white transition-all duration-300"
                                    >
                                        {item.icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider Glow */}
                <div className="relative mt-12 pt-6">
                    {/* Glow Line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>
                    
                    {/* Main Content */}
                    <div className="relative flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p className="text-center md:text-left">© 2025 Velpix. All Rights Reserved.</p>
                        <div className="flex gap-6 mt-3 md:mt-0">
                            <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    
                    {/* Bottom Glow */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-8 bg-gradient-to-t from-orange-500/10 to-transparent blur-md"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
