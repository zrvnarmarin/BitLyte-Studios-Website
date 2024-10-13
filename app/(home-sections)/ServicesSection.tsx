"use client";

import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[40px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Our Services
      </h2>

      {/* Service categories cards */}
      <div className="relative w-full flex flex-col items-center gap-6 pt-4 sm:pt-8 md:pt-12">
        {serviceCategoriesData.map((serviceCategory) => (
          <ServiceCategoryCard
            id={serviceCategory.id}
            title={serviceCategory.title}
            services={serviceCategory.services}
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
}: ServiceCardType) => {
  return (
    <div className="group relative overflow-hidden w-full grid grid-cols-1 xl:grid-cols-2 justify-between md:gap- rounded-lg border-[0.5px] border-[#0a2030] z-20">
      {/* Blur background */}
      <div className="w-48 h-48 absolute left-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

      <div
        className={`overflow-hidden relative w-full lg:w-fit flex flex-col items-center justify-center p-6 py-8`}
      >
        <div className="flex flex-row items-center justify-start w-full">
          <h3 className="w-full flex flex-row items-center gap-4 md:gap-16  z-20 text-center">
            <span className="custom-text font-black text-3xl xs:text-4xl z-20">
              0{id}
            </span>
            <span className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">{title}</span>
            <span className="group-hover:scale-105 group-hover:duration-900"></span>
          </h3>
        </div>
      </div>

      {/* Category services */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        {services.map((service: string) => (
          <Link
            href={`/services/${service}`}
            key={service}
            className="group h-full w-full flex gap-6 relative overflow-hidden border-[0.5px] border-l-[#0a2030] md:bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] duration-200"
          >
            {/* Blur background */}
            <div className="w-24 h-24 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <div className="hover:bg-[#e3e3e3] hover:text-[#000000] duration-300 flex gap-6 items-center justify-between w-full text-[#ffffff] font-light hover:font-normal text-xl text-center z-20 px-8 py-8">
              <span className="text-start">{service}</span>
              <span className="md:hidden">
                <RightArrow width={20} height={20} />
              </span>
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
};

export const serviceCategoriesData: ServiceCardType[] = [
  {
    id: 1,
    title: "Digital Marketing",
    services: [
      "Copywriting",
      "Social Media Management",
      "Recruitment Campaigns",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    services: ["Landing Page", "Website Development", "Frontend Development"],
  },
  {
    id: 3,
    title: "Digital Design",
    services: ["UI/UX Design", "Brand Identity & Visual", "Logo Design"],
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
    <title>right-arrow</title>
    <desc>Created with Sketch.</desc>
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

export const LeftArrow = ({
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
    transform="rotate(180)"
  >
    <title>right-arrow</title>
    <desc>Created with Sketch.</desc>
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
