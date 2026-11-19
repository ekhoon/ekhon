
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function ProviderCTA() {
  return (
    <section className="px-5 py-16 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#073e6c] px-6 py-16 text-center md:px-14"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FE8C00]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
            YOUR NEXT OPPORTUNITY STARTS HERE
          </span>

          <h2
            className="mt-7 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Amplesoft, sans-serif" }}
          >
            Ready to Grow Your Service Business?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100/80">
            Join Ekhoon, showcase your skills, and connect with
            customers looking for professional home services.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-blue-100/80">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              Simple Registration
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              Professional Network
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
