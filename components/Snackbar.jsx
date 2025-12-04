"use client";

export default function Snackbar({ message, type = "error", show }) {
  return (
    <div
      className={`fixed top-6 right-6 px-5 py-3 rounded-lg text-white shadow-xl 
        transition-all duration-300 z-[9999]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
        bg-red-900
      `}
    >
      {message}
    </div>
  );
}
