
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  CheckCircle2,
  MapPinned,
} from "lucide-react";

const Service2 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC]">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#63B9D5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#FE8C00]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1540px] px-4 py-12 min-[400px]:px-5 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20">

        {/* STEP 02 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:order-1 lg:pr-4 xl:pr-8"
          >

            {/* STEP NUMBER */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#073E6C] text-base font-bold text-white shadow-lg shadow-[#073E6C]/15 sm:h-14 sm:w-14 sm:text-lg">
                02
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#FE8C00] sm:text-xs">
                  Step Two
                </p>

                <p className="mt-1 text-xs font-medium text-[#6883A1]">
                  Discover professionals around you
                </p>
              </div>
            </div>

            {/* TITLE */}
            <h2
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="text-[28px] font-bold leading-tight text-[#073E6C] min-[400px]:text-3xl sm:text-4xl md:text-[42px] lg:text-[38px] xl:text-[44px]"
            >
              Find Nearby
              <span className="block text-[#63B9D5]">
                Technicians
              </span>
            </h2>

            {/* SUBTITLE */}
            <p className="mt-3 text-base font-semibold text-[#FE8C00] sm:text-lg">
              Find service professionals near you.
            </p>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[560px] text-sm leading-7 text-[#6883A1] sm:text-base sm:leading-8">
              Ekhoon uses your location to help you discover nearby
              technicians and service providers. You can see available
              professionals around your area and choose the service you need
              without depending only on recommendations from friends,
              Facebook groups, or local contacts.
            </p>

            {/* LOCATION INFORMATION */}
            <div className="mt-7 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-8 sm:gap-4">

              {/* LOCATION BASED */}
              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#073E6C]/10 bg-white p-3 shadow-sm sm:p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00]">
                  <MapPin size={21} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#073E6C] sm:text-sm">
                    Location Based
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#6883A1] sm:text-xs">
                    Discover nearby services
                  </p>
                </div>
              </div>

              {/* EASY DISCOVERY */}
              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#073E6C]/10 bg-white p-3 shadow-sm sm:p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#63B9D5]/15 text-[#073E6C]">
                  <Navigation size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#073E6C] sm:text-sm">
                    Easy Discovery
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#6883A1] sm:text-xs">
                    Find the right professional
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM NOTE */}
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-white p-3.5 sm:mt-8 sm:p-4">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#FE8C00]"
              />

              <p className="text-xs leading-6 text-[#6883A1] sm:text-sm">
                Explore service professionals available around your area
                and find someone who matches your needs.
              </p>
            </div>

          </motion.div>

          {/* RIGHT IPHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto flex min-h-[370px] w-full max-w-[500px] items-center justify-center py-6 sm:min-h-[440px] lg:order-2 lg:mx-0 lg:min-h-[480px] lg:justify-end"
          >

            {/* BACKGROUND SHAPE */}
            <div className="absolute h-[85%] w-[85%] rounded-[35px] bg-[#073E6C]/5 sm:rounded-[50px]" />

            {/* DECORATIVE CIRCLE */}
            <div className="absolute right-[8%] top-[8%] h-14 w-14 rounded-full border-[9px] border-[#FE8C00]/15 sm:h-20 sm:w-20" />

            <div className="absolute bottom-[8%] left-[8%] h-12 w-12 rounded-full bg-[#63B9D5]/15 sm:h-16 sm:w-16" />

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

                    {/* STATUS ICONS */}
                    <div className="flex items-center gap-1">
                      <span>5G</span>

                      <span className="h-[7px] w-[12px] rounded-[2px] border border-current p-[1px]">
                        <span className="block h-full w-[75%] rounded-[1px] bg-current" />
                      </span>
                    </div>

                  </div>

                  {/* APP SCREEN IMAGE */}
                  <Image
                    src="/14.jpg"
                    alt="Ekhoon app nearby technician discovery"
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

            {/* FLOATING LOCATION CARD */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[15%] z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(7,62,108,0.10)] min-[400px]:left-1 sm:left-2 sm:gap-3 sm:p-3"
            >

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-10 sm:w-10">
                <MapPinned size={19} />
              </div>

              <div>
                <p className="text-[9px] font-bold text-[#073E6C] sm:text-xs">
                  Nearby Services
                </p>

                <p className="text-[8px] text-[#6883A1] sm:text-[10px]">
                  Around your area
                </p>
              </div>

            </motion.div>

            {/* FLOATING BOTTOM CARD */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] right-0 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(7,62,108,0.10)] min-[400px]:right-1 sm:right-2 sm:gap-3 sm:p-3"
            >

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 sm:h-10 sm:w-10">
                <CheckCircle2 size={19} />
              </div>

              <div>
                <p className="text-[9px] font-bold text-[#073E6C] sm:text-xs">
                  Easy Discovery
                </p>

                <p className="text-[8px] text-[#6883A1] sm:text-[10px]">
                  Find your technician
                </p>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Service2;
