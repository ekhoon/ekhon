"use client";

import React from "react";
import Image from "next/image";

const Service2 = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-5


          sm:px-8
          sm:py-20

          md:px-10

          lg:px-16

          xl:px-12
        "
      >
        {/* =========================
            STEP 02
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
              LEFT CONTENT
          ========================== */}
          <div
            className="
              w-full
              max-w-[520px]

              lg:order-1
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
              02
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
              Find Nearby Technicians
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
              Find service professionals near you
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
              Ekhoon uses your location to help you discover nearby technicians
              and service providers. You can see available professionals around
              your area and choose the service you need without depending only
              on recommendations from friends, Facebook groups, or local
              contacts.
            </p>

            {/* =========================
                LOCATION ICON
            ========================== */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
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

          {/* =========================
              RIGHT IMAGE
          ========================== */}
          <div
            className="
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

                min-h-[260px]

                sm:min-h-[320px]

                md:min-h-[360px]
              "
            >
              <Image
                src="/ekhon app2.png"
                alt="ekhon app"
                width={620}
                height={700}
                priority
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
        </div>
      </div>
    </section>
  );
};

export default Service2;