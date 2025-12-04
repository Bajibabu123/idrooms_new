import Image from "next/image";

export default function LimitedTimeOffers() {
  return (
    <section className="py-16 px-16">
      <h2 className="text-3xl font-bold text-center mb-10">Limited Time Offers</h2>

      <div className="flex justify-center gap-8 mt-10">

  <div className="relative rounded-xl overflow-hidden shadow-lg group h-80 w-1/3">
    <Image
      src="/offer1.png"
      alt="Weekend Getaway"
      fill
      className="object-cover transition-transform group-hover:scale-105"
    />

    <span className="absolute top-4 right-4 bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full shadow rounded hover:bg-red-900">
      Limited Offer
    </span>

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-6 flex flex-col justify-end">
      <h3 className="text-xl font-semibold text-white mb-1">
        Weekend Getaway special
      </h3>
      <p className="text-white/80 text-sm mb-3">
        Up to 40% off on weekend bookings
      </p>

      <button className="px-4 py-1.5 bg-white text-primary border border-primary rounded-md text-sm font-medium shadow-sm hover:bg-white/90 w-fit">
      Book Now
    </button>
    </div>
  </div>


  <div className="relative rounded-xl overflow-hidden shadow-lg group h-80 w-1/3">
    <Image
      src="/offer2.png"
      alt="Book Early Save More"
      fill
      className="object-cover transition-transform group-hover:scale-105"
    />

    <span className="absolute top-4 right-4 bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full shadow  hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer">
      Early Bird
    </span>

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-6 flex flex-col justify-end">
      <h3 className="text-xl font-semibold text-white mb-1">
        Book Early, Save More
      </h3>
      <p className="text-white/80 text-sm mb-3">
        Get 30% off when you book 30 days in advance
      </p>

      <button className="px-4 py-1.5 bg-white text-primary border border-primary rounded-md text-sm font-medium shadow-sm hover:bg-white/90 w-fit">
      Book Now
    </button>
    </div>
  </div>

</div>

    </section>
  );
}
