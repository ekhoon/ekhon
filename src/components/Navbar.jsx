"use client";

import React, { useEffect, useState } from "react";

const navItems = [
  {
    name: "About ",
    href: "#about",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "For Providers",
    href: "#providers",
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

 useEffect(() => {
  let lastScrollY = window.scrollY;
  let scrollUpDistance = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 50) {
      setShowNavbar(true);
      scrollUpDistance = 0;
    } else if (currentScrollY > lastScrollY) {
      // Scroll Down
      scrollUpDistance = 0;
      setShowNavbar(false);
    } else {
      // Scroll Up
      scrollUpDistance += lastScrollY - currentScrollY;

      if (scrollUpDistance >= 200) {
        setShowNavbar(true);
        scrollUpDistance = 0;
      }
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);;

  const handleNavClick = (name) => {
    setActiveItem(name);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Space */}
      <div
        className="
          h-[58px]
        
          min-[400px]:h-[64px]

          sm:h-[72px]

          md:h-[76px]

          lg:h-[80px]
        "
      />

      {/* Navbar */}
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
        
backdrop-blur-md
border-b
border-gray-200/40
shadow-[0_2px_15px_rgba(0,0,0,0.05)]
        
          transition-transform
          duration-300
          
          ease-in-out

          ${
            showNavbar
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        <div
          className="
            px-3
            py-3

            min-[400px]:px-4
            min-[400px]:py-4

            sm:px-6
            sm:py-5

            md:px-12
            md:py-5

            lg:px-20
          "
        >
          <nav
            className="
              mx-auto
              flex
              w-full
              max-w-7xl
              items-center
              justify-between
            "
          >
            {/* Logo */}
            <a href="/" className="shrink-0">
              <img
                src="/Logo-10.svg"
                alt="Ekhon"
                className="
                  h-8
                  w-auto
                  object-contain

                  min-[400px]:h-9

                  sm:h-10
                "
              />
            </a>

            {/* Desktop Navigation */}
            <div
              className="
                hidden
                items-center
                gap-1
                rounded-full
                border
                border-gray-100
                bg-[#f5f6f9]
                shadow-sm

                md:flex
              "
            >
              {navItems.map((item) => {
                const isActive = activeItem === item.name;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`
                      rounded-full
                      px-3
                      py-1.5
                      text-sm
                      font-medium
                      transition-all
                      duration-300

                      lg:px-4
                      lg:text-md

                      ${
                        isActive
                          ? "bg-[#d7f2fa] text-[#123f68] shadow-sm"
                          : "text-gray-600 hover:bg-white hover:text-[#123f68]"
                      }
                    `}
                  >
                    <span
                      className={`
                        mr-1
                        font-extrabold
                        text-[18px]
                        transition

                        lg:mr-1.5
                        lg:text-[20px]

                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-50"
                        }
                      `}
                    >
                      •
                    </span>

                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {item.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Download Button */}
            <button
              className="
                hidden
                cursor-pointer
                rounded-full
                bg-[#073e6c]
                px-4
                py-1.5
                text-sm
                font-medium
                tracking-wide
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#062f52]
                hover:shadow-md

                md:block

                lg:px-5
                lg:text-md
              "
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                DOWNLOAD
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-[#f5f6f9]
                text-[#073e6c]
                transition
                hover:bg-[#d7f2fa]

                min-[400px]:h-10
                min-[400px]:w-10

                sm:h-11
                sm:w-11

                md:hidden
              "
              aria-label="Open navigation"
            >
              <div
                className="
                  flex
                  flex-col
                  gap-1

                  min-[400px]:gap-1.5
                "
              >
                <span
                  className="
                    h-0.5
                    w-4
                    rounded-full
                    bg-[#073e6c]

                    min-[400px]:w-[18px]

                    sm:w-5
                  "
                />

                <span
                  className="
                    h-0.5
                    w-4
                    rounded-full
                    bg-[#073e6c]

                    min-[400px]:w-[18px]

                    sm:w-5
                  "
                />

                <span
                  className="
                    h-0.5
                    w-4
                    rounded-full
                    bg-[#073e6c]

                    min-[400px]:w-[18px]

                    sm:w-5
                  "
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          transition-opacity
          duration-300

          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          h-dvh
          w-[82%]
          max-w-[320px]
          overflow-y-auto
          overscroll-contain
          bg-white
          shadow-[-10px_0_30px_rgba(0,0,0,0.12)]
          transition-transform
          duration-300
          ease-in-out

          sm:w-[320px]

          md:hidden

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Sidebar Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-gray-100
            px-4
            py-4

            min-[400px]:px-5
            min-[400px]:py-5

            sm:px-6
          "
        >
          {/* Sidebar Logo */}
          <img
            src="/Logo-10.svg"
            alt="Ekhon"
            className="
              h-8
              w-auto
              object-contain

              min-[400px]:h-9

              sm:h-10
            "
          />

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-[#f5f6f9]
              text-[#073e6c]
              transition
              hover:bg-[#d7f2fa]

              min-[400px]:h-10
              min-[400px]:w-10
            "
            aria-label="Close navigation"
          >
            <span
              className="
                text-xl
                leading-none

                min-[400px]:text-2xl
              "
            >
              ×
            </span>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div
          className="
            px-3
            py-5

            min-[400px]:px-4
            min-[400px]:py-6

            sm:px-5
          "
        >
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-200

                    min-[400px]:rounded-2xl
                    min-[400px]:px-5
                    min-[400px]:py-3.5

                    ${
                      isActive
                        ? "bg-[#d7f2fa] text-[#123f68]"
                        : "text-gray-600 hover:bg-[#f5f6f9] hover:text-[#123f68]"
                    }
                  `}
                >
                  <span
                    className={`
                      mr-2
                      font-extrabold

                      min-[400px]:mr-3

                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-50"
                      }
                    `}
                  >
                    •
                  </span>

                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Download Button */}
          <button
            className="
              mt-5
              w-full
              cursor-pointer
              rounded-xl
              bg-[#073e6c]
              px-4
              py-3
              text-sm
              font-semibold
              tracking-wide
              text-white
              transition
              hover:bg-[#062f52]

              min-[400px]:mt-6
              min-[400px]:rounded-2xl
              min-[400px]:px-5
              min-[400px]:py-3.5
            "
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              DOWNLOAD
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;