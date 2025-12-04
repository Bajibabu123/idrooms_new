"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";

export default function HeroSearch() {
  const [form, setForm] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 0,
    rooms: 0,
  });

  const [isHotel, setIsHotel] = useState(true);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const increment = (field) => {
    setForm({ ...form, [field]: form[field] + 1 });
  };

  const decrement = (field) => {
    if (form[field] > 0) {
      setForm({ ...form, [field]: form[field] - 1 });
    }
  };

  return (
    <div className="bg-red-900 text-white pb-8 pt-8 text-center w-full rounded-b-3xl mt-[-170px]">
      <h1 className="text-4xl font-bold mb-2">
        {isHotel ? "Find Your Perfect Stay" : "Discover Your Home Away From Home"}
      </h1>

      <p className="mb-6 opacity-80">
        {isHotel
          ? "Discover premium hotels and resorts at unbeatable prices"
          : "Book unique villas, apartments, and private homes"}
      </p>

      <div className="flex justify-center mb-6">
        <div className="flex bg-red-900 p-1 rounded-full border border-white/30">
          <button
            onClick={() => setIsHotel(true)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              isHotel
                ? "bg-[#7A0A0A] text-white shadow-lg scale-105 opacity-80"
                : "bg-red-900 text-black/70"
            }`}
          >
            Hotels
          </button>

          <button
            onClick={() => setIsHotel(false)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              !isHotel
                ? "bg-red-900 text-white shadow-lg scale-105 opacity-80"
                : "bg-BC8385 text-black/70"
            }`}
          >
            Private Stays
          </button>
        </div>
      </div>

      <div className="bg-white w-10/12 mx-auto p-4 rounded-xl shadow-xl relative">
        <div className="grid grid-cols-4 gap-4 mt-7 mr-7 ml-7">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 text-left">
              Location
            </label>
            <div className="flex items-center gap-3 border border-gray-200 px-3 py-2 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-gray-500 text-lg" />
              <input
                name="location"
                placeholder="Where To?"
                className="w-full outline-none text-gray-700"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700  text-left">
              Check In
            </label>
            <div className="flex items-center gap-3 border border-gray-200 px-3 py-2 rounded-xl shadow-sm">
              <FaCalendarAlt className="text-gray-500 text-lg" />
              <input
                name="checkIn"
                type="date"
                className="w-full outline-none text-gray-700"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700  text-left">
              Check Out
            </label>
            <div className="flex items-center gap-3 border border-gray-200 px-3 py-2 rounded-xl shadow-sm">
              <FaCalendarAlt className="text-gray-500 text-lg" />
              <input
                name="checkOut"
                type="date"
                className="w-full outline-none text-gray-700"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Guests
            </label>
            <div
              className="flex items-center gap-3 border border-gray-200 px-3 py-2 rounded-xl shadow-sm cursor-pointer"
              onClick={() => setShowGuestDropdown(!showGuestDropdown)}
            >
              <FaUserFriends className="text-gray-500 text-lg" />
              <span className="w-full text-gray-400">
                {form.guests} Guests, {form.rooms} Rooms
              </span>
            </div>

            {showGuestDropdown && (
              <div className="absolute bg-white mt-2 w-full rounded-xl shadow-lg z-10 p-3 text-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span>Guests</span>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => decrement("guests")}
                      className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span>{form.guests}</span>
                    <button
                      onClick={() => increment("guests")}
                      className="w-6 h-6 rounded-full border flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span>Rooms</span>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => decrement("rooms")}
                      className="w-6 h-6 rounded-full border flex items-center justify-center"
                    >
                      -
                    </button>
                    <span>{form.rooms}</span>
                    <button
                      onClick={() => increment("rooms")}
                      className="w-6 h-6 rounded-full border flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex justify-center mb-3">
          <Link href="/search">
            <button className="flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-8 py-2 rounded-xl shadow transition text-lg">
              <FaSearch className="text-lg" />
              {isHotel ? "Search Hotels" : "Search Private Stays"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
