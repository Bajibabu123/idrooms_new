"use client";
import { useState } from "react";

export default function HeroSearch() {
  const [form, setForm] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-red-900 text-white pb-16 pt-10 text-center">
      <h1 className="text-4xl font-bold mb-2">Find Your Perfect Stay</h1>
      <p className="mb-6 opacity-80">
        Discover premium hotels and resorts at unbeatable prices
      </p>

      <div className="bg-white text-black w-4/5 mx-auto p-6 rounded-xl shadow-lg">
        <div className="grid grid-cols-4 gap-4">

          <div>
            <label className="block mb-1 text-sm">Location</label>
            <input
              name="location"
              placeholder="Where to?"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Check In</label>
            <input
              name="checkIn"
              type="date"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Check Out</label>
            <input
              name="checkOut"
              type="date"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Guests</label>
            <input
              name="guests"
              type="number"
              min="1"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <button className="mt-5 bg-red-700 text-white w-full py-2 rounded hover:bg-red-800">
          Search
        </button>
      </div>
    </div>
  );
}
