"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const fullText = "Rarebee LifeSciences";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Start subtitle animation after title is complete
        setTimeout(() => setShowSubtitle(true), 300);
        // Start button animation after subtitle
        setTimeout(() => setShowButton(true), 800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = (e: any) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 pt-20 relative overflow-hidden"
    >
      <div className="container mx-auto z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-[#9AA6B2] mb-8 transform transition-all duration-700 ease-out ${
              showSubtitle
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Innovating Healthcare, Transforming Lives
          </p>

          <div
            className={`transform transition-all duration-700 ease-out ${
              showButton
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <a href="#about" onClick={scrollToAbout}>
              <button className="bg-[#BCCCDC] text-gray-800 px-8 py-3 rounded-lg hover:bg-[#9AA6B2] hover:scale-105 transition-all duration-200">
                Know Us More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
