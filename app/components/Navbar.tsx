import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky-navbar glassy w-full top-0 px-6 py-3 flex items-center justify-between">
      {/* Logo and brand */}
      <div className="flex items-center gap-3">
        <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-2">VP</div>
        <span className="text-yellow-400 text-xl font-bold tracking-tight">Volatility Plus</span>
      </div>
      {/* Center menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/80 font-medium hover:text-yellow-400 transition-colors text-sm"
          >
            {link.name}
          </a>
        ))}
      </div>
      {/* Right actions */}
      <div className="flex items-center gap-4">
        <a
          href="#signals"
          className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-6 py-2 rounded-full shadow transition-colors border-2 border-yellow-400"
        >
          <span className="inline-block align-middle mr-1">⚡</span> Open Free Account
        </a>
      </div>
    </nav>
  );
}
