import React from "react";

const features = [
  {
    stat: "80%",
    label: "Signal Accuracy",
    icon: <span className="text-4xl">🎯</span>,
  },
  {
    stat: "24/7",
    label: "VIP Support",
    icon: <span className="text-4xl">💬</span>,
  },
  {
    stat: "7K +",
    label: "Active Members",
    icon: <span className="text-4xl">👥</span>,
  },
  {
    stat: "0.5 s",
    label: "Signal Delivery Speed",
    icon: <span className="text-4xl">⚡</span>,
  },
];

const valueCards = [
  {
    icon: <span className="text-yellow-400 text-5xl mb-4">⚡</span>,
    headline: (
      <>
        <span className="text-yellow-400 font-bold">Boom &amp; Crash</span><br />
        <span className="text-yellow-400 font-bold">Signals</span>
      </>
    ),
    desc: (
      <>
        Receive precise entry and exit points<br />
        for Boom and Crash indices with 70% accuracy.<br />
        Our signals include stop loss and take profit levels<br />
        for complete risk management.
      </>
    ),
  },
  {
    icon: <span className="text-yellow-400 text-5xl mb-4">⚡</span>,
    headline: (
      <>
        <span className="text-yellow-400 font-bold">Advanced Spike</span><br />
        <span className="text-yellow-400 font-bold">Detection</span>
      </>
    ),
    desc: (
      <>
        Our proprietary spike detector algorithms predict major<br />
        price movements in PainX and GainX indices before they happen,<br />
        giving you the ultimate trading advantage.
      </>
    ),
  },
  {
    icon: <span className="text-yellow-400 text-5xl mb-4">⚡</span>,
    headline: (
      <>
        <span className="text-yellow-400 font-bold">PainX &amp; GainX</span><br />
        <span className="text-yellow-400 font-bold">MT5 &amp; Telegram Alerts</span>
      </>
    ),
    desc: (
      <>
        Get specialized trading signals for PainX 800 and GainX 1200 indices<br />
        with unique algorithms designed specifically<br />
        for these high-volatility synthetic markets.
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 px-4 bg-transparent flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-center mb-3">
        Why Choose <span className="text-yellow-400">Volatility Plus</span>
      </h2>
      <p className="mb-14 mt-0 text-zinc-300   font-normal text-center">
        We provide cutting-edge Boom and Crash indices trading signals and 
        spike detection tools 
        <br className="hidden md:block" /> designed specifically for Boom ,Crash , PainX, 
        and GainX markets
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full max-w-6xl mb-14">
        {features.map((feat) => (
          <div
            key={feat.label}
            className="glassy rounded-2xl px-9 py-4 flex flex-col items-center justify-center text-center min-h-[180px] border border-zinc-700 shadow-xl"
          >
            <div className="mb-4">{feat.icon}</div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">{feat.stat}</div>
            <div className="text-lg md:text-xl text-white font-semibold">{feat.label}</div>
          </div>
        ))}
      </div>
      {/* New row of value cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {valueCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-black rounded-2xl p-8 flex flex-col items-center justify-start text-center border border-zinc-700 shadow-2xl"
          >
            <div className="mb-4">{card.icon}</div>
            <div className="text-2xl md:text-3xl font-extrabold leading-tight mb-6" style={{ color: '#FFD600', fontWeight: 900 }}>
              {card.headline}
            </div>
            <div className="text-white text-base md:text-lg leading-relaxed font-normal">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
