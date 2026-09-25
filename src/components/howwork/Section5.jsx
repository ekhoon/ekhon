"use client";

import React from "react";
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-5

          sm:px-8


          md:px-10

          lg:px-16

          xl:px-12
        "
      >
        {/* =========================
            STEP 05
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8

            sm:gap-10

            md:gap-12

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

                min-h-[260px]

                sm:min-h-[320px]

                md:min-h-[360px]
              "
            >
              <Image
                src="/ekhon app2.png"
                alt="Get your service done"
                width={620}
                height={700}
                className="
                  h-auto
                  w-full
                  max-w-[380px]
                  object-contain

                  sm:max-w-[420px]

                  md:max-w-[320px]

                  lg:max-w-[300px]
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
              max-w-[520px]

              lg:pl-8

              xl:pl-10
            "
          >
            {/* =========================
                NUMBER
            ========================== */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#e8f4ff]
                text-base
                font-bold
                text-[#1685e8]

                sm:h-14
                sm:w-14
                sm:text-lg
              "
            >
              05
            </div>

            {/* =========================
                TITLE
            ========================== */}
            <h2
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                text-2xl
                font-bold
                leading-tight
                text-[#092e5c]

                sm:text-3xl

                md:text-[32px]

                lg:text-[30px]

                xl:text-[32px]
              "
            >
              Get Your Service Done
            </h2>

            {/* =========================
                SUBTITLE
            ========================== */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-2
                text-sm
                font-semibold
                text-[#63B9D5]

                sm:text-base
              "
            >
              The technician comes to your location.
            </p>

            {/* =========================
                DESCRIPTION
            ========================== */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-3
                text-[13px]
                leading-6
                text-[#6883a1]

                sm:text-sm
                sm:leading-7

                md:text-[15px]
              "
            >
              After your request is accepted, the technician comes to your
              location and provides the requested service. From home repairs
              and electrical work to plumbing, AC servicing, appliance
              repair, painting and more — Ekhoon is designed to make finding
              everyday service professionals easier.
            </p>

            {/* =========================
                ICON
            ========================== */}
            <div
              className="
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

                  sm:h-10
                  sm:w-10
                "
              >
                <Image
                  src="/icon-pin.png"
                  width={30}
                  height={30}
                  alt="Service completed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;