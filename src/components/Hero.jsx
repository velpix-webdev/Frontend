import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import img1 from "../assets/images/img1.jpg"

const heroImages = [
  "https://images.unsplash.com/photo-1551288049-33b2e8df1939?auto=format&fit=crop&w=1920&q=80", // Modern SEO Analytics Dashboard
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80", // Digital Marketing
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80", // Software Development
];

const slides = [
  {
    id: 1,
    title1: "Empowering",
    title2: "Growth Unlock",
    highlight: "SEO Solutions",
    subtitle:
      "Our Digital Services Empower Brands With Innovative Strategies And Solutions For Sustainable Growth And Engagement.",
    tag: "SEO & Marketing Agency",
    image: img1,
  },
  {
    id: 2,
    title1: "Driving",
    title2: "Digital Success",
    highlight: "Creative Solutions",
    subtitle:
      "Transforming brands with forward-thinking design and digital experiences built for engagement and performance.",
    tag: "Brand Strategy Experts",
    image: heroImages[1],
  },
  {
    id: 3,
    title1: "Unlocking",
    title2: "Business Potential",
    highlight: "Smart Marketing",
    subtitle:
      "Delivering growth-driven campaigns with measurable results and innovative approaches tailored to your audience.",
    tag: "Performance Marketing",
    image: heroImages[2],
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-[60px] md:pt-[45px] bg-black text-white overflow-hidden">
      {/*Vertical Progress Indicator */}
      <div className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
        <div className="relative h-60 flex flex-col items-center">
          {/* Background Line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-gray-600"></div>

          {/* Active Line */}
          <div
            className="absolute top-0 w-[2px] bg-orange-500 transition-all duration-700 ease-in-out"
            style={{
              height: `${(activeIndex / (slides.length - 1)) * 100}%`,
            }}
          ></div>

          {/* Dot,Numbers */}
          <div className="flex flex-col justify-between h-full py-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className="relative group flex flex-col items-center"
              >
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-500"
                  }`}
                ></div>
                <span
                  className={`text-xs mt-2 font-semibold ${
                    activeIndex === index ? "text-orange-500" : "text-gray-400"
                  }`}
                >
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-[calc(100vh-60px)] md:h-screen"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full group">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title1}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 h-full overflow-visible">
                {/* Left Text */}
                <div className="md:w-1/2 text-center md:text-left space-y-8">
                  {/* Tag,animation */}
                  <div className="inline-block relative group mb-4 sm:mb-0">
                    <span className="relative z-10 inline-block bg-gradient-to-r from-orange-500 to-amber-400 text-black text-xs sm:text-sm font-bold px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105">
                      {slide.tag}
                    </span>
                    <span className="absolute -inset-1 bg-orange-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-2 sm:space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                      <div className="text-white/90">{slide.title1}</div>
                      <div className="text-white">{slide.title2}</div>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                        {slide.highlight}
                      </span>
                    </h1>
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-200/90 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2 w-full sm:w-auto">
                    <button className="relative group overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 text-sm sm:text-base">
                      <span className="relative z-10">Get Started</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    <button className="relative group overflow-hidden border-2 border-orange-500 text-orange-400 hover:text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:bg-orange-500/10 text-sm sm:text-base">
                      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                        Learn More
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right Side  */}
                <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 sm:mt-10 md:mt-0 px-4 sm:px-0">
                  <div className="relative w-full max-w-md">
                    {/* Main Image */}
                    <div className="relative z-10">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={slide.image}
                          alt="Hero visual"
                          className="w-full h-auto max-h-[500px] object-cover"
                        />
                        {/* gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <p className="text-2xl font-bold text-orange-400">500+</p>
                        <p className="text-sm text-white/80">Clients</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <p className="text-2xl font-bold text-orange-400">98%</p>
                        <p className="text-sm text-white/80">Success</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <p className="text-2xl font-bold text-orange-400">24/7</p>
                        <p className="text-sm text-white/80">Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
