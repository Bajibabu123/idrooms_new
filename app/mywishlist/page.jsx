"use client";

import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import logo from "@/public/logo.png";

export default function Wishlist() {
  // -------- Filters --------
  const filters1 = [
    "All", "Luxury", "Budget", "Business", "Boutique",
    "Family", "Couple Friendly", "Service Apartments"
  ];

  const filters2 = [
    "MG Road", "Brigade Road", "Church Street", "White Field",
    "Electronic City", "Koramangala", "Marathahalli",
    "CRR Belandur", "Airport/Devanahalli"
  ];

  const filters3 = [
    "5 - Star", "4 - Star", "Spa & Wellness",
    "Rooftop Pool", "Pet-Friendly", "Heritage"
  ];

  // -------- Hotel Images (8 hotels) --------
  const hotelImages = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  ];

  return (
    <div className="w-full bg-white text-[#2b2b2b] font-urban ">
      {/* ---------- HEADER & SEARCH ---------- */}
      <div className="max-w-[2000px] w-full mx-auto px-6 py-6 pt-0 ml-35">
        <h1 className="text-4xl font-bold">My Wishlist</h1>
        <p className="text-sm text-gray-500">8 hotels saved</p>

        <div className="mt-5 relative">
          <input
            type="text"
            placeholder="Search Hotels By Location, Type, Star Ratings"
            className="w-full md:w-[570px] border border-gray-400 rounded-xl py-3 px-12 outline-none"
          />
          <BiSearch className="absolute left-4 top-3.5 text-xl text-gray-400" />
        </div>

        {/* Filters */}
        <div className="mt-10">
          <p className="font-semibold mb-2">General Filters</p>
          <div className="flex gap-2 flex-wrap">
            {filters1.map((f, i) => (
              <button 
                key={i} 
                className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:border-red-900 hover:bg-gray-100 transition"
              >
                {f}
              </button>
            ))}
          </div>

          <p className="font-semibold mt-6 mb-2">Location - Based Filters</p>
          <div className="flex gap-2 flex-wrap">
            {filters2.map((f, i) => (
              <button 
                key={i} 
                className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:border-red-900 hover:bg-gray-100 transition"
              >
                {f}
              </button>
            ))}
          </div>

          <p className="font-semibold mt-6 mb-2">Experience Filters</p>
          <div className="flex gap-2 flex-wrap">
            {filters3.map((f, i) => (
              <button 
                key={i} 
                className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:border-red-900 hover:bg-gray-100 transition"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- HOTEL CARDS (8 only) ---------- */}
      <div className="max-w-[2100px] w-full mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20 mt-5 ">
        {hotelImages.map((img, i) => (
          <div key={i} className="rounded-2xl shadow-sm overflow-hidden bg-white">
            <div className="relative w-full h-64">
              <Image src={img} alt={`Hotel ${i + 1}`} fill className="object-cover rounded-t-2xl" unoptimized />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                <AiFillHeart className="text-red-900 text-xl" />
              </button>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">Luxury</span>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">5 Star</span>
              </div>
            </div>

            <div className="p-4">
              <p className="font-semibold text-lg">The Leela Palace</p>
              <p className="text-gray-500 text-sm">MG Road, Bengaluru</p>

              <div className="flex items-center gap-2 mt-2">
                <span className="bg-red-900 text-white text-xs px-2 py-1 rounded">★ 4.9</span>
                <span className="text-xs text-gray-500">543 reviews</span>
              </div>

              <p className="mt-3 text-sm text-gray-700">Starting from</p>
              <p className="text-xl font-bold text-red-900">₹7,999</p>
              <p className="text-xs text-gray-400">Per Night</p>

              <button className="w-30 mt-4 bg-red-900 text-white py-2 rounded-lg">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-gray-100 py-14 mt-10">
        <div className="max-w-[1600px] w-full mx-auto px-6 grid md:grid-cols-4 gap-10">
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

        <div className="border-t border-gray-200 mt-10 pt-4 flex justify-between items-center px-6 md:px-0 text-sm text-gray-500">
          <p className="ml-[150px]">© 2024 IDrooms. All rights reserved.</p>
          <div className="flex gap-4 mr-[100px]">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
