"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    const newErrors = { email: "", password: "" };
    let hasError = false;

    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
      hasError = true;
    }

    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    if (email !== storedEmail || password !== storedPassword) {
      setErrors({
        email: "Incorrect email or password",
        password: "Incorrect email or password",
      });
      return;
    }

    localStorage.setItem("auth", "true");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-[-80]">
      <div className="w-full flex justify-between items-center px-10 py-6">
        <Image src={logo} alt="IDrooms Logo" width={200} height={300} />
        <p className="text-gray-600 hover:text-red-700 cursor-pointer">Need Help?</p>
      </div>

      <div className="flex flex-1 justify-center items-center mt-[-400]">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[520px]">
          <h2 className="text-center text-xl font-semibold">Welcome Back</h2>
          <p className="text-center text-gray-600 mb-6">Login to your IDrooms Account</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Enter your email"
             className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-100
  ${errors.email ? "border-red-500" : "border-gray-300"}`}

              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((p) => ({ ...p, email: "" }));
              }}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-100
  ${errors.email ? "border-red-500" : "border-gray-300"}`}

                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((p) => ({ ...p, password: "" }));
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Remember Me
              </label>
              <p
                className="text-red-700 cursor-pointer"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold hover:bg-red-800"
            >
              Login
            </button>

            <div className="flex items-center gap-3">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-500">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button
              type="button"
              onClick={() => (window.location.href = "https://accounts.google.com/signin")}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-100"

            >
              <FaGoogle /> Continue with Google
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <span
              className="text-red-700 font-semibold cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Signup
            </span>
          </p>
        </div>
      </div>

      <footer className="bg-red-900 text-white text-center py-4">© 2025 IDrooms</footer>
    </div>
  );
}
