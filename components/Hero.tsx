"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Rarebee LifeSciences";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80); // Faster interval for smoothness

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 pt-20 relative overflow-hidden"
    >
      {/* Background Video will be added here */}
      {/* <video 
        className="absolute inset-0 object-cover w-full h-full z-0"
        autoPlay
        muted
        loop
      /> */}

      <div className="container mx-auto z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {displayText}
          </h1>
          <p className="text-lg md:text-xl text-[#9AA6B2] mb-8">
            Innovating Healthcare, Transforming Lives
          </p>
          <Link href="#about">
            <button className="bg-[#BCCCDC] text-gray-800 px-8 py-3 rounded-lg hover:bg-[#9AA6B2] transition-colors duration-200">
              Know Us More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
