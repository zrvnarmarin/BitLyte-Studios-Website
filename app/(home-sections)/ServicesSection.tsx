"use client";

import React, { useState, Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import FacilityCardImageThree from "../../public/images/Rectangle 1.svg";
import ArrowRight from "../../public/images/Rectangle 1.svg";
import "../../public/test.css";
import Link from "next/link";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff]">Our Services</h2>

      {/* Blur background */}
      <div className="w-16 h-16 absolute right-0 bottom-o bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[30px]"></div>

      <div className="w-full flex flex-row items-center gap-6">
        {facilityCardData.map((service) => (
          <div className="w-full flex flex-col gap-6">
            <div
              key={service.id}
              className={`overflow-hidden relative w-full flex flex-col items-center justify-center rounded-lg p-4 py-8 cursor-pointer bg-[#0b0b0b] border-[0.5px] border-[#1A9FFF]`}
            >
              {/* Blur background */}
              <div className="w-72 h-72 absolute inset-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div>
              <div className="flex flex-row items-center justify-center gap-1">
                <h3 className="text-[#ffffff] font-semibold text-3xl z-20text-center">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Category services */}
            {service.services.map((s) => (
              <Link href={`/services/${s}`} key={s} className="flex flex-col gap-6">
                <p className="hover:bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center w-full text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-8 py-4">
                  {s}
                </p>
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
    services: ["Copywriting", "Social Media Management", "Ad Campaigns"],
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
