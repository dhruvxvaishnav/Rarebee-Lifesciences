"use client";

import React from "react";
import Image from "next/image";
import { Check, IndianRupee, Medal, Globe2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Quality Assurance",
      description:
        "All our products are manufactured in GMP and WHO-certified facilities, ensuring the highest quality standards.",
      icon: <Check className="h-10 w-10 text-gray-800" />,
      color: "bg-[#D9EAFD]",
      borderColor: "border-[#9AA6B2]",
    },
    {
      title: "Affordability",
      description:
        "As a small business owner, finding affordable pharmaceutical products can be challenging. Our products are competitively priced, with flexible bulk ordering options to suit your needs.",
      icon: <IndianRupee className="h-10 w-10 text-gray-800" />,
      color: "bg-[#D9EAFD]",
      borderColor: "border-[#9AA6B2]",
    },
    {
      title: "Experience",
      description:
        "With over fifteen years of experience in the pharmaceutical industry, we have a deep understanding of how pharma companies operate in India.",
      icon: <Medal className="h-10 w-10 text-gray-800" />,
      color: "bg-[#D9EAFD]",
      borderColor: "border-[#9AA6B2]",
    },
    {
      title: "Extensive Reach",
      description:
        "Our extensive network of over 1,000 pharmacies spans across the Country.",
      icon: <Globe2 className="h-10 w-10 text-gray-800" />,
      color: "bg-[#D9EAFD]",
      borderColor: "border-[#9AA6B2]",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Rarebee
          </h2>
          <p className="text-lg text-[#9AA6B2] max-w-3xl mx-auto">
            At Rarebee LifeSciences, we combine innovation with excellence to
            deliver pharmaceutical solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} border-2 ${feature.borderColor} rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] sticky top-24 sm:static`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-[#9AA6B2] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
