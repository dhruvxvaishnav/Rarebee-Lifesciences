"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-1.png"
              alt="Rarebee LifeSciences Logo"
              width={150}
              height={25}
              className="h-auto w-[120px] sm:w-[150px] mr-3 transition-transform duration-200 hover:scale-105"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#9AA6B2] hover:text-black font-medium transition-all duration-200 relative group px-4 py-2 rounded-lg hover:bg-[#9AA6B2] hover:shadow-[0_0_15px_rgba(154,166,178,0.5)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#9AA6B2] hover:text-[#D9EAFD] transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen */}
      <div
        className={`fixed inset-0 bg-[#F8FAFC] z-40 md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-[#9AA6B2] hover:text-gray-800 transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Mobile nav links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-3xl text-[#9AA6B2] active:text-black active:bg-[#9AA6B2] px-8 py-4 rounded-lg transition-all duration-200 shadow-md active:shadow-[0_0_20px_rgba(154,166,178,0.6)]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
