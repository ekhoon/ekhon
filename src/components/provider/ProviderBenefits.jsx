
"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  CalendarDays,
  MessageCircle,
  Award,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  "Create a professional service provider profile",
  "Showcase your skills and work experience",
  "Connect with customers through the platform",
  "Manage service requests in one place",
  "Build trust through customer feedback",
];

export default function ProviderBenefits() {
  return (
    <section className="overflow-hidden bg-[#073e6c] px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
            BUILT FOR PROFESSIONALS
          </span>

          <h2
            className="mt-7 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Amplesoft, sans-serif" }}
          >
            A Better Way to Manage Your Service Business.
          </h2>

          <p className="mt-5 leading-8 text-blue-100/80">
            Ekhoon brings service professionals and customers
            together through one convenient platform.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#FE8C00]"
                  size={20}
                />
                <p className="text-sm leading-6 text-white/90">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: ShieldCheck, title: "Professional Profile", text: "Showcase your services" },
            { icon: CalendarDays, title: "Work Management", text: "Organize your requests" },
            { icon: MessageCircle, title: "Customer Connection", text: "Connect with customers" },
            { icon: Award, title: "Build Trust", text: "Grow your reputation" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
              >
                <Icon className="text-[#FE8C00]" size={30} />
                <h3 className="mt-5 font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/70">
                  {item.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
