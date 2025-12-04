"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
    const router = useRouter();

  const params = useSearchParams();
  const roomType = params.get("room"); 

  const rooms = {
    deluxe: 2499,
    premium: 5499,
    royal: 9499,
  };

  const price = rooms[roomType] || 2499;
  const taxes = 990;
  const total = price + taxes;

  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={110} height={60} alt="IDrooms" />
          </Link>

          <nav className="hidden md:flex gap-6 text-sm">
            <a className="hover:text-red-700 cursor-pointer">Explore</a>
            <a className="hover:text-red-700 cursor-pointer">Offers</a>
            <a className="hover:text-red-700 cursor-pointer">Help</a>
          </nav>

          <div className="hidden md:flex gap-3">
            <Link href="/login" className="px-4 py-2 border rounded">Login</Link>
            <Link href="/signup" className="px-5 py-2 rounded-lg rounded bg-red-900 text-white">Signup</Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto mt-10 px-6">
        <p className="text-gray-500 text-sm">Your payment information is encrypted & secure</p>
        <h1 className="text-3xl font-semibold mt-1">Secure Payment</h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 mt-10 px-6 pb-20">

        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white p-6 rounded-xl shadow space-y-6">

            <h2 className="text-xl font-semibold">Choose Payment Method</h2>

            <div className="space-y-4">

              <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer hover:border-red-600 transition">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                  className="w-4 h-4 accent-red-700 mt-1"
                />
                <div>
                  <p className="font-semibold">UPI</p>
                  <p className="text-sm text-gray-500">Pay using Gpay, PhonePe, Paytm</p>
                </div>
              </label>

              <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer hover:border-red-600 transition">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="w-4 h-4 accent-red-700 mt-1"
                />
                <div>
                  <p className="font-semibold">Credit / Debit Card</p>
                  <p className="text-sm text-gray-500">Visa, Mastercard, Amex, Rupay</p>
                </div>
              </label>
              <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer hover:border-red-600 transition">
                <input
                  type="radio"
                  name="payment"
                  value="netbanking"
                  checked={paymentMethod === "netbanking"}
                  onChange={() => setPaymentMethod("netbanking")}
                  className="w-4 h-4 accent-red-700 mt-1"
                />
                <div>
                  <p className="font-semibold">Net Banking</p>
                  <p className="text-sm text-gray-500">All Major Banks Supported</p>
                </div>
              </label>

            </div>

            {paymentMethod === "upi" && (
              <div>
                <label className="text-sm font-semibold">UPI ID</label>
                <input
                  placeholder="yourname@upi"
                  className="border p-3 rounded-lg w-full mt-2"
                />
              </div>
            )}

            <div className="bg-red-50 p-4 rounded-lg flex gap-3 mt-4">
              <FaInfoCircle className="text-red-600 mt-1" />
              <p className="text-sm text-gray-700">
                Your payment is processed securely. Card details are never stored.
              </p>
            </div>

          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white p-6 rounded-xl shadow space-y-6 sticky top-24">

            <h2 className="text-xl font-semibold">Payment Summary</h2>

            <div className="flex justify-between text-sm">
              <span>Room Charges</span>
              <span>₹{price.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Taxes & Fees</span>
              <span>₹{taxes.toLocaleString()}</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-semibold text-red-900">
              <span>Amount Pay</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

                        <button
                onClick={() => router.push("/confirmation")}
                className="w-full bg-red-900 text-white py-3 rounded-lg"
                >
                Pay ₹{total.toLocaleString()}
                </button>



            <p className="text-xs text-gray-600 text-center">
              By completing this booking, you agree to our <br />
              <span className="text-red-700 underline cursor-pointer">Terms & Conditions</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
