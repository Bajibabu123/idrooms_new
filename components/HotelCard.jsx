import Image from "next/image";
import { FaWifi, FaHeart, FaStar, FaUtensils, FaCar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function HotelCard({ hotel }) {
  return (
    <div className="shadow rounded-xl p-4 hover:shadow-lg transition-all duration-300 flex flex-col">

      {/* Image With Heart Icon */}
      <div className="relative w-full h-48 overflow-hidden rounded-xl">
        <Image
          src={hotel.img}
          alt={hotel.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />

        {/* Heart Favorite Button */}
        <button className="absolute top-3 left-3 bg-white text-red-900 p-2 rounded-full shadow hover:scale-110 transition">
  <FaHeart size={16} />
</button>

      </div>

      {/* Details */}
      <div className="mt-4 flex flex-col flex-grow">

        {/* Hotel Name */}
        <h3 className="font-semibold text-lg">{hotel.name}</h3>

        {/* Location */}
        <p className="text-sm text-gray-600 flex items-center gap-1">
  <FaMapMarkerAlt size={14} /> {hotel.location}
</p>
        {/* Amenities Row */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
          <span className="flex items-center gap-1"><FaWifi size={14} /> Wifi</span>
          <span className="flex items-center gap-1"><FaUtensils size={14} /> Breakfast</span>
          <span className="flex items-center gap-1"><FaCar size={14} /> Parking</span>
        </div>

        {/* Price */}
        <p className="text-gray-500 text-sm mt-4">Starting from</p>

        <p className="text-red-900 font-bold text-2xl">
          ₹{hotel.price}
          <span className="text-sm font-normal text-black ml-1">per night</span>
        </p>

        {/* Rating Badge */}
        <div className="mt-2 flex items-center gap-2">
          <span className="bg-red-900 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <FaStar size={12} /> {hotel.rating}
          </span>

          <span className="text-gray-600 text-sm">
            {hotel.reviews} reviews
          </span>
        </div>

        {/* Button at Bottom */}
        <div className="mt-auto">
          <button className="mt-4 w-full py-2 rounded-lg border border-red-700 text-white font-semibold bg-red-900
            hover:bg-red-800 hover:text-white transition-all duration-300 shadow-sm">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}
