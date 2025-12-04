import Image from "next/image";
import logo from "@/public/logo.png"; // your logo

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-12 pb-6 px-16">

      <div className="grid grid-cols-4 gap-12">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src={logo} alt="IDrooms" width={104} height={40} />
            {/* <h2 className="text-2xl font-bold text-red-800">IDrooms</h2> */}
          </div>
          <p className="text-gray-600 text-sm">
            Your trusted partner for premium hotel<br />bookings worldwide.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Partnerships</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Cancellation Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Email: support@idrooms.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Bangalore, Karnataka</li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-12 pt-4 flex items-center justify-between text-gray-500 text-sm">
        <p>© 2024 IDrooms. All rights reserved.</p>

        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
