
"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Volume2,
  VolumeX,
  Play,
} from "lucide-react";

const VIDEO_ID = "pfffJ6tgj6I";

const HowWorks = () => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  const handleSoundToggle = () => {
    const nextMuted = !isMuted;

    setIsMuted(nextMuted);

    // YouTube IFrame API postMessage commands
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: nextMuted ? "mute" : "unMute",
        args: [],
      }),
      "https://www.youtube.com"
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#FE8C00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#63B9D5]/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1540px] px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 w-full"
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FE8C00]/20 bg-[#FE8C00]/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FE8C00]" />

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#FE8C00] sm:text-sm">
                How Ekhoon Works
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="max-w-[650px] text-[34px] font-bold leading-[1.12] tracking-tight text-[#073E6C] min-[400px]:text-[38px] sm:text-[46px] md:text-[54px] lg:text-[48px] xl:text-[58px]"
            >
              Find the Right

              <span className="block text-[#63B9D5]">
                Technician for Your
              </span>

              <span className="text-[#073E6C]">
                Home Service Needs
              </span>
            </h1>

            {/* Description */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="mt-5 max-w-[560px] text-sm leading-7 text-[#6883A1] sm:mt-6 sm:text-base sm:leading-8"
            >
              Need a technician for a home repair or maintenance job?
              Ekhoon helps you find nearby service professionals for
              different types of home services. Send a request, connect
              with an available technician, and get your service done
              at your convenience.
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-8 sm:gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-[#073E6C]/5 bg-white p-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FE8C00]/10 text-[#FE8C00]">
                  <ShieldCheck size={21} />
                </div>

                <span className="text-sm font-semibold text-[#073E6C]">
                  Trusted Professionals
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#073E6C]/5 bg-white p-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#63B9D5]/15 text-[#073E6C]">
                  <Clock3 size={21} />
                </div>

                <span className="text-sm font-semibold text-[#073E6C]">
                  Convenient Service
                </span>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-7 flex flex-wrap items-center gap-2 text-xs font-medium text-[#6883A1] sm:mt-8 sm:text-sm">
              <CheckCircle2 size={17} className="shrink-0 text-[#FE8C00]" />
              <span>Simple process</span>

              <span className="mx-1 h-1 w-1 rounded-full bg-[#FE8C00]" />

              <span>Easy connection</span>

              <span className="mx-1 h-1 w-1 rounded-full bg-[#FE8C00]" />

              <span>Home service made easier</span>
            </div>
          </motion.div>

          {/* RIGHT YOUTUBE VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative w-full"
          >
            {/* Video Card */}
            <div className="relative rounded-2xl border border-[#073E6C]/10 bg-white p-2.5 shadow-[0_20px_60px_rgba(7,62,108,0.12)] sm:rounded-3xl sm:p-3 md:p-4">

              {/* Video Header */}
              <div className="mb-3 flex items-center justify-between px-1 sm:mb-4 sm:px-2">
                <div>
                  <p className="text-sm font-bold text-[#073E6C] sm:text-base">
                    Discover Ekhoon
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#6883A1] sm:text-xs">
                    See how our platform works
                  </p>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1.5 sm:px-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                  <span className="text-[10px] font-bold text-green-700 sm:text-xs">
                    VIDEO
                  </span>
                </div>
              </div>

              {/* Responsive YouTube Embed */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#073E6C] sm:rounded-2xl">
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&playsinline=1&controls=1&rel=0&enablejsapi=1`}
                  title="How Ekhoon Works"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Video Footer / Sound Control */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-1 pt-4 sm:px-2 sm:pt-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FE8C00]/10 text-[#FE8C00]">
                    <Play size={16} fill="currentColor" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#073E6C] sm:text-sm">
                      How It Works
                    </p>

                    <p className="text-[10px] text-[#6883A1] sm:text-xs">
                      Watch and explore
                    </p>
                  </div>
                </div>

                {/* Sound Toggle */}
                <button
                  type="button"
                  onClick={handleSoundToggle}
                  aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
                  aria-pressed={!isMuted}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                    isMuted
                      ? "bg-[#073E6C] text-white hover:bg-[#FE8C00]"
                      : "bg-[#FE8C00] text-white hover:bg-[#073E6C]"
                  }`}
                >
                  {isMuted ? (
                    <>
                      <VolumeX size={17} />
                      Sound Off
                    </>
                  ) : (
                    <>
                      <Volume2 size={17} />
                      Sound On
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-3 -top-3 -z-10 h-20 w-20 rounded-full bg-[#FE8C00]/15 blur-xl sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />

            <div className="pointer-events-none absolute -bottom-4 -left-3 -z-10 h-24 w-24 rounded-full bg-[#63B9D5]/20 blur-2xl sm:-bottom-6 sm:-left-5 sm:h-32 sm:w-32" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
