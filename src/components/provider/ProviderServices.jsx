
"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Zap,
  Droplets,
  Snowflake,
  Paintbrush,
  Wrench,
  Tv,
  Hammer,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Electrical wiring, switches, lights, and repairs.",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Pipe installation, water leaks, and plumbing repairs.",
  },
  {
    icon: Snowflake,
    title: "AC Services",
    description: "AC installation, servicing, and maintenance.",
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    description: "Interior painting, wall finishing, and decoration.",
  },
  {
    icon: Wrench,
    title: "Appliance Repair",
    description: "Repair and maintenance of household appliances.",
  },
  {
    icon: Tv,
    title: "TV & Electronics",
    description: "Television installation and electronic repairs.",
  },
  {
    icon: Hammer,
    title: "Carpentry Services",
    description: "Furniture repair, fittings, and woodwork.",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Home cleaning and professional cleaning solutions.",
  },
];

export default function ProviderServices() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#FE8C00]">
              SERVICE CATEGORIES
            </span>

            <h2
              className="mt-6 text-3xl font-bold text-[#073e6c] md:text-4xl"
              style={{ fontFamily: "Amplesoft, sans-serif" }}
            >
              What Services Can You Offer?
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              Bring your expertise to Ekhoon. Explore different
              service categories and connect with customers.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group rounded-2xl border border-gray-100 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#FE8C00] transition group-hover:bg-[#FE8C00] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#073e6c]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
