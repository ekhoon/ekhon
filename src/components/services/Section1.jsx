"use client";

import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[500px]
          w-full
          max-w-[1540px]
          items-center
          gap-8

          px-3
          py-10

          min-[400px]:px-4
          min-[400px]:py-12

          sm:px-6
          sm:py-14

          md:px-12
          md:py-16

          lg:gap-12
          lg:px-20
          lg:py-16
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start

            lg:w-1/2
          "
        >
          {/* Small Badge */}
          <div
            className="
              mb-4
              rounded-full
              border
              border-gray-200
              bg-white
              px-3
              py-1
              text-[10px]
              font-medium
              text-gray-700
              shadow-sm

              min-[400px]:text-[11px]
            "
          >
            Reliable On-Demand Home Services in Bangladesh
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[560px]
              text-[30px]
              font-bold
              leading-[1.12]
              tracking-tight
              text-gray-900

              min-[400px]:text-[34px]

              sm:text-4xl

              md:text-[42px]

              lg:text-[46px]
            "
          >
            Home Services,
            <br />
            Whenever You Need Them
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              w-full
              max-w-[520px]
              text-[12px]
              leading-6
              text-gray-600

              min-[400px]:text-[13px]

              sm:text-[15px]
              sm:leading-7

              md:text-base
            "
          >
            Find trusted professionals for everyday repair, maintenance, and
            installation services. From electricians and plumbers to AC
            technicians and appliance repair specialists, Ekhoon helps you
            connect with the right service professional near you.
          </p>

          {/* Services */}
          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-x-4
              gap-y-2
              text-[11px]
              text-gray-600

              min-[400px]:gap-x-5
              min-[400px]:text-xs
            "
          >
            <span>All Services</span>
            <span>Electrician</span>
            <span>Plumber</span>
            <span>AC Technician</span>
            <span>TV Repair</span>
            <span>Appliance Repair</span>
            <span>+ More</span>
          </div>

          {/* Buttons */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-2

              min-[400px]:gap-3
            "
          >
            <Link
              href="/services"
              className="
                rounded-full
                bg-gray-900
                px-4
                py-2.5
                text-[11px]
                font-medium
                text-white
                transition
                hover:bg-gray-700

                min-[400px]:px-5
                min-[400px]:text-xs
              "
            >
              Find a Service →
            </Link>

            <Link
              href="/services"
              className="
                rounded-full
                border
                border-gray-300
                bg-white
                px-4
                py-2.5
                text-[11px]
                font-medium
                text-gray-800
                transition
                hover:bg-gray-50

                min-[400px]:px-5
                min-[400px]:text-xs
              "
            >
              ⌕ Find a service
            </Link>

            <Link
              href="/request-service"
              className="
                rounded-full
                border
                border-gray-300
                bg-white
                px-4
                py-2.5
                text-[11px]
                font-medium
                text-gray-800
                transition
                hover:bg-gray-50

                min-[400px]:px-5
                min-[400px]:text-xs
              "
            >
              ♡ Send a request
            </Link>

            <Link
              href="/get-started"
              className="
                text-[11px]
                font-medium
                text-gray-700
                transition
                hover:text-black

                min-[400px]:text-xs
              "
            >
              Get it done →
            </Link>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            relative
            hidden
            w-full

            lg:block
            lg:w-1/2
          "
        >
          <div
            className="
              relative
              ml-auto
              aspect-[1.12/1]
              w-full
              max-w-[570px]
              overflow-hidden
              rounded-2xl
              bg-gray-100
            "
          >
            <Image
              src="/service_banner.png"
              alt="Home service"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 50vw"
            />

            {/* Image floating info */}
            <div
              className="
                absolute
                bottom-3
                left-3
                rounded-xl
                border
                border-white/60
                bg-white/90
                px-3
                py-2
                shadow-lg
                backdrop-blur-md

                sm:bottom-5
                sm:left-5
                sm:px-4
                sm:py-3
              "
            >
              <p className="text-[9px] font-medium text-gray-500 sm:text-[10px]">
                Available Across Major Cities
              </p>

              <p className="mt-1 text-[11px] font-semibold text-gray-800 sm:text-xs">
                Dhaka • Chattogram • Sylhet
              </p>

              <p className="text-[9px] text-gray-500 sm:text-[10px]">
                Metro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;