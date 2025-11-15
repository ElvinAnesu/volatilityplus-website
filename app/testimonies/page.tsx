import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const testimonies = [
  {
    name: "A. M.",
    quote: "Amazing spike detector! My trading improved instantly. 10/10!",
    rating: 5,
  },
  {
    name: "L. T.",
    quote: "Signals are super accurate, I made my subscription back in one week!",
    rating: 5,
  },
  {
    name: "Kwame B.",
    quote: "VIP Broker offers and 1-on-1 support changed my trading forever.",
    rating: 4,
  },
  {
    name: "Maria S.",
    quote: "Consistent results, fast signals, great support. Highly recommended!",
    rating: 5,
  },
];

export default function TestimoniesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Our Traders Say</h2>
        <p className="text-zinc-300 text-base md:text-lg max-w-2xl mx-auto mb-12">Join thousands of traders who&apos;ve found success with Volatility Plus Boom Crash signals and spike detection tools!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
          {testimonies.map((t, i) => (
            <div key={i} className="rounded-2xl bg-black/80 border border-yellow-400/10 glassy px-8 py-7 flex flex-col items-center shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-400 text-black font-bold w-12 h-12 flex items-center justify-center rounded-full text-lg">{t.name}</span>
                <span className="text-white text-xl font-bold tracking-tight">Trader</span>
              </div>
              <p className="text-lg text-zinc-300 mb-4 font-normal italic">"{t.quote}"</p>
              <span className="text-yellow-400 text-2xl mb-2">
                {"★".repeat(t.rating)}{t.rating < 5 ? <span className="text-zinc-700">{"★".repeat(5 - t.rating)}</span> : null}
              </span>
            </div>
          ))}
        </div>
        <a href="#vip" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-4 rounded-full shadow-xl border-2 border-yellow-400 transition-colors">Join VIP Now</a>
      </section>
      <Footer />
    </div>
  );
}
