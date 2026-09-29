"use client";

import React from "react";
import { Wrench, MapPin, ArrowRight } from "lucide-react";

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
        {/* ================= COMPREHENSIVE SUPPORT ================= */}
        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-4
            shadow-sm

            min-[400px]:p-5

            sm:p-6

            md:p-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-10
            "
          >
            {/* Left Content */}
            <div className="w-full max-w-3xl">
              {/* Label */}
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-100
                  "
                >
                  <Wrench className="h-4 w-4 text-gray-800" />
                </div>

                <span
                  className="
                    text-xs
                    font-semibold
                    text-gray-700

                    sm:text-sm
                  "
                >
                  Comprehensive Support
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  text-base
                  font-semibold
                  text-gray-900

                  min-[400px]:text-[17px]

                  sm:text-lg
                "
              >
                General Home Services
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  max-w-2xl
                  text-[12px]
                  leading-5
                  text-gray-600

                  min-[400px]:text-[13px]

                  sm:text-sm
                  sm:leading-6
                "
              >
                For everyday repair and maintenance needs, find professionals
                who can help with a wide range of household tasks including
                furniture adjustments, hardware replacements, and custom
                mounting.
              </p>

              {/* More Services */}
              <div
                className="
                  mt-3
                  flex
                  items-start
                  gap-2
                  text-[12px]
                  font-medium
                  text-gray-700

                  min-[400px]:text-[13px]

                  sm:text-sm
                "
              >
                <MapPin
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-gray-700

                    sm:h-5
                    sm:w-5
                  "
                />

                <span>
                  And more services are continuously arriving on Ekhon.
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              type="button"
              className="
                group
                flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white
                px-5
                py-3
                text-xs
                font-medium
                text-gray-900
                shadow-sm
                transition-all
                duration-200

                hover:border-gray-300
                hover:bg-gray-50
                hover:shadow-md

                min-[400px]:text-sm

                md:w-auto
              "
            >
              <span>Explore Service</span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200

                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Section3;