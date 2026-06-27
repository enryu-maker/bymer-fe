"use client";

import { useState } from "react";
import { submitQuoteInquiry } from "@/lib/api";

const INITIAL_QUOTE_FORM = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  productRequired: "",
  projectRequirements: "",
};

const quoteInputClassName =
  "border-b border-gray-300 focus:border-[#C75550] bg-transparent outline-none py-2 w-full font-body text-sm text-[#1c1b1b] placeholder-gray-400/70 transition-colors duration-150 rounded-none";

function QuoteField({ label, required = false, children }) {
  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label className="font-montserrat text-[10px] sm:text-xs text-[#64748B] font-bold tracking-widest uppercase">
        {label}
        {required && <span className="text-[#C75550]"> *</span>}
      </label>
      {children}
    </div>
  );
}

export function QuoteRequestForm({
  sourcePage,
  successMessage = "✓ Quote request sent successfully! We will contact you soon.",
}) {
  const [formState, setFormState] = useState(INITIAL_QUOTE_FORM);
  const [drawingFile, setDrawingFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (field) => (event) => {
    setFormState((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const messageParts = [
        formState.industry.trim() && `Industry: ${formState.industry.trim()}`,
        formState.productRequired.trim() &&
          `Product Required: ${formState.productRequired.trim()}`,
        `Project Requirements:\n${formState.projectRequirements.trim()}`,
      ].filter(Boolean);

      await submitQuoteInquiry(
        {
          name: formState.fullName.trim(),
          email: formState.email.trim(),
          phone: formState.phone.trim(),
          company_name: formState.companyName.trim(),
          industry: formState.industry.trim(),
          product_required: formState.productRequired.trim(),
          subject: `Request a Quote - ${formState.companyName.trim()}`,
          message: messageParts.join("\n\n"),
          source_page: sourcePage,
        },
        drawingFile
      );

      setSubmitted(true);
      setFormState(INITIAL_QUOTE_FORM);
      setDrawingFile(null);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit request. Please verify connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
      {submitted ? (
        <div className="bg-[#C75550] text-white p-6 font-body font-bold text-center uppercase tracking-wider animate-pulse">
          {successMessage}
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-600 text-white p-4 font-body text-xs font-bold text-center uppercase tracking-wider">
              ⚠ {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <QuoteField label="Full Name" required>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={formState.fullName}
                onChange={handleChange("fullName")}
                className={quoteInputClassName}
              />
            </QuoteField>

            <QuoteField label="Company Name" required>
              <input
                type="text"
                placeholder="Engineering Company"
                required
                value={formState.companyName}
                onChange={handleChange("companyName")}
                className={quoteInputClassName}
              />
            </QuoteField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <QuoteField label="Business Email" required>
              <input
                type="email"
                placeholder="email@company.com"
                required
                value={formState.email}
                onChange={handleChange("email")}
                className={quoteInputClassName}
              />
            </QuoteField>

            <QuoteField label="Phone Number" required>
              <input
                type="tel"
                placeholder="+91..."
                required
                value={formState.phone}
                onChange={handleChange("phone")}
                className={quoteInputClassName}
              />
            </QuoteField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <QuoteField label="Industry">
              <input
                type="text"
                placeholder="Automotive, Industrial, OEM..."
                value={formState.industry}
                onChange={handleChange("industry")}
                className={quoteInputClassName}
              />
            </QuoteField>

            <QuoteField label="Product Required">
              <input
                type="text"
                placeholder="Molded component, hose, compound..."
                value={formState.productRequired}
                onChange={handleChange("productRequired")}
                className={quoteInputClassName}
              />
            </QuoteField>
          </div>

          <QuoteField label="Project Requirements" required>
            <textarea
              rows={4}
              placeholder="Describe application, performance requirements, quantities, standards..."
              required
              value={formState.projectRequirements}
              onChange={handleChange("projectRequirements")}
              className={`${quoteInputClassName} resize-none`}
            />
          </QuoteField>

          <QuoteField label="Drawing Upload (Optional)">
            <input
              type="file"
              accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.png,.jpg,.jpeg"
              onChange={(event) => setDrawingFile(event.target.files?.[0] || null)}
              className="w-full font-body text-sm text-[#4b5563] file:mr-4 file:py-2 file:px-4 file:border file:border-[#e5e7eb] file:bg-[#f9fafb] file:font-montserrat file:text-[10px] file:font-bold file:uppercase file:tracking-wider file:text-[#1c1b1b] file:cursor-pointer hover:file:border-[#C75550] file:transition-colors"
            />
            {drawingFile && (
              <span className="font-body text-xs text-[#4b5563] mt-1">
                Selected: {drawingFile.name}
              </span>
            )}
          </QuoteField>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#C75550] hover:bg-[#a53b36] text-white font-montserrat px-10 py-4 text-xs font-bold tracking-[0.15em] mt-4 flex items-center justify-center gap-2 w-fit cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "SUBMITTING..." : "START A PROJECT"} <span className="font-sans text-sm">→</span>
          </button>
        </>
      )}
    </form>
  );
}
