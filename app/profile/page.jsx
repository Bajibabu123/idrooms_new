"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaPen } from "react-icons/fa";
import { useState } from "react";

export default function ProfilePage() {
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState("/profile.png");
  const [successMsg, setSuccessMsg] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [locationError, setLocationError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    let valid = true;

    if (!name.trim()) {
      setNameError("Please enter your name");
      valid = false;
    }

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setMobileError("Enter a 10-digit mobile number");
      valid = false;
    }

    if (!location.trim()) {
      setLocationError("Please enter your location");
      valid = false;
    }

    if (!valid) return;

    setSuccessMsg("Profile updated successfully!");

    setName("");
    setEmail("");
    setMobile("");
    setLocation("");

    setTimeout(() => setSuccessMsg(""), 3000);
  };

  if (!showForm) return null;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white pt-10 pb-24 relative -mt-40">
        <div className="max-w-7xl mx-auto px-6 mb-[-17]">
          <h1 className="text-4xl font-semibold mb-7 font-urban ml-82">Profile</h1>
        </div>

        {successMsg && (
          <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 mr-210 mt-30">
            <div className="bg-green-98 text-green-500 px-6 py-3 rounded-xl shadow-lg border border-green-300 font-urban text-xl">
              {successMsg}
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg border border-gray-200 p-10 relative min-h-[508px]">
            <button
              className="absolute top-5 right-5 text-gray-500 text-red-900 text-5xl font-light"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
              <div className="relative">
                <Image
                  src={avatar}
                  width={90}
                  height={90}
                  alt="User Avatar"
                  className="rounded-full object-cover"
                />
                <label
                  htmlFor="avatarUpload"
                  className="absolute -bottom-2 -right-2 bg-red-900 text-white p-2 rounded-full shadow cursor-pointer"
                >
                  <FaPen size={14} />
                </label>
                <input
                  type="file"
                  id="avatarUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold font-urban">Your name</h2>
                <p className="text-sm text-gray-400 font-urban">yourname@gmail.com</p>
              </div>
            </div>

            <form onSubmit={handleSave} className="mt-8 space-y-4 ml-3">
              
              {/* NAME */}
              <div className="flex flex-col">
                <div
                  className={`flex justify-between items-center pb-3 border-b ${
                    nameError ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <span className="text-base text-gray-600 font-urban">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                    }}
                    className="text-base text-gray-800 font-urban border-none focus:outline-none w-45"
                  />
                </div>
                {nameError && <p className="text-red-600 text-sm mt-1">{nameError}</p>}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <div
                  className={`flex justify-between items-center pb-3 border-b ${
                    emailError ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <span className="text-base text-gray-600 font-urban">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    className="text-base text-gray-800 font-urban border-none focus:outline-none w-45"
                  />
                </div>
                {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
              </div>

              {/* MOBILE */}
              <div className="flex flex-col">
                <div
                  className={`flex justify-between items-center pb-3 border-b ${
                    mobileError ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <span className="text-base text-gray-600 font-urban">Mobile</span>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      setMobileError("");
                    }}
                    className="text-base text-gray-800 font-urban border-none focus:outline-none w-45"
                  />
                </div>
                {mobileError && <p className="text-red-600 text-sm mt-1">{mobileError}</p>}
              </div>

              {/* LOCATION */}
              <div className="flex flex-col">
                <div
                  className={`flex justify-between items-center pb-3 border-b ${
                    locationError ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <span className="text-base text-gray-600 font-urban">Location</span>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setLocationError("");
                    }}
                    className="text-base text-gray-800 font-urban border-none focus:outline-none w-45"
                  />
                </div>
                {locationError && <p className="text-red-600 text-sm mt-1">{locationError}</p>}
              </div>

              <div className="mt-8 ml-3">
                <button
                  type="submit"
                  className="bg-red-900 text-white px-8 py-3 rounded-xl shadow font-urban text-base"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
