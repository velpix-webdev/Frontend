import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Marketing Director, E-Commerce Solutions",
    review: "Velpix's digital marketing strategies have transformed our online presence. Their team's expertise in SEO and content marketing helped us increase our organic traffic by 150% within just 3 months. The results have been outstanding!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    position: "CEO, Tech Startup",
    review: "Working with Velpix for our website development was a game-changer. They delivered a stunning, responsive website that perfectly captures our brand identity. Their attention to detail and technical expertise is unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    position: "Founder, Digital Agency",
    review: "The SEO strategies implemented by Velpix have significantly improved our search engine rankings. Their data-driven approach and regular reporting keep us informed about our progress and ROI.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Ananya Reddy",
    position: "Marketing Manager, Retail Brand",
    review: "Velpix's social media marketing services have helped us build a strong online community. Their creative campaigns and consistent engagement have increased our brand awareness and customer engagement.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Vikram Mehta",
    position: "CEO, Software Solutions",
    review: "The website Velpix developed for us is not just visually appealing but also highly functional. Their team's expertise in both design and development delivered a seamless user experience that has significantly reduced our bounce rate.",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden min-h-[600px] flex items-center">
      {/* Dotted background */}
      <div
        className="absolute inset-0 opacity-30 -z-10"
        style={{
          backgroundImage: "radial-gradient(#b28cff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 text-center">
          <h2 className="text-slate-900 text-2xl font-bold">Client Success Stories</h2>
          <p className="text-slate-700 text-[15px] mt-4 leading-relaxed max-w-2xl mx-auto">
            Discover how our digital marketing, SEO, and web development services have helped businesses grow their online presence and achieve remarkable results.
          </p>
        </div>

        <div className="relative">
          <div className={`testimonial-content transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="grid md:grid-cols-3 items-center gap-8 lg:gap-12">
              <div>
                <img
                  src={testimonials[currentIndex].avatar}
                  className="w-full max-w-[280px] h-[250px] sm:h-[280px] object-cover rounded-lg shadow-[-10px_10px_0px_rgba(251,146,60,0.2)] md:shadow-[-20px_20px_0px_rgba(251,146,60,0.2)] mx-auto"
                  alt={testimonials[currentIndex].name}
                />
              </div>

              <div className="md:col-span-2 mt-8 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-orange-400 inline rotate-180" viewBox="0 0 475.082 475.081">
                  <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
                </svg>

                <p className="text-slate-700 text-sm sm:text-[15px] font-medium mt-6 leading-relaxed">
                  {testimonials[currentIndex].review}
                </p>

                <div className="flex space-x-1 mt-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= 3 ? 'fill-orange-400' : 'fill-[#CED5D8]'}`}
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-slate-900 text-base font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-xs text-slate-700 mt-0.5">{testimonials[currentIndex].position}</p>
                </div>

                <div className="flex justify-center sm:justify-end mt-6 sm:mt-4 space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-orange-400 w-8 h-8 sm:w-10 sm:h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer hover:bg-gray-300 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-900 inline" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-orange-400 w-8 h-8 sm:w-10 sm:h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer hover:bg-gray-300 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all ${index === currentIndex ? 'bg-orange-400 w-6 sm:w-8' : 'bg-gray-300 w-2 sm:w-3'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;