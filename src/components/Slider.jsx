"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AC Service",
    description:
      "Installation, repair, and cleaning to keep your AC running smoothly.",
    image: "/Elements-15.svg",
  },
  {
    title: "Painter",
    description:
      "Refresh your home with professional and reliable painting services.",
    image: "/Elements-17.svg",
  },
  {
    title: "Carpenter",
    description:
      "Get help with furniture, doors, cabinets, and other woodwork.",
    image: "/Elements-15.svg",
  },
  {
    title: "Plumber",
    description:
      "Reliable plumbing solutions for repairs, installation, and maintenance.",
    image: "/Elements-16.svg",
  },
  {
    title: "Electrician",
    description:
      "Professional electrical services for safe and reliable home solutions.",
    image: "/Elements-19.svg",
  },
  {
    title: "Cleaning",
    description:
      "Keep your home fresh and clean with trusted cleaning professionals.",
    image: "/Elements-18.svg",
  },
  {
    title: "CCTV & Security",
    description:
      "Professional security and CCTV installation for your home.",
    image: "/Elements-19.svg",
  },
  {
    title: "PC & Security",
    description:
      "Professional computer and security solutions for your home.",
    image: "/Elements-19.svg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = services.length;

  const getIndex = (index) => {
    return (index + total) % total;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  const handlePagination = (index) => {
    setCurrentIndex(index);
  };

  const getRelativePosition = (index) => {
    let diff = index - currentIndex;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    return diff;
  };

  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-hidden
        py-12
        font-inter
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[58%]
          -z-10
          h-[280px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#dff6ff]
          opacity-70
          blur-[75px]
          sm:h-[420px]
          sm:w-[700px]
          sm:blur-[90px]
          lg:h-[500px]
          lg:w-[900px]
          lg:blur-[110px]
        "
      />

      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-3
          sm:px-6
          lg:px-8
        "
      >
        {/* Heading */}

        <div
          className="
            mx-auto
            mb-8
            max-w-2xl
            text-center
            sm:mb-10
            lg:mb-12
          "
        >
          <h2
            style={{ fontFamily: "Amplesoft, sans-serif" }}
            className="
              text-3xl
              font-medium
              tracking-tight
              text-[#171717]
              sm:text-4xl
              md:text-5xl
            "
          >
            everything your home needs
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-md
              px-2
              font-inter
              text-sm
              leading-6
              text-gray-500
              sm:mt-4
              sm:px-0
              sm:text-base
            "
          >
            From quick repairs to essential home services, find the right
            professional with Ekhon.
          </p>
        </div>

        {/* Slider */}

        <div
          className="
            relative
            mx-auto
            h-[360px]
            w-full
            max-w-[1280px]
            sm:h-[430px]
            md:h-[450px]
            lg:h-[475px]
          "
        >
          <motion.div
            className="absolute inset-0 touch-pan-y"
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.15}
            onDragEnd={(event, info) => {
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              if (offset < -60 || velocity < -500) {
                handleNext();
                return;
              }

              if (offset > 60 || velocity > 500) {
                handlePrev();
              }
            }}
          >
            {services.map((service, index) => {
              const position = getRelativePosition(index);

              if (Math.abs(position) > 3) {
                return null;
              }

              return (
                <StackCard
                  key={service.title}
                  service={service}
                  position={position}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Controls */}

        <div
          className="
            mt-1
            flex
            flex-col
            items-center
            gap-4
            sm:mt-2
          "
        >
          {/* Navigation */}

          <div
            className="
              flex
              h-[72px]
              w-auto
              items-center
              gap-2
              rounded-full
              bg-white
              px-3
              shadow-[0_5px_25px_rgba(0,0,0,0.10)]
              sm:h-[82px]
              sm:gap-3
              sm:px-4
            "
          >
            {/* Previous */}

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous service"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                text-[#073f68]
                transition
                hover:bg-[#f4f9fc]
                active:scale-95
                sm:h-10
                sm:w-10
              "
            >
              <ChevronLeft
                size={26}
                strokeWidth={1.8}
                className="sm:h-[30px] sm:w-[30px]"
              />
            </button>

            {/* Current Service */}

            <div
              className="
                flex
                w-[135px]
                items-center
                justify-center
                gap-2
                sm:w-[150px]
                sm:gap-3
              "
            >
              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  sm:h-14
                  sm:w-14
                "
              >
                <Image
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <span
                className="
                  max-w-[78px]
                  truncate
                  whitespace-nowrap
                  text-xs
                  font-bold
                  text-[#073f68]
                  sm:max-w-[90px]
                  sm:text-sm
                "
              >
                {services[currentIndex].title}
              </span>
            </div>

            {/* Next */}

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next service"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                text-[#073f68]
                transition
                hover:bg-[#f4f9fc]
                active:scale-95
                sm:h-10
                sm:w-10
              "
            >
              <ChevronRight
                size={26}
                strokeWidth={1.8}
                className="sm:h-[30px] sm:w-[30px]"
              />
            </button>
          </div>

          {/* Pagination */}

          <div className="flex items-center justify-center gap-1">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => handlePagination(index)}
                aria-label={`Go to ${service.title}`}
                className="
                  flex
                  h-4
                  items-center
                  rounded-full
                  px-0.5
                "
              >
                <motion.div
                  animate={{
                    width: currentIndex === index ? 18 : 5,
                    opacity: currentIndex === index ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="h-1.5 rounded-full bg-[#0a4b75]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   STACK CARD
========================================================= */

const StackCard = ({ service, position }) => {
  const isCenter = position === 0;
  const isLeft = position < 0;
  const isRight = position > 0;

  let x = "-50%";

  /*
    Mobile
  */

  if (position === -1) {
    x =
      "calc(-50% - clamp(92px, 25vw, 175px))";
  }

  if (position === -2) {
    x =
      "calc(-50% - clamp(175px, 46vw, 320px))";
  }

  if (position === -3) {
    x =
      "calc(-50% - clamp(245px, 64vw, 445px))";
  }

  if (position === 1) {
    x =
      "calc(-50% + clamp(92px, 25vw, 175px))";
  }

  if (position === 2) {
    x =
      "calc(-50% + clamp(175px, 46vw, 320px))";
  }

  if (position === 3) {
    x =
      "calc(-50% + clamp(245px, 64vw, 445px))";
  }

  /*
    Scale
  */

  let scale = 0.62;

  if (position === -2 || position === 2) {
    scale = 0.72;
  }

  if (position === -1 || position === 1) {
    scale = 0.84;
  }

  if (isCenter) {
    scale = 1;
  }

  /*
    Rotation
  */

  let rotateY = 0;

  if (isLeft) {
    rotateY = 10;
  }

  if (isRight) {
    rotateY = -10;
  }

  /*
    Z-index
  */

  let zIndex = 3;

  if (position === -2 || position === 2) {
    zIndex = 5;
  }

  if (position === -1 || position === 1) {
    zIndex = 10;
  }

  if (isCenter) {
    zIndex = 30;
  }

  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        w-[235px]
        sm:w-[290px]
        md:w-[305px]
        lg:w-[315px]
      "
      style={{
        zIndex,
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      initial={false}
      animate={{
        x,
        y: "-50%",
        scale,
        rotateY,
        opacity: 1,
      }}
      transition={{
        duration: 1.15,
      }}
    >
      <ServiceCard
        service={service}
        small={!isCenter}
        align={isRight ? "right" : "left"}
      />
    </motion.div>
  );
};

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service, small = false, align = "left" }) => {
  const isRight = align === "right";

  return (
    <div
      className={`
        overflow-hidden
        rounded-[18px]
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.20)]
        sm:rounded-[24px]
        ${small ? "p-2.5 sm:p-4" : "p-3 sm:p-5"}
      `}
    >
      {/* Image */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-[13px]
          sm:rounded-[18px]
          ${
            small
              ? "h-[110px] sm:h-[150px] lg:h-[160px]"
              : "h-[165px] sm:h-[215px] md:h-[230px] lg:h-[240px]"
          }
        `}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          draggable={false}
          className="
            pointer-events-none
            object-contain
            p-2
            sm:p-4
          "
          sizes="
            (max-width: 640px) 235px,
            (max-width: 1024px) 310px,
            330px
          "
        />
      </div>

      {/* Content */}

      <div
        className={`
          px-1
          pb-1
          pt-2.5
          sm:pt-4
          ${isRight ? "text-right" : "text-left"}
        `}
      >
        <h3
          className={`
            font-inter
            font-semibold
            text-[#222]
            ${small ? "text-xs sm:text-base" : "text-base sm:text-xl"}
          `}
        >
          {service.title}
        </h3>

        <p
          className={`
            mt-1
            font-inter
            text-gray-500
            ${
              small
                ? "line-clamp-2 font-inter text-[9px] leading-3.5 sm:text-xs sm:leading-5"
                : "text-[10px] font-inter leading-4 sm:text-sm sm:leading-6"
            }
          `}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Slider;