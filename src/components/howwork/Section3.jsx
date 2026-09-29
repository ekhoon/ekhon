"use client";

import React from "react";
import Image from "next/image";

const Section3 = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]

          px-3
          py-10

          min-[400px]:px-4
          min-[400px]:py-12

          sm:px-6
          sm:py-14

          md:px-12
          md:py-16

          lg:px-20
          lg:py-16
        "
      >
        {/* =========================
            STEP 03
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center

            gap-8

            min-[400px]:gap-10

            sm:gap-12

            md:gap-14

            lg:grid-cols-2
            lg:gap-8

            xl:gap-12
          "
        >
          {/* =========================
              LEFT IMAGE
          ========================== */}

          <div
            className="
              flex
              w-full
              items-center
              justify-center

              lg:justify-start
            "
          >
            <div
              className="
                relative
                flex
                w-full
                items-center
                justify-center

                max-w-[300px]

                min-[400px]:max-w-[320px]

                sm:max-w-[340px]

                md:max-w-[350px]

                lg:max-w-[360px]

                xl:max-w-[380px]
              "
            >
              <Image
                src="/ekhon app2.png"
                alt="Send a service request"
                width={620}
                height={700}
                priority
                className="
                  h-auto
                  w-full
                  object-contain
                "
              />
            </div>
          </div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}

          <div
            className="
              w-full
              max-w-[560px]

              lg:pl-8

              xl:pl-10
            "
          >
            {/* NUMBER */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mb-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#e8f4ff]
                text-sm
                font-bold
                text-[#1685e8]

                min-[400px]:h-11
                min-[400px]:w-11

                sm:h-14
                sm:w-14
                sm:text-lg
              "
            >
              03
            </div>

            {/* TITLE */}
            <h2
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                text-[22px]
                font-bold
                leading-tight
                text-[#092e5c]

                min-[400px]:text-2xl

                sm:text-3xl

                md:text-[32px]

                lg:text-[30px]

                xl:text-[32px]
              "
            >
              Send a Service Request
            </h2>

            {/* SUBTITLE */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-2
                text-[13px]
                font-semibold
                text-[#63B9D5]

                min-[400px]:text-sm

                sm:text-base
              "
            >
              Request the service you need.
            </p>

            {/* DESCRIPTION */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-3
                text-[12px]
                leading-6
                text-[#6883a1]

                min-[400px]:text-[13px]

                sm:text-sm
                sm:leading-7

                md:text-[15px]
              "
            >
              Once you find the right service, send a request through the
              Ekhoon app. Your request is sent to available technicians who
              can respond to your service need. You don't need to spend hours
              calling different people to find someone available.
            </p>

            {/* SERVICE ICON */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-2
                inline-flex
                items-center
                rounded-full
                px-3
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  text-lg

                  sm:h-10
                  sm:w-10
                "
              >
                <Image
                  className="rotate-[180deg]"
                  src="/icon-pin.png"
                  width={30}
                  height={30}
                  alt="location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;