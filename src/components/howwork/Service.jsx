"use client"; 
 
import React from "react"; 
import Image from "next/image"; 
 
const Service = () => { 
  return ( 
    <section className="w-full overflow-hidden bg-white"> 
      <div 
        className=" 
          mx-auto 
          w-full 
          max-w-[1200px] 
          px-5 
          py-16 
 
          sm:px-8 
          sm:py-10
 
          md:px-10 
 
          lg:px-16 
 
          xl:px-12 
        " 
      > 
        {/* ========================= 
            SECTION TITLE 
        ========================== */} 
        <div className=" "> 
          <p 
            style={{ fontFamily: "Inter, sans-serif" }} 
            className=" 
              text-[10px] 
              font-bold 
              uppercase 
              tracking-[0.12em] 
              text-[#1685e8] 
 
              sm:text-xs 
            " 
          > 
            Simple Steps 
          </p> 
        </div> 
 
        {/* ========================= 
            STEP 01 
        ========================== */} 
        <div 
          className=" 
            grid 
            grid-cols-1 
            items-center 
            gap-8 
 
            sm:gap-10 
 
            md:gap-12 
 
            lg:grid-cols-2 
            lg:gap-8 
 
            xl:gap-12 
          " 
        > 
          {/* =========================
              LEFT CONTENT
          ========================== */} 
          <div 
            className=" 
              w-full 
              max-w-[520px]

              lg:order-2
              lg:pl-8 
 
              xl:pl-10
            " 
          > 
            {/* ========================= 
                NUMBER 
            ========================== */} 
            <div 
              style={{ fontFamily: "Inter, sans-serif" }} 
              className=" 
                mb-4 
                flex 
                h-12 
                w-12 
                items-center 
                justify-center 
                rounded-full 
                bg-[#e8f4ff] 
                text-base 
                font-bold 
                text-[#1685e8] 
 
                sm:h-14 
                sm:w-14 
                sm:text-lg 
              " 
            > 
              01 
            </div> 
 
            {/* ========================= 
                TITLE 
            ========================== */} 
            <h2 
              style={{ fontFamily: "Inter, sans-serif" }} 
              className=" 
                text-2xl 
                font-bold 
                leading-tight 
                text-[#092e5c] 
 
                sm:text-3xl 
 
                md:text-[32px] 
 
                lg:text-[30px] 
 
                xl:text-[32px] 
              " 
            > 
              Choose Your Service 
            </h2> 
 
            {/* ========================= 
                SUBTITLE 
            ========================== */} 
            <p 
              style={{ fontFamily: "Inter, sans-serif" }} 
              className=" 
                mt-2 
                text-sm 
                font-semibold 
                text-[#1685e8] 
 
                sm:text-base 
              " 
            > 
              Tell us what you need. 
            </p> 
 
            {/* ========================= 
                DESCRIPTION 
            ========================== */} 
            <p 
              style={{ fontFamily: "Inter, sans-serif" }} 
              className=" 
                mt-3 
                text-[13px] 
                leading-6 
                text-[#6883a1] 
 
                sm:text-sm 
                sm:leading-7 
 
                md:text-[15px] 
              " 
            > 
              Select the type of home service you need from Ekhoon. Whether you need an electrician, plumber, AC technician, refrigerator technician, TV repair technician, appliance technician, mechanic, painter, or other service professional, you can find the service that matches your needs. 
            </p> 
 
            {/* ========================= 
                SERVICE ICON CARD 
            ========================== */} 
            <div 
              style={{ fontFamily: "Inter, sans-serif" }} 
              className=" 
                inline-flex 
                items-center 
                rounded-full 
                px-3 
              " 
            > 
              {/* Icon */} 
              <div 
                className=" 
                  flex 
                  h-9 
                  w-9 
                  items-center 
                  justify-center 
                  rounded-full 
                  text-lg 
 
                  sm:h-10 
                  sm:w-10 
                " 
              > 
                <Image  
                  className="rotate-[180deg]" 
                  src="/icon-pin.png" 
                  width={30} 
                  height={30} 
                  alt="location"
                /> 
              </div> 
            </div> 
          </div>

          {/* ========================= 
              RIGHT IMAGE
          ========================== */} 
          <div 
            className=" 
              flex 
              w-full 
              items-center 
              justify-center 
 
              lg:order-1
              lg:justify-start 
            " 
          > 
            <div 
              className=" 
                relative 
                h-[260px] 
                w-full 
                max-w-[380px] 
 
                sm:h-[320px] 
                sm:max-w-[440px] 
 
                md:h-[360px] 
                md:max-w-[480px] 
              " 
            > 
              <Image 
                src="/ekhon app2.png" 
                alt="ekhon app" 
                width={620} 
                height={6} 
                priority 
                className=" 
                  w-full 
                  h-auto 
                  object-contain 
 
                  sm:max-w-[580px] 
 
                  md:max-w-[320px] 
 
                  lg:max-w-[260px] 
                " 
              /> 
            </div> 
          </div>
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default Service;