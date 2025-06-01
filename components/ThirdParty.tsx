"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ThirdParty = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="thirdparty"
      className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 px-4 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-800 transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            Our Third Party Manufacturing Services
          </h2>
        </div>

        <div
          className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="space-y-6">
            <p className="text-lg text-[black] leading-relaxed">
              RareBee Lifesciences offers comprehensive third-party
              manufacturing services to pharmaceutical companies looking for
              reliable, high-quality production partners. With our
              state-of-the-art WHO-GMP certified facilities and years of
              industry expertise, we provide end-to-end manufacturing solutions.
            </p>

            <p className="text-lg text-[black] leading-relaxed">
              Our third-party manufacturing services include tablets, capsules,
              injectables, oral suspensions, syrups, powders, creams, lotions,
              ointments, and gels. We ensure strict quality control, timely
              delivery, and competitive pricing for all our manufacturing
              partners.
            </p>

            <p className="text-lg text-[black] leading-relaxed">
              Partner with us to leverage our manufacturing capabilities,
              regulatory compliance, and extensive distribution network to bring
              your pharmaceutical products to market efficiently and
              cost-effectively.
            </p>
          </div>

          <div
            className={`mt-12 transform transition-all duration-500 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link href="/third-party">
              <button className="bg-[#BCCCDC] text-gray-800 px-8 py-3 rounded-lg hover:bg-[#9AA6B2] hover:scale-110 transition-all duration-300 animate-bounce hover:animate-bounce">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdParty;
