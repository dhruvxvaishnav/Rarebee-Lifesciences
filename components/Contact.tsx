"use client";

import React, { useState } from "react";
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
      // Form submission logic would go here
      console.log("Form submitted:", formData);
      alert("Thank you for your message. We'll get back to you soon!");

      // Reset form
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
    <section id="contactus" className="py-16 md:py-42 px-4 bg-[#F8FAFC]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-md text-[#9AA6B2] mt-2">
            Have questions about our products or services? Reach out to us and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto bg-white rounded-lg shadow p-6 border border-[#BCCCDC]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name and Email side by side */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm rounded border ${
                    errors.name ? "border-red-500" : "border-[#BCCCDC]"
                  } focus:outline-none focus:ring-1 focus:ring-[#D9EAFD]`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm rounded border ${
                    errors.email ? "border-red-500" : "border-[#BCCCDC]"
                  } focus:outline-none focus:ring-1 focus:ring-[#D9EAFD]`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-800 text-sm font-medium mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm rounded border ${
                  errors.phone ? "border-red-500" : "border-[#BCCCDC]"
                } focus:outline-none focus:ring-1 focus:ring-[#D9EAFD]`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="block text-gray-800 text-sm font-medium mb-1"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm rounded border border-[#BCCCDC] focus:outline-none focus:ring-1 focus:ring-[#D9EAFD]"
                placeholder="Your company (optional)"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 text-sm font-medium mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-3 py-2 text-sm rounded border ${
                  errors.message ? "border-red-500" : "border-[#BCCCDC]"
                } focus:outline-none focus:ring-1 focus:ring-[#D9EAFD]`}
                placeholder="Your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#BCCCDC] text-gray-800 px-6 py-2 text-sm rounded hover:bg-[#9AA6B2] transition-colors duration-200 flex items-center ml-auto"
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
