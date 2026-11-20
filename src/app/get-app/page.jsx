
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Page = () => {
  return (
    <section className="w-full px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-[1540px] overflow-hidden rounded-[24px] bg-[#073E6C] px-5 py-12 sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#63B9D5]/15 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#63B9D5]/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold tracking-[2px] text-[#B8E8F5] sm:text-sm">
            THE EKHOON EXPERIENCE
          </span>

          <h1 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-white min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
            Better Home Services.
            <span className="mt-2 block text-[#63B9D5]">
              Right at Your Fingertips.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 md:text-lg">
            From everyday repairs to essential home solutions, Ekhoon helps
            you connect with trusted professionals without the hassle.
            Discover a smarter, easier way to take care of your home.
          </p>

          <p className="mt-9 text-sm font-semibold text-white sm:text-base">
            Download the Ekhoon App
          </p>

          {/* Store Buttons */}
          <div className="mt-5 flex flex-col items-center justify-center gap-4 min-[480px]:flex-row">
            <Link
              href="#google-play"
              aria-label="Get Ekhoon on Google Play"
              className="group flex h-[68px] w-[220px] items-center gap-3 rounded-xl border border-white/30 bg-black px-4 text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:shadow-xl"
            >
              <BiLogoPlayStore
                size={34}
                className="shrink-0 fill-white text-white"
              />
              <div className="min-w-0">
                <p className="text-[11px] leading-4 text-white/80">
                  GET IT ON
                </p>
                <p className="whitespace-nowrap text-[20px] font-semibold leading-7 tracking-tight text-white">
                  Google Play
                </p>
              </div>
            </Link>

            <Link
              href="#app-store"
              aria-label="Download Ekhoon on the App Store"
              className="group flex h-[68px] w-[220px] items-center gap-3 rounded-xl border border-white/30 bg-black px-4 text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:shadow-xl"
            >
              <FaApple
                size={37}
                className="shrink-0 text-white"
              />
              <div className="min-w-0">
                <p className="text-[11px] leading-4 text-white/80">
                  Download on the
                </p>
                <p className="whitespace-nowrap text-[20px] font-semibold leading-7 tracking-tight text-white">
                  App Store
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/50 sm:text-sm">
            <span>One app.</span>
            <span className="h-1 w-1 rounded-full bg-[#63B9D5]" />
            <span>Many home solutions.</span>
            <span className="h-1 w-1 rounded-full bg-[#63B9D5]" />
            <span>More peace of mind.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
