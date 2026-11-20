
"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const Card = ({
  icon,
  title,
  serviceCount,
  description,
  services = [],
  buttonText = "Explore Services",
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#E5EDF5] bg-white p-5 shadow-[0_4px_20px_rgba(7,62,108,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#63B9D5]/50 hover:shadow-[0_16px_40px_rgba(7,62,108,0.12)] sm:p-6"
    >
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-[#63B9D5] transition-all duration-500 group-hover:w-full" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {icon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF6FA] text-[#073E6C] transition-all duration-300 group-hover:bg-[#073E6C] group-hover:text-white">
              {icon}
            </div>
          )}

          <div className="min-w-0">
            <h3 className="text-base font-bold leading-snug text-[#073E6C] sm:text-lg">
              {title}
            </h3>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[#8AA0B5]">
              Our Services
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-[#F0F7FA] px-3 py-1.5 text-[10px] font-semibold text-[#073E6C] sm:text-xs">
          {serviceCount} Services
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-6 text-[#6883A1]">
        {description}
      </p>

      {/* Service List */}
      <ul className="mt-5 flex flex-col gap-3">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex items-center gap-2.5 text-sm text-[#405B75]"
          >
            <CheckCircle2
              size={17}
              strokeWidth={2}
              className="shrink-0 text-[#63B9D5]"
            />
            <span>{service}</span>
          </li>
        ))}
      </ul>

      {/* Bottom Button */}
      <button
        type="button"
        onClick={onClick}
        className="mt-auto flex w-full items-center justify-between border-t border-[#EAF0F5] pt-5 mt-6 text-sm font-semibold text-[#073E6C] transition-colors duration-300 hover:text-[#2499BD]"
      >
        <span>{buttonText}</span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF6FA] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#073E6C] group-hover:text-white">
          <ArrowRight size={17} />
        </span>
      </button>
    </motion.div>
  );
};

export default Card;
