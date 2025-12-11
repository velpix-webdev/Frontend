import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "10 Essential SEO Strategies for 2024",
    description: "Discover the latest SEO techniques that will help your website rank higher in search engine results and drive organic traffic."
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Web Design Trends to Watch in 2024",
    description: "Stay ahead of the curve with these cutting-edge web design trends that will dominate the digital landscape this year."
  },
  {
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Social Media Marketing: A Complete Guide",
    description: "Learn how to create an effective social media strategy that engages your audience and drives conversions."
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Content Marketing for Business Growth",
    description: "Discover how to create compelling content that attracts, engages, and converts your target audience."
  }
];
const BlogSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">

          {/* Left Content */}
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-orange-400 leading-[3.25rem] mb-5">
                Our latest <span className="text-orange-400">blogs</span>
              </h2>
              <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                Welcome to our blog section...
              </p>
              <a href="#" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100">
                View All
              </a>
            </div>

            {/* Slider Buttons */}
            <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
              <button ref={prevRef} className="group flex justify-center items-center border border-solid border-orange-400 w-11 h-11 transition-all duration-500 rounded-full hover:bg-orange-400">
                <svg className="h-6 w-6 text-orange-400 group-hover:text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button ref={nextRef} className="group flex justify-center items-center border border-solid border-orange-400 w-11 h-11 transition-all duration-500 rounded-full hover:bg-orange-400">
                <svg className="h-6 w-6 text-orange-400 group-hover:text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="w-full lg:w-3/5">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={2}
              spaceBetween={28}
              loop={true}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                568: { slidesPerView: 2, spaceBetween: 28 },
                768: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 2, spaceBetween: 32 },
              }}
            >
              {blogs.map((blog, i) => (
                <SwiperSlide key={i} className="w-full max-lg:max-w-xl lg:w-1/2 group">
                  <div className="flex items-center mb-9">
                    <img src={blog.img} alt={blog.title} className="rounded-2xl w-full object-cover" />
                  </div>
                  <h3 className="text-xl text-[#1E3A5F] font-medium leading-8 group-hover:text-orange-400">{blog.title}</h3>
                  <p className="text-gray-600 leading-6 transition-all duration-500 mb-8">{blog.description}</p>
                  <a href="#" className="cursor-pointer flex items-center gap-2 text-lg text-orange-400 font-semibold">Read more</a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
