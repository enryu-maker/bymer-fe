"use client";

import { useState } from "react";

export function QuoteForm() {
  const [formState, setFormState] = useState({ name: "", contact: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", contact: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="p-8 lg:p-12 bg-white text-[#1C1B1B] flex flex-col justify-center items-center gap-8 w-full">
      
      <div className="flex flex-col gap-4 text-center w-full max-w-md">
        {/* Heading Banner Accent with Yellow background and Black border outline */}
        <div className="bg-[#FDC003] text-[#1C1B1B] font-title text-2xl font-bold tracking-widest text-center py-4 border-2 border-[#1C1B1B] uppercase shadow-[4px_4px_0px_0px_#1C1B1B] w-full">
          REQUEST A FREE QUOTE
        </div>
        <p className="font-body text-sm text-[#1C1B1B]/80 mt-2 leading-relaxed">
          Provide your technical specifications or project volume, and our engineering team will get back to you with details within 24 hours.
        </p>
      </div>

      {/* Request Form with Centered align layouts & Dark Brutalist Underline Inputs */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md mx-auto">
        
        {submitted ? (
          <div className="bg-[#B81312] text-white border-2 border-[#1C1B1B] p-6 font-subtitle font-bold text-center uppercase tracking-wider shadow-[3px_3px_0px_0px_#1C1B1B] animate-pulse">
            ✓ Quote request sent successfully!
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Name */}
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-subtitle text-xs text-[#1C1B1B]/70 font-bold tracking-widest uppercase">YOUR NAME</label>
                <input 
                  type="text" 
                  placeholder="JOHN DOE" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-transparent text-[#1C1B1B] border-b-2 border-[#1C1B1B] focus:border-[#B81312] focus:outline-none py-2 font-body text-sm font-semibold rounded-none w-full placeholder-[#1C1B1B]/30"
                />
              </div>
              
              {/* Contact */}
              <div className="flex flex-col gap-1.5 w-full">
                <label className="font-subtitle text-xs text-[#1C1B1B]/70 font-bold tracking-widest uppercase">YOUR CONTACT</label>
                <input 
                  type="text" 
                  placeholder="+91" 
                  required
                  value={formState.contact}
                  onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  className="bg-transparent text-[#1C1B1B] border-b-2 border-[#1C1B1B] focus:border-[#B81312] focus:outline-none py-2 font-body text-sm font-semibold rounded-none w-full placeholder-[#1C1B1B]/30"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-subtitle text-xs text-[#1C1B1B]/70 font-bold tracking-widest uppercase">EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="ENGINEERING@COMPANY.COM" 
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="bg-transparent text-[#1C1B1B] border-b-2 border-[#1C1B1B] focus:border-[#B81312] focus:outline-none py-2 font-body text-sm font-semibold rounded-none w-full placeholder-[#1C1B1B]/30"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-subtitle text-xs text-[#1C1B1B]/70 font-bold tracking-widest uppercase">YOUR MESSAGE</label>
              <input 
                type="text" 
                placeholder="-" 
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="bg-transparent text-[#1C1B1B] border-b-2 border-[#1C1B1B] focus:border-[#B81312] focus:outline-none py-2 font-body text-sm font-semibold rounded-none w-full placeholder-[#1C1B1B]/30"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn-brutal-red w-full py-4 text-base tracking-widest border-2 border-[#1C1B1B] mt-4"
            >
              GET A FREE QUOTE
            </button>
          </>
        )}

      </form>

    </div>
  );
}
