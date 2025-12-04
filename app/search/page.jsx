"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function SearchResultsPage() {
  const params = useSearchParams();

  const location = params.get("location") || "";
  const checkIn = params.get("checkIn") || "";
  const checkOut = params.get("checkOut") || "";
  const guests = params.get("guests") || "";

  return (
    <div className="min-h-screen bg-white ">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[2000px] mx-auto px-10 mt-[-85] ">

        {/* SEARCH CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 ">
          <div className="grid grid-cols-5 gap-6">

            <InputBox
              label="Location"
              icon={<FaMapMarkerAlt className="text-gray-500 text-lg" />}
              placeholder="Where to?"
              value={location}
            />

            <InputBox
              label="Check In"
              type="date"
              icon={<FaCalendarAlt className="text-gray-500 text-lg" />}
              value={checkIn}
            />

            <InputBox
              label="Check Out"
              type="date"
              icon={<FaCalendarAlt className="text-gray-500 text-lg" />}
              value={checkOut}
            />

            <InputBox
              label="Guests"
              icon={<FaUserFriends className="text-gray-500 text-lg" />}
              placeholder="2 guests, 1 room"
              value={guests}
            />

            <div className="flex flex-col">
              <label className="opacity-0 mb-2">Search</label>
              <button className="w-full flex items-center justify-center gap-2 bg-red-900 text-white py-3 rounded-xl hover:bg-red-800 text-lg shadow-md">
                <FaSearch />
                Search
              </button>
            </div>

          </div>
        </div>

        {/* TITLE */}
        <div className="mt-8 ">
          <h1 className="text-2xl font-bold">Search Results</h1>
          <p className="text-gray-600 mt-1">
            {checkIn || "Check-In"} → {checkOut || "Check-Out"} • {guests || "Guests"} • Location: <b>{location || "Select"}</b>
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-4 gap-8 mt-6">

          {/* FILTER BAR */}
          <aside className="col-span-1 p-6  rounded-xl shadow-lg h-[100vh] overflow-y-scroll text-sm w-[15vw]">
            <SidebarFilters />
          </aside>

          {/* HOTELS */}
          <div className="col-span-3 space-y-8">

            <HotelCard
              img="/hotel1.png"
              title="The Grand Palace Hotel"
              location="Bengaluru, Karnataka"
              price="₹5,999"
            />

            <HotelCard
              img="/hotel2.png"
              title="Coastal Paradise Resort"
              location="Goa, India"
              price="₹7,999"
            />

            <HotelCard
              img="/bangalore.png"
              title="Mountain View Retreat"
              location="Munnar, Kerala"
              price="₹4,999"
            />

            <HotelCard
              img="/hotel2.png"
              title="Mountain View Retreat"
              location="Munnar, Kerala"
              price="₹4,999"
            />

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-14 mt-16 w-full  border-gray-200 shadow-inner">

        <div className="max-w-[2200px] w-full mx-auto px-10 grid md:grid-cols-4 gap-10">

          <div>
            <Image src="/logo.png" width={200} height={100} alt="Logo" />
            <p className="mt-3 text-sm text-gray-600">
              Your trusted partner for premium hotel bookings worldwide.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={["About Us", "Careers", "Partnerships", "Blog"]} />

          <FooterColumn title="Support" links={["Help Center", "FAQs", "Cancellation Policy", "Terms & Conditions", "Privacy Policy"]} />

          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Contact</h3>
            <p className="text-sm text-gray-600">support@idrooms.com</p>
            <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
            <p className="text-sm text-gray-600">Bangalore, Karnataka</p>
          </div>

        </div>

        <div className="border-t border-gray-300 mt-10 pt-4 flex justify-between items-center max-w-[2500px] mx-auto px-10 text-sm text-gray-500">
          <p>© 2025 IDrooms. All rights reserved.</p>

          <div className="flex gap-6">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>
        </div>

      </footer>
    </div>
  );
}

/* -------------------- COMPONENTS -------------------- */

function InputBox({ label, icon, value, type = "text", placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-700">{label}</label>

      <div className="flex items-center gap-3  border-gray-300 px-4 py-3 rounded-xl bg-white shadow-md focus-within:border-red-900 focus-within:shadow-[0_0_0_2px_rgba(185,28,28,0.2)]">
        {icon}
        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent text-gray-700"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = placeholder || "")}
        />
      </div>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold mb-3 text-gray-900">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {links.map((l, i) => (
          <li key={i} className="cursor-pointer hover:text-gray-800">{l}</li>
        ))}
      </ul>
    </div>
  );
}

function SidebarFilters() {
  return (
    <>
      <h2 className="font-semibold mb-4">Filters</h2>

      <FilterSection title="Price Range" options={["Under ₹3,000", "₹3,000 – ₹6,000", "₹6,000 – ₹10,000", "Above ₹10,000"]} />

      <FilterSection title="Star Rating" options={["5 Stars", "4 Stars", "3 Stars"]} />

      <FilterSection title="Amenities" options={["Wifi", "Breakfast", "Parking", "Pool"]} />
    </>
  );
}

function FilterSection({ title, options }) {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((opt, i) => (
          <label key={i}>
            <input type="checkbox" className="mr-2" /> {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

function HotelCard({ img, title, location, price }) {
  return (
    <div className="flex gap-6 rounded-xl shadow-xl p-5 bg-white hover:shadow-2xl transition">
      <div className="w-[320px] h-[220px] overflow-hidden rounded-lg">
        <Image src={img} width={320} height={220} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>

          <div className="flex items-center text-gray-700 text-sm mt-1">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            {location}
          </div>

          <div className="flex items-center gap-6 text-gray-700 mt-3 text-sm">
            <span className="flex items-center gap-2"><span className="text-lg">📶</span> Wifi</span>
            <span className="flex items-center gap-2"><span className="text-lg">🅿</span> Parking</span>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Starting from</p>
            <p className="text-red-900 text-3xl font-bold mt-1">{price}</p>
            <p className="text-gray-600 text-xs mt-1">Per Night</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-red-900 text-white px-2 py-1 rounded text-sm">⭐ 4.9</span>
              <span className="text-gray-600 text-sm">243 reviews</span>
            </div>
          </div>

          <Link href={`/hotel/1`} className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
