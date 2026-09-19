"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden px-2 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[20px]
          sm:rounded-[32px]
        "
      >
        {/* =========================================================
            MAIN BANNER IMAGE
        ========================================================== */}
        <Image
          src="/BG-12.svg"
          alt="Trusted Home Service"
          width={1920}
          height={800}
          priority
          className="
         
            block
            h-auto
            w-full
            -mt-2
            sm:mt-2
            
            sm:translate-x-[-20px]
            
           

            md:-mt-6
            md:w-[95%]
            md:-translate-z-16

            lg:-mt-60
            lg:w-[80%]
            lg:translate-x-[80px]

            xl:-mt-20
          "
        />

        {/* =========================================================
            BANNER CONTENT
        ========================================================== */}
        <div className="absolute inset-0">

          {/* =======================================================
              HEADING + DESCRIPTION
          ======================================================== */}
          <div
  className="
    absolute
    left-1/2
    top-[5%]
    z-20
    w-full
    -translate-x-1/2
    px-2
    text-center

    min-[400px]:top-[5%]
    min-[400px]:px-3

    sm:top-[5%]
    sm:px-0

    md:top-[5%]

    lg:top-[5%]
  "
>
  <h1
    style={{ fontFamily: "Amplesoft, sans-serif" }}
    className="
      text-[18px]
      font-semibold
      leading-[1.05]
      text-black

      min-[400px]:text-[22px]

      sm:text-4xl
      md:text-5xl
      lg:text-6xl

      lg:mr-[60px]
    "
  >
    your home needs it

    <br />

    <span
      className="
        inline-flex
        items-center
        justify-center
        gap-1

        min-[400px]:gap-1.5

        sm:gap-2
        md:gap-3
      "
    >
      <Image
        src="/Logo-10.svg"
        alt="Logo"
        width={100}
        height={45}
        className="
          h-auto
          w-[30px]

          min-[400px]:w-[65px]

          sm:w-[70px]
          md:w-[85px]

          lg:w-[100px]
        "
      />

      <span>gets it done</span>
    </span>
  </h1>

  {/* Description */}
  <p
    style={{ fontFamily: "Inter, sans-serif" }}
    className="
      mt-1
      px-2
      text-[8px]
      leading-[1.3]
      text-gray-600

      min-[400px]:text-[9px]

      sm:mt-2
      sm:translate-x-3
      sm:text-sm

      md:mt-3
      md:translate-x-4
      md:text-base

      lg:translate-x-[-20px]
      lg:text-base
    "
  >
    Find trusted professionals for your home,
    <br />
    whenever you need them.
  </p>
</div>

          {/* =======================================================
              MAIN CENTER ITEM
          ======================================================== */}
        <Image
  src="/Website-09.png"
  alt="Home service"
  width={200}
  height={200}
  className="
    absolute
    left-1/2
    top-[38%]

    z-10
    w-[14%]
    min-w-[40px]
    max-w-[150px]
    -translate-x-1/3
    object-cover

    min-[400px]:top-[39%]
    min-[400px]:w-[13%]
    min-[400px]:min-w-[45px]
    min-[400px]:translate-x-[-20px]

    sm:top-[37%]
    sm:w-[16vw]
    sm:min-w-[55px]

    md:top-[38%]
    md:w-[14vw]
    md:translate-x-[-70px]

    lg:top-[37%]
    lg:w-[18vw]
    lg:max-w-[150px]

    xl:top-[37%]
    xl:w-[22vw]
    xl:max-w-[160px]
   xl:translate-x-[-100px]
  "
/>

          {/* =======================================================
              APPLICATION IMAGE
          ======================================================== */}
        <Image
  src="/Website-11.png"
  alt="Application"
  width={950}
  height={950}
  className="
    absolute
    left-1/2
    top-[51%]
    z-10
    h-auto
    w-[76%]
    -translate-x-1/2

    min-[400px]:top-[50%]
    min-[400px]:w-[72%]

    sm:top-[44%]
    sm:w-[66%]

    md:top-[47%]
    md:w-[60%]


    lg:top-[46%]
    lg:w-[65%]

    xl:top-[46%]
    xl:w-[65%]
  "
/>

          {/* =======================================================
              GET STARTED BUTTON
          ======================================================== */}
          <button
            className="
              group
              absolute
              left-[20%]
              top-[30%]
              z-20
              flex
              items-center
              rounded-r-full
              bg-linear-to-r
              from-transparent
              to-white
              p-0
              text-[7px]
              font-medium
              text-[#073e6c]
              outline-none
              transition-transform
              duration-300
              hover:scale-105
              cursor-pointer

              min-[400px]:left-[21%]
              min-[400px]:text-[8px]

              sm:left-[23%]
              sm:text-sm

              md:left-[23%]
              md:text-sm

              lg:text-md
            "
          >
            <span
              style={{ fontFamily: "Inter, sans-serif" }}
              className="whitespace-nowrap"
            >
              Get Started Free
            </span>

            <span
              className="
                ml-1
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#073e6c]
                text-[10px]
                text-white
                rotate-[-30deg]
                sm:ml-2
                sm:h-8
                sm:w-8
                sm:text-base

                md:h-9
                md:w-9

                lg:h-10
                lg:w-10
                lg:text-xl
              "
            >
              →
            </span>
          </button>

          {/* =======================================================
              WEBSITE 03
          ======================================================== */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[7%]
              top-[40%]
              z-20
              w-[9%]

              sm:left-[10%]
              sm:w-[10%]
            "
          >
            <Image
              src="/Website-03.png"
              alt="Website-03"
              width={300}
              height={300}
              className="h-auto w-full"
            />
          </motion.div>

          {/* =======================================================
              WEBSITE 08
          ======================================================== */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[47%]
              z-10
              w-[72%]
              -translate-x-1/2

              sm:top-[47.5%]
              sm:w-[65%]
            "
          >
            <Image
              src="/Website-08.png"
              alt="Website-08"
              width={300}
              height={300}
              className="
                absolute
                right-[3%]
                top-0
                z-20
                h-auto
                w-[8%]

                sm:right-[1%]
                sm:w-[10%]
              "
            />
          </motion.div>

          {/* =======================================================
              WEBSITE 04
          ======================================================== */}
        <motion.div
  animate={{ y: [0, -3, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-[18%]
    top-[58%]
    z-20
    w-[13%]
    max-w-[120px]

    min-[400px]:left-[20%]
    min-[400px]:top-[54%]
    min-[400px]:w-[11%]

    sm:left-[22%]
    sm:top-[55%]
    sm:w-[9%]

    md:left-[20%]
    md:top-[54%]
    md:w-[9%]

    lg:left-[20%]
    lg:top-[58%]
    lg:w-[9%]

    xl:left-[21%]
    xl:top-[55%]
    xl:w-[9%]
  "
>
  <Image
    src="/Website-04.png"
    alt="Website-04"
    width={120}
    height={120}
    className="h-auto w-full"
  />
</motion.div>

          {/* =======================================================
              WEBSITE 05
          ======================================================== */}
         <motion.div
  animate={{ y: [0, -3, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-[34%]
    top-[47%]
    z-20
    w-[8%]

    min-[400px]:left-[35%]
    min-[400px]:top-[48%]
    min-[400px]:w-[8%]

    sm:left-[33%]
    sm:top-[4%]
    sm:w-[1%]

    md:left-[29%]
    md:top-[45%]
    md:w-[8%]

    lg:left-[33%]
    lg:top-[42%]
    lg:w-[8%]
  "
>
  <Image
    src="/Website-05.png"
    alt="Website-05"
    width={120}
    height={120}
    className="h-auto w-full"
  />
          </motion.div>

          {/* =======================================================
              WEBSITE 06
          ======================================================== */}
         <motion.div
  animate={{ y: [0, -3, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    right-[28%]
    top-[46%]
    z-20
    w-[9%]
    max-w-[120px]

    min-[400px]:right-[27%]
    min-[400px]:top-[45%]
    min-[400px]:w-[9%]

    sm:right-[33%]
    sm:top-[38%]
    sm:w-[9%]

    md:right-[33%]
    md:top-[45%]
    md:w-[9%]

    lg:right-[29%]
    lg:top-[40%]
    lg:w-[9%]

    xl:right-[34%]
    xl:top-[40%]
    xl:w-[9%]
  "
>
  <Image
    src="/Website-06.png"
    alt="Website-06"
    width={120}
    height={120}
    className="h-auto w-full"
  />
</motion.div>

          {/* =======================================================
              WEBSITE 07
          ======================================================== */}
       <motion.div
  animate={{ y: [0, -3, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    right-[16%]
    top-[55%]
    z-20
    w-[9%]
    max-w-[120px]

    min-[400px]:right-[18%]
    min-[400px]:top-[55%]
    min-[400px]:w-[9%]

    sm:right-[25%]
    sm:top-[48%]
    sm:w-[9%]

    md:right-[22%]
    md:top-[55%]
  
    md:w-[9%]

    lg:right-[2%]
    lg:top-[55%]
    lg:w-[9%]

    xl:right-[24%]
    xl:top-[55%]
    xl:w-[9%]
  "
>
  <Image
    src="/Website-07.png"
    alt="Website-07"
    width={120}
    height={120}
    className="h-auto w-full"
  />
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;