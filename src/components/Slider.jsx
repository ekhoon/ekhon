"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);

const lerp = (start, end, amount) =>
  start + (end - start) * amount;

const Slider = () => {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [dragX, setDragX] = useState(0);

  const [isDragging, setIsDragging] =
    useState(false);

  const [isAnimating, setIsAnimating] =
    useState(false);

  const [sliderWidth, setSliderWidth] =
    useState(0);

  const sliderRef = useRef(null);

  const startX = useRef(0);
  const startY = useRef(0);
  const pointerId = useRef(null);

  const dragStartIndex = useRef(0);

  const total = services.length;

  /*
    =========================================
    RESPONSIVE SLIDER SIZE
    =========================================
  */

  useEffect(() => {
    const updateWidth = () => {
      if (!sliderRef.current) return;

      setSliderWidth(
        sliderRef.current.clientWidth
      );
    };

    updateWidth();

    const observer =
      new ResizeObserver(updateWidth);

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    window.addEventListener(
      "resize",
      updateWidth
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "resize",
        updateWidth
      );
    };
  }, []);

  /*
    =========================================
    RESPONSIVE CARD STEP
    =========================================
  */

  const getResponsiveValues = () => {
    const width =
      sliderWidth ||
      (typeof window !== "undefined"
        ? window.innerWidth
        : 1280);

    /*
      Original design-এর মতো responsive
      first card distance.
    */

    const firstStep = clamp(
      width * 0.25,
      92,
      175
    );

    const secondStep = clamp(
      width * 0.46,
      175,
      320
    );

    const thirdStep = clamp(
      width * 0.64,
      245,
      445
    );

    return {
      firstStep,
      secondStep,
      thirdStep,
    };
  };

  const {
    firstStep,
    secondStep,
    thirdStep,
  } = getResponsiveValues();

  /*
    One card drag distance.
  */
  const CARD_STEP = firstStep;

  const SWIPE_THRESHOLD = Math.min(
    45,
    CARD_STEP * 0.38
  );

  /*
    =========================================
    INDEX
    =========================================
  */

  const getIndex = (index) => {
    return (
      (index + total) % total
    );
  };

  /*
    =========================================
    RELATIVE POSITION
    =========================================
  */

  const getRelativePosition = (index) => {
    let diff =
      index - currentIndex;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    return diff;
  };

  /*
    =========================================
    RESPONSIVE COVERFLOW
    =========================================
  */

  const getCoverflowStyle = (
    position
  ) => {
    const abs = Math.abs(position);

    const direction =
      position < 0 ? -1 : 1;

    const points = [
      {
        p: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        z: 100,
        depth: 0,
      },

      {
        p: 1,
        x: firstStep,
        scale: 0.84,
        opacity: 7,
        z: 70,
        depth: -80,
      },

      {
        p: 2,
        x: secondStep,
        scale: 0.70,
        opacity: 8,
        z: 40,
        depth: -140,
      },

      {
        p: 3,
        x: thirdStep,
        scale: 0.60,
        opacity: 9,
        z: 20,
        depth: -190,
      },
    ];

    if (abs >= 3) {
      const last = points[3];

      return {
        x: direction * last.x,
        scale: last.scale,
        opacity: last.opacity,
        z: last.z,
        depth: last.depth,
      };
    }

    const lowerIndex =
      Math.floor(abs);

    const upperIndex =
      Math.ceil(abs);

    const lower =
      points[lowerIndex];

    const upper =
      points[upperIndex];

    const progress =
      abs - lowerIndex;

    return {
      x:
        direction *
        lerp(
          lower.x,
          upper.x,
          progress
        ),

      scale: lerp(
        lower.scale,
        upper.scale,
        progress
      ),

      opacity: lerp(
        lower.opacity,
        upper.opacity,
        progress
      ),

      z: lerp(
        lower.z,
        upper.z,
        progress
      ),

      depth: lerp(
        lower.depth,
        upper.depth,
        progress
      ),
    };
  };

  /*
    =========================================
    NEXT
    =========================================
  */

  const handleNext = () => {
    if (
      isAnimating ||
      isDragging
    ) {
      return;
    }

    setIsAnimating(true);

    setDragX(-CARD_STEP);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        getIndex(prev + 1)
      );

      setDragX(0);

      requestAnimationFrame(() => {
        setIsAnimating(false);
      });
    }, 550);
  };

  /*
    =========================================
    PREVIOUS
    =========================================
  */

  const handlePrev = () => {
    if (
      isAnimating ||
      isDragging
    ) {
      return;
    }

    setIsAnimating(true);

    setDragX(CARD_STEP);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        getIndex(prev - 1)
      );

      setDragX(0);

      requestAnimationFrame(() => {
        setIsAnimating(false);
      });
    }, 550);
  };

  /*
    =========================================
    PAGINATION
    =========================================
  */

  const handlePagination = (
    index
  ) => {
    if (
      isDragging ||
      isAnimating
    ) {
      return;
    }

    setCurrentIndex(index);
  };

  /*
    =========================================
    POINTER DOWN
    =========================================
  */

  const handlePointerDown = (e) => {
    if (isAnimating) return;

    startX.current =
      e.clientX;

    startY.current =
      e.clientY;

    pointerId.current =
      e.pointerId;

    dragStartIndex.current =
      currentIndex;

    e.currentTarget.setPointerCapture(
      e.pointerId
    );

    setIsDragging(true);
    setDragX(0);
  };

  /*
    =========================================
    POINTER MOVE

    CONTINUOUS DRAG
    =========================================
  */

  const handlePointerMove = (e) => {
    if (
      !isDragging ||
      isAnimating
    ) {
      return;
    }

    const moveX =
      e.clientX -
      startX.current;

    const moveY =
      e.clientY -
      startY.current;

    /*
      Vertical scrolling allow.
    */

    if (
      Math.abs(moveY) >
        Math.abs(moveX) &&
      Math.abs(moveX) < 20
    ) {
      return;
    }

    /*
      কতগুলো card পার হয়েছে
    */

    const completedSlides =
      Math.floor(
        Math.abs(moveX) /
          CARD_STEP
      );

    /*
      Left = next
      Right = previous
    */

    const direction =
      moveX < 0 ? 1 : -1;

    /*
      Full card distance বাদ দিয়ে
      remaining drag বের করা।
    */

    const consumedDistance =
      completedSlides *
      CARD_STEP;

    let remainingX =
      moveX -
      direction *
        consumedDistance;

    /*
      Continuous index update
    */

    if (completedSlides > 0) {
      setCurrentIndex(
        getIndex(
          dragStartIndex.current +
            direction *
              completedSlides
        )
      );
    }

    /*
      Remaining drag
      live movement করবে।
    */

    remainingX = clamp(
      remainingX,
      -CARD_STEP + 1,
      CARD_STEP - 1
    );

    setDragX(
      remainingX
    );
  };

  /*
    =========================================
    POINTER UP
    =========================================
  */

  const handlePointerUp = (e) => {
    if (!isDragging) {
      return;
    }

    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(
        pointerId.current
      );
    } catch {}

    const distance = dragX;

    /*
      LEFT
    */

    if (
      distance <
      -SWIPE_THRESHOLD
    ) {
      setIsAnimating(true);

      setDragX(-CARD_STEP);

      setTimeout(() => {
        setCurrentIndex((prev) =>
          getIndex(prev + 1)
        );

        setDragX(0);

        requestAnimationFrame(
          () => {
            setIsAnimating(false);
          }
        );
      }, 450);

      return;
    }

    /*
      RIGHT
    */

    if (
      distance >
      SWIPE_THRESHOLD
    ) {
      setIsAnimating(true);

      setDragX(CARD_STEP);

      setTimeout(() => {
        setCurrentIndex((prev) =>
          getIndex(prev - 1)
        );

        setDragX(0);

        requestAnimationFrame(
          () => {
            setIsAnimating(false);
          }
        );
      }, 450);

      return;
    }

    /*
      Not enough drag
    */

    setIsAnimating(true);

    setDragX(0);

    setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  };

  /*
    =========================================
    POINTER CANCEL
    =========================================
  */

  const handlePointerCancel = (
    e
  ) => {
    if (!isDragging) return;

    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(
        pointerId.current
      );
    } catch {}

    setIsAnimating(true);

    setDragX(0);

    setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  };

  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-hidden
        py-10
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
          h-[240px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#dff6ff]
          opacity-70
          blur-[65px]

          min-[400px]:h-[280px]
          min-[400px]:w-[380px]

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
          min-[400px]:px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Heading */}

        <div
          className="
            mx-auto
            mb-7
            max-w-2xl
            text-center

            min-[400px]:mb-8

            sm:mb-10

            lg:mb-12
          "
        >
          <h2
            style={{
              fontFamily:
                "Amplesoft, sans-serif",
            }}
            className="
              text-[28px]
              font-medium
              leading-tight
              tracking-tight
              text-[#171717]

              min-[400px]:text-3xl

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
              text-[13px]
              leading-5
              text-gray-500

              min-[400px]:text-sm
              min-[400px]:leading-6

              sm:mt-4
              sm:px-0
              sm:text-base
            "
          >
            From quick repairs to essential
            home services, find the right
            professional with Ekhon.
          </p>
        </div>

        {/* Slider */}

        <div
          ref={sliderRef}
          className="
            relative
            mx-auto
            h-[335px]
            w-full
            max-w-[1280px]
            select-none
            overflow-hidden

            min-[400px]:h-[360px]

            sm:h-[430px]

            md:h-[450px]

            lg:h-[475px]
          "
          style={{
            touchAction: "pan-y",
            perspective: "1200px",
          }}
          onPointerDown={
            handlePointerDown
          }
          onPointerMove={
            handlePointerMove
          }
          onPointerUp={
            handlePointerUp
          }
          onPointerCancel={
            handlePointerCancel
          }
        >
          {services.map(
            (service, index) => {
              const basePosition =
                getRelativePosition(
                  index
                );

              const dragProgress =
                dragX / CARD_STEP;

              const position =
                basePosition +
                dragProgress;

              if (
                Math.abs(position) >
                3.5
              ) {
                return null;
              }

              const style =
                getCoverflowStyle(
                  position
                );

              const centerDistance =
                Math.abs(position);

              /*
                Center card responsive
              */

              const isCenter =
                centerDistance < 0.5;

              const isRight =
                position > 0;

              return (
                <div
                  key={
                    service.title
                  }
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    w-[210px]

                    min-[360px]:w-[220px]

                    min-[400px]:w-[235px]

                    sm:w-[290px]

                    md:w-[305px]

                    lg:w-[315px]
                  "
                  style={{
                    zIndex:
                      Math.round(
                        style.z
                      ),

                    opacity:
                      style.opacity,

                    transform: `
                      translate3d(
                        calc(-50% + ${style.x}px),
                        -50%,
                        ${style.depth}px
                      )
                      scale(${style.scale})
                    `,

                    transformStyle:
                      "preserve-3d",

                    willChange:
                      "transform, opacity",

                    transition:
                      isDragging
                        ? "none"
                        : isAnimating
                        ? "transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 450ms ease"
                        : "transform 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms ease",

                    pointerEvents:
                      isCenter
                        ? "auto"
                        : "none",
                  }}
                >
                  <ServiceCard
  service={service}
  small={!isCenter}
   align={isCenter ? "left" : isRight ? "right" : "left"}
/>
                </div>
              );
            }
          )}
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
              h-[68px]
              w-auto
              items-center
              gap-1.5
              rounded-full
              bg-white
              px-2.5
              shadow-[0_5px_25px_rgba(0,0,0,0.10)]

              min-[400px]:h-[72px]
              min-[400px]:gap-2
              min-[400px]:px-3

              sm:h-[82px]
              sm:gap-3
              sm:px-4
            "
          >
            {/* Previous */}

            <button
              type="button"
              onClick={
                handlePrev
              }
              aria-label="Previous service"
              className="
                flex
                h-8
                w-8
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

                min-[400px]:h-9
                min-[400px]:w-9

                sm:h-10
                sm:w-10
              "
            >
              <ChevronLeft
                size={23}
                strokeWidth={
                  1.8
                }
                className="
                  min-[400px]:h-[26px]
                  min-[400px]:w-[26px]

                  sm:h-[30px]
                  sm:w-[30px]
                "
              />
            </button>

            {/* Current Service */}

            <div
              className="
                flex
                w-[125px]
                items-center
                justify-center
                gap-1.5

                min-[400px]:w-[135px]
                min-[400px]:gap-2

                sm:w-[150px]
                sm:gap-3
              "
            >
              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-gray-200
                  bg-white

                  min-[400px]:h-12
                  min-[400px]:w-12

                  sm:h-14
                  sm:w-14
                "
              >
                <Image
                  src={
                    services[
                      currentIndex
                    ].image
                  }
                  alt={
                    services[
                      currentIndex
                    ].title
                  }
                  fill
                  className="
                    object-contain
                    p-1
                  "
                />
              </div>

              <span
                className="
                  max-w-[70px]
                  truncate
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  text-[#073f68]

                  min-[400px]:max-w-[78px]
                  min-[400px]:text-xs

                  sm:max-w-[90px]
                  sm:text-sm
                "
              >
                {
                  services[
                    currentIndex
                  ].title
                }
              </span>
            </div>

            {/* Next */}

            <button
              type="button"
              onClick={
                handleNext
              }
              aria-label="Next service"
              className="
                flex
                h-8
                w-8
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

                min-[400px]:h-9
                min-[400px]:w-9

                sm:h-10
                sm:w-10
              "
            >
              <ChevronRight
                size={23}
                strokeWidth={
                  1.8
                }
                className="
                  min-[400px]:h-[26px]
                  min-[400px]:w-[26px]

                  sm:h-[30px]
                  sm:w-[30px]
                "
              />
            </button>
          </div>

          {/* Pagination */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-1
            "
          >
            {services.map(
              (
                service,
                index
              ) => (
                <button
                  key={
                    service.title
                  }
                  type="button"
                  onClick={() =>
                    handlePagination(
                      index
                    )
                  }
                  aria-label={`Go to ${service.title}`}
                  className="
                    flex
                    h-4
                    items-center
                    rounded-full
                    px-0.5
                  "
                >
                  <div
                    className="
                      h-1.5
                      rounded-full
                      bg-[#0a4b75]
                    "
                    style={{
                      width:
                        currentIndex ===
                        index
                          ? 18
                          : 5,

                      opacity:
                        currentIndex ===
                        index
                          ? 1
                          : 0.5,

                      transition:
                        "width 500ms ease, opacity 500ms ease",
                    }}
                  />
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({
  service,
  small = false,
  align = "left",
}) => {
  const isRight =
    align === "right";

  return (
    <div
      className={`
        overflow-hidden
        rounded-[16px]
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.20)]

        min-[400px]:rounded-[18px]

        sm:rounded-[24px]

        ${
          small
            ? "p-2 min-[400px]:p-2.5 sm:p-4"
            : "p-2.5 min-[400px]:p-3 sm:p-5"
        }
      `}
    >
      {/* Image */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-[12px]

          min-[400px]:rounded-[13px]

          sm:rounded-[18px]

          ${
            small
              ? "h-[100px] min-[400px]:h-[110px] sm:h-[150px] lg:h-[160px]"
              : "h-[150px] min-[400px]:h-[165px] sm:h-[215px] md:h-[230px] lg:h-[240px]"
          }
        `}
      >
        <Image
          src={
            service.image
          }
          alt={
            service.title
          }
          fill
          draggable={
            false
          }
          className="
            pointer-events-none
            object-contain
            p-2

            sm:p-4
          "
          sizes="
            (max-width: 400px) 220px,
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
          pt-2

          min-[400px]:pt-2.5

          sm:pt-4

          ${
            isRight
              ? "text-right"
              : "text-left"
          }
        `}
      >
        <h3
          className={`
            font-inter
            font-semibold
            text-[#222]

            ${
              small
                ? "text-[11px] min-[400px]:text-xs sm:text-base"
                : "text-sm min-[400px]:text-base sm:text-xl"
            }
          `}
        >
          {
            service.title
          }
        </h3>

        <p
          className={`
            mt-1
            font-inter
            text-gray-500

            ${
              small
                ? "line-clamp-2 text-[8px] leading-3 min-[400px]:text-[9px] min-[400px]:leading-3.5 sm:text-xs sm:leading-5"
                : "text-[9px] leading-3.5 min-[400px]:text-[10px] min-[400px]:leading-4 sm:text-sm sm:leading-6"
            }
          `}
        >
          {
            service.description
          }
        </p>
      </div>
    </div>
  );
};

export default Slider;