import React from "react";
import "../index.css";

const SeoMarquee = () => {
  const items = [
    { text: "Digital Marketing", icon: "📊" },
    { text: "Website Development", icon: "🔍" },
    { text: "Social Media Marketing", icon: "✍️" },
    { text: "Hosting &Logo Design", icon: "📱" },
    { text: "SEO AUDIT", icon: "✅" },
    { text: "App Development", icon: "🔗" },
  ];

  return (
    <div className="relative bg-black to-gray-800 py-5 overflow-hidden shadow-lg">
      <div className="relative">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="marquee-item flex items-center">
                {items.map((item, idx) => (
                  <div 
                    key={`${i}-${idx}`} 
                    className="marquee-tag mx-4 px-6 py-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="text-amber-100 text-sm md:text-base font-semibold tracking-wide flex items-center">
                      <span className="mr-2 text-lg">{item.icon}</span>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoMarquee;
