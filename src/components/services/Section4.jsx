"use client";

import React from "react";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find a Service",
    description:
      "Choose the service you need from our verified residential categories.",
    icon: <Search size={18} strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Send a Request",
    description:
      "Tell us what you need and where you need it with your preferred schedule.",
    icon: <ShieldCheck size={18} strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Get It Done",
    description:
      "Connect with an available service professional and have the work completed cleanly.",
    icon: <CheckCircle2 size={18} strokeWidth={1.8} />,
  },
];

const Section4 = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* ================= HEADING ================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]

          px-3
          pt-4

          min-[400px]:px-4
          min-[400px]:pt-6

          sm:px-6
          sm:pt-8

          md:px-12

          lg:px-20
        "
      >
        <div className="mx-auto w-full max-w-2xl text-center">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-gray-500

              min-[400px]:text-[11px]

              sm:text-xs
            "
          >
            Simple &amp; Transparent
          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-bold
              tracking-tight
              text-gray-900

              min-[400px]:text-[26px]

              sm:text-3xl

              md:text-[32px]
            "
          >
            How Ekhon Works
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-xl
              text-[12px]
              leading-6
              text-gray-600

              min-[400px]:text-[13px]

              sm:text-sm
              sm:leading-6
            "
          >
            Three straightforward steps to resolve your home repair and
            maintenance needs without hassles.
          </p>
        </div>
      </div>

      {/* ================= STEPS ================= */}
      <div
        className="
          mx-auto
          mt-8
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-4

          px-3

          min-[400px]:gap-5
          min-[400px]:px-4

          sm:grid-cols-2
          sm:gap-6
          sm:px-6

          md:px-12

          lg:grid-cols-3
          lg:px-20
        "
      >
        {steps.map((step) => (
          <div
            key={step.number}
            className="
              group
              flex
              min-h-[170px]
              flex-col
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              shadow-sm
              transition-all
              duration-300

              min-[400px]:p-5

              hover:-translate-y-1
              hover:shadow-md
            "
          >
            {/* Number + Icon */}
            <div className="flex items-center justify-between">
              <span
                className="
                  text-[11px]
                  font-semibold
                  text-gray-400

                  sm:text-xs
                "
              >
                {step.number}
              </span>

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-gray-100
                  text-gray-800
                  transition-colors

                  group-hover:bg-gray-900
                  group-hover:text-white
                "
              >
                {step.icon}
              </div>
            </div>

            {/* Title */}
            <h3
              className="
                mt-5
                text-base
                font-semibold
                text-gray-900

                min-[400px]:mt-6
              "
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-2
                text-[12px]
                leading-5
                text-gray-600

                min-[400px]:text-[13px]

                sm:text-sm
                sm:leading-6
              "
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div
        className="
          relative
          mt-10
          overflow-hidden
      
          border-gray-200

          min-[400px]:mt-12

          sm:mt-14

          md:mt-16
        "
      >
    

  

        {/* CTA Content */}
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[260px]
            w-full
            max-w-2xl
            flex-col
            items-center
            justify-center
            px-3
            py-10
            text-center

            min-[400px]:min-h-[280px]
            min-[400px]:px-4
            min-[400px]:py-12

            sm:px-6
          "
        >
          <h3
            className="
              text-xl
              font-bold
              tracking-tight
              text-gray-900

              min-[400px]:text-[22px]

              sm:text-2xl
            "
          >
            Need a Service at Home?
          </h3>

          <p
            className="
              mt-3
              max-w-xl
              text-[12px]
              leading-6
              text-gray-600

              min-[400px]:text-[13px]

              sm:text-sm
              sm:leading-6
            "
          >
            Don’t waste time searching through Facebook groups or asking
            around for a technician. Tell us what you need, find available
            service professionals near you, and get the help you need at
            home.
          </p>

          {/* Button */}
          <button
            type="button"
            className="
              group
              mt-6
              flex
              items-center
              gap-2
              rounded-xl
              bg-gray-900
              px-5
              py-3
              text-xs
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-200

              hover:bg-gray-800
              hover:shadow-md

              sm:text-sm
            "
          >
            <span>Find a Service</span>

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-200

                group-hover:translate-x-1
              "
            />
          </button>

          {/* Trust Text */}
          <div
            className="
              mt-5
              flex
              items-start
              justify-center
              gap-2
              text-[10px]
              leading-5
              text-gray-600

              min-[400px]:items-center

              sm:text-xs
            "
          >
            <ShieldCheck
              size={15}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-gray-700 min-[400px]:mt-0"
            />

            <span>
              Direct connection to verified local professionals in Bangladesh.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;