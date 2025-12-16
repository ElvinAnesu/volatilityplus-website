import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function SignalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">Trading Signals</h1>
        <p className="text-zinc-300 md:text-lg mb-8">Get premium, real-time signals to help you maximize your trading results across Boom, Crash, and other volatility indices.</p>

        {/* Signals Stats + Glimpse */}
        <div className="w-full mb-8 flex flex-col gap-8">
          {/* Statistics & Analytics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Win Rate */}
            <div className="rounded-xl bg-gradient-to-br from-yellow-400/30 to-black/90 border border-yellow-400/30 flex flex-col items-center justify-center p-5">
              <span className="text-3xl font-black text-yellow-400">97%</span>
              <span className="uppercase text-zinc-300 text-xs mt-1">Win Rate</span>
            </div>
            {/* Signals Sent */}
            <div className="rounded-xl bg-gradient-to-br from-rose-400/20 to-black/90 border border-rose-400/30 flex flex-col items-center justify-center p-5">
              <span className="text-2xl font-semibold text-rose-400">14,252</span>
              <span className="uppercase text-zinc-300 text-xs mt-1">Signals Sent</span>
            </div>
            {/* Avg. Response Time */}
            <div className="rounded-xl bg-gradient-to-br from-green-400/10 to-black/90 border border-green-400/30 flex flex-col items-center justify-center p-5">
              <span className="text-2xl font-semibold text-green-400">0.8s</span>
              <span className="uppercase text-zinc-300 text-xs mt-1">Avg. Signal Speed</span>
            </div>
            {/* VIP Subscribers */}
            <div className="rounded-xl bg-gradient-to-br from-cyan-400/10 to-black/90 border border-cyan-400/30 flex flex-col items-center justify-center p-5">
              <span className="text-2xl font-semibold text-cyan-300">2,110+</span>
              <span className="uppercase text-zinc-300 text-xs mt-1">VIP Subscribers</span>
            </div>
          </div>

          {/* Signals Glimpse */}
          <div className="bg-black/80 rounded-2xl border border-yellow-400/10 flex flex-col gap-4 p-6 shadow-xl animate-pulse-slow">
            <h2 className="text-yellow-400 font-bold text-lg mb-2 text-left">🔥 Latest Signal Glimpse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { pair: "Boom 1000", type: "Buy", entry: "985.60", tp: "1010.00", sl: "980.00", time: "2 mins ago" },
                { pair: "Crash 500", type: "Sell", entry: "610.25", tp: "590.00", sl: "620.00", time: "5 mins ago" },
                { pair: "Boom 300", type: "Buy", entry: "1505.40", tp: "1540.00", sl: "1490.00", time: "7 mins ago" },
                { pair: "Crash 1000", type: "Buy", entry: "2044.20", tp: "2077.00", sl: "2035.00", time: "11 mins ago" },
                { pair: "Volatility 75", type: "Sell", entry: "3921.50", tp: "3899.00", sl: "3932.00", time: "15 mins ago" },
                { pair: "Crash 300", type: "Buy", entry: "1020.15", tp: "1046.00", sl: "1014.00", time: "17 mins ago" },
                { pair: "Boom 500", type: "Sell", entry: "811.30", tp: "790.00", sl: "818.50", time: "18 mins ago" },
                { pair: "Volatility 100", type: "Buy", entry: "3055.00", tp: "3093.00", sl: "3030.00", time: "20 mins ago" },
                { pair: "Crash 1000", type: "Sell", entry: "2028.00", tp: "1992.00", sl: "2041.00", time: "23 mins ago" },
                { pair: "Boom 1000", type: "Buy", entry: "970.50", tp: "990.80", sl: "963.00", time: "29 mins ago" }
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1 p-4 bg-gradient-to-br from-yellow-500/5 to-zinc-900 rounded-lg border border-yellow-400/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-md">{s.pair}</span>
                    <span className={`font-semibold ${s.type === 'Buy' ? 'text-green-400' : 'text-rose-400'}`}>{s.type}</span>
                  </div>
                  <div className="text-zinc-300 text-xs mb-0.5">Entry: <span className="font-mono">{s.entry}</span></div>
                  <div className="text-zinc-300 text-xs">TP: <span className="font-mono text-yellow-300">{s.tp}</span> | SL: <span className="font-mono text-rose-300">{s.sl}</span></div>
                  <div className="text-zinc-500 text-xs mt-1 italic">{s.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="/checkout" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 rounded-full border-2 border-yellow-400 shadow-xl transition mb-4">Subscribe</Link>
      </main>
      <Footer />
    </div>
  );
}

