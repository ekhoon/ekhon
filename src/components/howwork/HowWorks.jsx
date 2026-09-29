"use client";

import React from "react";
import Image from "next/image";

const HowWorks = () => {
  return (
    <section className="w-full overflow-hidden">
      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]

          px-3

          min-[400px]:px-4

          sm:px-6

          md:px-12

          lg:px-20
        "
      >
        <div
          className="
            grid
            w-full
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
          {/* LEFT CONTENT */}
          <div
            className="
              z-10
              w-full

              lg:pr-2

              xl:pr-0
            "
          >
            {/* Heading */}
            <h2
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                font-semibold
                leading-[1.05]
                tracking-tight
                text-[#073E6C]

                text-[32px]

                min-[400px]:text-[35px]

                sm:text-[42px]

                md:text-[48px]

                lg:text-[45px]

                xl:text-[52px]
              "
            >
              Find the right
              <br />

              <span className="text-[#63B9D5]">
                technician for your
              </span>

              <br />

              <span className="whitespace-nowrap">
                home service needs
              </span>
            </h2>

            {/* Description */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-4
                w-full
                max-w-[560px]
                text-[12px]
                leading-6
                text-[#6883a1]

                min-[400px]:mt-5
                min-[400px]:text-[13px]

                sm:mt-6
                sm:text-sm
                sm:leading-7

                md:text-base

                lg:max-w-[540px]
              "
            >
              Need a technician for a home repair or maintenance job?
              Ekhoon helps you find nearby service professionals for
              different types of home services. Send a request, connect
              with an available technician, and get your service done
              at your convenience.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center
              overflow-visible

              min-h-[280px]

              min-[400px]:min-h-[320px]

              sm:min-h-[360px]

              md:min-h-[420px]

              lg:min-h-[500px]

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
                object-contain

                max-w-[380px]

                min-[400px]:max-w-[430px]

                sm:max-w-[500px]

                md:max-w-[560px]

                lg:max-w-[620px]

                xl:max-w-[700px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;