"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/logo.png";
import Snackbar from "@/components/Snackbar";

export default function ResetPasswordPage() {
  const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({ newPassword: "", confirmPassword: "" });
  const [snack, setSnack] = useState({ show: false, message: "", type: "error" });

  const showSnackbar = (message, type = "error") => {
    setSnack({ show: true, message, type });
    setTimeout(() => setSnack((prev) => ({ ...prev, show: false })), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  const handleReset = () => {
    const newErrors = { newPassword: "", confirmPassword: "" };
    let hasError = false;

    if (!form.newPassword) {
      newErrors.newPassword = "New password is required";
      hasError = true;
    } else if (!validatePassword(form.newPassword)) {
      newErrors.newPassword =
        "Password must be 8+ chars, include uppercase, lowercase, number, special char";
      hasError = true;
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      hasError = true;
    } else if (form.newPassword !== form.confirmPassword) {
      newErrors.newPassword = "Passwords do not match";
      newErrors.confirmPassword = "Passwords do not match";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    localStorage.setItem("userPassword", form.newPassword);
    showSnackbar("Password reset successful!", "success");

    setTimeout(() => (window.location.href = "/login"), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  mt-[-80px]">
      <div className="w-full flex justify-between items-center px-10 py-6">
        <Image src={logo} alt="IDrooms Logo" width={200} height={300} />
        <p className="text-gray-600 hover:text-red-700 cursor-pointer">Need Help?</p>
      </div>

      <div className="flex flex-1 justify-center items-center mt-[-100px]">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[520px]">
          <h2 className="text-center text-xl font-semibold">Set New Password</h2>
          <p className="text-center text-gray-600 mb-6">
            New Password must be different from your previous passwords
          </p>

          <label className="block mb-1 text-sm">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
              placeholder="Enter your new password"
              className={`w-full border rounded-lg px-4 py-3 mb-1 outline-none focus:ring-2 focus:ring-red-900 ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.newPassword && <p className="text-red-600 text-sm mb-2">{errors.newPassword}</p>}

          <label className="block mb-1 text-sm">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your new password"
              className={`w-full border rounded-lg px-4 py-3 mb-1 outline-none focus:ring-2 focus:ring-red-900 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleChange}
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.confirmPassword && <p className="text-red-600 text-sm mb-2">{errors.confirmPassword}</p>}

          <button
            onClick={handleReset}
            className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold mt-5 hover:bg-red-800"
          >
            Reset
          </button>
        </div>
      </div>

      <footer className="bg-red-900 text-white text-center py-4 mt-10 w-full">
        © 2025 IDrooms. All rights reserved
      </footer>

      <Snackbar message={snack.message} show={snack.show} type={snack.type} />
    </div>
  );
}
