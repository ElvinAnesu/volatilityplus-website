"use client" 
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

function MQL5RequestForm() {
  const [form, setForm] = React.useState({ name: '', phone: '', details: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  function handleChange(e: { target: { name: any; value: any; }; }) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  }
  if (submitted) return <div className="text-green-400 font-bold text-center py-10">Request sent! You will be contacted soon.</div>;
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="text-yellow-300 text-left text-sm font-semibold">
        Name
        <input
          required
          name="name"
          type="text"
          value={form.name}
          className="mt-1 block w-full bg-zinc-800 px-4 py-2 rounded text-white placeholder:text-zinc-400 border border-yellow-400/30 focus:outline-none focus:border-yellow-400"
          onChange={handleChange}
          placeholder="Your name"
        />
      </label>
      <label className="text-yellow-300 text-left text-sm font-semibold">
        Phone Number
        <input
          required
          name="phone"
          type="tel"
          value={form.phone}
          className="mt-1 block w-full bg-zinc-800 px-4 py-2 rounded text-white placeholder:text-zinc-400 border border-yellow-400/30 focus:outline-none focus:border-yellow-400"
          onChange={handleChange}
          placeholder="e.g. +123456789"
        />
      </label>
      <label className="text-yellow-300 text-left text-sm font-semibold">
        Project Details
        <textarea
          required
          name="details"
          value={form.details}
          className="mt-1 block w-full bg-zinc-800 px-4 py-2 rounded text-white placeholder:text-zinc-400 border border-yellow-400/30 focus:outline-none focus:border-yellow-400 min-h-[90px] max-h-60"
          onChange={handleChange}
          placeholder="Describe your MQL5 project or requirements..."
        />
      </label>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-3 rounded-full border-2 border-yellow-400 shadow-lg transition disabled:opacity-60 disabled:cursor-wait mt-2"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  );
}

export default function MQL5DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">MQL5 Development</h1>
        <p className="text-zinc-300 md:text-lg mb-8">We offer custom MQL5 expert advisors, scripts, and indicators for professional and retail traders.</p>
        <div className="w-full max-w-lg mx-auto bg-zinc-900/80 rounded-xl p-6 mb-6 border border-yellow-400/10 shadow-xl">
          <MQL5RequestForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

