
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

export default function ProviderCTA() {
  return (
    <section className="w-full overflow-hidden px-3 py-12 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#073e6c] px-5 py-14 text-center sm:rounded-[32px] sm:px-10 sm:py-16 md:px-14 lg:py-20"
      >
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FE8C00]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-3xl">

          {/* BADGE */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-wider text-orange-300 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FE8C00]" />
            YOUR NEXT OPPORTUNITY STARTS HERE
          </span>

          {/* HEADING */}
          <h2
            className="mt-7 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Amplesoft, sans-serif" }}
          >
            Ready to Grow Your
            <span className="block text-[#FE8C00]">
              Service Business?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base sm:leading-8">
            Take your professional skills to the next level with Ekhoon.
            Download our mobile app, register as a service provider,
            and start exploring new opportunities.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            {/* APP BUTTON */}
            <a
              href="#get-app"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FE8C00] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:px-8"
            >
              <Smartphone size={19} />
              Download the App

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* CONTACT BUTTON */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:px-8"
            >
              <MessageCircle size={18} />
              Contact Us
            </Link>

          </div>

          {/* TRUST POINTS */}
          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-blue-100/80 sm:text-sm">

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#FE8C00]" />
              Easy Registration
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#FE8C00]" />
              Professional Network
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#FE8C00]" />
              New Opportunities
            </span>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
