"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ThirdPartyPage() {
  const [activeTab1, setActiveTab1] = useState("portfolio");

  const whyChooseUsContent: Record<string, { title: string; content: string }> =
    {
      portfolio: {
        title: "Extensive Product Portfolio",
        content:
          "We can cater to any requirement you may have regarding any kind of product you might need.",
      },
      quality: {
        title: "Quality You Can Rely On",
        content:
          "We understand that the quality of your products is non-negotiable. Therefore, we adhere to high standards of quality control in every product we manufacture, making sure it is safe, effective, and of the best quality.",
      },
      delivery: {
        title: "On-Time Delivery",
        content:
          "Time is of the essence in the pharmaceutical industry, and we understand the importance of timely deliveries. Our distribution network ensures that your products reach you on time, wherever you are in India.",
      },
      cost: {
        title: "Cost-Effective Manufacturing",
        content:
          "By partnering with Rarebee Lifesciences, you save money on setting up manufacturing units, purchasing expensive machinery, and hiring staff. This way, you can focus your resources on growing your business while we handle production for you.",
      },
      flexible: {
        title: "Flexible and Scalable",
        content:
          "Whether you need a small batch or large-scale production, we can meet your requirements. Our team is flexible and ready to scale up production according to the need of your business. We are a third-party pharmaceutical manufacturer in India, well aware of the way in which small and large productions could be handled.",
      },
    };

  const whyImportantContent: Record<
    string,
    { title: string; content: string }
  > = {
    "cost-savings": {
      title: "Cost Savings",
      content:
        "Setting up a manufacturing unit is costly. You can save on the cost of machinery, staff, and infrastructure by outsourcing production to a third party pharma manufacturer in India.",
    },
    focus: {
      title: "Focus on Core Business",
      content:
        "By outsourcing manufacturing, you can focus on what matters most – marketing your products, growing your brand, and reaching new customers.",
    },
    market: {
      title: "Faster Time-to-Market",
      content:
        "You can reach the markets much faster with the right partner, so you get ahead of your competition.",
    },
    expertise: {
      title: "Expertise",
      content:
        "As a trusted third-party manufacturer like us, you'll benefit from the many years of experience and cutting-edge technologies used in our manufacturing to make your products better quality and more efficient.",
    },
  };

  const whyChooseUsTabs = [
    { id: "portfolio", label: "Portfolio" },
    { id: "quality", label: "Quality" },
    { id: "delivery", label: "Delivery" },
    { id: "cost", label: "Cost-Effective" },
    { id: "flexible", label: "Flexible" },
  ];

  const whyImportantTabs = [
    { id: "cost-savings", label: "Cost Savings" },
    { id: "focus", label: "Core Business" },
    { id: "market", label: "Time-to-Market" },
    { id: "expertise", label: "Expertise" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <div className="p-4">
        <Link
          href="/"
          className="inline-flex items-center text-[#9AA6B2] hover:text-gray-800 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="text-center py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Third Party Manufacturing Services
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12 space-y-16">
        {/* Question 1 */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-[#BCCCDC]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            What is Third Party Pharma Manufacturing?
          </h3>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Before we dive deeper into why RareBee Lifesciences is the right
              partner, let's first understand what third party pharmaceutical
              manufacturing is. In simple words, it's when a pharmaceutical
              company outsources the production of its medicines to a trusted
              manufacturer like us. This helps save on costs related to setting
              up your own manufacturing facilities while ensuring that you still
              get high-quality products that meet industry standards.
            </p>
            <p>
              To hire expert labour so that you don't spend your time or
              resources and yet get the job done right. You can focus all your
              attention on selling; we will take care of your production.
            </p>
            <p className="font-medium text-gray-800">
              RareBee Lifesciences: Your Partner for Third-Party Pharma
              Manufacturing
            </p>
            <p>
              Any pharmaceutical company is concerned only with the selection of
              good manufacturing partners. You may need a third-party drug
              manufacturing company that can satisfy your quality needs with
              timely results. That is where you find Rarebee Lifesciences. We
              are one of the leading third-party pharma manufacturing companies
              in India which provides cost-effective, efficient, and
              high-quality manufacture to grow your business forward.
            </p>
          </div>
        </section>

        {/* Question 3 */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-[#BCCCDC]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Why is Third Party Pharma Manufacturing Important?
          </h3>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              You may wonder, why should I choose third party pharma
              manufacturing? Here are a few reasons:
            </p>
          </div>

          {/* Cards for Why Important */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(whyImportantContent).map(
              ([key, content], index) => (
                <div
                  key={key}
                  className="bg-[#D9EAFD] border-2 border-[#9AA6B2] rounded-xl p-6 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {content.title}
                  </h4>
                  <p className="text-[#9AA6B2]">{content.content}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Question 2 */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-[#BCCCDC]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Why Choose RareBee Lifesciences for Third Party Pharma
            Manufacturing?
          </h3>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Third party pharma manufacturers have become a great need in
              India. Given this, you may question which is the best third party
              pharma manufacturing facility in India. Here is where Rarebee
              Lifesciences differ:
            </p>
          </div>

          {/* Tabs for Why Choose Us */}
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-4 mb-4 max-w-2xl mx-auto">
              {whyChooseUsTabs.slice(0, 3).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab1(tab.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-sm border-2 ${
                    activeTab1 === tab.id
                      ? "bg-[#BCCCDC] text-gray-800 shadow-md border-[#9AA6B2]"
                      : "bg-white text-[#9AA6B2] hover:text-gray-800 border-[#BCCCDC] hover:border-[#9AA6B2]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {whyChooseUsTabs.slice(3).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab1(tab.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-sm border-2 ${
                    activeTab1 === tab.id
                      ? "bg-[#BCCCDC] text-gray-800 shadow-md border-[#9AA6B2]"
                      : "bg-white text-[#9AA6B2] hover:text-gray-800 border-[#BCCCDC] hover:border-[#9AA6B2]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#D9EAFD] rounded-xl p-6 border border-[#9AA6B2]">
            <div key={activeTab1} className="animate-fade-in">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {whyChooseUsContent[activeTab1].title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {whyChooseUsContent[activeTab1].content}
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
