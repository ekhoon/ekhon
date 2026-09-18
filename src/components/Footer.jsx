"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Mail, Plus, X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="w-full  font-inter px-3 pb-3 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[42px]
          bg-[#f5f6fa]
         
          px-5
          pt-8

          min-[400px]:px-6

          sm:rounded-[50px]
          sm:px-10
          sm:pt-10

          md:px-10
          md:pt-10

          lg:px-16
          lg:pt-14
        "
      >
        {/* =====================================================
            MOBILE + TABLET
        ====================================================== */}

        <div className="relative z-20 block lg:hidden">
          {/* =====================================================
              BRAND DESCRIPTION
          ====================================================== */}

          <div className="pb-6">
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                max-w-[280px]
                text-[12px]
                font-medium
                leading-[1.45]
                text-[#073e6c]

                sm:text-[13px]
              "
            >
              <span className="font-bold">ekhoon</span> connects you with
              trusted
              <br />
              professionals for your everyday
              <br />
              home service needs.
            </p>
          </div>

          {/* =====================================================
              COMPANY
          ====================================================== */}

          <FooterAccordion
            title="Company"
            open={openSection === "company"}
            onClick={() => toggleSection("company")}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 pb-5 pt-1">
              <FooterLink>About Us</FooterLink>
              <FooterLink>How It Works</FooterLink>

              <FooterLink>Our Services</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </div>
          </FooterAccordion>

          {/* =====================================================
              SUPPORT
          ====================================================== */}

          <FooterAccordion
            title="Support"
            open={openSection === "support"}
            onClick={() => toggleSection("support")}
          >
            <div className="grid grid-cols-1 gap-y-4 pb-5 pt-1">
              <FooterLink>Help Center</FooterLink>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Contact Support</FooterLink>
            </div>
          </FooterAccordion>

          {/* =====================================================
              FOR PROVIDERS
          ====================================================== */}

          <FooterAccordion
            title="For Providers"
            open={openSection === "providers"}
            onClick={() => toggleSection("providers")}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 pb-5 pt-1">
              <FooterLink>Become a Provider</FooterLink>
              <FooterLink>How It Works</FooterLink>

              <FooterLink>Provider Support</FooterLink>
            </div>
          </FooterAccordion>

          {/* =====================================================
              GET THE APP
          ====================================================== */}

          <div className="border-b border-gray-300 py-5">
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                text-[12px]
                font-semibold
                text-[#111827]
              "
            >
              Get the Ekhonn App
            </p>

            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-2
                max-w-[270px]
                text-[10px]
                leading-[1.45]
                text-gray-500
              "
            >
              Book trusted home services anytime, anywhere.
            </p>

            {/* APP BUTTONS */}

            <div className="mt-3 flex items-center gap-2">
              <Image
                src="/N Elements-20.svg"
                alt="Google Play"
                width={100}
                height={100}
                className="
                  h-auto
                  w-[92px]
                  object-contain
                  sm:w-[100px]
                "
              />

              <Image
                src="/N Elements-28.svg"
                alt="App Store"
                width={100}
                height={100}
                className="
                  h-auto
                  w-[92px]
                  object-contain
                  sm:w-[100px]
                "
              />
            </div>
          </div>

          {/* =====================================================
              SOCIAL ICONS
          ====================================================== */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              py-5
            "
          >
            <MobileSocialIcon>
              <FaFacebook size={13} />
            </MobileSocialIcon>

            <MobileSocialIcon>
              <FaInstagram size={13} />
            </MobileSocialIcon>

            <MobileSocialIcon>
              <FaWhatsapp size={13} />
            </MobileSocialIcon>

            <MobileSocialIcon>
              <FaYoutube size={13} />
            </MobileSocialIcon>

            <MobileSocialIcon>
              <FaTiktok size={13} />
            </MobileSocialIcon>

            <MobileSocialIcon>
              <FaLinkedin size={13} />
            </MobileSocialIcon>

            <MobileSocialIcon>
              <Mail size={13} strokeWidth={2.5} />
            </MobileSocialIcon>
          </div>

          {/* =====================================================
              COPYRIGHT
          ====================================================== */}

          <div
            className="
              border-t
              border-gray-300
              py-5
              text-center
            "
          >
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                whitespace-nowrap
                text-[10px]
                text-gray-500

                sm:text-[11px]
              "
            >
              © 2026{" "}
              <span className="font-medium text-[#e52b32]">
                Ekhonn
              </span>
              . All Rights Reserved.
            </p>
          </div>

          {/* =====================================================
              MOBILE HUGE EKHOON LOGO
          ====================================================== */}

          <div
            className="
              pointer-events-none
              relative
              z-10
              mx-auto
              mt-1
              w-full
              translate-y-[18px]

              sm:translate-y-[22px]
            "
          >
            <Image
              src="/Elements-22.svg"
              alt=""
              width={1200}
              height={400}
              priority
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </div>

        {/* =====================================================
            DESKTOP FOOTER
        ====================================================== */}
{/* =====================================================
    DESKTOP FOOTER
====================================================== */}

<div
  className="
    relative
    z-20
    hidden
    lg:grid
    lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr_1.2fr]
    lg:gap-8
  "
>
  {/* =====================================================
      BRAND
  ====================================================== */}

  <div>
    <p
      style={{ fontFamily: "Inter, sans-serif" }}
      className="
        max-w-[230px]
        text-[12px]
        font-medium
        leading-[1.35]
        text-[#073e6c]
      "
    >
      <span className="font-bold">ekhoon</span> connects you with
      trusted
      <br />
      professionals for your everyday
      <br />
      home service needs.
    </p>

    {/* DESKTOP SOCIAL ICONS */}

    <div className="mt-6 flex items-center gap-2.5">
      <SocialIcon>
        <FaFacebook size={13} />
      </SocialIcon>

      <SocialIcon>
        <FaInstagram size={13} />
      </SocialIcon>

      <SocialIcon>
        <FaYoutube size={13} />
      </SocialIcon>

      <SocialIcon>
        <FaLinkedin size={13} />
      </SocialIcon>

      <SocialIcon>
        <Mail size={13} strokeWidth={2.5} />
      </SocialIcon>
    </div>
  </div>

  {/* =====================================================
      COMPANY
  ====================================================== */}

  <div>
    <FooterTitle>Company</FooterTitle>

    <div className="mt-5 space-y-2">
      <FooterLink>About Us</FooterLink>
      <FooterLink>How It Works</FooterLink>
      <FooterLink>Our Services</FooterLink>
      <FooterLink>Contact Us</FooterLink>
    </div>
  </div>

  {/* =====================================================
      SUPPORT
  ====================================================== */}

  <div>
    <FooterTitle>Support</FooterTitle>

    <div className="mt-5 space-y-2">
      <FooterLink>Help Center</FooterLink>
      <FooterLink>FAQs</FooterLink>
      <FooterLink>Contact Support</FooterLink>
    </div>
  </div>

  {/* =====================================================
      FOR PROVIDERS
  ====================================================== */}

  <div>
    <FooterTitle>For Providers</FooterTitle>

    <div className="mt-5 space-y-2">
      <FooterLink>Become a Provider</FooterLink>
      <FooterLink>How It Works</FooterLink>
      <FooterLink>Provider Support</FooterLink>
    </div>
  </div>

  {/* =====================================================
      GET THE EKHOON APP
  ====================================================== */}

  <div>
    <FooterTitle>Get the Ekhonn App</FooterTitle>

    <p
      style={{ fontFamily: "Inter, sans-serif" }}
      className="
        mt-3
        max-w-[220px]
        text-[11px]
        leading-[1.45]
        text-gray-500
      "
    >
      Book trusted home services anytime, anywhere.
    </p>

    {/* APP BUTTONS — SIDE BY SIDE */}

    <div className="mt-4 flex items-center gap-2">
      <Image
        src="/N Elements-20.svg"
        alt="Google Play"
        width={100}
        height={100}
        className="
          h-auto
          w-[90px]
          object-contain
        "
      />

      <Image
        src="/N Elements-28.svg"
        alt="App Store"
        width={100}
        height={100}
        className="
          h-auto
          w-[90px]
          object-contain
        "
      />
    </div>
  </div>
</div>


        {/* =====================================================
            DESKTOP DIVIDER + COPYRIGHT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            mt-12
            hidden
            border-t
            border-gray-400/70
            pt-5

            lg:mt-16
            lg:block
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              pb-[230px]

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="text-xs text-gray-500"
            >
              © 2026 Ekhonn. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms & Conditions</FooterLink>
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP HUGE EKHOON LOGO
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            bottom-[-55px]
            z-10
            hidden
            w-[calc(100%-48px)]
            -translate-x-1/2

            xl:bottom-[-65px]
            xl:w-[calc(100%-64px)]

            max-w-[1200px]

            lg:block
          "
        >
          <Image
            src="/Elements-22.svg"
            alt=""
            width={1200}
            height={400}
            priority
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>
      </div>
    </footer>
  );
};

/* ============================================================
   MOBILE FAQ / ACCORDION
============================================================ */

const FooterAccordion = ({
  title,
  open,
  onClick,
  children,
}) => {
  return (
    <div className="border-b border-gray-300">
      {/* HEADER */}

      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          py-[15px]
          text-left
        "
      >
        <span
          style={{ fontFamily: "Inter, sans-serif" }}
          className="
            text-[13px]
            font-extrabold
            uppercase
            tracking-[-0.1px]
            text-[#111827]
          "
        >
          {title}
        </span>

        <span className="flex items-center justify-center">
          {open ? (
            <X
              size={17}
              strokeWidth={2.5}
              className="text-[#111827]"
            />
          ) : (
            <Plus
              size={17}
              strokeWidth={2.5}
              className="text-[#111827]"
            />
          )}
        </span>
      </button>

      {/* CONTENT */}

      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   DESKTOP TITLE
============================================================ */

const FooterTitle = ({ children }) => {
  return (
    <h3
      style={{ fontFamily: "Inter, sans-serif" }}
      className="
        text-[12px]
        font-semibold
        text-[#111827]
      "
    >
      {children}
    </h3>
  );
};

/* ============================================================
   FOOTER LINK
============================================================ */

const FooterLink = ({ children }) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="
        block
        cursor-pointer
        text-left
        text-[10px]
        leading-[1.25]
        text-gray-500
        transition-colors
        hover:text-[#073e6c]

        sm:text-[11px]
      "
    >
      {children}
    </button>
  );
};

/* ============================================================
   DESKTOP SOCIAL
============================================================ */

const SocialIcon = ({ children }) => {
  return (
    <button
      type="button"
      className="
        flex
        h-[21px]
        w-[21px]
        cursor-pointer
        items-center
        justify-center
        rounded-full
        bg-[#1d1d1d]
        text-white
        transition
        hover:scale-110
      "
    >
      {children}
    </button>
  );
};

/* ============================================================
   MOBILE SOCIAL
============================================================ */

const MobileSocialIcon = ({ children }) => {
  return (
    <button
      type="button"
      className="
        flex
        h-[18px]
        w-[18px]
        cursor-pointer
        items-center
        justify-center
        rounded-full
        bg-[#1d1d1d]
        text-white
        transition
        hover:scale-110
      "
    >
      {children}
    </button>
  );
};

export default Footer;