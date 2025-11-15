import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const brokers = [
  {
    name: "Deriv",
    desc: "4.8/5 - Best for Volatility Indices. VIP BOOM CRASH EXCLUSIVE: Free access for Boom & Crash indices, 4+ daily signals, lowest spreads, direct VIP support, and Telegram group.",
    benefits: [
      "FREE ACCESS for Boom & Crash indices trading",
      "4+ Daily Boom Crash Signals - Premium access",
      "Lowest Spreads on Boom & Crash",
      "VIP Boom Crash Support - Direct Telegram line",
      "Fixed Tight Stop Loss",
      "Exclusive Telegram Group for Boom Crash traders",
      "Perfect for: Boom 500, Crash 500, Boom 900, synthetic markets",
    ],
    cta: "Open Deriv Account",
  },
  {
    name: "Weltrade",
    desc: "4.7/5 - Best for PainX & GainX. VIP PAINX & GAINX EXCLUSIVE: 100% first deposit bonus, real-time alerts, advanced MT5 spike tools, VIP support, and exclusive group.",
    benefits: [
      "FIRST DEPOSIT up to 100%",
      "Real-time PainX GainX Alerts via MT5/Telegram",
      "Advanced MT5 Tools for Spike trading",
      "VIP PAIN & GAIN Support - Direct Telegram line",
      "Fixed Tight Stop Loss",
      "Exclusive Telegram Group for Pain & Gain",
      "Perfect for: PainX 800, GainX 400, PainX 1200, synthetic markets",
    ],
    cta: "Open Weltrade Account",
  },
];

export default function VIPBrokerPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen font-sans">
      <Navbar />
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-7 text-white text-center">Exclusive VIP Broker Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {brokers.map((b, i) => (
            <div key={i} className="bg-black/80 rounded-2xl border border-yellow-400 glassy p-8 flex flex-col shadow-xl">
              <div className="text-yellow-400 text-2xl font-bold mb-2">{b.name} VIP</div>
              <div className="text-lg text-white/80 mb-2">{b.desc}</div>
              <ul className="text-zinc-200 text-base md:text-lg list-disc list-inside mb-4">
                {b.benefits.map((benefit, j) => <li key={j}>{benefit}</li>)}
              </ul>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full shadow border-2 border-yellow-400 transition-colors">{b.cta}</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
