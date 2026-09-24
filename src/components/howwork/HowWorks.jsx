"use client";

import React from "react";
import Image from "next/image";

const HowWorks = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1100px]
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-16

          lg:px-16
          lg:py-20
        "
      >
        {/* =========================
            SECTION 1
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10

            sm:gap-12

            md:gap-10

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
              z-10
              w-full
              max-w-[600px]

              lg:pr-4
            "
          >
            {/* Badge */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mb-4
                inline-flex
                items-center
                rounded-full
                bg-[#e8f4ff]
                px-4
                py-1.5
                text-[11px]
                font-semibold
                text-[#1685e8]

                sm:mb-5
                sm:text-xs
              "
            >
              How Ekhoon Works
            </div>

            {/* Heading */}
            <h2
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="
                text-[38px]
                font-semibold
                leading-[1.05]
                tracking-tight
                text-[#092e5c]

                min-[400px]:text-[42px]

                sm:text-[48px]

                md:text-[52px]

                lg:text-[46px]

                xl:text-[56px]
              "
            >
              Find a service.
              <br />

              <span className="text-[#1685e8]">
                Request a technician.
              </span>

              <br />

              Get the job done.
            </h2>

            {/* Description */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-5
                max-w-[560px]
                text-[13px]
                leading-6
                text-[#6883a1]

                sm:mt-6
                sm:text-sm
                sm:leading-7

                md:text-base

                lg:max-w-[520px]
              "
            >
              Ekhoon helps you find trusted and nearby service professionals
              for all your home service needs. From small repairs to regular
              maintenance, we make it simple and quick.
            </p>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================== */}
          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center

              min-h-[320px]

              sm:min-h-[400px]

              md:min-h-[460px]

              lg:min-h-[480px]

              xl:min-h-[540px]
            "
          >
            <Image
              src="/Photoroom1.png"
              alt="How Ekhoon works"
              width={1000}
              height={700}
              priority
              className="
                h-auto
                w-full
                max-w-[520px]
                object-contain

                sm:max-w-[580px]

                md:max-w-[620px]

                lg:max-w-[560px]

                xl:max-w-[650px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;