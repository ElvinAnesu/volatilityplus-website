import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SpikeDetectorPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen font-sans">
      <Navbar />
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 text-center">Spike Phantom Detector V3.0</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="bg-black/90 rounded-2xl border border-yellow-400 p-8 glassy flex flex-col justify-center shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">What is Spike Detector?</h3>
            <p className="text-zinc-300 md:text-lg mb-4">A proprietary indicator designed to predict spikes in Boom, Crash, PainX, and GainX indices before they happen. Get real-time alerts and maximize your profits.</p>
            <ul className="text-zinc-200 text-base md:text-lg list-disc list-inside">
              <li>Real-time Boom Crash spike prediction</li>
              <li>Advanced volatility pattern recognition</li>
              <li>M5 timeframe spike detection</li>
              <li>Visual and audio spike alerts</li>
            </ul>
          </div>
          <div className="bg-zinc-900/90 rounded-2xl border border-yellow-400 p-8 glassy flex flex-col items-center shadow-xl justify-center">
            <div className="text-yellow-400 text-4xl font-bold mb-3">$50</div>
            <div className="text-white text-lg mb-3">Unlock lifetime access to Spike Detector V3.0 and maximize your advantage today.</div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 rounded-full shadow border-2 border-yellow-400 transition-colors">Buy Now</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
