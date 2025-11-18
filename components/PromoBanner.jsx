"use client";
import { useState } from "react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-red-50 border-t border-b border-red-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Left Section */}
        <div className="flex items-center gap-3">

          {/* Icon */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-red-200">
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4 text-red-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 8v4l2 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>

          {/* CLEAN, SHARP PROMO TEXT */}
          <div className="text-sm text-red-900 font-medium">
            Limited Time: Get <span className="font-bold">50% OFF</span> on your first booking!
            <span className="ml-2 bg-white px-2 py-0.5 rounded border border-red-200 font-semibold">
              Use code: <span className="text-red-700">WELCOME50</span>
            </span>
          </div>
        </div>

        {/* Button + Close */}
        <div className="flex items-center gap-3">

          <a
            href="#offers"
            className="inline-block bg-red-700 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-red-800 transition"
          >
            View Offers
          </a>

          {/* Close */}
          <button
            onClick={() => setVisible(true)}
            className="p-1 rounded hover:bg-red-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4 text-red-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}
