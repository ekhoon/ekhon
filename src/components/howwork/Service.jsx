
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
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
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#63B9D5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#FE8C00]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1540px] px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">

        {/* Section Heading */}
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
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex w-full items-center justify-center lg:justify-start"
          >
            {/* Image Background */}
            <div className="absolute h-[85%] w-[85%] rounded-[40px] bg-[#073E6C]/5 sm:rounded-[50px]" />

            <div className="absolute left-[8%] top-[8%] h-14 w-14 rounded-full border-[9px] border-[#FE8C00]/15 sm:h-20 sm:w-20" />

            <div className="absolute bottom-[8%] right-[8%] h-12 w-12 rounded-full bg-[#63B9D5]/15 sm:h-16 sm:w-16" />

            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[260px] min-[400px]:max-w-[290px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[490px]">
              <Image
                src="/ekhon app2.png"
                alt="Ekhoon mobile app service selection"
                width={620}
                height={700}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_15px_25px_rgba(7,62,108,0.10)]"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] left-0 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-[0_10px_30px_rgba(7,62,108,0.10)] sm:bottom-[15%] sm:left-2 sm:gap-3 sm:p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-11 sm:w-11">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#073E6C] sm:text-sm">
                  Easy Selection
                </p>
                <p className="text-[9px] text-[#6883A1] sm:text-xs">
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
            {/* Step Number */}
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

            {/* Title */}
            <h3
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="text-[28px] font-bold leading-tight text-[#073E6C] min-[400px]:text-3xl sm:text-4xl md:text-[42px] lg:text-[38px] xl:text-[44px]"
            >
              Choose Your
              <span className="block text-[#63B9D5]">
                Service
              </span>
            </h3>

            {/* Subtitle */}
            <p className="mt-3 text-base font-semibold text-[#FE8C00] sm:text-lg">
              Tell us what you need.
            </p>

            {/* Description */}
            <p className="mt-4 max-w-[560px] text-sm leading-7 text-[#6883A1] sm:text-base sm:leading-8">
              Select the type of home service you need from Ekhoon.
              Whether you need an electrician, plumber, AC technician,
              refrigerator technician, TV repair technician, appliance
              technician, mechanic, painter, or other service professional,
              find the service that matches your needs.
            </p>

            {/* Service Categories */}
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
                    className="flex items-center gap-2 rounded-xl border border-[#073E6C]/10 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8C00]/40 hover:shadow-md sm:gap-3 sm:p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-10 sm:w-10">
                      <Icon size={19} />
                    </div>

                    <span className="text-[11px] font-semibold text-[#073E6C] sm:text-sm">
                      {service.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Note */}
            <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#F8FAFC] p-4 sm:mt-8">
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
