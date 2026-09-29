import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Card = ({
  icon,
  title,
  serviceCount,
  description,
  services = [],
  buttonText = "Explore Service",
}) => {
  return (
    <div className="group flex h-full w-full flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
              {icon}
            </div>
          )}

          <h3 className="text-sm font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        <span className="whitespace-nowrap text-[10px] text-gray-500">
          {serviceCount} Services
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 text-xs leading-5 text-gray-600">
        {description}
      </p>

      {/* Service List */}
      <ul className="mt-3 flex flex-col gap-2">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-xs text-gray-600"
          >
            <CheckCircle2
              size={14}
              strokeWidth={1.8}
              className="shrink-0 text-gray-500"
            />

            <span>{service}</span>
          </li>
        ))}
      </ul>

      {/* Bottom Button */}
      <button className="mt-auto flex w-full items-center justify-between border-t border-gray-100 pt-4 mt-5 text-xs font-medium text-gray-800 transition-colors hover:text-black">
        <span>{buttonText}</span>

        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
};

export default Card;