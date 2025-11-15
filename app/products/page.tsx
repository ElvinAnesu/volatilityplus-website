import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    name: "Spike Phantom V3.0",
    desc: "Advanced spike detection for Boom, Crash, PainX, and GainX markets.",
    price: "$50",
    cta: "Buy Now",
  },
  {
    name: "Mega Spikes Max Detector",
    desc: "Cutting-edge real-time spike prediction for professionals.",
    price: "$75",
    cta: "Buy Now",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen font-sans">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-7 text-white text-center">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((prod, i) => (
            <div key={i} className="border border-yellow-400 glassy bg-black/80 rounded-2xl p-8 flex flex-col items-center shadow-xl">
              <div className="text-yellow-400 text-3xl font-bold mb-2">{prod.name}</div>
              <div className="text-lg text-white/80 mb-5 text-center">{prod.desc}</div>
              <div className="text-yellow-400 text-2xl font-bold mb-3">{prod.price}</div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-2 rounded-full shadow border-2 border-yellow-400 transition-colors">{prod.cta}</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
