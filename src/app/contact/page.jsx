"use client";

import React from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  Send,
} from "lucide-react";

const page = () => {
  return (
    <main className="w-full overflow-hidden bg-[#f7f9fc]">
      {/* ================= HERO / CONTACT ================= */}
      <section className="w-full">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-3
            py-10

            min-[400px]:px-4
            min-[400px]:py-12

            sm:px-6
            sm:py-14

            md:px-12
            md:py-16

            lg:px-20
            lg:py-20
          "
        >
          {/* Header */}
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#d8e8f5]
                bg-white
                px-3
                py-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#1685e8]

                sm:text-[10px]
              "
            >
              Contact Us
            </span>

            <h1
              className="
                mt-3
                text-[27px]
                font-bold
                leading-tight
                tracking-tight
                text-[#092e5c]

                min-[400px]:text-[30px]

                sm:text-4xl

                md:text-[42px]
              "
            >
              We’re Here to Help
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-[11px]
                leading-5
                text-[#6883a1]

                min-[400px]:text-[12px]

                sm:text-sm
                sm:leading-6
              "
            >
              Have a question, need help with a service, or want to know more
              about Ekhoon? Send us a message and our team will get back to
              you.
            </p>
          </div>

          {/* Main Content */}
          <div
            className="
              grid
              grid-cols-1
              gap-5

              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-6

              xl:gap-8
            "
          >
            {/* ================= MESSAGE FORM ================= */}
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
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-[#092e5c] sm:text-base">
                    Send us a Message
                  </h2>

                  <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                    Fill out the form and we’ll get back to you.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f4ff] text-[#1685e8]">
                  <MessageCircle size={17} />
                </div>
              </div>

              <form className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-medium text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="
                        h-10
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        bg-gray-50
                        px-3
                        text-xs
                        text-gray-800
                        outline-none
                        transition

                        placeholder:text-gray-400

                        focus:border-[#63B9D5]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#63B9D5]/10
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                        h-10
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        bg-gray-50
                        px-3
                        text-xs
                        text-gray-800
                        outline-none
                        transition

                        placeholder:text-gray-400

                        focus:border-[#63B9D5]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#63B9D5]/10
                      "
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-medium text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+880 1XXX-XXXXXX"
                      className="
                        h-10
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        bg-gray-50
                        px-3
                        text-xs
                        text-gray-800
                        outline-none
                        transition

                        placeholder:text-gray-400

                        focus:border-[#63B9D5]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#63B9D5]/10
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-medium text-gray-700">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="
                        h-10
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        bg-gray-50
                        px-3
                        text-xs
                        text-gray-800
                        outline-none
                        transition

                        placeholder:text-gray-400

                        focus:border-[#63B9D5]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#63B9D5]/10
                      "
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[10px] font-medium text-gray-700">
                      How can we help?
                    </label>

                    <span className="text-[9px] text-gray-400">
                      0 / 500 characters
                    </span>
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Describe your question or service request..."
                    className="
                      w-full
                      resize-none
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      py-3
                      text-xs
                      leading-5
                      text-gray-800
                      outline-none
                      transition

                      placeholder:text-gray-400

                      focus:border-[#63B9D5]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#63B9D5]/10
                    "
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[#073E6C]
                      px-5
                      py-2.5
                      text-[11px]
                      font-semibold
                      text-white
                      transition

                      hover:bg-[#092e5c]

                      sm:text-xs
                    "
                  >
                    <Send size={14} />
                    Send Message
                  </button>

                  <p className="text-[9px] text-gray-400">
                    We usually respond within 24 hours.
                  </p>
                </div>
              </form>
            </div>

            {/* ================= RIGHT INFORMATION ================= */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Hotline */}
              <div
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-4
                  shadow-sm

                  sm:p-5
                "
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f4ff] text-[#1685e8]">
                      <Phone size={16} />
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-[#092e5c]">
                        24/7 Priority Hotline
                      </h3>

                      <p className="mt-1 text-[9px] text-gray-500">
                        Need urgent assistance?
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#e8f7ee] px-2 py-1 text-[8px] font-medium text-green-600">
                    Available
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                  <span className="text-xs font-semibold text-gray-800">
                    +880 9XX- EKHOON
                  </span>

                  <button className="rounded-md bg-[#073E6C] px-2.5 py-1 text-[9px] font-medium text-white">
                    Call
                  </button>
                </div>
              </div>

              {/* Email */}
              <div
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-4
                  shadow-sm

                  sm:p-5
                "
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                    <Mail size={16} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#092e5c]">
                      Email Inquiries
                    </h3>

                    <p className="mt-1 text-[9px] text-gray-500">
                      For general questions and support.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2">
                  <p className="text-[10px] font-medium text-gray-700">
                    support@ekhoon.com
                  </p>
                </div>
              </div>

              {/* Office */}
              <div
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-4
                  shadow-sm

                  sm:p-5
                "
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#092e5c]">
                      Dhaka Operations Hub
                    </h3>

                    <p className="mt-1 text-[9px] text-gray-500">
                      Our primary service operations.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2">
                  <p className="text-[10px] font-medium text-gray-700">
                    Dhaka, Bangladesh
                  </p>
                  <p className="mt-1 text-[9px] text-gray-500">
                    Serving customers across major cities.
                  </p>
                </div>
              </div>

              {/* Digital Desk */}
              <div
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-4
                  shadow-sm

                  sm:p-5
                "
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f4ff] text-[#1685e8]">
                      <Clock3 size={16} />
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-[#092e5c]">
                        Direct Digital Desk
                      </h3>

                      <p className="mt-1 text-[9px] text-gray-500">
                        Online support for your questions.
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#e8f4ff] px-2 py-1 text-[8px] font-medium text-[#1685e8]">
                    Online Support
                  </span>
                </div>

                <div className="mt-4 flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-[9px] text-gray-500">
                    Our support team is ready to help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM CTA ================= */}
          <div
            className="
              relative
              mt-6
              overflow-hidden
              rounded-2xl
              bg-[#073E6C]
              px-5
              py-8

              min-[400px]:px-6

              sm:mt-8
              sm:px-8
              sm:py-10

              md:px-10
            "
          >
            {/* Decorative Circle */}
            <div
              className="
                absolute
                -right-12
                -top-12
                h-40
                w-40
                rounded-full
                border
                border-white/10

                sm:h-52
                sm:w-52
              "
            />

            <div
              className="
                absolute
                -bottom-20
                right-20
                h-36
                w-36
                rounded-full
                border
                border-white/10
              "
            />

            <div className="relative z-10 max-w-2xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#63B9D5] sm:text-[10px]">
                Need Professional Help?
              </p>

              <h2
                className="
                  mt-2
                  text-xl
                  font-bold
                  leading-tight
                  text-white

                  min-[400px]:text-2xl

                  sm:text-3xl
                "
              >
                Looking for a certified service professional?
              </h2>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-[10px]
                  leading-5
                  text-white/65

                  min-[400px]:text-[11px]

                  sm:text-xs
                  sm:leading-6
                "
              >
                Let us help you find a trusted professional for your home
                service needs. Send a request and connect with someone
                available near you.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#63B9D5]
                    px-4
                    py-2.5
                    text-[10px]
                    font-semibold
                    text-[#073E6C]
                    transition

                    hover:bg-white
                  "
                >
                  Request a Service
                  <ArrowRight size={13} />
                </button>

                <button
                  type="button"
                  className="
                    rounded-lg
                    border
                    border-white/20
                    px-4
                    py-2.5
                    text-[10px]
                    font-medium
                    text-white
                    transition

                    hover:bg-white/10
                  "
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;