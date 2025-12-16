import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function VIPBrokerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">VIP Broker Access</h1>
        <p className="text-zinc-300 md:text-lg mb-8">Get exclusive VIP broker benefits, priority withdrawals, and specialized support by joining our VIP Broker program.</p>
        <Link href="/checkout" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 rounded-full border-2 border-yellow-400 shadow-xl transition mb-4">Get VIP Access</Link>
      </main>
      <Footer />
    </div>
  );
}

