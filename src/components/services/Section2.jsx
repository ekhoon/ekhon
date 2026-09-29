"use client";

import React, { useState } from "react";
import {
  Zap,
  Droplets,
  Snowflake,
  Hammer,
  Sparkles,
  ShieldCheck,
  Search,
} from "lucide-react";
import Card from "@/components/services/Card";

const Section2 = () => {
  const [search, setSearch] = useState("");

  const categories = [
    {
      icon: <Zap size={17} />,
      title: "Electrical Services",
      serviceCount: 6,
      description:
        "Get help with common electrical problems and installations at home.",
      services: [
        "Switch and socket repair",
        "Fan installation and repair",
        "Light installation and repair",
        "Circuit and electrical troubleshooting",
        "Other electrical services",
      ],
    },
    {
      icon: <Droplets size={17} />,
      title: "Plumbing Services",
      serviceCount: 7,
      description:
        "Professional plumbing solutions for your everyday home needs.",
      services: [
        "Pipe leakage repair",
        "Tap and faucet repair",
        "Bathroom plumbing",
        "Water tank services",
        "Drain cleaning",
      ],
    },
    {
      icon: <Snowflake size={17} />,
      title: "AC Services",
      serviceCount: 5,
      description:
        "Keep your AC running smoothly with professional technicians.",
      services: [
        "AC installation",
        "AC servicing",
        "AC gas refill",
        "AC troubleshooting",
        "AC cleaning",
      ],
    },
    {
      icon: <Hammer size={17} />,
      title: "Carpentry Services",
      serviceCount: 6,
      description:
        "Reliable carpentry services for furniture and home repairs.",
      services: [
        "Furniture repair",
        "Door repair",
        "Cabinet installation",
        "Shelf installation",
        "Woodwork repair",
      ],
    },
    {
      icon: <Sparkles size={17} />,
      title: "Cleaning Services",
      serviceCount: 6,
      description:
        "Professional cleaning services to keep your home fresh and clean.",
      services: [
        "Home deep cleaning",
        "Kitchen cleaning",
        "Bathroom cleaning",
        "Sofa cleaning",
        "Floor cleaning",
      ],
    },
    {
      icon: <ShieldCheck size={17} />,
      title: "CCTV & Security",
      serviceCount: 5,
      description:
        "Protect your home with reliable CCTV and security solutions.",
      services: [
        "CCTV camera installation",
        "CCTV repair",
        "Camera setup",
        "DVR configuration",
        "Security system maintenance",
      ],
    },
  ];

  const filteredCategories = categories.filter((category) => {
    const searchText = search.toLowerCase().trim();

    return (
      category.title.toLowerCase().includes(searchText) ||
      category.description.toLowerCase().includes(searchText) ||
      category.services.some((service) =>
        service.toLowerCase().includes(searchText)
      )
    );
  });

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
        {/* Section Header + Search */}
        <div
          className="
            mb-8
            flex
            flex-col
            justify-between
            gap-6

            lg:flex-row
            lg:items-end
            lg:gap-12
          "
        >
          {/* Left Content */}
          <div className="w-full lg:max-w-[650px]">
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-wider
                text-gray-500

                min-[400px]:text-[11px]

                sm:text-xs
              "
            >
              Our Services
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-bold
                leading-tight
                text-gray-900

                min-[400px]:text-[26px]

                sm:text-3xl

                md:text-[32px]
              "
            >
              Find the right service for your home
            </h2>

            <p
              className="
                mt-2
                w-full
                max-w-xl
                text-[12px]
                leading-6
                text-gray-500

                min-[400px]:text-[13px]

                sm:text-sm
                sm:leading-7
              "
            >
              From quick repairs to regular maintenance, connect with trusted
              professionals for all your home service needs.
            </p>
          </div>

          {/* Search Bar */}
          <div
            className="
              w-full

              lg:max-w-[400px]
              lg:shrink-0
            "
          >
            <div className="relative">
              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a service..."
                className="
                  h-12
                  w-full
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  pl-11
                  pr-4
                  text-sm
                  text-gray-800
                  outline-none
                  transition

                  placeholder:text-gray-400

                  focus:border-gray-400
                  focus:ring-2
                  focus:ring-gray-100
                "
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        {filteredCategories.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-4

              min-[400px]:gap-5

              sm:grid-cols-2
              sm:gap-6

              lg:grid-cols-3
              lg:gap-6
            "
          >
            {filteredCategories.map((category, index) => (
              <Card
                key={`${category.title}-${index}`}
                {...category}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm text-gray-500">
              No services found for "{search}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section2;