import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AffiliatePage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen font-sans">
      <Navbar />
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Partner With the Leading Boom & Gain Signal Provider</h2>
        <p className="text-zinc-200 text-base md:text-lg mb-8">Earn generous commissions by referring traders to our premium Boom Crash signals and Spike Detector indices tools. Serious partners needed for the synthetic markets niche.</p>
        <ul className="flex flex-col gap-3 mb-10 text-zinc-300 text-base md:text-lg text-left mx-auto max-w-md">
          <li>• High commission rates</li>
          <li>• Dedicated affiliate manager</li>
          <li>• Monthly performance bonuses</li>
          <li>• Long-term partnership opportunities</li>
        </ul>
        <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 rounded-full shadow-xl border-2 border-yellow-400 transition-colors">Apply as Affiliate</a>
      </section>
      <Footer />
    </div>
  );
}
