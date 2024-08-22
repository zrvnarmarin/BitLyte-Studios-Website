"use client";

import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium xs:font-normal z-20">
        Our Services
      </h2>

      {/* Blur background */}
      {/* <div className="w-16 h-16 absolute top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[30px]"></div> */}

      {/* Service categories cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 pt-4 sm:pt-8 md:pt-12">
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
    <div className="relative overflow-hidden w-full flex flex-col gap-4 rounded-lg px-4 p-4  border-[#0c102d] border-[0.5px] z-20">
      <div className="w-32 h-32 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

      <div
        className={`overflow-hidden relative w-full flex flex-col items-center justify-center p-4 py-8`}
      >
        <div className="flex flex-row items-center justify-center gap-1 w-full">
          <h3 className="flex flex-col items-center gap-2 text-[#ffffff] font-semibold text-2xl xs:text-3xl z-20 text-center">
            <span className="custom-text font-black text-2xl xs:text-4xl z-0 mr-4">
              0{id}
            </span>
            {title}
          </h3>
        </div>
      </div>

      {/* Category services */}
      {services.map((service: string) => (
        <Link
          href={`/services/${service}`}
          key={service}
          className="group flex flex-col gap-6 relative overflow-hidden rounded-lg"
        >
          {/* Blur background */}
          <div className="w-72 h-72 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

          <div className="hover:bg-[#e3e3e3] hover:text-[#000000] border-[1px] border-[#000000] flex gap-2 items-center justify-center w-full text-[#ffffff] font-medium text-xl lg:text-xl text-center z-20 rounded-lg px-8 py-8">
            {service}
          </div>
        </Link>
      ))}
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
    services: ["UI/UX Design", "Brand Identity", "Logo Design"],
  },
];

export const RightArrow = ({
  strokeWidth = 0.1,
  color = "#ffffff",
  width = 30,
  height = 30,
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

export const LeftArrow = ({ strokeWidth = 0.1, color = "#ffffff" }) => (
  <svg
    width="30px"
    height="30x"
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
