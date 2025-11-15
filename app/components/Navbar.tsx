import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Testimonies", href: "/testimonies" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Spike Detector", href: "/spikedetector" },
  { name: "VIP Broker", href: "/vipbroker" },
  { name: "Affiliate", href: "/affiliate" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky-navbar glassy w-full top-0 px-6 py-3 flex items-center justify-between">
      {/* Logo and brand */}
      <Link href="/" className="flex items-center gap-3">
        <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-2">VP</div>
        <span className="text-yellow-400 text-xl font-bold tracking-tight">Volatility Plus</span>
      </Link>
      {/* Center menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white/80 font-medium hover:text-yellow-400 transition-colors text-sm"
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* Right actions */}
      <div className="flex items-center gap-4">
        <Link
          href="/affiliate"
          className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-6 py-2 rounded-full shadow transition-colors border-2 border-yellow-400"
        >
          <span className="inline-block align-middle mr-1">⚡</span> Open Free Account
        </Link>
      </div>
    </nav>
  );
}
