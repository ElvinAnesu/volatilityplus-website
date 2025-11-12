import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs";
import PricingPlans from "./components/PricingPlans";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <PricingPlans />
      <GetStarted />
      <Footer />
    </div>
  );
}
