"use client";

import React from "react";
import Link from "next/link";

const ThirdParty = () => {
  return (
    <section
      id="thirdparty"
      className="min-h-screen pt-32 pb-24 md:pt-32 md:pb-32 px-4 bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Third Party Manufacturing Services
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
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

          <div className="mt-12">
            <Link href="/third-party">
              <button className="bg-[#BCCCDC] text-gray-800 px-8 py-3 rounded-lg hover:bg-[#9AA6B2] transition-colors duration-200">
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
