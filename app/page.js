import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import PromoBanner from "@/components/PromoBanner";
import FeaturedHotels from "@/components/FeaturedHotels";
import PopularDestinations from "@/components/PopularDestinations";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSearch />

      {/* Statistics Section */}
      <div className="bg-red-900 text-white py-10">
        <div className="grid grid-cols-4 text-center w-3/4 mx-auto">
          <div>
            <p className="text-3xl font-bold">10,000 +</p>
            <p>Properties</p>
          </div>
          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p>Support</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50 +</p>
            <p>Cities</p>
          </div>
          <div>
            <p className="text-3xl font-bold">4.8 ★</p>
            <p>Avg Rating</p>
          </div>
        </div>
      </div>
      <PromoBanner />

      {/* Featured Hotels */}
      <FeaturedHotels />
      <PopularDestinations />
    </>
  );
}
