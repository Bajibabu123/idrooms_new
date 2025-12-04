"use client";

import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlineDownload, AiFillStar } from "react-icons/ai";
import { BsCalendarDate, BsClipboardData } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";
import { PiBed } from "react-icons/pi";

export default function MyBookings() {
  const [activeSection, setActiveSection] = useState("all");

  const toggleSection = (section) => setActiveSection(section);
  const isVisible = (section) => activeSection === "all" || activeSection === section;

  return (
    <div className="min-h-screen bg-white mt-[-70] ml-12 ">
      {/* PAGE TITLE */}
      <div className="px-10 py-4">
        <h1 className="text-4xl font-bold">My Bookings</h1>
        <p className="text-gray-500 mt-1">Overview of all past and upcoming stays</p>

        {/* SEARCH BAR */}
        <div className="relative mt-5">
          <FiSearch className="absolute left-4 top-3 text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search Bookings: By Hotel, Location, Or Booking Id"
            className="w-120 border border-gray-400 rounded-lg py-3 px-12 text-gray-700"
          />
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex gap-4 mt-5 flex-wrap">
          {[
            { key: "all", label: "All Bookings" },
            { key: "completed", label: "Completed" },
            { key: "cancelled", label: "Cancelled & Refunds" },
          ].map((section) => (
            <button
              key={section.key}
              onClick={() => toggleSection(section.key)}
              className={`px-4 py-2 border rounded-md transition-colors duration-200 ${
                activeSection === section.key
                  ? "bg-[#8B1E1E] text-white border-[#8B1E1E]"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* UPCOMING BOOKINGS */}
      {isVisible("all") && (
        <section className="px-10 mt-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <span className="w-2 h-6 bg-blue-500 rounded"></span>Upcoming Bookings
          </h2>

          {[1, 2, 3].map((item) => (
          <div
  key={item}
className="flex flex-col md:flex-row gap-6 w-450 rounded-xl p-6 mb-10 shadow-[0_0_15px_rgba(0,0,0,0.12)] bg-white h-90"


>
  {/* LEFT: IMAGE */}
  <div className="md:w-1/3">
    <Image
      src={`/h${item}.jpg`}
      alt="room"
      width={400}
      height={300}
      className="rounded-xl object-cover w-full h-full"
    />
  </div>

  {/* RIGHT: DETAILS */}
  <div className="flex-1 flex flex-col justify-between">
    {/* HOTEL INFO & STATUS */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold">The Grand Palace Hotel</h3>
        <p className="flex items-center gap-1 text-gray-600">
          <GoLocation /> Bengaluru, Karnataka
        </p>
      </div>
      <span
        className={`px-4 py-1 rounded-lg text-sm ${
          item === 1 ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-700"
        }`}
      >
        {item === 1 ? "Check In Soon" : "Confirmed"}
      </span>
    </div>

    {/* INFO BOXES */}
    <div className="grid grid-cols-2 gap-4 text-gray-700 mb-4">
      {/* Check-in */}
      <div className="flex items-center gap-2 p-2 rounded">
        <LuCalendarDays
  className="text-red-400 bg-red-100 w-11 h-9 rounded p-2"
  strokeWidth={1.5}
/>
        <div>
          <p className="text-sm">Check-in Time</p>
          <p className="font-medium">3:00 PM</p>
        </div>
      </div>
      {/* Check-out */}
      <div className="flex items-center gap-2 p-2  rounded">
      <LuCalendarDays
  className="text-red-400 bg-red-100 w-11 h-9 rounded p-2"
  strokeWidth={1.5}
/>
        <div>
          <p className="text-sm">Check-out Time</p>
          <p className="font-medium">11 AM</p>
        </div>
      </div>
      {/* Guests */}
      <div className="flex items-center gap-2 p-2  rounded">
        <PiUsers className="text-red-400 bg-red-100 w-11 h-9 rounded p-2"
  strokeWidth={1.5}
/>
        <div>
          <p className="text-sm">Guests</p>
          <p className="font-medium">2 Adults</p>
        </div>
      </div>
      {/* Room Type */}
      <div className="flex items-center gap-2 p-2  rounded">
        <PiBed  className="text-red-400 bg-red-100 w-11 h-9 rounded p-2"
  strokeWidth={1.5}
/>
        <div>
          <p className="text-sm">Room Type</p>
          <p className="font-medium">
            {item === 1
              ? "Ocean View Suite"
              : item === 2
              ? "Deluxe King Room"
              : "Executive Suite"}
          </p>
        </div>
      </div>
    </div>

    {/* Booking ID */}
    <p className="text-gray-600 mb-4">
      <span className="font-semibold">Booking ID:</span> BK-2024-1057
    </p>

    {/* BUTTONS */}
   <div className="flex gap-3 mt-4 flex-wrap">
  <button
    className="px-4 py-2 bg-[#8B1E1E] text-white rounded-lg flex items-center gap-2"
    onClick={() => alert("View Details")}
  >
    View Details
  </button>

  <button
    className="px-4 py-2 bg-[#407BFF] text-white rounded-lg flex items-center gap-2"
    onClick={() => alert("Manage Booking")}
  >
    Manage Booking
  </button>

  <button
    className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg flex items-center gap-2"
    onClick={() => alert("Cancel")}
  >
    Cancel
  </button>
</div>


  </div>
</div>

          ))}
        </section>
      )}

      {/* COMPLETED BOOKINGS */}
      {isVisible("completed") && (
        <section className="px-10 mt-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-6 ">
            <span className="w-2 h-6 bg-green-500 rounded"></span>Completed Bookings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[-30] mr-150 ">
            {[1, 2].map((i) => (
              <div
                  key={i}
                  className="rounded-xl p-7 flex flex-col md:flex-row gap-7 shadow-sm bg-white w-200 mb-6"
                >

                <Image
                  src={`/h${i + 1}.jpg`}
                  alt="completed"
                  width={260}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1 ">
                  <h3 className="font-semibold text-lg mt-4">The Grand Palace Hotel</h3>
                  <p className="text-gray-600 mt-2">Dubai, UAE</p>
                  <p className="flex items-center gap-1 text-gray-500 mt-2">
                    <BsCalendarDate /> Oct 5 – Oct 12, 2024
                  </p>

                  <div className="flex gap-3 mt-4 flex-wrap">
                    <button
                      className="px-4 py-2 border rounded-md text-blue-600 flex items-center gap-2"
                      onClick={() => alert(`Selecting room for completed booking ${i}`)}
                    >
                      <BsClipboardData /> Select Room
                    </button>
                    <button
                      className="px-4 py-2 border rounded-md flex items-center gap-2 text-gray-600"
                      onClick={() => alert(`Downloading invoice for completed booking ${i}`)}
                    >
                      <AiOutlineDownload /> Invoice
                    </button>
                    <button
                      className="px-4 py-2 border border-yellow-400 text-yellow-500 rounded-md flex items-center gap-2"
                      onClick={() => alert(`Rating completed booking ${i}`)}
                    >
                      <AiFillStar /> Rate Stay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CANCELLED BOOKINGS */}
      {isVisible("cancelled") && (
        <section className="px-10 mt-12 mb-20">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <span className="w-2 h-6 bg-red-500 rounded"></span>Cancelled & Refund Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3  mr-155  ">
  {[1, 2].map((i) => (
    <div key={i} className="rounded-xl p-6 shadow-sm bg-white w-200">
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={`/h${i + 2}.jpg`}
          alt="cancelled"
          width={260}
          height={200}
          className="rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">The Grand Palace Hotel</h3>
          <p className="text-gray-600">Dubai, UAE</p>
          <span className="px-4 py-1 mt-2 inline-block bg-red-100 text-red-600 rounded-md text-sm">
            Cancelled
          </span>

          <p className="flex items-center gap-2 mt-4 text-gray-700">
            <BsCalendarDate /> Cancelled On Oct 5, 2024
          </p>

          <p className="flex items-center gap-2 mt-2 text-gray-700">
            <BsClipboardData />
            {i === 1 ? "Travel Plans Changed" : "Medical Emergency"}
          </p>

          <button
            className="px-4 py-2 mt-4 bg-blue-100 text-blue-700 rounded-md"
            onClick={() => alert(`Refund processing for booking ${i}`)}
          >
            Refund Processing
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        </section>
      )}

      {/* FOOTER */}
    <footer className="bg-gray-100 py-14 mt-10 w-full">
  <div className="w-full max-w-full px-10 grid md:grid-cols-4 gap-10">
    <div>
      <Link href="/">
        <Image src={logo} alt="Logo" width={200} height={100} className="object-contain" />
      </Link>
      <p className="mt-3 text-sm text-gray-600">
        Your trusted partner for premium hotel bookings worldwide.
      </p>
    </div>

    <div>
      <h3 className="font-semibold mb-3 text-gray-900">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>About Us</li>
        <li>Careers</li>
        <li>Partnerships</li>
        <li>Blog</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3 text-gray-900">Support</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Help Center</li>
        <li>FAQs</li>
        <li>Cancellation Policy</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3 text-gray-900">Contact</h3>
      <p className="text-sm text-gray-600">support@idrooms.com</p>
      <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
      <p className="text-sm text-gray-600">Bangalore, Karnataka</p>
    </div>
  </div>

  <div className="border-t border-gray-200 mt-10 pt-4 flex justify-between items-center px-10 w-full">
    <p className="text-sm text-gray-500">© 2024 IDrooms. All rights reserved.</p>
    <div className="flex gap-4 text-sm text-gray-500">
      <p>Privacy</p>
      <p>Terms</p>
      <p>Cookies</p>
    </div>
  </div>
</footer>


    </div>
  );
}
