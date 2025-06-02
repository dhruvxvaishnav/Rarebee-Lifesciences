"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Crown, FileText, Headphones } from "lucide-react";

const Partner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPartnerHovered, setIsPartnerHovered] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const partnerOptions = [
    {
      title: "Monopoly",
      description:
        "We grant exclusive distribution rights to our partners, providing them with a competitive advantage that fosters their growth.",
      icon: <Crown className="h-10 w-10 text-gray-800" />,
      color: "bg-[#D9EAFD]",
      borderColor: "border-[#9AA6B2]",
    },
    {
      title: "Article",
      description:
        "We offer gift items and incentive trips to our distributors based on performance targets, motivating them to excel and achieve their goals.",
      icon: <FileText className="h-10 w-10 text-gray-800" />,
      color: "bg-[#D9EAFD]",
      borderColor: "border-[#9AA6B2]",
    },
    {
      title: "Support",
      description:
        "We support our distributors by providing promotional materials such as product cards, brochures, and reminder cards for doctors.",
      icon: <Headphones className="h-10 w-10 text-gray-800" />,
      color: "bg-[#D9EAFD]",
      borderColor: "border-[#9AA6B2]",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          if (entry.target === contentRef.current && entry.isIntersecting) {
            setContentVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Partner Cards Section */}
      <section
        id="partner"
        className="min-h-screen pt-24 md:pt-32 lg:pt-40 pb-16 lg:pb-32 px-4 bg-[#F8FAFC]"
        ref={sectionRef}
      >
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Partner with Us
            </h2>
            <p
              className={`text-lg text-[#9AA6B2] max-w-3xl mx-auto transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Join hands with Rarebee LifeSciences and grow your pharmaceutical
              business with our trusted partnership opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerOptions.map((option, index) => (
              <div
                key={index}
                className={`${option.color} border-2 ${
                  option.borderColor
                } rounded-xl p-6 shadow-md transition-all duration-700 hover:shadow-lg hover:translate-y-[-5px] transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {option.title}
                </h3>
                <p className="text-[#9AA6B2] text-center">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Partnership Benefits Section */}
        <div className="pt-8 pb-16 md:pt-6 md:pb-18" ref={contentRef}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div
                className={`order-2 md:order-1 transform transition-all duration-700 ease-out ${
                  contentVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="text-center space-y-6 ">
                  <p className="text-lg text-[black] leading-relaxed">
                    RareBee Lifesciences is committed to delivering high-quality
                    products at affordable prices, supported by customer
                    service.
                    <br />
                    We operate with a monopoly rights model, giving our
                    associates a competitive advantage. To enhance market reach,
                    we provide promotional materials such as product cards,
                    brochures, and reminder cards. Our associates receive all
                    resources to promote products, boost sales, and capitalize
                    on new opportunities.
                    <br />
                    We offer a target-based incentive scheme where associates
                    can earn points and redeem them for exclusive gifts and an
                    international trip.
                    <br />
                    Through collaboration between our science and business
                    teams, we work with various companies and research
                    institutions to strengthen our capabilities and develop new
                    areas of expertise.
                  </p>
                </div>
              </div>
              <div
                className={`order-1 md:order-2 transform transition-all duration-300 ease-out ${
                  contentVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-24 opacity-0"
                }`}
              >
                <div
                  className="relative overflow-hidden rounded-xl shadow-lg"
                  onMouseEnter={() => setIsPartnerHovered(true)}
                  onMouseLeave={() => setIsPartnerHovered(false)}
                >
                  <Image
                    src="/Partnership.jpg"
                    alt="Partnership with Rarebee"
                    width={400}
                    height={256}
                    className={`w-full h-auto object-cover transition-all duration-700 ${
                      isPartnerHovered
                        ? "filter-none transform scale-105"
                        : "filter grayscale"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
