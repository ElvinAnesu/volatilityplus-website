import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    name: "Boom & Crash Signals",
    desc: "Get real-time, 80% accurate Boom & Crash buy/sell signals. Fixed tight stop loss and expert guidance included.",
  },
  {
    name: "Spike Detectors",
    desc: "Industry leading spike detection tools for Boom, Crash, PainX, GainX. M5 prediction, audio/visual alerts.",
  },
  {
    name: "VIP Broker Access",
    desc: "Deriv and Weltrade VIP perks: exclusive groups, priority support, low spreads, massive deposit bonuses.",
  },
  {
    name: "Affiliate Services",
    desc: "Earn commissions referring traders. Partner with the leading synthetic indices niche provider.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen font-sans">
      <Navbar />
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-7 text-white text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((svc, i) => (
            <div key={i} className="rounded-2xl border border-yellow-400 glassy bg-black/80 p-8 flex flex-col shadow-xl">
              <h3 className="text-yellow-400 text-xl md:text-2xl font-bold mb-2">{svc.name}</h3>
              <div className="text-base md:text-lg text-zinc-200 mb-2">{svc.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
