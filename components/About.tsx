"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check, IndianRupee, Medal, Globe2 } from "lucide-react";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setAboutVisible(true);
          }
          if (entry.target === featuresRef.current && entry.isIntersecting) {
            setFeaturesVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 px-4 bg-white"
        ref={aboutRef}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-800 transform transition-all duration-700 ease-out ${
                aboutVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              About Rarebee LifeSciences
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div
              className={`order-1 transform transition-all duration-700 ease-out ${
                aboutVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
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
            <div
              className={`order-2 transform transition-all duration-700 ease-out ${
                aboutVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="space-y-6">
                <p className="text-lg text-[black] leading-relaxed">
                  RareBee Lifesciences is a PCD Pharma company based in
                  Ahmedabad, Gujarat. We have a clear vision of becoming a
                  recognized name in the pharmaceutical field within a short
                  span of time. Today, RareBee Lifesciences stands among the
                  fastest-growing pharmaceutical companies in the industry. We
                  are firmly committed to our mission of promoting a healthier
                  society by making a wide range of pharmaceutical drugs
                  accessible to people across the globe.
                </p>
                <p className="text-lg text-[black] leading-relaxed">
                  We offer formulations in various forms including tablets,
                  capsules, injectables, oral suspensions, syrups, and powders
                  for internal use, as well as creams, lotions, ointments, and
                  gels for external application. Backed by years of experience,
                  we strive to empower our distributors to meet all kinds of
                  demand efficiently. While we are already present in major
                  cities across the country, our goal is to extend our reach to
                  the most remote villages, ensuring that no one is deprived of
                  proper medication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="min-h-screen py-16 md:py-24 px-4 bg-white"
        ref={featuresRef}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transform transition-all duration-700 ease-out ${
                featuresVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Why Choose Rarebee
            </h2>
            <p
              className={`text-lg text-[#9AA6B2] max-w-3xl mx-auto transform transition-all duration-700 ease-out ${
                featuresVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              At Rarebee LifeSciences, we combine innovation with excellence to
              deliver pharmaceutical solutions that make a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} border-2 ${
                  feature.borderColor
                } rounded-xl p-6 shadow-md transition-all duration-700 hover:shadow-lg hover:translate-y-[-5px] sticky top-24 sm:static transform ${
                  featuresVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
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
    </>
  );
};

export default AboutUs;
