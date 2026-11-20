
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Smartphone } from "lucide-react";

const ProviderBanner = () => {
  return (
    <section className="w-full overflow-hidden px-3 py-3 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] bg-[#F8FAFC] sm:rounded-[32px]">

        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-orange-50 blur-3xl" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 grid items-center gap-8 px-5 py-12 sm:px-10 sm:py-14 lg:min-h-[620px] lg:grid-cols-2 lg:gap-6 lg:px-14 lg:py-16 xl:px-16">

          {/* LEFT CONTENT */}
          <div className="relative z-20 text-center lg:text-left">

            {/* BADGE */}
           

            {/* HEADING */}
            <h1
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="mt-6 text-[34px] font-bold leading-[1.15] text-[#073e6c] min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-[68px]"
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
              Turn your skills into opportunities with Ekhoon.
              Connect with customers, showcase your expertise,
              and grow your home service business through our platform.
              Apply to become a service provider directly from the Ekhoon app.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col justify-center gap-3 min-[450px]:flex-row lg:justify-start">

              {/* EXPLORE BUTTON */}
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#073e6c] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Explore More

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073e6c] transition-transform group-hover:translate-x-1">
                  <ArrowRight size={17} />
                </span>
              </a>

              {/* APP BUTTON */}
              <a
                href="#get-app"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#073e6c] transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:text-[#FE8C00]"
              >
                <Smartphone size={18} />
                Get the App
              </a>

            </div>

            {/* TRUST POINTS */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-gray-500 sm:text-sm lg:justify-start">

              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-[#FE8C00]" />
                Easy Registration
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-[#FE8C00]" />
                Flexible Work
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-[#FE8C00]" />
                Professional Growth
              </span>

            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative mx-auto flex h-[330px] w-full max-w-[500px] items-center justify-center sm:h-[430px] lg:h-[500px]">

            {/* BACKGROUND CIRCLE */}
            <div className="absolute h-[220px] w-[220px] rounded-full bg-orange-100 sm:h-[330px] sm:w-[330px] lg:h-[390px] lg:w-[390px]" />

            <div className="absolute h-[185px] w-[185px] rounded-full border border-dashed border-orange-300/60 sm:h-[280px] sm:w-[280px] lg:h-[330px] lg:w-[330px]" />

            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 h-[235px] w-[235px] overflow-hidden rounded-full border-[7px] border-white shadow-2xl min-[400px]:h-[255px] min-[400px]:w-[255px] sm:h-[350px] sm:w-[350px] sm:border-[8px] lg:h-[390px] lg:w-[390px]"
            >
              <Image
                src="/icon.svg"
                alt="Ekhoon professional service provider"
                fill
                priority
                sizes="(max-width: 640px) 255px, (max-width: 1024px) 350px, 390px"
                className="object-cover"
              />
            </motion.div>

            {/* ELECTRICIAN CARD */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-[12%] z-20 rounded-xl border border-gray-100 bg-white p-2 shadow-xl sm:left-[-2%] sm:rounded-2xl sm:p-4"
            >
              <Image
                src="/Website-06.png"
                alt="Electrician"
                width={55}
                height={55}
                className="h-8 w-8 object-contain sm:h-14 sm:w-14"
              />
              <p className="mt-1 text-center text-[8px] font-bold text-[#073e6c] sm:text-xs">
                Appliance 
              </p>
            </motion.div>

            {/* PLUMBER CARD */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-[20%] z-20 rounded-xl border border-gray-100 bg-white p-2 shadow-xl sm:right-[-2%] sm:rounded-2xl sm:p-4"
            >
              <Image
                src="/Website-04.png"
                alt="Plumber"
                width={55}
                height={55}
                className="h-8 w-8 object-contain sm:h-14 sm:w-14"
              />
              <p className="mt-1 text-center text-[8px] font-bold text-[#073e6c] sm:text-xs">
                Electrician
              </p>
            </motion.div>

            {/* AC TECHNICIAN CARD */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[8%] left-0 z-20 rounded-xl border border-gray-100 bg-white p-2 shadow-xl sm:left-[-2%] sm:rounded-2xl sm:p-4"
            >
              <Image
                src="/Website-03.png"
                alt="AC Technician"
                width={55}
                height={55}
                className="h-8 w-8 object-contain sm:h-14 sm:w-14"
              />
              <p className="mt-1 text-center text-[8px] font-bold text-[#073e6c] sm:text-xs">
                AC Technician
              </p>
            </motion.div>

            {/* FLOATING MESSAGE */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] right-0 z-20 flex items-center gap-2 rounded-xl bg-[#073e6c] px-2.5 py-2.5 text-white shadow-xl sm:right-[-2%] sm:rounded-2xl sm:px-5 sm:py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FE8C00] text-sm sm:h-8 sm:w-8 sm:text-lg">
                ✓
              </span>

              <div>
                <p className="text-[9px] font-bold sm:text-xs">
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
