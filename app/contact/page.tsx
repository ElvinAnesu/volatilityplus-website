import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 min-h-screen font-sans">
      <Navbar />
      <section className="max-w-4xl mx-auto py-20 px-4 flex flex-col md:flex-row gap-14 items-start">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Contact Us</h2>
          <p className="text-zinc-200 text-lg mb-8">Questions? Partnership inquiries? VIP support? Reach out and we&apos;ll get back to you.</p>
          <form className="flex flex-col gap-5">
            <input type="text" placeholder="Your Name" className="bg-transparent border-2 border-yellow-400 rounded-lg px-5 py-3 text-white placeholder-zinc-400" />
            <input type="email" placeholder="Your Email" className="bg-transparent border-2 border-yellow-400 rounded-lg px-5 py-3 text-white placeholder-zinc-400" />
            <textarea placeholder="Your Message" rows={5} className="bg-transparent border-2 border-yellow-400 rounded-lg px-5 py-3 text-white placeholder-zinc-400"></textarea>
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow border-2 border-yellow-400 transition-colors">Send Message</button>
          </form>
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-center items-start mt-12 md:mt-0">
          <div className="text-zinc-200 text-lg"><span className="font-bold text-yellow-400">Email:</span> Contact@VolatilityPlus.com</div>
          <div className="text-zinc-200 text-lg"><span className="font-bold text-yellow-400">Telegram:</span> @VolatilityPlus</div>
          <div className="text-zinc-200 text-lg"><span className="font-bold text-yellow-400">Discord:</span> VolatilityPlus#2025</div>
          <div className="text-zinc-200 text-lg"><span className="font-bold text-yellow-400">WhatsApp:</span> +13526770586</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
