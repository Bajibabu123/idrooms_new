import Image from "next/image";

import mumbai from "@/public/mumbai.png";
import bangalore from "@/public/bangalore.png";
import goa from "@/public/goa.png";

const destinations = [
  {
    name: "Mumbai",
    properties: 234,
    img: mumbai,
  },
  {
    name: "Bangalore",
    properties: 189,
    img: bangalore,
  },
  {
    name: "Goa",
    properties: 156,
    img: goa,
  },
];

export default function PopularDestinations() {
  return (
    <div className="px-16 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">
        Popular Destinations
      </h2>
      <p className="text-center opacity-70 mb-10">
        Find stays in top cities loved by travelers
      </p>

      {/* Center 3 cards + adjust width */}
      <div className="grid grid-cols-3 gap-8 place-items-center">
        {destinations.map((d, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 w-150 h-80 m"
          >
            {/* Make images taller */}
            <Image
              src={d.img}
              alt={d.name}
              width={300}
              height={300}
              className="w-full h-100 object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent "></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{d.name}</h3>
              <p className="text-sm opacity-90">{d.properties} Properties</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
