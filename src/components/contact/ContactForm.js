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
    <div className="lg:col-span-6 w-full lg:pt-8">
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {submitted ? (
          <div className="bg-[#B81312] text-white border-2 border-white p-6 font-subtitle font-bold text-center uppercase tracking-wider animate-pulse">
            ✓ Form submitted! We will respond shortly.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="bg-[#F0EDEC] text-[#1C1B1B] placeholder-[#1C1B1B]/50 border-none focus:bg-[#E5E2E1] focus:outline-none p-5 font-body text-base font-medium rounded-none w-full"
              />
              
              {/* Email */}
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="bg-[#F0EDEC] text-[#1C1B1B] placeholder-[#1C1B1B]/50 border-none focus:bg-[#E5E2E1] focus:outline-none p-5 font-body text-base font-medium rounded-none w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="bg-[#F0EDEC] text-[#1C1B1B] placeholder-[#1C1B1B]/50 border-none focus:bg-[#E5E2E1] focus:outline-none p-5 font-body text-base font-medium rounded-none w-full"
              />
              
              {/* Subject */}
              <input 
                type="text" 
                placeholder="Subject" 
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="bg-[#F0EDEC] text-[#1C1B1B] placeholder-[#1C1B1B]/50 border-none focus:bg-[#E5E2E1] focus:outline-none p-5 font-body text-base font-medium rounded-none w-full"
              />
            </div>

            {/* Message */}
            <textarea 
              rows="6" 
              placeholder="Write Message"
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="bg-[#F0EDEC] text-[#1C1B1B] placeholder-[#1C1B1B]/50 border-none focus:bg-[#E5E2E1] focus:outline-none p-5 font-body text-base font-medium rounded-none w-full resize-none"
            />

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-[#B81312] text-white font-title text-base font-bold tracking-widest uppercase py-4.5 px-8 border-2 border-[#1C1B1B] shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_#1C1B1B] transition-all duration-150 rounded-none self-start"
            >
              _ SUBMIT COMMENT
            </button>
          </>
        )}

      </form>

    </div>
  );
}
