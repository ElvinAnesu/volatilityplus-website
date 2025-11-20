import React from "react";

export default function Banner() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 w-full text-center select-none">
      {/* Tag/button above the title */}
      <div className="inline-flex items-center mb-6">
        <span className="bg-yellow-400/20 bg-opacity-20 border border-yellow-500 text-yellow-400 rounded-full px-5 py-2 font-semibold text-base shadow-sm">
          ⚡ Premium Trading Signals
        </span>
      </div>
      {/* Main title */}
      
      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
        Best <span className="text-yellow-400">Boom & Crash</span> Signals-
        <br className="hidden md:block" /> <span className="text-yellow-400">PainX GainX</span> Alerts
      </h1>
      {/* Subtitle/description */}
      <p className="max-w-2xl text-sm md:text-base text-zinc-200/90 leading-relaxed mb-10">
        Get 80% accurate Boom & Crash trading signals, PainX & GainX spike alerts, 
        and professional Volatility indices detectors. Join 7,000+ VIP
        traders earning consistent profits with our exclusive Deriv and WelTrade Signals
      </p>
      {/* Call-to-action buttons */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <a
          href="#vip"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-9 py-2 rounded-full text-lg shadow transition-colors mb-2 md:mb-0 border-2 border-yellow-400"
        >
          Get VIP Signals
        </a>
        <a
          href="#free"
          className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors px-9 py-2 rounded-full text-lg font-semibold bg-transparent"
        >
          Get Free Signals
        </a>
      </div>
    </section>
  );
}
