import React from "react";

const pricingPlans = [
  {
    name: "Basic Boom & Crash Plan",
    description: "Perfect for beginners starting with Boom and Crash trading",
    features: [
      "3-5 Boom/Crash signals daily",
      "Telegram and MT5 alerts",
      "Fixed Tight Stop Loss",
      "Basic Boom and Crash indices guide"
    ],
    price: "$30",
    period: "/Month",
    accent: "border-yellow-400",
    btnColor: "bg-green-500 hover:bg-green-600",
    tag: null
  },
  {
    name: "Professional Boom Crash Plan",
    description: "Most popular package for serious Boom Crash and PainX GainX traders",
    features: [
      "3-7 Boom/Gain signals daily",
      "Telegram and MT5 alerts",
      "Fixed Tight Stop Loss",
      "Boom and Crash, Pain & Gain indices guide"
    ],
    price: "$300",
    period: "/Lifetime",
    accent: "border-yellow-400 ring-2 ring-yellow-400 shadow-xl",
    btnColor: "bg-yellow-500 hover:bg-yellow-600",
    tag: {
      label: "POPULAR",
      color: "bg-yellow-400 text-black"
    }
  },
  {
    name: "MEGA SPIKES MAX SPIKE DETECTOR",
    description: "Perfect for traders who want cutting-edge spike prediction",
    features: [
      "Real-time Boom Crash spike prediction",
      "Advanced volatility pattern recognition",
      "M5 timeframe spike detection",
      "Visual and audio spike alerts"
    ],
    price: "$75",
    period: "/Lifetime",
    accent: "border-purple-500 ring-2 ring-purple-400",
    btnColor: "bg-purple-500 hover:bg-purple-600",
    tag: {
      label: "SPIKES PRO",
      color: "bg-purple-500 text-white"
    }
  }
];

export default function PricingPlans() {
  return (
    <section className="py-20 px-4 flex flex-col items-center w-full bg-gradient-to-b from-black via-zinc-900 to-zinc-800">
      <h2 className="text-5xl font-bold mb-10 text-center text-white">Choose Your <span className="text-yellow-400">Plan</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {pricingPlans.map((plan, idx) => (
          <div key={plan.name} className={`relative bg-black bg-opacity-80 glassy rounded-3xl border ${plan.accent} flex flex-col p-8 items-center shadow-2xl min-h-[540px]`}> 
            {/* Tag */}
            {plan.tag && (
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2 rounded-full font-bold text-lg shadow ${plan.tag.color} uppercase`}>
                {plan.tag.label}
              </div>
            )}
            <div className="font-bold text-3xl text-white text-center mb-2">{plan.name}</div>
            <div className="mb-6 text-white text-center text-lg font-normal opacity-80">{plan.description}</div>
              <div className="flex flex-col items-start mb-10 w-full">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-white gap-3 mb-3 text-base md:text-lg">
                    <span className="text-yellow-400 font-bold text-2xl">✔</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            <div className="mb-2 text-5xl font-extrabold text-yellow-400 flex items-end">{plan.price}<span className="text-2xl text-white font-medium ml-1">{plan.period}</span></div>
            <button className={`mt-6 w-full text-center font-bold text-lg py-3 rounded-full shadow-md transition-colors ${plan.btnColor} text-white`}>Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
}
