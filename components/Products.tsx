"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
const Products = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="products"
      className="min-h-screen pt-32 pb-24 md:pt-32 md:pb-32 px-4 bg-[#F8FAFC]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-[black] leading-relaxed">
                At RareBee Lifesciences, our unwavering commitment to quality
                drives excellence across every aspect of our operations. This
                dedication is reflected not only in our consistent growth but
                also in the personal development of our team and the strength of
                our management practices.
                <br />
                Every pharmaceutical product we offer undergoes a rigorous,
                multi-step Quality Assurance process before reaching our
                distributors. We are deeply committed to delivering
                high-quality, reliable medications to the people of India, and
                we uphold strict quality standards without compromise.
                <br />
                In the rare event that a product does not meet our quality
                benchmarks, it is immediately and responsibly discarded in an
                environmentally safe manner. Our promise is simple—to provide
                top-tier pharmaceutical products, and we take that promise
                seriously at every level.
                <br />
                All of our products are manufactured in WHO-GMP certified
                facilities, ensuring that each batch meets the highest
                international standards for safety, efficacy, and quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/products" className="inline-block">
                  <button className="bg-[#BCCCDC] text-gray-800 px-6 py-3 rounded-lg hover:bg-[#9AA6B2] transition-colors duration-200 w-full sm:w-auto">
                    View All Products
                  </button>
                </Link>
                <a
                  href="/product-brochure.pdf"
                  download
                  className="inline-flex items-center justify-center bg-white border-2 border-[#9AA6B2] text-gray-800 px-6 py-3 rounded-lg hover:bg-[#D9EAFD] transition-colors duration-200 w-full sm:w-auto"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 -mt-12 md:-mt-12">
            <div
              className="relative overflow-hidden rounded-xl shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/Products.jpg"
                alt="Rarebee LifeSciences Products"
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
        </div>
      </div>
    </section>
  );
};
export default Products;
