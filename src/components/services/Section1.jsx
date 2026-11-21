
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Smartphone,
  CheckCircle2,
  Wrench,
  MapPin,
} from "lucide-react";

const Section1 = () => {
  const services = [
    "Electrician",
    "Plumber",
    "AC Technician",
    "TV Repair",
    "Appliance Repair",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC]">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#63B9D5]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FE8C00]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1540px] grid-cols-1 items-center gap-12 px-4 py-12 min-[400px]:px-5 min-[400px]:py-14 sm:gap-14 sm:px-8 sm:py-16 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-24 xl:px-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex w-full flex-col items-start lg:pr-4 xl:pr-8"
        >
     
        
          {/* HEADING */}
          <h1
            style={{ fontFamily: "Amplesoft, sans-serif" }}
            className="max-w-[650px] text-[34px] font-bold leading-[1.13] tracking-tight text-[#073E6C] min-[400px]:text-[38px] sm:text-5xl md:text-[54px] lg:text-[48px] xl:text-[58px]"
          >
            Home Services
            <span className="block text-[#63B9D5]">
              Made Easier with
            </span>
            <span className="block">
              Ekhoon App.
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-sm font-semibold text-[#FE8C00] sm:text-base">
            Find. Request. Get it done.
          </p>

          {/* DESCRIPTION */}
          <p className="mt-3 max-w-[540px] text-[13px] leading-7 text-[#6883A1] min-[400px]:text-sm sm:text-base sm:leading-8">
            Discover service professionals, send your service requests,
            and connect with technicians through the Ekhoon mobile app.
            Get a simpler way to manage your everyday home service needs.
          </p>

          {/* SERVICES */}
          <div className="mt-6 flex max-w-[560px] flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[#073E6C]/10 bg-white px-3 py-2 text-[10px] font-medium text-[#6883A1] shadow-sm min-[400px]:text-xs"
              >
                {service}
              </span>
            ))}

            <span className="rounded-full border border-[#FE8C00]/20 bg-[#FE8C00]/5 px-3 py-2 text-[10px] font-semibold text-[#FE8C00] min-[400px]:text-xs">
              + More
            </span>
          </div>

   
        </motion.div>

        {/* RIGHT IPHONE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-[500px] items-center justify-center py-8 sm:py-10 lg:mx-0 lg:justify-end lg:py-0"
        >

          {/* BACKGROUND SHAPE */}
          <div className="absolute h-[85%] w-[85%] rounded-[40px] bg-[#073E6C]/5 sm:rounded-[55px]" />

          {/* DECORATIVE CIRCLE */}
          <div className="absolute right-[8%] top-[8%] h-14 w-14 rounded-full border-[9px] border-[#FE8C00]/20 sm:h-20 sm:w-20" />

          <div className="absolute bottom-[8%] left-[8%] h-12 w-12 rounded-full bg-[#63B9D5]/20 sm:h-16 sm:w-16" />

          {/* FLOATING IPHONE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[205px] min-[400px]:w-[225px] sm:w-[260px] md:w-[280px] lg:w-[290px] xl:w-[320px]"
          >

            {/* IPHONE SIDE BUTTONS */}
            <div className="absolute -left-[5px] top-[17%] z-0 h-8 w-[5px] rounded-l-md bg-[#8B9BAA] sm:h-10" />
            <div className="absolute -left-[5px] top-[25%] z-0 h-12 w-[5px] rounded-l-md bg-[#8B9BAA] sm:h-14" />
            <div className="absolute -left-[5px] top-[36%] z-0 h-12 w-[5px] rounded-l-md bg-[#8B9BAA] sm:h-14" />
            <div className="absolute -right-[5px] top-[27%] z-0 h-16 w-[5px] rounded-r-md bg-[#8B9BAA] sm:h-20" />

            {/* TITANIUM FRAME */}
            <div className="relative z-10 rounded-[38px] border-[5px] border-[#AAB6C2] bg-[#202B38] p-[3px] shadow-[0_30px_65px_rgba(7,62,108,0.25)] sm:rounded-[48px] sm:border-[6px]">

              {/* INNER FRAME */}
              <div className="relative overflow-hidden rounded-[32px] border border-[#526170] bg-white sm:rounded-[40px]">

                {/* STATUS BAR */}
                <div className="absolute left-0 right-0 top-0 z-30 flex h-9 items-center justify-between px-5 text-[9px] font-bold text-[#073E6C] sm:h-11 sm:px-6 sm:text-[10px]">
                  <span>9:41</span>

                  {/* DYNAMIC ISLAND */}
                  <div className="absolute left-1/2 top-[6px] flex h-[21px] w-[65px] -translate-x-1/2 items-center justify-center rounded-full bg-black sm:top-[7px] sm:h-[25px] sm:w-[82px]">
                    <div className="absolute right-[9px] h-[5px] w-[5px] rounded-full bg-[#263344]" />
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">5G</span>
                    <span className="h-[7px] w-[13px] rounded-[2px] border border-current p-[1px]">
                      <span className="block h-full w-[75%] rounded-[1px] bg-current" />
                    </span>
                  </div>
                </div>

                {/* APP SCREEN */}
                <div className="relative overflow-hidden bg-white pt-0">
                  <Image
                    src="/11.jpg"
                    alt="Ekhoon mobile application preview"
                    width={620}
                    height={700}
                    priority
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 640px) 65vw, 320px"
                  />
                </div>

                {/* HOME INDICATOR */}
                <div className="absolute bottom-[5px] left-1/2 z-30 h-[4px] w-[75px] -translate-x-1/2 rounded-full bg-black/80 sm:bottom-[7px] sm:h-[5px] sm:w-[95px]" />

              </div>
            </div>

            {/* MOCKUP SHADOW */}
            <div className="absolute -bottom-5 left-[15%] -z-10 h-8 w-[70%] rounded-full bg-[#073E6C]/15 blur-xl" />

          </motion.div>

          {/* FLOATING CARD 1 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[17%] z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-[0_10px_30px_rgba(7,62,108,0.10)] min-[400px]:left-0 min-[400px]:p-3 sm:left-1 sm:gap-3 sm:p-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-11 sm:w-11">
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-[9px] font-bold text-[#073E6C] sm:text-sm">
                Nearby Services
              </p>
              <p className="text-[8px] text-[#6883A1] sm:text-xs">
                Find professionals
              </p>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[14%] right-0 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-[0_10px_30px_rgba(7,62,108,0.10)] min-[400px]:right-0 min-[400px]:p-3 sm:right-1 sm:gap-3 sm:p-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 sm:h-11 sm:w-11">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <p className="text-[9px] font-bold text-[#073E6C] sm:text-sm">
                Easy Booking
              </p>
              <p className="text-[8px] text-[#6883A1] sm:text-xs">
                Request a service
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
