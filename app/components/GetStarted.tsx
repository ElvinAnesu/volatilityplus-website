import React from "react";

const paymentOptions = [
  { icon: "💳", label: "Visa" },
  { icon: "💳", label: "MasterCard" },
  { icon: "💳", label: "PayPal" },
  { icon: "💳", label: "Ecocash" },
  { icon: "💳", label: "USDT" },
];

export default function GetStarted() {
  return (
    <section className="bg-black w-full py-20 flex flex-col items-center justify-center border-t border-zinc-800">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white leading-tight">
        Ready to Trade Smarter With <br /><span className="text-yellow-400">Volatility Plus?</span>
      </h2>
      <p className="text-zinc-300 text-base md:text-lg text-center mb-10 max-w-3xl">
        Join thousands of traders who trust Volatility Plus for accurate, high-probability signals
      </p>
      <div className="flex flex-col md:flex-row gap-7 mb-10 justify-center">
        <a className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm md:text-base px-16 py-4 rounded-full shadow-xl transition-all border-2 border-yellow-400 focus:outline-none mb-3 md:mb-0 flex items-center justify-center" href="#vip">
          Get Trading Tools
        </a>
        <a className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-sm md:text-base font-semibold px-16 py-4 rounded-full transition-all bg-black flex items-center justify-center" href="#free">
          Create Free Account
        </a>
      </div>
      <div className="flex items-center justify-center gap-8 mt-6">
        {paymentOptions.map((p, i) => (
          <span key={i} className="flex items-center gap-2 text-zinc-200 text-sm md:text-base">
            <span className="inline-block align-middle text-2xl">{p.icon}</span> {p.label}
          </span>
        ))}
      </div>
    </section>
  );
}
