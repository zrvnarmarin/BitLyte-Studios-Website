"use client";

import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
          Our Services
        </h2>

      {/* Service categories cards */}
      <div className="relative w-full grid gric-cols-1 lg:grid-cols-3 items-center gap-6 pt-4 sm:pt-8 md:pt-12">
        {serviceCategoriesData.map((serviceCategory) => (
          <ServiceCategoryCard
            key={serviceCategory.id}
            id={serviceCategory.id}
            title={serviceCategory.title}
            services={serviceCategory.services}
            icon={serviceCategory.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ServiceCategoryCard = ({
  id,
  title,
  services,
  icon,
}: ServiceCardType) => {
  return (
    <div className="group relative overflow-hidden w-full grid grid-cols-1 xl:grid-cols- bg-[#0b0b0b] justify-between rounded-lg border-[0.5px] border-[#0a2030] hover:shadow-[0_0_15px_0_rgba(10,32,78,1)] z-20">
      {/* Blur background */}
      {/* <div className="w-48 h-48 absolute left-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div> */}
      <div className="w-28 h-28 xl:w-28 xl:h-28 absolute top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>

      <div
        className={`overflow-hidden relative w-full flex flex-col items-center justify-center p-6 py-8 border-b-[0.5px] border-[#0a2030]`}
      >
        <div className="relative flex flex-row items-center justify-start gap-4 w-full">
          {/* <div className="hidden md:block md:w-40 md:h-40 xl:hidden  absolute right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div> */}
          <span className="p-4 rounded-full bg-gradient-to-r from-[#1A9FFF] to-[#0086E6]">
            {icon()}
          </span>
          <h3 className="w-full flex sm:flex-row items-center justify-start gap-3 sm:gap-4 z-20 text-start">
            <span className="text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight">
              {title}
            </span>
            <span className="group-hover:scale-105 group-hover:duration-900"></span>
          </h3>
        </div>
      </div>

      {/* Category services */}
      <div className="flex flex-col items-center justify-center">
        {services.map((service: string) => (
          <Link
            key={service}
            href={`/services/${service
              .trim()
              .replace(/[\s\/]+/g, "-")
              .toLowerCase()}`}
            className="group h-full w-full flex items-start justify-start gap-2 relative overflow-hidden" // md:bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b]
          >
            {/* Blur background */}
            <div className="w-32 h-32 md:w-20 md:h-20 xl:w-28 xl:h-2 absolute left-0 right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <div className=" hover:bg-[#e3e3e3] hover:text-[#000000] duration-300 flex gap-2 items-center md:justify-start w-full text-[#ffffff] font-light hover:font-normal text-xl text-center z-20 px-6 py-6 lg:py-6">
              <ArrowRightIcon />
              <span className="text-start md:text-center">{service}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export type ServiceCardType = {
  id: number;
  title: string;
  services: string[];
  icon: () => React.JSX.Element;
};

export const CodeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="#ffffff"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      // className="lucide lucide-code w-8 h-8 text-white"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
};

export const PaletteIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="#ffffff"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      // className="lucide lucide-palette w-8 h-8 text-white"
    >
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  );
};

export const LayersIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      color="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      // className="lucide lucide-layers w-8 h-8 text-white"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
    </svg>
  );
};

export const serviceCategoriesData: ServiceCardType[] = [
  {
    id: 1,
    title: "Digital Marketing",
    icon: LayersIcon,
    services: ["Copywriting", "Social Media Management", "Ad Campaigns"],
  },
  {
    id: 2,
    icon: CodeIcon,
    title: "Web Development",
    services: ["Landing Page", "Website Development", "Frontend Development"],
  },
  {
    id: 3,
    icon: PaletteIcon,
    title: "Digital Design",
    services: ["UI/UX Design", "Brand Identity", "Logo Design"],
  },
];

export const RightArrow = ({
  strokeWidth = 0.1,
  color = "#ffffff",
  width = 20,
  height = 20,
}: {
  strokeWidth?: number;
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 -6.5 38 38"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    transform="rotate(0)"
  >
    <g
      id="icons"
      stroke="none"
      strokeWidth={strokeWidth}
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="ui-gambling-website-lined-icnos-casinoshunter"
        transform="translate(-1511.000000, -158.000000)"
        fill={color}
        fillRule="nonzero"
      >
        <g id="1" transform="translate(1350.000000, 120.000000)">
          <path
            d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
            id="right-arrow"
          />
        </g>
      </g>
    </g>
  </svg>
);

const ArrowRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right text-[#1A9FFF]"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
};
