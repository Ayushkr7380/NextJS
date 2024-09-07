import FeaturedCard from "@/components/FeaturedCard";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MovingCards from '@/components/MovingCards';
import UpcomingWebinar from "@/components/UpcomingWebinar";
import  Instructors  from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <main className="min-h-screen text-white bg-black/[0.96] antialiased  ">
            <HeroSection/>
            <FeaturedCard/>
            <WhyChooseUs/>
            <MovingCards/>
            <UpcomingWebinar/>
            <Instructors/>
            <Footer/>
        </main>
    </>
  );
}
