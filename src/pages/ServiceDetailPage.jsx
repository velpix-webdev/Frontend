import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import services from "../data/services";

export default function ServiceDetailPage() {
    const { id } = useParams();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        Service Not Found
      </div>
    );
  }
  return (
    <div className="w-full bg-white pt-20 text-black">
    
      <section
        className="w-full h-[350px] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-wider">OUR SERVICES</h1>
          <p className="mt-2 text-sm opacity-90">Home :: Our Services</p>
        </div>
      </section>

     
         <section className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg"
          data-aos="fade-right"
        >
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2070"
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT CARD */}
        <div
          className="bg-white shadow-xl rounded-3xl p-10 border border-gray-200 text-black"
          data-aos="fade-left"
        >
          <p className="text-sm font-semibold tracking-widest text-gray-500 mb-3">
            SERVICES
          </p>

          <h1 className="text-3xl font-extrabold leading-snug mb-6">
            {service.title}
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {service.desc} {service.fullDesc}
          </p>

          <button className="flex items-center gap-3 bg-orange-500 text-white py-3 px-6 font-semibold rounded-full hover:bg-orange-600 transition-all">
            About More
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xl">
              ↗
            </span>
          </button>
        </div>
      </section>

   
      <section className="container mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
     
        <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200 relative">
          <h2 className="text-xl font-semibold">SEO Performance Tracking and Analytic</h2>
          <p className="text-gray-600 mt-4">
            Every business is unique. That's why we tailor our SEO and marketing
            services to meet your specific goals.
          </p>
          <span className="absolute bottom-6 right-6 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-transform">↗</span>
        </div>

     
        <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200 relative">
          <h2 className="text-xl font-semibold">SEO Consultation & Strategies</h2>
          <p className="text-gray-600 mt-4">
            Every business is unique. That's why we tailor our SEO and marketing
            services to meet your specific goals.
          </p>
          <span className="absolute bottom-6 right-6 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-transform">↗</span>
        </div>

        
        <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200 relative">
          <h2 className="text-xl font-semibold">Search Engine Optimization</h2>
          <p className="text-gray-600 mt-4">
            Every business is unique. That's why we tailor our SEO and marketing
            services to meet your specific goals.
          </p>
          <span className="absolute bottom-6 right-6 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-transform">↗</span>
        </div>
      </section>
    </div>
  );
}
