"use client";

import Image from "next/image";
import Link from "next/link";
import DownloadInvoice from "@/components/DownloadInvoice";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function ConfirmationPage() {
      const booking = {
    id: "IDR-2024-123456",
    hotelName: "The Grand Palace Hotel",
    location: "Bengaluru, Karnataka",
    roomType: "Deluxe",
    guests: "2 Adults",
    checkin: "Nov 20, 2025",
    checkout: "Nov 21, 2025",
    nights: "1 Night",
    price: 5499,
    taxes: 499,
    discount: 299,
    total: 5699,
  };
  const bookingId = "IDR-2024-123456"; 

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={110} height={60} alt="IDrooms" />
          </Link>

          <nav className="hidden md:flex gap-6 text-sm">
            <span className="hover:text-red-700 cursor-pointer">Explore</span>
            <span className="hover:text-red-700 cursor-pointer">Offers</span>
            <span className="hover:text-red-700 cursor-pointer">Help</span>
          </nav>
        </div>
      </header>

      <div className="text-center mt-12">
        <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
          <span className="text-green-600 text-4xl">✔</span>
        </div>

        <h1 className="text-3xl font-bold mt-4">Booking Confirmed!</h1>
        <p className="text-gray-600 mt-1">
          Your reservation has been successfully confirmed
        </p>

        <div className="inline-block bg-red-50 text-red-700 mt-4 px-6 py-2 rounded-lg text-lg">
          Booking ID: <strong>{bookingId}</strong>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

        <div className="flex gap-6">
          <Image
            src="/hotel1.png"
            width={200}
            height={120}
            className="rounded-lg"
            alt="room"
          />

          <div>
            <h3 className="text-lg font-semibold">The Grand Palace Hotel</h3>
            <p className="flex items-center gap-2 text-gray-500">
              <FaMapMarkerAlt className="text-red-700" />
              Bengaluru, Karnataka
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <p className="text-gray-500">Room Type</p>
            <p className="font-semibold text-lg">Deluxe</p>

            <p className="text-gray-500 mt-4">Check-in</p>
            <p className="flex items-center gap-2 font-semibold">
              <FaCalendarAlt className="text-red-700" /> Nov 20, 2025
            </p>

            <p className="text-gray-500 mt-4">Check-out</p>
            <p className="flex items-center gap-2 font-semibold">
              <FaCalendarAlt className="text-red-700" /> Nov 21, 2025
            </p>
          </div>

          <div>
            <p className="text-gray-500">Guests</p>
            <p className="font-semibold">2 Adults</p>

            <p className="text-gray-500 mt-4">Total nights</p>
            <p className="font-semibold">1 night</p>

            <p className="text-gray-500 mt-4">Total Amount Paid</p>
            <p className="font-semibold text-red-700 text-xl">₹6,489</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="text-gray-500">Check-in Time</p>
            <p className="font-semibold">3:00 PM</p>

            <p className="text-gray-500 mt-4">Hotel Contact</p>
            <p className="font-semibold">+91 98765 43210</p>
          </div>

          <div>
            <p className="text-gray-500">Check-out Time</p>
            <p className="font-semibold">11:00 AM</p>

            <p className="text-gray-500 mt-4">Email</p>
            <p className="font-semibold">info@idrooms.com</p>
          </div>
        </div>

        <div className="mt-6 bg-red-50 p-4 rounded-lg text-sm">
          <strong className="text-red-700">Important:</strong> Please carry a
          valid government-issued photo ID and the credit card used for booking
          at check-in.
        </div>

        <div className="text-right mt-6">
  <DownloadInvoice booking={booking} />
</div>

      </div>
    </div>
  );
}
