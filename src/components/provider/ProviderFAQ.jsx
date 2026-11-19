
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Who can become an Ekhoon service provider?",
    answer:
      "Professionals with relevant skills and experience in home services can apply to become an Ekhoon service provider.",
  },
  {
    question: "How do I register as a provider?",
    answer:
      "You can start by completing the provider registration process and submitting the required information.",
  },
  {
    question: "Can I choose which service requests to accept?",
    answer:
      "You can review available requests and decide which opportunities match your skills and availability, subject to platform rules.",
  },
  {
    question: "Do I need previous work experience?",
    answer:
      "Relevant experience is helpful. Specific eligibility and verification requirements depend on the service category and platform policies.",
  },
  {
    question: "How can I get help with my provider account?",
    answer:
      "You can contact the Ekhoon support team for assistance with your account and provider-related questions.",
  },
];

export default function ProviderFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#FE8C00]">
            FAQ
          </span>

          <h2
            className="mt-6 text-3xl font-bold text-[#073e6c] md:text-4xl"
            style={{ fontFamily: "Amplesoft, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need to know about becoming an Ekhoon provider.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-xl border transition ${
                  isOpen ? "border-orange-200 bg-orange-50/40" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-[#073e6c]">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#FE8C00] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-gray-500">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
