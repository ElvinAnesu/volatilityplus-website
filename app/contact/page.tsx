import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen font-sans">
      <Navbar />
      <section className="max-w-4xl mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Contact Us</h2>
        <p className="text-zinc-200 text-lg mb-10 max-w-2xl">Questions? Partnership inquiries? VIP support? Reach out and we&apos;ll get back to you.</p>
        <form className="w-full max-w-2xl flex flex-col gap-5 glassy rounded-3xl px-6 md:px-10 py-8 shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 text-left">
          <input type="text" placeholder="Your Name" className="bg-transparent border border-yellow-400/70 rounded-lg px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/80 transition-all duration-300" />
          <input type="email" placeholder="Your Email" className="bg-transparent border border-yellow-400/70 rounded-lg px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/80 transition-all duration-300" />
          <textarea placeholder="Your Message" rows={5} className="bg-transparent border border-yellow-400/70 rounded-lg px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/80 transition-all duration-300"></textarea>
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow border-2 border-yellow-400 transition-transform duration-300 hover:scale-105">Send Message</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
