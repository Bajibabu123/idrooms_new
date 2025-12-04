"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

export default function BookingPage() {
     const router = useRouter();
  const params = useSearchParams();
  const roomId = params.get("room") || "deluxe";

  const rooms = {
    deluxe: { name: "Deluxe Room", price: 2499, img: "/hotel1.png" },
    premium: { name: "Premium Suite", price: 5499, img: "/hotel1.png" },
    royal: { name: "Royal Suite", price: 9499, img: "/hotel1.png" },
  };

  const room = rooms[roomId] || rooms["deluxe"];
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={110} height={60} alt="IDrooms" />
          </Link>

          <nav className="hidden md:flex gap-6 text-sm">
            <a className="cursor-pointer hover:text-red-700">Explore</a>
            <a className="cursor-pointer hover:text-red-700">Offers</a>
            <a className="cursor-pointer hover:text-red-700">Help</a>
          </nav>

          <div className="hidden md:flex gap-3">
            <Link href="/login" className="px-4 py-2 border rounded">Login</Link>
            <Link
              href="/signup"
              className="px-5 py-2 rounded-lg bg-red-900 text-white hover:bg-red-900"
            >
              Signup
            </Link>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 mt-12 px-6">
        <div className="col-span-12 lg:col-span-8 space-y-8">

          <h1 className="text-3xl font-semibold">Continue your booking</h1>
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Guest Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <input className="border p-3 rounded-lg" placeholder="First Name*" />
              <input className="border p-3 rounded-lg" placeholder="Last Name*" />
            </div>

            <input className="border p-3 rounded-lg w-full" placeholder="Email*" />
            <input className="border p-3 rounded-lg w-full" placeholder="Phone Number*" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Special Requests (Optional)</h2>

            <textarea
              className="border w-full p-3 rounded-lg"
              rows="4"
              placeholder="E.g., early check-in, high floor, extra pillows..."
            ></textarea>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Promo Code</h2>

            <div className="flex gap-3">
              <input className="border p-3 w-full rounded-lg" placeholder="Enter Promo Code" />
              <button className="px-6 py-2 bg-red-900 text-white rounded-lg">Apply</button>
            </div>
          </div>

        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white p-6 rounded-xl shadow space-y-6 sticky top-24">

            <h2 className="text-xl font-semibold">Booking Summary</h2>

            <div className="flex gap-3">
              <Image
                src={room.img}
                width={90}
                height={90}
                className="rounded-lg"
                alt={room.name}
              />
              <div>
                <h3 className="font-semibold">The Grand Palace Hotel</h3>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <FaMapMarkerAlt className="text-red-900" /> Bangalore, Karnataka
                </p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Room Type</p>
              <p className="font-semibold text-lg">{room.name}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt /> Nov 20 – Nov 21, 2025 (1 Night)
            </div>

            <div className="border-t pt-4 space-y-3 text-sm">

              <div className="flex justify-between">
                <span>₹{room.price} × 1 night</span>
                <span>₹{room.price}</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes & fees</span>
                <span>₹499</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">₹299</span>
              </div>

              <div className="flex justify-between text-xl font-semibold pt-3 border-t">
                <span>Total Amount</span>
                <span className="text-red-700">
                  ₹{room.price + 499 - 299}
                </span>
              </div>

            </div>

                        <button
            className="w-full bg-red-900 hover:bg-red-900 text-white py-3 rounded-lg"
           onClick={() => router.push(`/payment?room=${roomId}`)}


            >
            Proceed to Payment
            </button>


            <div className="bg-red-50 p-4 rounded-lg text-sm flex gap-3">
              <FaInfoCircle className="text-red-600 mt-1" />
              <p>
                <strong>Free Cancellation</strong>
                <br />
                Cancel up to 24 hours before check-in for a full refund.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
