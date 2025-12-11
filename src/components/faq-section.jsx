import React, { useState } from "react";
import { Plus, Minus } from 'lucide-react/dist/esm/icons'

const faqData = [
  {
    category: "Website Development",
    questions: [
      {
        question: "What website development services does Velpix offer?",
        answer: "We provide end-to-end website development including responsive design, e-commerce solutions, custom web applications, and CMS integration.",
      },
      {
        question: "What technologies do you use for website development?",
        answer: "We use modern technologies like React, Next.js, Node.js, and various CMS platforms to build fast, secure, and scalable websites.",
      },
      {
        question: "How long does it take to develop a website?",
        answer: "Development time varies based on complexity, but most standard business websites take 4-8 weeks from concept to launch.",
      },
      {
        question: "Do you provide website maintenance services?",
        answer: "Yes, we offer comprehensive maintenance packages including updates, security patches, and performance optimization.",
      },
    ],
  },
  {
    category: "SEO Services",
    questions: [
      {
        question: "What SEO services does Velpix provide?",
        answer: "Our SEO services include keyword research, on-page optimization, technical SEO, content strategy, and link building.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. Initial improvements may be seen in 3-6 months, with significant results typically in 6-12 months.",
      },
      {
        question: "Do you offer local SEO services?",
        answer: "Yes, we specialize in local SEO to help businesses rank higher in local search results and Google My Business listings.",
      },
    ],
  },
  {
    category: "Digital Marketing",
    questions: [
      {
        question: "What digital marketing services do you offer?",
        answer: "We provide comprehensive digital marketing including social media marketing, email campaigns, content marketing, and PPC advertising.",
      },
      {
        question: "How do you measure marketing campaign success?",
        answer: "We track key metrics like website traffic, conversion rates, engagement, and ROI using advanced analytics tools.",
      },
      {
        question: "Can you manage our social media accounts?",
        answer: "Absolutely! We offer complete social media management including content creation, scheduling, and community engagement.",
      },
    ],
  },
  {
    category: "Advertising & Growth",
    questions: [
      {
        question: "What advertising platforms do you work with?",
        answer: "We manage campaigns on Google Ads, Facebook, Instagram, LinkedIn, and other digital advertising platforms.",
      },
      {
        question: "How do you optimize ad performance?",
        answer: "We continuously monitor campaigns, A/B test creatives, refine targeting, and adjust bids to maximize ROI.",
      },
      {
        question: "What's included in your digital marketing packages?",
        answer: "Our packages include strategy development, campaign setup, ongoing management, performance reporting, and regular optimizations.",
      },
    ],
  },
];

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 bg-white/95 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${
        isOpen
          ? "border-primary/60 shadow-orange-400 bg-gradient-to-br from-white via-slate-50 to-indigo-50/60"
          : "border-slate-100 hover:border-slate-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
      }`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1.5 rounded-r-2xl transition-all duration-300 ${
          isOpen ? "bg-primary" : "bg-slate-200"
        }`}
      />
      <button
        className="flex w-full items-start text-left px-5 py-4 gap-4 md:px-6 md:py-5"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span
          className={`mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border text-primary transition-all duration-300 ${
            isOpen
              ? "bg-primary/10 border-primary shadow-[0_0_0_1px_rgba(79,70,229,0.5)]"
              : "bg-white border-slate-200 shadow-[0_0_0_1px_rgba(148,163,184,0.4)]"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-primary" />
          ) : (
            <Plus className="w-4 h-4 text-primary" />
          )}
        </span>

        <div className="flex-1 flex flex-col gap-1">
          <span className="font-semibold text-[15px] md:text-[16px] text-navy-blue leading-snug">
            {question}
          </span>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-[14px] md:text-[15px] text-gray-text leading-relaxed pr-1 md:pr-2">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState(faqData[0].category);

  return (
    <section className="py-20 bg-gradient-to-b from-[#f9fafb] via-white to-[#eef2ff]">
      <div className="max-w-[960px] mx-auto px-4">

        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-orange-400 uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Get clear answers about our comprehensive digital solutions including website development,
            SEO services, digital marketing strategies, and targeted advertising campaigns.
          </p>
        </div>

        {/* TAB BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
          {faqData.map((tab) => (
            <button
              key={tab.category}
              onClick={() => setActiveTab(tab.category)}
              className={`py-2.5 px-4 md:px-5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab.category
                  ? "bg-white text-black border-primary shadow-lg shadow-primary/30 scale-[1.02]"
                  : "bg-slate-50 text-gray-text border-transparent hover:bg-slate-100 hover:text-black"
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4 md:space-y-5">
          {faqData
            .find((tab) => tab.category === activeTab)
            ?.questions.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
