"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaWifi,
  FaParking,
  FaStar,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import MainImg from "@/public/hotel1.png";
import Thumb1 from "@/public/hotel1.png";
import Thumb2 from "@/public/hotel1.png";
import Thumb3 from "@/public/hotel1.png";
import Thumb4 from "@/public/hotel1.png";
import MapImg from "@/public/hotel1.png";

export default function HotelDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = [MainImg, Thumb1, Thumb2, Thumb3, Thumb4];

  const [activeTab, setActiveTab] = useState("overview");
   const router = useRouter(); 
  const [snackbar, setSnackbar] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);


  const rooms = [
    {
      id: "deluxe",
      title: "Deluxe Room",
      price: 2499,
      sqft: 320,
      capacity: "2 Adults",
      bed: "1 King Bed",
      features: ["WiFi", "TV", "AC"],
      img: Thumb1,
    },
    {
      id: "premium",
      title: "Premium Suite",
      price: 5499,
      sqft: 550,
      capacity: "3 Adults",
      bed: "1 King Bed + Sofa",
      features: ["WiFi", "TV", "AC", "Bath tub"],
      img: Thumb2,
    },
    {
      id: "royal",
      title: "Royal Suite",
      price: 9499,
      sqft: 850,
      capacity: "4 Adults",
      bed: "1 King Bed + Separate Living",
      features: ["WiFi", "TV", "AC", "View"],
      img: Thumb3,
    },
  ];

  function nextImage() {
    setActiveIndex((i) => (i + 1) % gallery.length);
  }

  function prevImage() {
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={110} height={60} alt="IDrooms" />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm">
              <a className="hover:text-red-700 cursor-pointer">Explore</a>
              <a className="hover:text-red-700 cursor-pointer">Offers</a>
              <a className="hover:text-red-700 cursor-pointer">Help</a>
            </nav>

            <div className="hidden md:flex gap-3">
              <Link href="/login" className="px-4 py-2 border rounded">Login</Link>
              <Link href="/signup" className="px-5 py-2 rounded-lg bg-red-900 text-white hover:bg-red-900">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white shadow-md py-4 px-6 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-12 gap-4">

          <div className="col-span-3 flex items-center gap-2 border p-3 rounded-xl">
            <FaMapMarkerAlt className="text-gray-400" />
            <input placeholder="Where to?" className="w-full outline-none text-sm" />
          </div>

          <div className="col-span-3 flex items-center gap-2 border p-3 rounded-xl">
            <FaCalendarAlt className="text-gray-400" />
            <input type="date" className="w-full outline-none text-sm" />
          </div>

          <div className="col-span-3 flex items-center gap-2 border p-3 rounded-xl">
            <FaCalendarAlt className="text-gray-400" />
            <input type="date" className="w-full outline-none text-sm" />
          </div>

          <div className="col-span-2 flex items-center gap-2 border p-3 rounded-xl">
            <FaUsers className="text-gray-400" />
            <input placeholder="0 Guests, 0 Rooms" className="w-full outline-none text-sm" />
          </div>

         <button className="bg-red-900 text-white rounded-xl flex items-center justify-center gap-2 w-32">
  <FaSearch /> Search
</button>


        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 mt-6 px-6">
        <div className="col-span-12 lg:col-span-8 relative rounded-xl overflow-hidden shadow">
          <div className="relative h-[450px]">
            <Image src={gallery[activeIndex]} alt="hotel" fill className="object-cover" />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
            >
              <FaChevronRight />
            </button>
            <div className="absolute bottom-4 right-4 bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow">
              <FaStar /> 4.8 Excellent
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4">
          {gallery.slice(1).map((src, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i + 1)}
              className="relative h-[130px] rounded-xl overflow-hidden shadow cursor-pointer"
            >
              <Image src={src} alt="thumb" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-6">
        <h1 className="text-3xl font-bold">The Grand Palace Hotel</h1>
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <FaMapMarkerAlt /> Kane Drive, Bangalore, Karnataka 400020
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-6 border-b">
        <nav className="flex gap-10">
          {["overview", "amenities", "rooms", "rates", "policies", "location"].map((tab) => (
            <button
              key={tab}
              className={`pb-3 text-lg ${
                activeTab === tab ? "border-b-2 border-red-700 text-red-700" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 mt-8 px-6">

        
        <div className="col-span-12 lg:col-span-8 space-y-10">
          {activeTab === "overview" && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-3">About this Property</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience luxury at The Grand Palace Hotel located in the heart of the city
                with stunning views of Marine Drive. Our world-class amenities and exceptional
                service ensure a memorable stay.
              </p>
            </div>
          )}
          {activeTab === "amenities" && (
            <div className="bg-white p-6 rounded-xl shadow text-gray-700 text-lg grid grid-cols-2 gap-4">
              <div>✓ Free Wifi</div>
              <div>✓ Breakfast Included</div>
              <div>✓ Air Conditioning</div>
              <div>✓ Pool</div>
              <div>✓ Restaurant</div>
              <div>✓ Spa</div>
              <div>✓ Gym</div>
              <div>✓ 24/7 Room Service</div>
            </div>
          )}
          {(activeTab === "overview" || activeTab === "rooms") && (
            <>
              <h2 className="text-2xl font-semibold mt-4">Available Rooms</h2>
              <p className="text-gray-600 mb-4">Choose from our premium accommodations</p>

              {rooms.map((room) => (
                <div key={room.id} className="bg-white rounded-xl shadow p-4 flex gap-6 mb-6">

                  <div className="relative w-[260px] h-[170px] rounded-xl overflow-hidden">
                    <Image src={room.img} alt={room.title} fill className="object-cover" />
                    <span className="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-full text-xs">
                      Popular Choice
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{room.title}</h3>

                    <div className="text-gray-600 text-sm mt-2 flex gap-6">
                      <span>• {room.sqft} sqft</span>
                      <span>• {room.bed}</span>
                      <span>• {room.capacity}</span>
                    </div>

                    <div className="flex gap-2 mt-4 flex-wrap text-sm">
                      {room.features.map((f) => (
                        <span key={f} className="bg-gray-100 px-3 py-1 rounded-full">
                          ✓ {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <div className="text-red-700 text-3xl font-bold">₹{room.price.toLocaleString()}</div>
                        <div className="text-green-600 text-sm">Save 20% today</div>
                      </div>

                       <button
                onClick={() => setSelectedRoom(room)}
                className="bg-red-900 text-white px-5 py-2 rounded-lg"
              >
                Select Room
              </button>

                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === "policies" && (
            <div>
              <h2 className="text-2xl font-semibold mb-3">Cancellation Policy</h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700">
                <ul className="space-y-3 text-lg">
                  <li>✓ Free cancellation up to 24 hours before check-in</li>
                  <li>✓ Full refund if cancelled 48 hours before arrival</li>
                  <li>✗ Non-refundable after check-in time</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "location" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="h-80 w-full rounded-xl overflow-hidden shadow relative">
                <Image src={MapImg} alt="map" fill className="object-cover" />
              </div>
            </div>
          )}
        </div>
<div className="col-span-12 lg:col-span-4 h-fit">
  <div className="sticky top-28 bg-white p-6 rounded-xl shadow space-y-4">
    <div className="text-sm text-gray-500">Per Night</div>

    <div className="text-3xl font-bold text-red-800">
      ₹{selectedRoom ? selectedRoom.price.toLocaleString() : "2,499"}
    </div>
    <div className="border p-3 rounded-lg bg-red-50">
      <div className="flex justify-between">
        <span>Check-in</span>
        <span>Nov 29, 2025</span>
      </div>

      <div className="flex justify-between mt-2">
        <span>Check-out</span>
        <span>Nov 30, 2025</span>
      </div>

      <div className="flex justify-between mt-2">
        <span>Guests</span>
        <span>1 adult</span>
      </div>
    </div>

    <div className="border-t pt-4 space-y-3 text-sm">
      <div className="flex justify-between">
        <span>{selectedRoom ? selectedRoom.price.toLocaleString() : "2,499"} × 1 night</span>
        <span>₹{selectedRoom ? selectedRoom.price.toLocaleString() : "2,499"}</span>
      </div>

      <div className="flex justify-between">
        <span>Service Fee</span>
        <span>₹199</span>
      </div>

      <div className="flex justify-between">
        <span>Taxes</span>
        <span>₹101</span>
      </div>

      <div className="flex justify-between font-semibold text-lg border-t pt-3">
        <span>Total</span>
        <span>
          ₹
          {selectedRoom
            ? (selectedRoom.price + 199 + 101).toLocaleString()
            : (2499 + 199 + 101).toLocaleString()}
        </span>
      </div>
    </div>

          <button
      onClick={() => router.push(`/booking?room=${selectedRoom?.id}`)}
      className="w-full bg-red-900 text-white py-3 rounded-lg"
    >
      Continue Booking
    </button>

    <p className="text-xs text-gray-500 text-center">
      You won't be charged yet
    </p>
  </div>
</div>


      </div>

      <div className="max-w-6xl mx-auto mt-14 px-6">

        <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

        {["Rajesh Kumar", "Lokesh", "Ramesh"].map((name, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border shadow-sm mb-6">
            <div className="text-lg font-semibold">{name}</div>

            <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
              <span className="text-red-600">★ 5</span> • 2 days ago
            </div>

            <p className="text-gray-700 mt-3">
              Excellent stay! The rooms were spotless and the staff was incredibly helpful.
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-14 px-6">
        <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>

        <div className="bg-white p-6 rounded-xl border shadow-sm text-gray-700 text-lg">
          <ul className="space-y-3">
            <li>✓ Free cancellation up to 24 hours before check-in</li>
            <li>✓ Full refund if cancelled 48 hours before arrival</li>
            <li>✗ Non-refundable after check-in time</li>
          </ul>
        </div>
      </div>

     <div className="max-w-6xl mx-auto mt-14 px-6 mb-20">
  <h2 className="text-2xl font-semibold mb-4">Location</h2>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.00758313816!2d77.35073790986641!3d12.954294176897533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e0bb9bd7%3A0xddb7ef1227bcdd35!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1707700000000"
    width="100%"
    height="350"
    className="rounded-xl shadow"
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      
            <footer className="bg-[#F9F9F9] mt-20 pt-10 pb-6 px-16 text-sm">
              <div className="flex justify-between">
      
                <div>
                  <Image src="/logo.png" width={120} height={60} alt="IDrooms" />
                  <p className="text-gray-600 mt-2 w-48">
                    Your trusted partner for premium hotel bookings worldwide.
                  </p>
                </div>
      
                <div>
                  <h3 className="font-semibold mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Partnerships</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Help Center</li>
                    <li>FAQs</li>
                    <li>Cancellation Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Contact</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Email: support@idrooms.com</li>
                    <li>Phone: +1 (800) 123-4567</li>
                    <li>Bangalore, Karnataka</li>
                  </ul>
                </div>
      
              </div>
      
              <p className="text-center text-gray-700 text-xs mt-10">
                © 2025 IDrooms. All rights reserved
              </p>
            </footer>
    </div>
  );
}
