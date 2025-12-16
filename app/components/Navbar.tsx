"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "Affiliate", href: "/services/affiliate" },
      { name: "VIP Broker", href: "/services/vip-broker" },
      { name: "Signals", href: "/services/signals" },
      { name: "MQL5 Development", href: "/services/mql5-development" }
    ]
  },
  {
    name: "Trading Tools",
    dropdown: [
      { name: "Spike Phantom", href: "/tools/spikephantom" },
      { name: "Megaspike Max", href: "/tools/mega-spike/" }
    ]
  },
  { name: "Testimonials", href: "/testimonies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="sticky-navbar glassy w-full top-0 px-6 py-3 flex items-center justify-between relative">
      {/* Logo and brand */}
      <Link href="/" className="flex items-center gap-3">
        <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-2">VP</div>
        <span className="text-yellow-400 text-xl md:text-2xl font-bold tracking-tight hidden md:inline">Volatility Plus</span>
      </Link>
      {/* Center menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          link.dropdown ? (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.name)}
            >
              <button
                onClick={() => handleDropdown(link.name)}
                className="text-white/80 font-medium hover:text-yellow-400 transition-colors text-sm flex items-center gap-1 focus:outline-none"
                type="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === link.name}
              >
                {link.name}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {openDropdown === link.name && (
                <div className="absolute left-0 mt-2 z-50 min-w-[160px] bg-zinc-900 border border-yellow-400 rounded shadow-xl">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2 text-sm text-white hover:bg-yellow-400 hover:text-black rounded transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 font-medium hover:text-yellow-400 transition-colors text-sm"
            >
              {link.name}
            </Link>
          )
        ))}
      </div>
      {/* Right actions */}
      <div className="flex items-center gap-4">
        <Link
          href="/affiliate"
          className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-6 py-2 rounded-full shadow transition-colors border-2 border-yellow-400"
        >
          <span className="inline-block align-middle mr-1">⚡</span> Open Free Account
        </Link>
        <button
          type="button"
          className="md:hidden text-yellow-400 border border-yellow-400 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <span className="block w-6 h-px bg-yellow-400 mb-1"></span>
          <span className="block w-6 h-px bg-yellow-400 mb-1"></span>
          <span className="block w-6 h-px bg-yellow-400"></span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-yellow-400 shadow-lg z-50">
          <div className="flex flex-col gap-4 px-6 py-5">
            {navLinks.map(link =>
              link.dropdown ? (
                <div key={link.name}>
                  <div className="text-yellow-400 font-semibold uppercase text-sm mb-1">{link.name}</div>
                  <div className="flex flex-col gap-2 pl-3">
                    {link.dropdown.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white/80 text-sm border-b border-white/5 pb-2"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-base font-medium"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/affiliate"
              className="mt-2 bg-yellow-400 text-black font-semibold text-sm px-4 py-2 rounded-full text-center"
              onClick={closeMobileMenu}
            >
              <span className="inline-block align-middle mr-1">⚡</span> Open Free Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
