"use client";

import React from "react";
import Image from "next/image";

const HowWorks = () => {
  return (
    <section className="w-full overflow-hidden ">
      <div
        className="
          mx-auto
        


          sm:px-8


          md:px-10

          lg:px-16

          xl:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center


            sm:gap-12

            md:gap-10

            lg:grid-cols-2

      
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
            {/* Badge */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                inline-flex
                items-center
                rounded-full
                bg-[#e8f4ff]
                px-4
               
                text-[11px]
                font-bold
                text-[#1685e8]

                sm:mb-5
                sm:text-xs
              "
            >
              How Ekhoon Works
            </div>

            {/* Heading */}
            <h2
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                text-[38px]
                font-semibold
                leading-[1.05]
                tracking-tight
                text-[#092e5c]

                min-[400px]:text-[35px]

                sm:text-[48px]

                md:text-[52px]

                lg:text-5xl
                xl:text-5xl
                whitespace-nowrap
              "
            >
              Find the right technician
              <br />

              <span className="text-[#1685e8]">
                for your
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
  
                max-w-[560px]
                text-[13px]
                leading-6
                text-[#6883a1]

                sm:mt-6
                sm:text-sm
                sm:leading-7

                md:text-base

            

               
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

  "
>
  <Image
    src="/Photoroom1.png"
    alt="How Ekhoon works"
    width={1000}
    height={700}
    priority
    className="
      w-full
      max-w-[520px]
      object-contain

      sm:max-w-[580px]

      md:max-w-[620px]

      lg:w-[680px]
      
      lg:max-w-none
      lg:object-contain


      xl:max-w-none
      xl:object-contain

    "
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;