
"use client";

import React from "react";
import { motion } from "motion/react";
import {
  UserPlus,
  ClipboardList,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Sign up and create your provider profile with your skills, experience, and service details.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Get Service Requests",
    description:
      "Receive relevant service requests from customers looking for professionals.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Accept Suitable Jobs",
    description:
      "Review available requests and choose the jobs that match your skills and availability.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Complete & Grow",
    description:
      "Deliver quality service, build customer trust, and grow your professional reputation.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F7F9FC] px-5 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FE8C00]">
            HOW IT WORKS
          </span>

          <h2
            className="mt-6 text-3xl font-bold text-[#073e6c] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Amplesoft, sans-serif" }}
          >
            Start Working with Ekhoon in 4 Simple Steps.
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Getting started is simple. Follow these steps to begin
            your journey as an Ekhoon service provider.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#073e6c] text-white">
                    <Icon size={26} />
                  </div>

                  <span className="text-4xl font-extrabold text-orange-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#073e6c]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
