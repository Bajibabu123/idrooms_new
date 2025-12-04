"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

// Icons
import { MdCalendarMonth, MdAccountCircle, MdPayment, MdEmail } from "react-icons/md";
import { IoGiftSharp, IoCalendarOutline } from "react-icons/io5";
import { BsHeadset } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";

export default function HelpPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const faqs = [
    "How do I cancel or modify bookings?",
    "How do refunds work?",
    "How do I redeem rewards?",
    "How to change account details?",
    "What payment methods are accepted?",
    "How can I add special requests to my bookings?",
  ];

  return (
    <>
      <Navbar />

      <div className="w-full pb-20">
        {/* Top Banner */}
        <div className="bg-red-900 text-white py-20 mt-[-160px] rounded-lg mx-4 lg:mx-10 flex flex-col items-center justify-center">
          <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
            <BsHeadset className="text-black text-3xl" />
          </div>
          <p className="mt-4 text-sm opacity-80">support & help</p>
          <h1 className="mt-2 text-center text-2xl lg:text-3xl font-semibold">
            We're Here To Assist You With Your Bookings
          </h1>
        </div>

        {/* Quick Support Options */}
        <div className="max-w-7xl mx-auto mt-14 px-4">
          <h2 className="text-center text-3xl font-semibold">Quick Support Options</h2>
          <p className="text-center text-gray-500 text-xl mt-1">Select category to instant help</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Booking */}
            <div className="p-7 rounded-xl bg-white shadow-md flex flex-col items-center cursor-pointer">
              <div className="p-4 rounded-full bg-red-100 flex items-center justify-center">
                <MdCalendarMonth className="text-red-900 text-3xl" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center">Booking Screen</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Modify, Cancel, Refunds</p>
            </div>

            {/* Payment */}
            <div className="p-7 rounded-xl bg-white shadow-md flex flex-col items-center cursor-pointer">
              <div className="p-4 rounded-full bg-red-100 flex items-center justify-center">
                <MdPayment className="text-red-900 text-2xl" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800 text-lg text-center">Payment & Billing</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Transaction queries & Invoices</p>
            </div>

            {/* Account */}
            <div className="p-7 rounded-xl bg-white shadow-md flex flex-col items-center cursor-pointer">
              <div className="p-4 rounded-full bg-red-100 flex items-center justify-center">
                <MdAccountCircle className="text-red-900 text-2xl" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center">Account & Login Help</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Password, Profile settings</p>
            </div>

            {/* Extras */}
            <div className="p-7 rounded-xl bg-white shadow-md flex flex-col items-center cursor-pointer">
              <div className="p-4 rounded-full bg-red-100 flex items-center justify-center">
                <IoGiftSharp className="text-red-900 text-2xl" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center">Extras & Wishlist</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Offers, Wishlist info</p>
            </div>
          </div>

          {/* FAQ Search */}
          <div className="relative w-full mt-8">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50 text-2xl" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full border border-gray-300 pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none"
            />
          </div>

          {/* FAQ List */}
          <div className="mt-10 space-y-4">
            {faqs.map((q, i) => (
              <div
                key={i}
                onClick={() => toggleFAQ(i)}
                className="border border-gray-300 rounded-lg px-5 py-4 cursor-pointer"
              >
                <div className="flex items-center justify-between text-lg">
                  <span>{q}</span>
                  <span className="text-2xl">
                    {openFAQ === i ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                  </span>
                </div>
                {openFAQ === i && (
                  <p className="mt-3 text-gray-600">
                    This is example text for your FAQ answer. Replace with your content.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="max-w-7xl mx-auto mt-20 px-4">
          <h2 className="text-center text-3xl font-semibold">Contact Support</h2>
          <p className="text-center text-gray-500 mt-1">Get in touch with our support team</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center">
            {/* Chat */}
            <div className="p-7 rounded-xl bg-white shadow-md flex flex-col items-center cursor-pointer">
              <div className="p-4 rounded-full bg-red-100 flex items-center justify-center">
                <HiChatBubbleLeftEllipsis className="text-red-900 text-2xl" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800 text-lg text-center">Chat Support</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Get instant help from our team</p>
              <button className="mt-6 w-full py-3 bg-red-900 text-white rounded-lg">Start Chat</button>
            </div>

            {/* Email */}
            <div className="p-7 rounded-xl bg-white shadow-md flex flex-col items-center cursor-pointer">
              <div className="p-4 rounded-full bg-red-100 flex items-center justify-center">
                <MdEmail className="text-red-900 text-2xl" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800 text-lg text-center">Email Support</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Get instant help from our team</p>
              <p className="mt-3 text-red-700 font-semibold">Support@Hotelbook.Com</p>
              <button className="mt-4 w-full py-3 border border-red-700 text-red-700 rounded-lg">
                Send Email
              </button>
            </div>

            {/* Phone */}
            <div className="p-7 rounded-xl bg-white shadow-md flex flex-col items-center cursor-pointer">
              <div className="p-4 rounded-full bg-red-100 flex items-center justify-center">
                <FaPhoneAlt className="text-red-900 text-2xl" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800 text-lg text-center">Phone Support</h3>
              <p className="text-gray-500 text-sm text-center mt-1">Get instant help from our team</p>
              <p className="mt-3 text-blue-600 font-semibold">24/7 Available</p>
              <button className="mt-4 w-full py-3 border border-red-700 text-red-700 rounded-lg">
                +1(800) 123-4567
              </button>
            </div>
          </div>
        </div>

        {/* Create Support Ticket */}
        <div className="max-w-4xl mx-auto mt-20 px-4">
          <h2 className="text-center text-3xl font-semibold">Create A Customer Support Ticket</h2>
          <p className="text-center text-gray-500 mt-1">
            Can’t find what you're looking for? Submit a detailed request
          </p>
        </div>

        {/* Support Form */}
        <div className="max-w-4xl mx-auto mt-6 px-4">
          <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-2">
              <h3 className="text-2xl font-semibold">Submit Your Request</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Name *</label>
                <input
                  type="text"
                  className="border border-gray-300 mt-1 p-3 rounded-lg w-full"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email *</label>
                <input
                  type="email"
                  className="border border-gray-300 mt-1 p-3 rounded-lg w-full"
                  placeholder="Your Email Example.Com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Booking ID (optional)</label>
                <input
                  type="text"
                  className="border border-gray-300 mt-1 p-3 rounded-lg w-full"
                  placeholder="Booking ID (optional)"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Issue Category *</label>
                <select className="border border-gray-300 mt-1 p-3 rounded-lg w-full" required>
                  <option value="">Select category</option>
                  <option value="booking">Booking</option>
                  <option value="payment">Payment</option>
                  <option value="account">Account</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Description *</label>
              <textarea
                className="border border-gray-300 mt-1 p-3 rounded-lg w-full"
                placeholder="Please describe your issue in detail…"
                rows={6}
                required
              ></textarea>
            </div>

            <div>
              <label className="text-sm text-gray-600">Upload Attachment</label>
              <div className="border border-gray-300 mt-1 p-6 rounded-lg text-center">
                <input type="file" className="hidden" id="uploadFile" />
                <label htmlFor="uploadFile" className="cursor-pointer text-gray-500">
                  <div className="text-3xl">📤</div>
                  <p className="mt-2 text-sm">
                    Please describe your issue in detail…
                    <br />
                    PDF, JPG, PNG, DOCX (MAX 10MB)
                  </p>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-900 text-white rounded-lg"
            >
              Submit Support Ticket
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 py-14 mt-10">
          <div className="max-w-[1600px] w-full mx-auto px-6 grid md:grid-cols-4 gap-10">
            <div>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                />
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
              <p className="text-sm text-g
              ray-600">Bangalore, Karnataka</p>
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
    </>
  );
}
