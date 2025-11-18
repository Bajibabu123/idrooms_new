import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image 
            src={logo} 
            alt="IDrooms Logo" 
            width={40} 
            height={40} 
            className="rounded"
          />
          <span className="text-xl font-bold text-red-900">IDrooms</span>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6 text-gray-700">
          <a href="#" className="hover:text-red-700">Explore</a>
          <a href="#" className="hover:text-red-700">Offers</a>
          <a href="#" className="hover:text-red-700">Help</a>

          <button className="px-4 py-1 border rounded hover:bg-gray-100">Login</button>
          <button className="px-4 py-1 rounded bg-red-700 text-white hover:bg-red-800">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}
