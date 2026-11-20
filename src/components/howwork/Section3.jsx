
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

      <div className="relative mx-auto w-full max-w-[1540px] px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">

        {/* STEP 03 */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex w-full items-center justify-center lg:justify-start"
          >
            {/* Background Shape */}
            <div className="absolute h-[85%] w-[85%] rounded-[40px] bg-[#073E6C]/5 sm:rounded-[50px]" />

            {/* Decorative Circles */}
            <div className="absolute left-[8%] top-[8%] h-14 w-14 rounded-full border-[9px] border-[#FE8C00]/15 sm:h-20 sm:w-20" />

            <div className="absolute bottom-[8%] right-[8%] h-12 w-12 rounded-full bg-[#63B9D5]/15 sm:h-16 sm:w-16" />

            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[260px] min-[400px]:max-w-[290px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[490px]">
              <Image
                src="/ekhon app2.png"
                alt="Ekhoon app service request screen"
                width={620}
                height={700}
                className="h-auto w-full object-contain drop-shadow-[0_15px_25px_rgba(7,62,108,0.10)]"
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[15%] z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-[0_10px_30px_rgba(7,62,108,0.10)] sm:left-2 sm:gap-3 sm:p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00] sm:h-11 sm:w-11">
                <ClipboardList size={21} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#073E6C] sm:text-sm">
                  Service Request
                </p>

                <p className="text-[9px] text-[#6883A1] sm:text-xs">
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
              className="absolute bottom-[12%] right-0 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-[0_10px_30px_rgba(7,62,108,0.10)] sm:right-1 sm:gap-3 sm:p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 sm:h-11 sm:w-11">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#073E6C] sm:text-sm">
                  Request Sent
                </p>

                <p className="text-[9px] text-[#6883A1] sm:text-xs">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073E6C] text-base font-bold text-white shadow-lg shadow-[#073E6C]/15 sm:h-14 sm:w-14 sm:text-lg">
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
