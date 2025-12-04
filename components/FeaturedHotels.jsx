import HotelCard from "./HotelCard";

import hotel1 from "@/public/hotel1.png";
import hotel2 from "@/public/hotel2.png";
import hotel3 from "@/public/hotel3.png";
import hotel4 from "@/public/hotel4.png";

const hotels = [
  {
    name: "The Grand Palace Hotel",
    price: "2499",
    location: "Bengaluru, Karnataka",
    rating: "4.9",
    reviews: "1243",
    img: hotel1,
    amenities: ["Wifi", "Breakfast", "Parking"],
  },
  {
    name: "Mountain View Retreat",
    price: "3499",
    location: "Bengaluru, Karnataka",
    rating: "4.8",
    reviews: "1143",
    img: hotel2,
    amenities: ["Wifi", "Breakfast", "Parking"],
  },
  {
    name: "Coastal Paradise Resort",
    price: "3999",
    location: "Goa, India",
    rating: "4.7",
    reviews: "987",
    img: hotel3,
    amenities: ["Wifi", "Breakfast", "Parking"],
  },
  {
    name: "Urban Comfort Inn",
    price: "1999",
    location: "Bengaluru, Karnataka",
    rating: "4.6",
    reviews: "743",
    img: hotel4,
    amenities: ["Wifi", "Breakfast", "Parking"],
  },
];

export default function FeaturedHotels() {
  return (
    <div className="px-16 py-16">

      {/* Header + Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h2 className="text-3xl font-bold">Featured Hotels</h2>
        <button className="text-red-900 font-semibold border border-gray-300 px-4 py-1 rounded  mt-2 md:mt-0">
          View All
        </button>
      </div>

      {/* Subtext */}
      <p className="opacity-70 mb-6">Handpicked properties just for you</p>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>

    </div>
  );
}
