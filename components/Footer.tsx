"use client";

import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

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

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`bg-[#BCCCDC] py-12 px-4 transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      ref={footerRef}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div
            className={`transform transition-all duration-500 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Rarebee LifeSciences
            </h3>
            <p className="text-[#9AA6B2]">
              Next generation pharmaceutical company focused on innovative
              healthcare solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transform transition-all duration-500 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-[#9AA6B2] hover:text-gray-800 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-[#9AA6B2] hover:text-gray-800 transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contactus"
                  className="text-[#9AA6B2] hover:text-gray-800 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-500 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h4 className="text-lg font-bold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-2 text-[#9AA6B2]">
              <li>Email: info@rarebee.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Pharma Street, CA 94000</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-8 pt-8 border-t border-[#9AA6B2] text-center transform transition-all duration-500 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-[#9AA6B2]">
            &copy; {currentYear} Rarebee LifeSciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
