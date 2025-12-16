import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">Checkout</h1>
        <p className="text-zinc-300 md:text-lg mb-8 max-w-md">
          Complete your purchase below. You&apos;ll be able to select your preferred payment method and get instant access to all your trading tools. (Payment options coming soon!)
        </p>
        <form className="w-full max-w-lg mx-auto bg-zinc-900/80 rounded-xl p-6 mb-8 border border-yellow-400/10 shadow-xl flex flex-col gap-8">
          <div>
            <h2 className="text-yellow-400 font-bold text-lg mb-2 text-left">Select Payment Method</h2>
            <div className="flex flex-col gap-4 mt-4">
              <label className="flex items-center gap-4 p-3 rounded-lg border border-yellow-400/40 bg-black/70 cursor-pointer">
                <input type="radio" name="payment" value="paypal" className="accent-yellow-400 w-6 h-6" defaultChecked />
                <span className="text-white font-medium text-md">PayPal</span>
                <span className="ml-auto"><img src="/paypal-placeholder.svg" alt="PayPal" className="h-5" /></span>
              </label>
              <label className="flex items-center gap-4 p-3 rounded-lg border border-yellow-400/40 bg-black/70 cursor-pointer">
                <input type="radio" name="payment" value="visa" className="accent-yellow-400 w-6 h-6" />
                <span className="text-white font-medium text-md">Visa / Credit Card</span>
                <span className="ml-auto"><img src="/visa-placeholder.svg" alt="Visa" className="h-5" /></span>
              </label>
            </div>
          </div>
          <button disabled className="bg-yellow-400 text-black font-bold text-lg px-10 py-3 rounded-full shadow-xl border-2 border-yellow-400 transition opacity-60 cursor-not-allowed">Proceed to Pay (Coming Soon)</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

