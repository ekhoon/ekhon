
"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, FileText, UserRound, Wrench } from "lucide-react";

const requirements = [
  {
    icon: UserRound,
    title: "Basic Personal Information",
    description: "Your name and contact details.",
  },
  {
    icon: Wrench,
    title: "Relevant Skills",
    description: "Information about the services you can provide.",
  },
  {
    icon: FileText,
    title: "Experience Details",
    description: "Share your professional background and experience.",
  },
  {
    icon: CheckCircle2,
    title: "Verification",
    description: "Complete the platform's required verification process.",
  },
];

export default function ProviderRequirements() {
  return (
    <section className="bg-[#F7F9FC] px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FE8C00]">
            GET READY TO JOIN
          </span>

          <h2
            className="mt-6 text-3xl font-bold text-[#073e6c] md:text-4xl"
            style={{ fontFamily: "Amplesoft, sans-serif" }}
          >
            What Do You Need to Get Started?
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            Prepare a few basic details before creating your
            Ekhoon service provider profile.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {requirements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FE8C00]">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-[#073e6c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
