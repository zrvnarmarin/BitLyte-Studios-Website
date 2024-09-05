import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import { LogoForButton } from "../[serviceId]/HeroSection";
import Link from "next/link";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          {/* <div className="w-64 h-64 md:w-96 md:h-96 absolute left-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[230px]"></div> */}
          <p className="text-sm sm:text-base md:text-xl text-start font-bold text-[#ffffff] uppercase z-30">
            Explore our services
          </p>
          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-10 lg:leading-none text-[#ffffff] font-medium text-center lg:text-left z-20">
            Transform
            <span className="custom-text font-black"> Your Vision </span>
            To Beautiful Reality
          </h1>

          <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center lg:text-left z-20">
            As a UI/UX design agency, we create successful digital products that
            combine user needs with business goals. Our human centred design
            approach makes it happen.
          </p>

          <div className="w-full flex items-center justify-center lg:justify-start z-20 pt-6">
            <Link href={`/contact`}>
              <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#57b7fc] to-[#27A5FF] rounded-full font-medium text-xl xs:text-2xl sm:text-2xl md:text-3xl">
                <LogoForButton fillColor="#ffffff" width={18} height={20} />
                Start building
              </button>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* Image container */}
          <div className="hidden sm:block w-72 h-72 absolute right-32 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[130px]"></div>
          <WebServicesIcon />
        </div>
      </div>
    </HeroSectionWrapper>
  );
}

export const WebServicesIcon = ({
  width = 500,
  height = 500,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      className="z-20"
      width={width}
      height={height}
      viewBox="-27 0 310 310"
      preserveAspectRatio="xMidYMid"
      fill="#5775D0"
      stroke="#5775D0"
      strokeWidth="0.1"
      transform="scale(-1, 1)"  // Flips the icon horizontally
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            d="M36.08,262.013 L0,244.832 L0,64 L36.08,45.96 L36.211,46.147 L36.451,261.648 L36.08,262.013"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M168.376,226.362 L36.08,262.013 L36.08,45.96 L168.376,82.04 L168.376,226.362"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
          <path
            d="M59.705,124.134 L128,115.544 L129.667,117 L129.667,190.333 L128,192.859 L59.705,184.698 L59.705,124.134"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,109.53 L193.718,115.973 L59.705,94.497 L127.167,72.5 L256,109.53"
            fill="#232c4a"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,199.731 L193.718,193.289 L59.705,214.765 L132.167,233.167 L256,199.731"
            fill="#232c4a"
          >
            {" "}
          </path>{" "}
          <path
            d="M59.705,274.899 L128,309.262 L130.887,232.694 L59.705,214.765 L59.705,274.899"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,245.262 L128,309.262 L128,231.946 L256,199.731 L256,245.262"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
          <path
            d="M59.705,33.933 L128,0 L128.495,0.698 L128.285,76.844 L128,77.315 L59.705,94.497 L59.705,33.933"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,176.966 L128,192.859 L128,115.544 L256,131.866 L256,176.966"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,109.53 L128,77.315 L128,0 L256,64 L256,109.53"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
