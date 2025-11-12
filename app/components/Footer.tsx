import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-black via-zinc-900 to-zinc-950 pt-16 pb-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-5 flex-wrap mb-8">
        {/* Brand info */}
        <div className="flex-1 min-w-[240px] flex flex-col">
          <div className="flex items-center mb-2">
            <div className="bg-yellow-400 text-black w-12 h-12 flex items-center justify-center rounded-full font-bold text-2xl mr-2">VP</div>
            <span className="text-yellow-400 text-xl md:text-2xl font-bold">Volatility Plus</span>
          </div>
          <div className="text-zinc-200  mb-4 max-w-sm">
            Providing premium Boom Crash trading signals, Spike indices alerts, and professional spike detection tools since 2020. Join thousands of satisfied VIP members trading Boom, Crash, PainX, and GainX worldwide.
          </div>
        </div>
        {/* Services */}
        <div className="flex flex-1 min-w-[350px] gap-10">
          <div className="flex-1 min-w-[150px]">
            <div className="text-white font-bold text-xl mb-2">Trading Services</div>
            <ul className="flex flex-col gap-2 text-zinc-300  font-normal">
              <li>Boom & Crash Signals</li>
              <li>Spike Detectors</li>
              <li>VIP Broker Access</li>
              <li>Deriv - Vip Access</li>
              <li>Weltrade- Vip Access</li>
              <li>Mega Spikes Max System</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <div className="text-white font-bold text-xl mb-2">Affiliate Services</div>
            <ul className="flex flex-col gap-2 text-zinc-300 font-normal">
              <li>Affiliate Services</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-zinc-800 my-6" />
      <div className="text-zinc-400 text-center text-xs pb-2">
        © 2025 VolatilityPlus. All rights reserved. Boom Crash trading and PainX and GainX indices trading involves significant risk and may not be suitable for all investors.
      </div>
    </footer>
  );
}
