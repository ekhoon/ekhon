
"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Users,
  BriefcaseBusiness,
  Clock,
  Star,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Reach More Customers",
    description:
      "Connect with customers looking for reliable home service professionals in your area.",
  },
  {
    icon: BriefcaseBusiness,
    title: "More Work Opportunities",
    description:
      "Discover service requests that match your skills and professional experience.",
  },
  {
    icon: Clock,
    title: "Flexible Work Schedule",
    description:
      "Manage your availability and choose the opportunities that work for you.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description:
      "Showcase your skills, earn customer reviews, and build trust over time.",
  },
];

export default function WhyJoinEkhoon() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-black">
            WHY JOIN EKHOON?
          </span>

          <h2
            className="mt-6 text-3xl font-bold text-[#073e6c] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Amplesoft, sans-serif" }}
          >
            Your Skills Deserve More Opportunities.
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Turn your professional skills into new opportunities.
            Join Ekhoon and connect with customers who need your services.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-black transition group-hover:bg-[#FE8C00] group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-bold text-[#073e6c]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                <ArrowUpRight
                  className="mt-5 text-black transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={22}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
