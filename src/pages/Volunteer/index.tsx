import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VolunteerFormCardSection from "./components/VolunteerFormCardSection";

const Volunteer = () => {
  return (
    <div className="h-full w-screen bg-amber-50">
      <Header />
      <VolunteerFormCardSection />
      <Footer />
    </div>
  );
};

export default Volunteer;
