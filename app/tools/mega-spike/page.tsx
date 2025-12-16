import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function MegaSpikePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">Mega Spike Max System</h1>
        <p className="text-zinc-300 md:text-lg mb-6 max-w-xl">
          Unlock the power of advanced spike detection with our Mega Spike Max trading tool! 
          Enjoy AI-driven precision, real-time Boom and Crash spikes, advanced signal filters, and more for an edge in every trade.
        </p>
        <ul className="text-white text-left list-disc mb-8 mx-auto px-6 max-w-lg space-y-2">
          <li>Accurate spike prediction for Boom & Crash markets</li>
          <li>Live notifications, customizable alerts</li>
          <li>User-friendly dashboard, simple installation</li>
          <li>Pro-level technical support for all users</li>
        </ul>
        <Link href="/checkout" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-4 rounded-full border-2 border-yellow-400 shadow-xl transition">Buy Now</Link>
      </main>
      <Footer />
    </div>
  );
}

