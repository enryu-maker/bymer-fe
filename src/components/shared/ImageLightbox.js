"use client";

import { useEffect } from "react";

export function ImageLightbox({ item, onClose, ariaLabel }) {
  useEffect(() => {
    if (!item) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || `View image for ${item.title}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white text-[#1c1b1b] hover:bg-[#C75550] hover:text-white transition-colors"
        aria-label="Close preview"
      >
        <i className="fa-solid fa-xmark text-lg" />
      </button>

      <div
        className="relative w-full max-w-[95vw] lg:max-w-6xl max-h-[95vh] bg-white border border-[#e5e7eb] flex flex-col overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative w-full flex-1 overflow-auto bg-[#f9fafb] min-h-0 max-h-[calc(95vh-5rem)]">
          {item.image ? (
            <div className="flex justify-center p-2 sm:p-3 min-h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-none h-auto object-contain"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[50vh] text-[#9ca3af]">
              <i className="fa-solid fa-image text-5xl" />
            </div>
          )}
        </div>

        {(item.title || item.subtitle) && (
          <div className="border-t border-[#e5e7eb] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {item.title && (
              <h2 className="font-montserrat text-sm sm:text-base font-bold text-[#1c1b1b] tracking-wide uppercase leading-snug">
                {item.title}
              </h2>
            )}
            {item.subtitle && (
              <span className="font-montserrat text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 w-fit bg-[#C75550] text-white">
                {item.subtitle}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
