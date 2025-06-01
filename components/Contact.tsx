"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Thank you for your message. We'll get back to you soon!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contactus"
      className="py-16 md:py-24 lg:py-32 px-4 bg-[#F8FAFC]"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Contact Us
          </h2>
          <p
            className={`text-md text-[#9AA6B2] transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Have questions about our products or services? Reach out to us and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div
          className={`mx-auto bg-white rounded-lg shadow-lg p-8 border border-[#BCCCDC] transform transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`transform transition-all duration-500 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <label
                  htmlFor="name"
                  className="block text-gray-800 text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm rounded-lg border ${
                    errors.name ? "border-red-500" : "border-[#BCCCDC]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent transition-all duration-200`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div
                className={`transform transition-all duration-500 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm rounded-lg border ${
                    errors.email ? "border-red-500" : "border-[#BCCCDC]"
                  } focus:outline-none focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent transition-all duration-200`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div
              className={`transform transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <label
                htmlFor="phone"
                className="block text-gray-800 text-sm font-medium mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-[#BCCCDC]"
                } focus:outline-none focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent transition-all duration-200`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div
              className={`transform transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <label
                htmlFor="company"
                className="block text-gray-800 text-sm font-medium mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm rounded-lg border border-[#BCCCDC] focus:outline-none focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent transition-all duration-200"
                placeholder="Your company (optional)"
              />
            </div>

            <div
              className={`transform transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <label
                htmlFor="message"
                className="block text-gray-800 text-sm font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 text-sm rounded-lg border ${
                  errors.message ? "border-red-500" : "border-[#BCCCDC]"
                } focus:outline-none focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent transition-all duration-200 resize-vertical`}
                placeholder="Your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div
              className={`text-right transform transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <button
                type="submit"
                className="bg-[#BCCCDC] text-gray-800 px-8 py-3 text-sm rounded-lg hover:bg-[#9AA6B2] hover:scale-105 transition-all duration-200 flex items-center ml-auto shadow-md hover:shadow-lg"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
