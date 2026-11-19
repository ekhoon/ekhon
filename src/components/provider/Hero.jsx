
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const ProviderBanner = () => {
  return (
    <section className="w-full overflow-hidden px-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[20px] bg-[#F8FAFC] sm:rounded-[32px]">

        {/* BACKGROUND DECORATION */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 grid min-h-[620px] items-center gap-8 px-5 py-14 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-16">

          {/* LEFT CONTENT */}
          <div className="relative z-20 text-center lg:text-left">

            {/* BADGE */}
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[10px] font-bold tracking-wider text-black sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-black" />
              EKHOON SERVICE PROVIDER
            </span>

            {/* HEADING */}
            <h1
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="mt-6 text-3xl font-bold leading-[1.15] text-[#073e6c] min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-[68px]"
            >
              Your Skills.
              <br />
              Our Platform.
              <br />
              <span className="text-black">
                More Opportunities.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base sm:leading-8 lg:mx-0">
              Join Ekhoon as a service provider. Connect with customers,
              showcase your expertise, and grow your home service business
              through one platform.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col justify-center gap-3 min-[450px]:flex-row lg:justify-start">

              <a
                href="/provider/register"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#073e6c] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Become a Provider

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073e6c] transition group-hover:rotate-[-35deg]">
                  →
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#073e6c] transition hover:border-[#0000] hover:text-black"
              >
                Explore More
              </a>

            </div>

            {/* TRUST POINTS */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-gray-500 lg:justify-start sm:text-sm">

              <span className="flex items-center gap-2">
                <span className="text-black">✓</span>
                Easy Registration
              </span>

              <span className="flex items-center gap-2">
                <span className="text-black">✓</span>
                Flexible Work
              </span>

              <span className="flex items-center gap-2">
                <span className="text-black">✓</span>
                Professional Growth
              </span>

            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative mx-auto flex h-[330px] w-full max-w-[500px] items-center justify-center sm:h-[430px] lg:h-[500px]">

            {/* BACKGROUND CIRCLE */}
            <div className="absolute h-[230px] w-[230px] rounded-full bg-orange-100 sm:h-[330px] sm:w-[330px] lg:h-[390px] lg:w-[390px]" />

            <div className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-[#0000]/40 sm:h-[280px] sm:w-[280px] lg:h-[330px] lg:w-[330px]" />

            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 h-[260px] w-[260px] overflow-hidden rounded-full border-[8px] border-white shadow-2xl sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px]"
            >
              <Image
                src="/provider-main.png"
                alt="Ekhoon professional service provider"
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 350px, 390px"
                className="object-cover"
              />
            </motion.div>

            {/* ELECTRICIAN CARD */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-[12%] z-20 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:left-[-2%] sm:p-4"
            >
              <Image
                src="/provider-electrician.png"
                alt="Electrician"
                width={55}
                height={55}
                className="h-10 w-10 object-contain sm:h-14 sm:w-14"
              />
              <p className="mt-1 text-center text-[9px] font-bold text-[#073e6c] sm:text-xs">
                Electrician
              </p>
            </motion.div>

            {/* PLUMBER CARD */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-[20%] z-20 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:right-[-2%] sm:p-4"
            >
              <Image
                src="/provider-plumber.png"
                alt="Plumber"
                width={55}
                height={55}
                className="h-10 w-10 object-contain sm:h-14 sm:w-14"
              />
              <p className="mt-1 text-center text-[9px] font-bold text-[#073e6c] sm:text-xs">
                Plumber
              </p>
            </motion.div>

            {/* AC TECHNICIAN CARD */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[8%] left-[2%] z-20 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:left-[-2%] sm:p-4"
            >
              <Image
                src="/provider-ac.png"
                alt="AC Technician"
                width={55}
                height={55}
                className="h-10 w-10 object-contain sm:h-14 sm:w-14"
              />
              <p className="mt-1 text-center text-[9px] font-bold text-[#073e6c] sm:text-xs">
                AC Technician
              </p>
            </motion.div>

            {/* FLOATING MESSAGE */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] right-0 z-20 flex items-center gap-2 rounded-2xl bg-[#073e6c] px-3 py-3 text-white shadow-xl sm:right-[-2%] sm:px-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-lg">
                ✓
              </span>

              <div>
                <p className="text-[10px] font-bold sm:text-xs">
                  Your Skills Matter
                </p>
                <p className="text-[8px] text-gray-300 sm:text-[10px]">
                  Grow with Ekhoon
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProviderBanner;
