
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Smartphone,
  Download,
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

      <div className="relative mx-auto grid w-full max-w-[1540px] grid-cols-1 items-center gap-10 px-4 py-12 min-[400px]:py-14 sm:gap-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-20 lg:py-24">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex w-full flex-col items-start lg:pr-4 xl:pr-8"
        >
          {/* BADGE */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#63B9D5]/25 bg-white px-3 py-2 shadow-sm sm:px-4">
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-semibold text-[#073E6C] min-[400px]:text-xs">
              Your Everyday Home Service Partner
            </span>
          </div>

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

          {/* ACTION BUTTONS */}
          <div className="mt-7 flex w-full flex-wrap items-center gap-3 sm:mt-8">

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#073E6C] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-[#073E6C]/15 transition hover:bg-[#092e5c] min-[400px]:px-6 sm:text-sm"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#073E6C]/15 bg-white px-5 py-3 text-xs font-semibold text-[#073E6C] transition hover:bg-[#073E6C]/5 min-[400px]:px-6 sm:text-sm"
            >
              <Wrench size={16} />
              Send a Request
            </Link>
          </div>

          {/* APP INFORMATION */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#073E6C]/10 pt-5 sm:mt-9">

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#63B9D5]/15 text-[#073E6C]">
                <Smartphone size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#073E6C] sm:text-xs">
                  Mobile App
                </p>
                <p className="text-[9px] text-[#6883A1] sm:text-[11px]">
                  A convenient experience
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#073E6C] sm:text-xs">
                  Easy Requests
                </p>
                <p className="text-[9px] text-[#6883A1] sm:text-[11px]">
                  Connect with technicians
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT APP IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex w-full items-center justify-center lg:justify-end"
        >
          {/* BACKGROUND SHAPE */}
          <div className="absolute h-[85%] w-[85%] rounded-[40px] bg-[#073E6C]/5 sm:rounded-[55px]" />

          {/* DECORATIVE CIRCLE */}
          <div className="absolute right-[8%] top-[8%] h-14 w-14 rounded-full border-[9px] border-[#FE8C00]/20 sm:h-20 sm:w-20" />

          <div className="absolute bottom-[8%] left-[8%] h-12 w-12 rounded-full bg-[#63B9D5]/20 sm:h-16 sm:w-16" />

          {/* MAIN APP IMAGE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[280px] min-[400px]:max-w-[310px] sm:max-w-[370px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[500px]"
          >
            <Image
              src="/ekhon app2.png"
              alt="Ekhoon mobile application preview"
              width={620}
              height={700}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(7,62,108,0.14)]"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 500px"
            />
          </motion.div>

          {/* FLOATING CARD 1 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[17%] z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(7,62,108,0.10)] min-[400px]:left-1 min-[400px]:p-3 sm:left-2 sm:gap-3 sm:p-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-11 sm:w-11">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#073E6C] sm:text-sm">
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
            className="absolute bottom-[14%] right-0 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(7,62,108,0.10)] min-[400px]:right-1 min-[400px]:p-3 sm:right-2 sm:gap-3 sm:p-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 sm:h-11 sm:w-11">
              <CheckCircle2 size={20} />
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#073E6C] sm:text-sm">
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
