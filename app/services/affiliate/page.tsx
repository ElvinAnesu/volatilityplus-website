import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">Affiliate Program</h1>
        <p className="text-zinc-300 md:text-lg mb-8">Earn commissions by referring traders to Volatility Plus. Sign up and start earning today!</p>
        <Link href="/login" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 rounded-full border-2 border-yellow-400 shadow-xl transition mb-4">Login</Link>
        <div className="bg-zinc-900/70 rounded-xl p-6 text-left w-full shadow-xl">
          <h2 className="font-bold text-white mb-2">How It Works</h2>
          <ul className="list-disc px-4 text-zinc-200 space-y-2 text-left">
            <li>Share your unique referral link</li>
            <li>Earn commission on each signup and transaction</li>
            <li>Track your earnings in your affiliate dashboard</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

