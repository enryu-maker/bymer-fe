"use client";

import { useState } from "react";
import Image from "next/image";

export function FaqAccordion() {
  const [activeFaq, setActiveFaq] = useState(1);

  const faqs = [
    {
      question: "WHAT TYPES OF RUBBER PRODUCTS DO YOU MANUFACTURE?",
      answer: "We manufacture high-end Rubber Compounds, Molded Rubber, Rubber To Metal Bonded Products, Extruded Rubber Profiles, and Low pressure Rubber Hoses, catering extensively to Automotive and Non-Automotive industries globally."
    },
    {
      question: "DO YOU OFFER CUSTOM RUBBER SOLUTIONS?",
      answer: "Yes, we provide custom rubber products tailored to your specific requirements. Every product is designed and manufactured according to your specifications to ensure optimal performance and reliability."
    },
    {
      question: "WHICH INDUSTRIES DO YOU SERVE?",
      answer: "We serve a diverse range of sectors including Automotive, Infrastructure, Heavy Engineering, Power Generation, Chemical Plants, Fluid Management, and custom industrial manufacturing."
    },
    {
      question: "ARE YOUR PRODUCTS CERTIFIED?",
      answer: "Yes, Bymer Elastomers is an IATF 16949:2016, ISO 9001:2015 and ISO 14001:2015 certified company. All manufacturing activities are initiated, conducted, and documented under strict QA protocols."
    }
  ];

  return (
    <div className="p-8 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-[#1C1B1B] flex flex-col gap-8 w-full">
      {/* Machinery Image top */}
      <div className="relative w-full aspect-[16/9] border-2 border-[#1C1B1B] shadow-[4px_4px_0px_0px_#1C1B1B] ">
        <Image
          src="/images/section 5 homepage.png"
          alt="Industrial Worker Operating Hydraulic Rubber Press"
          fill
          sizes="(max-w-xl) 100vw, 600px"
          className="object-cover filter grayscale"
        />
      </div>

      {/* Accordions */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = activeFaq === index;
          return (
            <div 
              key={index} 
              className={`border-2 border-[#1C1B1B] transition-all duration-200 ${
                isOpen ? "bg-[#F0EDEC]" : "bg-[#FCF9F8]"
              }`}
            >
              <button
                onClick={() => setActiveFaq(isOpen ? -1 : index)}
                className="w-full p-5 flex items-center justify-between text-left font-title text-base sm:text-lg font-bold tracking-wider text-[#1C1B1B] uppercase focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl sm:text-2xl font-bold flex-shrink-0 ml-4">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              
              {isOpen && (
                <div className="px-5 pb-5 font-body text-sm text-[#1C1B1B]/80 leading-relaxed border-t border-[#1C1B1B]/30 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
