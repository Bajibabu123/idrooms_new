"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agree: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
  };

  const handleSignup = () => {
    const newErrors = { name: "", email: "", mobile: "", password: "", confirmPassword: "", agree: "" };
    let hasError = false;

    if (!form.name) {
      newErrors.name = "Name is required";
      hasError = true;
    }

    if (!form.email) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
      hasError = true;
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
      hasError = true;
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
      hasError = true;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      hasError = true;
    } else if (!validatePassword(form.password)) {
      newErrors.password = "Password must be 8+ chars, include uppercase, lowercase, number, special char";
      hasError = true;
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      hasError = true;
    } else if (form.password !== form.confirmPassword) {
      newErrors.password = "Passwords do not match";
      newErrors.confirmPassword = "Passwords do not match";
      hasError = true;
    }

    if (!form.agree) {
      newErrors.agree = "You must agree to Terms & Conditions";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    localStorage.setItem("userEmail", form.email);
    localStorage.setItem("userPassword", form.password);
    localStorage.setItem("accountCreated", "true");
    localStorage.setItem("auth", "true");

    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-[-80]">
      <div className="w-full flex justify-between items-center px-10 py-6">
        <Image src={logo} alt="IDrooms Logo" width={200} height={300} />
        <p className="text-gray-600 hover:text-red-700 cursor-pointer">Need Help?</p>
      </div>

      <div className="flex flex-1 justify-center items-center mt-[-250]">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[520px]">
          <h2 className="text-center text-xl font-semibold">Create Account</h2>
          <p className="text-center text-gray-600 mb-6">Join IDrooms and start booking your stays</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 ${
                errors.name ? "border-red-100" : "border-gray-300"
              }`}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 ${
                errors.email ? "border-red-100" : "border-gray-300"
              }`}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

            <input
              type="text"
              name="mobile"
              placeholder="Enter your mobile number"
              className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 ${
                errors.mobile ? "border-red-100" : "border-gray-300"
              }`}
              onChange={handleChange}
            />
            {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter new password"
                className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 ${
                  errors.password ? "border-red-100" : "border-gray-300"
                }`}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 cursor-pointer text-gray-500">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm new password"
                className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 ${
                  errors.confirmPassword ? "border-red-100" : "border-gray-300"
                }`}
                onChange={handleChange}
              />
              <span onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-3 cursor-pointer text-gray-500">
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}

            <label className={`flex items-center gap-2 text-sm ${errors.agree ? "text-red-700" : "text-gray-700"}`}>
              <input type="checkbox" name="agree" onChange={handleChange} className="w-4 h-4 focus:ring-red-900" />
              I agree to the <span className="text-red-700">Terms & Conditions</span>
            </label>
            {errors.agree && <p className="text-red-600 text-sm">{errors.agree}</p>}

            <button type="button" onClick={handleSignup} className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold hover:bg-red-800">
              Create Account
            </button>

            <div className="flex items-center gap-3">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-500">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg focus:ring-2 focus:ring-red-100"
            >
              <FaGoogle /> Continue with Google
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <span className="text-red-700 font-semibold cursor-pointer" onClick={() => router.push("/login")}>
              Login
            </span>
          </p>
        </div>
      </div>

      <footer className="bg-red-900 text-white text-center py-4">© 2025 IDrooms. All rights reserved</footer>
    </div>
  );
}
