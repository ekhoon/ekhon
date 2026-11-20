
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Send,
  ClipboardList,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

const Section3 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#FE8C00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#63B9D5]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1540px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT - IPHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[390px] w-full items-center justify-center sm:min-h-[470px] lg:justify-start"
          >
            {/* Background Shape */}
            <div className="absolute h-[82%] w-[85%] rounded-[35px] bg-[#073E6C]/5 sm:rounded-[50px]" />

            {/* Decorative Circles */}
            <div className="absolute left-[8%] top-[8%] h-14 w-14 rounded-full border-[9px] border-[#FE8C00]/15 sm:h-20 sm:w-20" />

            <div className="absolute bottom-[8%] right-[8%] h-12 w-12 rounded-full bg-[#63B9D5]/15 sm:h-16 sm:w-16" />

            {/* iPhone Frame */}
            <div className="relative z-10">

              {/* Side Buttons */}
              <div className="absolute -left-[7px] top-[75px] h-12 w-[5px] rounded-l-md bg-[#8493A2] sm:top-[90px] sm:h-14" />
              <div className="absolute -left-[7px] top-[140px] h-9 w-[5px] rounded-l-md bg-[#8493A2] sm:top-[160px]" />

              <div className="absolute -right-[7px] top-[105px] h-16 w-[5px] rounded-r-md bg-[#8493A2] sm:top-[125px] sm:h-20" />

              {/* Outer Titanium Frame */}
              <div className="w-[185px] rounded-[35px] border-[5px] border-[#AAB6C2] bg-[#202B38] p-[3px] shadow-[0_25px_60px_rgba(7,62,108,0.22)] min-[400px]:w-[200px] sm:w-[225px] sm:rounded-[42px] sm:p-[4px] md:w-[245px] lg:w-[255px]">

                {/* Inner Screen */}
                <div className="relative overflow-hidden rounded-[29px] border border-[#526170] bg-white sm:rounded-[35px]">

                  {/* Status Bar */}
                  <div className="absolute left-0 right-0 top-0 z-30 flex h-9 items-center justify-between px-5 text-[9px] font-bold text-black sm:h-11 sm:px-6 sm:text-[10px]">
                    <span>9:41</span>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px]">●</span>
                      <span className="text-[9px]">▮▮</span>
                      <span className="text-[9px]">▰</span>
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 top-[7px] z-40 h-[19px] w-[68px] -translate-x-1/2 rounded-full bg-black sm:top-[9px] sm:h-[22px] sm:w-[78px]" />

                  {/* App Screenshot */}
                  <Image
                    src="/13-1.jpg"
                    alt="Ekhoon app service request screen"
                    width={620}
                    height={700}
                    priority
                    className="h-auto w-full object-cover"
                  />

                  {/* Home Indicator */}
                  <div className="absolute bottom-[7px] left-1/2 z-30 h-[4px] w-[65px] -translate-x-1/2 rounded-full bg-black sm:bottom-[9px] sm:w-[75px]" />
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[17%] z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(7,62,108,0.12)] min-[400px]:left-1 sm:left-2 sm:gap-3 sm:p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-11 sm:w-11">
                <ClipboardList size={19} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#073E6C] sm:text-sm">
                  Service Request
                </p>
                <p className="text-[8px] text-[#6883A1] sm:text-xs">
                  Submit your needs
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[14%] right-0 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(7,62,108,0.12)] min-[400px]:right-1 sm:right-2 sm:gap-3 sm:p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 sm:h-11 sm:w-11">
                <CheckCircle2 size={19} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#073E6C] sm:text-sm">
                  Request Sent
                </p>
                <p className="text-[8px] text-[#6883A1] sm:text-xs">
                  Ready for response
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#073E6C] text-base font-bold text-white shadow-lg shadow-[#073E6C]/15 sm:h-14 sm:w-14 sm:text-lg">
                03
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#FE8C00] sm:text-xs">
                  Step Three
                </p>
                <p className="mt-1 text-xs font-medium text-[#6883A1]">
                  Tell us what service you need
                </p>
              </div>
            </div>

            {/* Title */}
            <h2
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="text-[28px] font-bold leading-tight text-[#073E6C] min-[400px]:text-3xl sm:text-4xl md:text-[42px] lg:text-[38px] xl:text-[44px]"
            >
              Send a
              <span className="block text-[#63B9D5]">
                Service Request
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-base font-semibold text-[#FE8C00] sm:text-lg">
              Request the service you need.
            </p>

            {/* Description */}
            <p className="mt-4 max-w-[560px] text-sm leading-7 text-[#6883A1] sm:text-base sm:leading-8">
              Once you find the right service, send a request through the
              Ekhoon app. Your request is sent to available technicians who
              can respond to your service need. You don't need to spend hours
              calling different people to find someone available.
            </p>

            {/* Information Cards */}
            <div className="mt-7 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-8 sm:gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-[#073E6C]/10 bg-white p-3 shadow-sm sm:p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00]">
                  <Smartphone size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#073E6C] sm:text-sm">
                    Through App
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#6883A1] sm:text-xs">
                    Easy request process
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#073E6C]/10 bg-white p-3 shadow-sm sm:p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#63B9D5]/15 text-[#073E6C]">
                  <Send size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#073E6C] sm:text-sm">
                    Send Request
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#6883A1] sm:text-xs">
                    Share your service needs
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F8FAFC] p-4 sm:mt-8">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#FE8C00]"
              />

              <p className="text-xs leading-6 text-[#6883A1] sm:text-sm">
                Submit your service request through the Ekhoon app
                and let available professionals respond to your needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
