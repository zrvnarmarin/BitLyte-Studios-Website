"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import FacilityCardImageThree from "../../public/images/Rectangle 1.svg";
import ArrowRight from "../../public/images/Rectangle 1.svg";
import "../../public/test.css";
import Link from "next/link";
import "../../public/styles/twoWayArrow.css";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff]">Our Services</h2>

      {/* Blur background */}
      {/* <div className="w-16 h-16 absolute top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[30px]"></div> */}

      <div className="w-full flex flex-row items-center gap-6 pt-12">
        {facilityCardData.map((service) => (
          <div key={service.id} className="w-full flex flex-col gap-6">
            <div
              className={`overflow-hidden relative w-full flex flex-col items-center justify-center rounded-full p-4 py-8 bg-[#0b0b0b] border-[0.5px] border-[#252525]`}
            >
              {/* Blur background */}
              <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[130px]"></div>
              <div className="flex flex-row items-center justify-center gap-1">
                <h3 className="flex items-center gap-2 text-[#ffffff] font-semibold text-3xl z-20 text-center">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Animated arrow */}
            <div className="w-full flex items-center justify-center -rotate-90  pb-12">
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Category services */}
            {service.services.map((s) => (
              <Link
                href={`/services/${s}`}
                key={s}
                className="group flex flex-col gap-6 relative overflow-hidden rounded-full bg-gradient-to-r from-[#131313] to-[#00243e]"
              >
                <div className="hover:bg-[#e3e3e3] hover:text-[#000000] flex gap-2 items-center justify-center w-full text-[#ffffff] font-normal text-xl z-20 rounded-full border-[0.5px] border-[#252525] px-8 py-4">
                  {s}
                  <div className="group-hover:visible hidden">
                    <RightArrow />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export type ServiceCardType = {
  id: number;
  imageSrc: StaticImageData;
  icon: () => JSX.Element;
  title: string;
  description: string;
  gradient: string;
  services: string[];
};

export const UniqueSellingPointIconOne = () => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 17 17"
      fill="#27A5FF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const UniqueSellingPointIconTwo = () => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const UniqueSellingPointIconThree = () => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 17 17"
      fill="#27A5FF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const facilityCardData: ServiceCardType[] = [
  {
    id: 1,
    icon: UniqueSellingPointIconThree,
    imageSrc: FacilityCardImageThree,
    title: "Digital Marketing",
    description: "Choose something for yourself and have fun",
    gradient: "bg-gradient-to-r from-[#292929] to-[#9FFF1A]",
    services: ["Copywriting", "Social Media Management", "Meta Recruitment Campaigns"],
  },
  {
    id: 1,
    icon: UniqueSellingPointIconOne,
    imageSrc: FacilityCardImageThree,
    title: "Web Development",
    description:
      "Creating beautiful, functional web solutions tailored to your brand that engage the customers and convert",
    gradient: "bg-gradient-to-r from-[#292929] to-[#ED1AFF]",
    services: ["Landing Page", "Website Development", "Frontend Development"],
  },
  {
    id: 3,
    icon: UniqueSellingPointIconTwo,
    imageSrc: FacilityCardImageThree,
    title: "Digital Design",
    description:
      "Creating visually stunning designs that boost your brand awareness and captivate your audience",
    gradient: "bg-gradient-to-r from-[#292929] to-[#FF7A1A]",
    services: ["UI/UX Design", "Brand Identity", "Logo Design"],
  },
];

export const RightArrow = ({ strokeWidth = 0.1, color = "#ffffff" }) => (
  <svg
    width="30px"
    height="30px"
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
