"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { IoMdClose } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSend = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    localStorage.setItem("resetEmail", email);
    setShowPopup(true);
  };

  const goToResetPage = () => {
    window.location.href = "/resetpassword";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-[-80px]">
      <div className="w-full flex justify-between items-center px-10 py-6">
        <Image src={logo} alt="IDrooms Logo" width={200} height={300} />
        <p className="text-gray-600 hover:text-red-700 cursor-pointer">Need Help?</p>
      </div>

      <div className="flex flex-1 justify-center items-center mt-[-500px]">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[520px]">
          <h2 className="text-center text-xl font-semibold">Forgot Password</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your registered email to reset your password
          </p>

          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 ${
              error ? "border-red-100" : "border-gray-300"
            }`}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          <button
            onClick={handleSend}
            className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-red-800"
          >
            Send
          </button>

          <button
            onClick={() => (window.location.href = "/login")}
            className="w-full  py-3 border rounded-lg mt-3 focus:ring-2 focus:ring-red-100 border-gray-300"
          >
            Back
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-[350px] relative text-center shadow-lg">
            <button
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose size={22} />
            </button>

            <div className="bg-red-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaEnvelope className="text-red-700 text-xl" />
            </div>

            <h3 className="text-lg font-semibold">Check your email</h3>
            <p className="text-gray-600 text-sm mt-2">
              Please check your inbox and follow the link to reset your password
            </p>

            <button
              onClick={goToResetPage}
              className="mt-5 bg-red-900 text-white py-2 px-6 rounded-lg"
            >
              Check Email
            </button>
          </div>
        </div>
      )}

      <footer className="bg-red-900 text-white text-center py-4 mt-10 w-full">
        © 2025 IDrooms
      </footer>
    </div>
  );
}
