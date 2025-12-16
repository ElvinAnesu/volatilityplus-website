'use client';
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const testimonialImages = [
  "/testimonials/testmonial1.jpeg",
  "/testimonials/testimonial2.jpeg",
  "/testimonials/testimonial3.jpeg",
  "/testimonials/testimonial4.jpeg",
  "/testimonials/testimonial5.jpeg",
  "/testimonials/testimonial6.jpeg",
];

export default function TestimoniesPage() {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const numberOfImages = testimonialImages.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % numberOfImages);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, numberOfImages]);

  // Touch events for swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      next();
    } else if (diff < -50) {
      prev();
    }
  };

  const next = () => setCurrent((prev) => (prev + 1) % numberOfImages);
  const prev = () => setCurrent((prev) => (prev - 1 + numberOfImages) % numberOfImages);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 font-sans">
      <Navbar />
      <section className="py-16 px-2 md:py-20 flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-center">What Our Traders Say</h2>
        {/* Mobile Carousel */}
        <div
          className="relative w-full max-w-2xl aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-zinc-900 mb-8 block md:hidden"
          ref={slideRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonialImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Testimonial ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{borderRadius: "0.75rem"}}
              draggable={false}
            />
          ))}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-yellow-500/70 text-yellow-400 hover:text-black rounded-full p-2 text-2xl z-20 md:text-3xl mg-light focus:outline-none"
          >
            &#8249;
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-yellow-500/70 text-yellow-400 hover:text-black rounded-full p-2 text-2xl z-20 md:text-3xl mg-light focus:outline-none"
          >
            &#8250;
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonialImages.map((_, idx) => (
              <span
                key={idx}
                className={`block w-3 h-3 rounded-full border-2 border-yellow-400 transition bg-yellow-400/90 ${idx === current ? 'opacity-90' : 'opacity-30'} cursor-pointer`}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
          {testimonialImages.map((src, i) => (
            <div key={src} className="rounded-xl overflow-hidden bg-zinc-900 shadow-xl flex items-center justify-center aspect-[4/3]">
              <img
                src={src}
                alt={`Testimonial ${i + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <a href="#vip" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-4 rounded-full shadow-xl border-2 border-yellow-400 transition-colors">Join VIP Now</a>
      </section>
      <Footer />
    </div>
  );
}
