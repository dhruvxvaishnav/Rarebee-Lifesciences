"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Third Party", href: "#thirdparty" },
    { name: "Partner with Us", href: "#partner" },
    { name: "Contact Us", href: "#contactus" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Image
              src="/logo-1.png"
              alt="Logo"
              width={150}
              height={25}
              className="h-auto w-[120px] sm:w-[150px] transition-transform duration-200 hover:scale-105"
              priority
            />

            {/* Desktop links */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-lg font-medium text-[#9AA6B2] hover:text-black hover:bg-[#9AA6B2]/20 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#9AA6B2] hover:text-[#0F172A] transition"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* BLACK 30% OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs p-6 z-50 transform transition-transform duration-300 md:hidden
          bg-[#9AA6B2] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close icon */}
        <div className="flex justify-end">
          <button
            className="text-white hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="mt-8 flex flex-col space-y-4 overflow-y-auto h-[calc(100%-3.5rem)]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-white font-medium py-3 px-4 rounded-lg hover:bg-white/20 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
