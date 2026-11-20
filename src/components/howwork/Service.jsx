
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Zap,
  Droplets,
  Wind,
  Wrench,
} from "lucide-react";

const Service = () => {
  const services = [
    { name: "Electrical", icon: Zap },
    { name: "Plumbing", icon: Droplets },
    { name: "AC Repair", icon: Wind },
    { name: "Appliance Repair", icon: Wrench },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#63B9D5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#FE8C00]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1540px] px-4 py-12 min-[400px]:px-5 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FE8C00]/20 bg-[#FE8C00]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FE8C00]" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#FE8C00] sm:text-xs">
              Simple Steps
            </span>
          </div>

          <h2
            style={{ fontFamily: "Amplesoft, sans-serif" }}
            className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-[#073E6C] min-[400px]:text-3xl sm:text-4xl md:text-[42px]"
          >
            Start with the Service
            <span className="text-[#63B9D5]"> You Need</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#6883A1] sm:text-base">
            Getting the right home service is simple. Follow these easy
            steps to connect with the right professional through Ekhoon.
          </p>
        </motion.div>

        {/* STEP 01 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* LEFT IPHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto flex min-h-[370px] w-full max-w-[500px] items-center justify-center py-6 sm:min-h-[440px] lg:mx-0 lg:min-h-[480px]"
          >

            {/* BACKGROUND SHAPE */}
            <div className="absolute h-[85%] w-[85%] rounded-[35px] bg-[#073E6C]/5 sm:rounded-[50px]" />

            {/* DECORATIVE CIRCLE */}
            <div className="absolute left-[8%] top-[8%] h-14 w-14 rounded-full border-[9px] border-[#FE8C00]/15 sm:h-20 sm:w-20" />

            <div className="absolute bottom-[8%] right-[8%] h-12 w-12 rounded-full bg-[#63B9D5]/15 sm:h-16 sm:w-16" />

            {/* FLOATING IPHONE */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[185px] min-[400px]:w-[200px] sm:w-[225px] md:w-[245px] lg:w-[255px]"
            >

              {/* SIDE BUTTONS */}
              <div className="absolute -left-[5px] top-[17%] z-0 h-7 w-[5px] rounded-l-md bg-[#8B9BAA] sm:h-9" />
              <div className="absolute -left-[5px] top-[26%] z-0 h-10 w-[5px] rounded-l-md bg-[#8B9BAA] sm:h-12" />
              <div className="absolute -left-[5px] top-[36%] z-0 h-10 w-[5px] rounded-l-md bg-[#8B9BAA] sm:h-12" />
              <div className="absolute -right-[5px] top-[27%] z-0 h-14 w-[5px] rounded-r-md bg-[#8B9BAA] sm:h-16" />

              {/* TITANIUM FRAME */}
              <div className="relative z-10 rounded-[35px] border-[5px] border-[#AAB6C2] bg-[#202B38] p-[3px] shadow-[0_25px_55px_rgba(7,62,108,0.23)] sm:rounded-[42px] sm:border-[6px]">

                {/* INNER SCREEN */}
                <div className="relative overflow-hidden rounded-[29px] border border-[#526170] bg-white sm:rounded-[35px]">

                  {/* STATUS BAR */}
                  <div className="absolute left-0 right-0 top-0 z-30 flex h-8 items-center justify-between px-4 text-[8px] font-bold text-[#073E6C] sm:h-10 sm:px-5 sm:text-[9px]">
                    <span>9:41</span>

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute left-1/2 top-[5px] flex h-[19px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full bg-black sm:top-[6px] sm:h-[22px] sm:w-[70px]">
                      <div className="absolute right-[8px] h-[5px] w-[5px] rounded-full bg-[#263344]" />
                    </div>

                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <span className="h-[7px] w-[12px] rounded-[2px] border border-current p-[1px]">
                        <span className="block h-full w-[75%] rounded-[1px] bg-current" />
                      </span>
                    </div>
                  </div>

                  {/* APP SCREEN IMAGE */}
                  <Image
                    src="/11.jpg"
                    alt="Ekhoon mobile app service selection"
                    width={620}
                    height={700}
                    priority
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 640px) 200px, 255px"
                  />

                  {/* HOME INDICATOR */}
                  <div className="absolute bottom-[5px] left-1/2 z-30 h-[4px] w-[65px] -translate-x-1/2 rounded-full bg-black/80 sm:bottom-[6px] sm:h-[5px] sm:w-[80px]" />

                </div>
              </div>

              {/* MOCKUP SHADOW */}
              <div className="absolute -bottom-5 left-[15%] -z-10 h-8 w-[70%] rounded-full bg-[#073E6C]/15 blur-xl" />

            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] left-0 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(7,62,108,0.10)] min-[400px]:left-1 sm:bottom-[15%] sm:left-2 sm:gap-3 sm:p-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-10 sm:w-10">
                <CheckCircle2 size={19} />
              </div>

              <div>
                <p className="text-[9px] font-bold text-[#073E6C] sm:text-xs">
                  Easy Selection
                </p>
                <p className="text-[8px] text-[#6883A1] sm:text-[10px]">
                  Choose your service
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:pl-4 xl:pl-8"
          >

            {/* STEP NUMBER */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073E6C] text-base font-bold text-white shadow-lg shadow-[#073E6C]/15 sm:h-14 sm:w-14 sm:text-lg">
                01
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#FE8C00] sm:text-xs">
                  Step One
                </p>
                <p className="mt-1 text-xs font-medium text-[#6883A1]">
                  Start your journey with Ekhoon
                </p>
              </div>
            </div>

            {/* TITLE */}
            <h3
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="text-[28px] font-bold leading-tight text-[#073E6C] min-[400px]:text-3xl sm:text-4xl md:text-[42px] lg:text-[38px] xl:text-[44px]"
            >
              Choose Your
              <span className="block text-[#63B9D5]">
                Service
              </span>
            </h3>

            {/* SUBTITLE */}
            <p className="mt-3 text-base font-semibold text-[#FE8C00] sm:text-lg">
              Tell us what you need.
            </p>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[560px] text-sm leading-7 text-[#6883A1] sm:text-base sm:leading-8">
              Select the type of home service you need from Ekhoon.
              Whether you need an electrician, plumber, AC technician,
              refrigerator technician, TV repair technician, appliance
              technician, mechanic, painter, or other service professional,
              find the service that matches your needs.
            </p>

            {/* SERVICE CATEGORIES */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="flex min-w-0 items-center gap-2 rounded-xl border border-[#073E6C]/10 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8C00]/40 hover:shadow-md sm:gap-3 sm:p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-10 sm:w-10">
                      <Icon size={19} />
                    </div>

                    <span className="text-[10px] font-semibold text-[#073E6C] min-[400px]:text-[11px] sm:text-sm">
                      {service.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* BOTTOM NOTE */}
            <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#F8FAFC] p-3.5 sm:mt-8 sm:p-4">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#FE8C00]"
              />

              <p className="text-xs leading-6 text-[#6883A1] sm:text-sm">
                Choose the service category that best matches your
                home repair or maintenance needs.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
