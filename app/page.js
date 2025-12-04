import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import PromoBanner from "@/components/PromoBanner";
import FeaturedHotels from "@/components/FeaturedHotels";
import PopularDestinations from "@/components/PopularDestinations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LimitedTimeOffers from "@/components/LimitedTimeOffers";



export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSearch />


      <PromoBanner />
      <FeaturedHotels />
      <PopularDestinations />
        <LimitedTimeOffers />
      <CTASection />
      <Footer />
    </>
  );
}
