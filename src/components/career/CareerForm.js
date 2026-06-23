"use client";

import { useEffect, useState } from "react";
import { submitCareerApplication } from "@/lib/api";

const INITIAL_FORM = {
  name: "",
  dateOfBirth: "",
  address: "",
  city: "",
  contact: "",
  email: "",
  qualifications: "",
  workExperience: "",
  areaOfInterest: "",
  expectedCtc: "",
  bestContactDate: "",
  bestContactTime: "",
  captchaInput: "",
};

function generateCaptcha() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i += 1) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const inputClassName =
  "w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 px-4 font-body text-sm text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150";

function formatContactTime(time) {
  if (!time) return "";
  return time.length === 5 ? `${time}:00` : time;
}

function buildCareerPayload(formState) {
  return {
    name: formState.name.trim(),
    date_of_birth: formState.dateOfBirth,
    address: formState.address.trim(),
    city: formState.city.trim(),
    contact: formState.contact.trim(),
    email: formState.email.trim(),
    qualifications: formState.qualifications.trim(),
    work_experience: formState.workExperience.trim(),
    area_of_interest: formState.areaOfInterest.trim(),
    expected_ctc: formState.expectedCtc.trim(),
    best_contact_date: formState.bestContactDate,
    best_contact_time: formatContactTime(formState.bestContactTime),
  };
}

function FormField({ label, required = false, children }) {
  return (
    <div className="flex flex-col items-start w-full gap-2 text-left">
      <label className="font-montserrat text-[10px] sm:text-xs font-bold text-[#64748b] tracking-wider uppercase">
        {label}
        {required && <span className="text-[#C75550]"> *</span>}
      </label>
      {children}
    </div>
  );
}

export function CareerForm() {
  const [formState, setFormState] = useState(INITIAL_FORM);
  const [captchaCode, setCaptchaCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setFormState((current) => ({ ...current, captchaInput: "" }));
  };

  const handleChange = (field) => (event) => {
    setFormState((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (formState.captchaInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setError("CAPTCHA code does not match. Please try again.");
      refreshCaptcha();
      return;
    }

    setLoading(true);

    try {
      await submitCareerApplication(buildCareerPayload(formState));

      setSubmitted(true);
      setFormState(INITIAL_FORM);
      refreshCaptcha();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit your application. Please check your connection and try again.");
      refreshCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      {submitted ? (
        <div className="bg-[#C75550] text-white p-6 font-body font-bold text-center uppercase tracking-wider animate-pulse w-full">
          Your career application has been submitted successfully. We will contact you soon.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col gap-6">
              <FormField label="Your Name" required>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formState.name}
                  onChange={handleChange("name")}
                  className={inputClassName}
                />
              </FormField>

              <FormField label="Date of Birth" required>
                <input
                  type="date"
                  required
                  value={formState.dateOfBirth}
                  onChange={handleChange("dateOfBirth")}
                  className={inputClassName}
                />
              </FormField>

              <FormField label="Address" required>
                <textarea
                  rows={5}
                  required
                  placeholder="Enter your full address"
                  value={formState.address}
                  onChange={handleChange("address")}
                  className={`${inputClassName} resize-none`}
                />
              </FormField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="City">
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={formState.city}
                    onChange={handleChange("city")}
                    className={inputClassName}
                  />
                </FormField>

                <FormField label="Contact" required>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formState.contact}
                    onChange={handleChange("contact")}
                    className={inputClassName}
                  />
                </FormField>
              </div>

              <FormField label="Email ID" required>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formState.email}
                  onChange={handleChange("email")}
                  className={inputClassName}
                />
              </FormField>
            </div>

            <div className="flex flex-col gap-6">
              <FormField label="Qualifications" required>
                <input
                  type="text"
                  required
                  placeholder="Enter your qualifications"
                  value={formState.qualifications}
                  onChange={handleChange("qualifications")}
                  className={inputClassName}
                />
              </FormField>

              <FormField label="Work Experience" required>
                <input
                  type="text"
                  required
                  placeholder="Enter years or relevant experience"
                  value={formState.workExperience}
                  onChange={handleChange("workExperience")}
                  className={inputClassName}
                />
              </FormField>

              <FormField label="Your Area of Interest">
                <input
                  type="text"
                  placeholder="e.g. Production, Quality, Engineering"
                  value={formState.areaOfInterest}
                  onChange={handleChange("areaOfInterest")}
                  className={inputClassName}
                />
              </FormField>

              <FormField label="Expected CTC">
                <input
                  type="text"
                  placeholder="Enter expected compensation"
                  value={formState.expectedCtc}
                  onChange={handleChange("expectedCtc")}
                  className={inputClassName}
                />
              </FormField>

              <FormField label="Best Date to Contact You" required>
                <input
                  type="date"
                  required
                  value={formState.bestContactDate}
                  onChange={handleChange("bestContactDate")}
                  className={inputClassName}
                />
              </FormField>

              <FormField label="Best Time to Contact You">
                <input
                  type="time"
                  value={formState.bestContactTime}
                  onChange={handleChange("bestContactTime")}
                  className={inputClassName}
                />
              </FormField>
            </div>
          </div>

          <FormField label="Enter the CAPTCHA Code" required>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full">
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Enter code shown"
                value={formState.captchaInput}
                onChange={handleChange("captchaInput")}
                className={`${inputClassName} sm:max-w-xs`}
              />
              <div className="flex items-center gap-3">
                <div className="bg-[#f9fafb] border border-[#e5e7eb] px-5 py-3 min-w-[120px] text-center">
                  <span className="font-mono text-base font-bold tracking-[0.2em] text-[#1c1b1b] select-none">
                    {captchaCode}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  aria-label="Refresh CAPTCHA"
                  className="w-10 h-10 border border-[#e5e7eb] bg-[#f9fafb] text-[#4b5563] hover:text-[#C75550] hover:border-[#C75550]/40 transition-colors duration-150 cursor-pointer"
                >
                  <i className="fa-solid fa-rotate-right text-sm" />
                </button>
              </div>
            </div>
          </FormField>

          {error && (
            <div className="bg-red-600 text-white p-4 font-body text-xs font-bold text-center uppercase tracking-wider w-full">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#111111] hover:bg-[#2d3748] text-white font-montserrat px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] flex items-center justify-center gap-2 rounded-none cursor-pointer transition-colors duration-150 self-start disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
            <i className="fa-solid fa-paper-plane text-xs" />
          </button>
        </>
      )}
    </form>
  );
}
