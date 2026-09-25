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
          max-w-[1200px]
          px-5


          sm:px-8


          md:px-10


          lg:px-16
   

          xl:px-12
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
              order-2
              w-full
              max-w-[520px]

              lg:order-1
              lg:pr-8

              xl:pr-10
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
              04
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
              Technician Accepts Your Request
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
                text-[#1685e8]

                sm:text-base
              "
            >
              Get connected with an available technician.
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
              A nearby technician can receive your request and accept the
              job. Once accepted, you’ll be notified and can see the
              connection in the app.
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

                min-h-[260px]

                sm:min-h-[320px]

                md:min-h-[360px]
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

export default Section4;