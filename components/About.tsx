"use client";

import { useState } from "react";
import Image from "next/image";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Rarebee LifeSciences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image (Left on desktop, Top on mobile) */}
          <div className="order-1">
            <div
              className="relative overflow-hidden rounded-xl shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/AboutUs.jpg"
                alt="Rarebee LifeSciences Team"
                width={600}
                height={400}
                className={`w-full h-auto transition-all duration-700 ${
                  isHovered
                    ? "filter-none transform scale-105"
                    : "filter grayscale"
                }`}
              />
            </div>
          </div>

          {/* Content (Right on desktop, Bottom on mobile) */}
          <div className="order-2">
            <div className="space-y-6">
              <p className="text-lg text-[#9AA6B2] leading-relaxed">
                RareBee Lifesciences is a PCD Pharma company based in Ahmedabad,
                Gujarat. We have a clear vision of becoming a recognized name in
                the pharmaceutical field within a short span of time. Today,
                RareBee Lifesciences stands among the fastest-growing
                pharmaceutical companies in the industry. We are firmly
                committed to our mission of promoting a healthier society by
                making a wide range of pharmaceutical drugs accessible to people
                across the globe.
              </p>

              <p className="text-lg text-[#9AA6B2] leading-relaxed">
                We offer formulations in various forms including tablets,
                capsules, injectables, oral suspensions, syrups, and powders for
                internal use, as well as creams, lotions, ointments, and gels
                for external application. Backed by years of experience, we
                strive to empower our distributors to meet all kinds of demand
                efficiently. While we are already present in major cities across
                the country, our goal is to extend our reach to the most remote
                villages, ensuring that no one is deprived of proper medication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
