"use client";

import { useState } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col items-start">
      <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.15em] mb-2 text-left">
        MESSAGE ENVELOPE
      </span>
      <h2 className="font-title text-3xl sm:text-4xl font-black text-[#1c1b1b] uppercase tracking-tight mb-8 text-left">
        SEND AN ENGINEERING REQUEST
      </h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        {submitted ? (
          <div className="bg-[#C75550] text-white p-6 font-body font-bold text-center uppercase tracking-wider animate-pulse w-full">
            ✓ Engineering request sent successfully! We will respond shortly.
          </div>
        ) : (
          <>
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Name */}
              <div className="flex flex-col items-start w-full gap-2 text-left">
                <label className="font-montserrat text-[10px] sm:text-xs font-bold text-[#64748b] tracking-wider uppercase">
                  YOUR NAME
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 px-4 font-body text-sm text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150"
                />
              </div>
              
              {/* Email */}
              <div className="flex flex-col items-start w-full gap-2 text-left">
                <label className="font-montserrat text-[10px] sm:text-xs font-bold text-[#64748b] tracking-wider uppercase">
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your corporate email address" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 px-4 font-body text-sm text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150"
                />
              </div>
            </div>

            {/* Row 2: Phone and Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Phone */}
              <div className="flex flex-col items-start w-full gap-2 text-left">
                <label className="font-montserrat text-[10px] sm:text-xs font-bold text-[#64748b] tracking-wider uppercase">
                  PHONE NUMBER
                </label>
                <input 
                  type="tel" 
                  placeholder="Enter mobile or desk connection line" 
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 px-4 font-body text-sm text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150"
                />
              </div>
              
              {/* Subject */}
              <div className="flex flex-col items-start w-full gap-2 text-left">
                <label className="font-montserrat text-[10px] sm:text-xs font-bold text-[#64748b] tracking-wider uppercase">
                  SUBJECT
                </label>
                <input 
                  type="text" 
                  placeholder="Compound specifications or order inquiry" 
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 px-4 font-body text-sm text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col items-start w-full gap-2 text-left">
              <label className="font-montserrat text-[10px] sm:text-xs font-bold text-[#64748b] tracking-wider uppercase">
                WRITE MESSAGE
              </label>
              <textarea 
                rows="6" 
                placeholder="Elaborate details on physical dimensions, rubber hardness, standards compliance deadlines, or general operations questions..."
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 px-4 font-body text-sm text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-[#111111] hover:bg-[#2d3748] text-white font-montserrat px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] flex items-center justify-center gap-2 rounded-none cursor-pointer transition-colors duration-150 self-start"
            >
              SUBMIT COMMENT <i className="fa-solid fa-paper-plane text-xs ml-1" />
            </button>
          </>
        )}
      </form>
    </div>
  );
}
