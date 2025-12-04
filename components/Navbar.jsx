"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineLogout,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(true);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    const accountCreated = localStorage.getItem("accountCreated") === "true";

    if (auth) {
      setIsLoggedIn(true);
      setShowSignup(false);
    } else if (accountCreated) {
      setIsLoggedIn(false);
      setShowSignup(false);
    } else {
      setIsLoggedIn(false);
      setShowSignup(true);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.setItem("auth", "false");
    localStorage.removeItem("accountCreated");
    setIsLoggedIn(false);
    setShowSignup(true);
    setOpen(false);
    setActiveDropdown("");
  };

  const hideNavbar =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/resetpassword";

  const handleDropdownClick = (route) => {
    setActiveDropdown(route);
    setOpen(false);
    router.push(route);
  };

  return (
    <>
      {!hideNavbar && (
        <>
          <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-[1000]">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 ml-17">
              
              {/* LOGO reduced size */}
              <Link href="/" className="flex items-center gap-2 cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="ID Rooms Logo"
                  width={120}   // reduced from 150
                  height={120}
                  className="object-contain"
                />
              </Link>

              {/* NAV LINKS - only font-size reduced */}
              <div className="flex items-center gap-10 text-gray-700 text-[17px] font-medium mr-[-525px]">
                <Link href="/explore">Explore</Link>
                <Link href="/offers">Offers</Link>
                <Link href="/help">Help</Link>

                {!isLoggedIn && (
                  <>
                    <Link
                      href="/login"
                      className="px-3 py-1 border rounded-lg hover:bg-red-100 transition w-20 text-[14px]"
                    >
                      Login
                    </Link>

                    {showSignup && (
                      <Link
                        href="/signup"
                        className="px-3 py-1 rounded-lg bg-red-700 text-white hover:bg-red-800 transition text-[14px]"
                      >
                        Signup
                      </Link>
                    )}
                  </>
                )}

                {isLoggedIn && (
                  <div className="relative">
                    <button
                      ref={buttonRef}
                      onClick={() => setOpen(!open)}
                      className="flex items-center border px-3 py-1 rounded-full gap-3 shadow hover:bg-red-100 transition text-[14px]"
                    >
                      <Image
                        src="/profile.png"
                        width={28}   // reduced
                        height={28}
                        alt="Profile"
                        className="rounded-full object-cover"
                      />
                      <span>My Account</span>
                      <span>▾</span>
                    </button>

                    {open && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border p-5 z-50"
                      >
                        <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-200">
                          <Image
                            src="/profile.png"
                            width={50}
                            height={50}
                            alt="User"
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h2 className="font-semibold text-lg text-gray-700">
                              Musharof Chowdhury
                            </h2>
                            <p className="text-gray-500 text-sm">
                              randommuse@primjo.com
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-3 text-gray-600 text-[15px]">
                          <li
                            onClick={() => handleDropdownClick("/profile")}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
                              activeDropdown === "/profile"
                                ? "bg-red-200 font-semibold"
                                : ""
                            }`}
                          >
                            <AiOutlineUser size={18} /> My Profile
                          </li>

                          <li
                            onClick={() => handleDropdownClick("/my-bookings")}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
                              activeDropdown === "/my-bookings"
                                ? "bg-red-200 font-semibold"
                                : ""
                            }`}
                          >
                            <FaRegListAlt size={18} /> My Bookings
                          </li>

                          <li
                            onClick={() => handleDropdownClick("/mywishlist")}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
                              activeDropdown === "/mywishlist"
                                ? "bg-red-200 font-semibold"
                                : ""
                            }`}
                          >
                            <AiOutlineHeart size={18} /> My Wishlist
                          </li>

                          <li
                            onClick={() => handleDropdownClick("/help")}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
                              activeDropdown === "/help"
                                ? "bg-red-200 font-semibold"
                                : ""
                            }`}
                          >
                            <AiOutlineQuestionCircle size={18} /> Help & Support
                          </li>

                          <hr className="border-gray-300 my-3" />

                          <li
                            onClick={logout}
                            className="flex items-center gap-3 px-3 py-2 cursor-pointer text-gray-700 hover:bg-gray-200 rounded-lg"
                          >
                            <AiOutlineLogout size={18} /> Logout
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* spacing reduced */}
          <div className="h-16"></div>
        </>
      )}
    </>
  );
}
