import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import svgimg from "../assets/images/wave.svg"
import services from "../data/services"
import {useNavigate} from "react-router-dom"

const ServicesSection = () => {
    const navigate=useNavigate()

    return (
        <section className="py-20 bg-[#0b0c10] text-white">
            <div className="max-w-7xl mx-auto px-6">
             
                <div data-aos="zoom-in" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">
                        <span className="text-blue-400">Velpix</span>{" "}
                        <span className="text-white">Services</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive digital solutions to grow your business online
                    </p>
                </div>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos="zoom-out" className="relative  ser-card  group bg-gradient-to-b from-[#1c1f26] to-[#111317] rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(255,138,0,0.4)] transition-all duration-300"
                        >
                        
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#0b0c10] shadow-[inset_0_0_12px_rgba(59,130,246,0.6)] mb-6">
                                <span className="text-3xl text-orange-400">{service.icon}</span>
                            </div>

                        
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {service.title}
                            </h3>

                       
                            <p className="text-gray-300 text-sm mb-8">{service.desc}</p>

                       
                            <button
                            onClick={()=>{navigate(`/services/${service.id}`)}} className="flex items-center justify-between w-full rounded-full border border-blue-400 text-white py-3 px-6 bg-gradient-to-r from-transparent to-transparent hover:from-blue-600 hover:to-orange-500 transition-all duration-300">
                                <span className="text-sm font-semibold">View Details</span>
                                <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 group-hover:scale-110 transition-transform duration-300">
                                    →
                                </span>
                            </button>

                       
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 to-orange-500/10 pointer-events-none"></div>
                        </div>
                    ))}

                </div>

            </div>
           
            <div className=" pt-[50px] relative">
                <svg
                    className="absolute bottom-0 mb-[-90px] left-0 w-full h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86
         82.39-16.5 168.19-17.66 250.45-.39
         86.26 18.06 172.7 52.22 258.93 53.83
         69.27 1.27 136.75-18.13 197.23-41.86V120H0V16.48
         A600.21 600.21 0 0 0 321.39 56.44z"
                        fill="#fffcfcff"  
                    ></path>
                </svg>
            </div>

        </section>

    );
};

export default ServicesSection;
