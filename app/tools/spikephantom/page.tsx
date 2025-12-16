import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function SpikePhantomPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">Spike Phantom Detector</h1>
        <p className="text-zinc-300 md:text-lg mb-6 max-w-xl">
          Trade smarter with the Spike Phantom Detector! Catch spikes before they move the market, enjoy early entry signals, and enhanced Boom/Crash analytics with our easy-to-use tool trusted by pro traders.
        </p>
        <ul className="text-white text-left list-disc mb-8 mx-auto px-6 max-w-lg space-y-2">
          <li>Early spike detection on Boom & Crash pairs</li>
          <li>Simple yet powerful analytics dashboard</li>
          <li>Email, in-app & Telegram notifications</li>
          <li>Supported by our expert team</li>
        </ul>
        <Link href="/checkout" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-4 rounded-full border-2 border-yellow-400 shadow-xl transition">Buy Now</Link>
      </main>
      <Footer />
    </div>
  );
}

