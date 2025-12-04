"use client";
import { useState } from "react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-[#FFFFE0] mt-7">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between mr-60">

    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-red-700" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round"
            d="M12 8v4l2 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>

      <div className="text-[16px] text-black-900 mr-2">
        Limited Time: Get <span className="font-bold">50% OFF</span> on your first booking!
        <span className="ml-2 px-2 py-0.5 font-semibold text-[16px]">
          Use code: <span className="text-black font-bold text-[18px]">WELCOME50</span>
        </span>
      </div>
    </div>


    <div className="flex items-center gap-3">
      <a
        href="#offers"
        className="inline-block bg-[hsl(var(--primary))] text-white px-3 py-1.5 rounded-md text-sm  transition"
      >
        View Offers
      </a>

      <button
        onClick={() => setVisible(false)}
        className="p-1 rounded hover:bg-red-100 ml-117"
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
