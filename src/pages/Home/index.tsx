import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "./components/Hero";
import AdoptionSection from "./components/AdoptionSection";
import DonationSection from "./components/DonationSection";
import VolunteerSection from "./components/VolunteerSection";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-amber-50">
      <Header />
      <Hero />
      <AdoptionSection />
      <DonationSection />
      <VolunteerSection />
      <Footer />
    </div>
  );
};

export default Home;
