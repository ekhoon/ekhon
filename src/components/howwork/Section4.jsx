"use client";

import React from "react";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1442px]

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
            STEP 04
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
              LEFT CONTENT
          ========================== */}

          <div
            className="
              order-2
              w-full
              max-w-[560px]

              lg:order-1
              lg:pr-8

              xl:pr-10
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
              04
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
              Technician Accepts Your Request
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
              Get connected with an available technician.
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
              A nearby technician can receive your request and accept the
              job. Once accepted, you’ll be notified and can see the
              connection in the app.
            </p>

            {/* ICON */}
            <div
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

                  sm:h-10
                  sm:w-10
                "
              >
                <Image
                  src="/icon-pin.png"
                  width={30}
                  height={30}
                  alt="Request accepted"
                />
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================== */}

          <div
            className="
              order-1
              flex
              w-full
              items-center
              justify-center

              lg:order-2
              lg:justify-end
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
                alt="Technician accepts your request"
                width={620}
                height={700}
                className="
                  h-auto
                  w-full
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;