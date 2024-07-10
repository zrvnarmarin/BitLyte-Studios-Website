"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import FacilityCardImageThree from "../../public/images/Rectangle 1.svg";
import ArrowRight from '../../public/images/Rectangle 1.svg'
import '../../public/test.css'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper>
      <h2 className="text-4xl text-[#ffffff]">
        What we offer {" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-white flex items-center justify-center">
          <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
            <Image
              priority
              src={facilityCardData[activeIndex].imageSrc}
              alt={facilityCardData[activeIndex].title}
              fill={true}
              className="object-cover w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 relative">
          <ul className="flex flex-col gap-6">
            {facilityCardData.map((card, index) => (
              <li
                key={card.id}
                className={`group flex flex-row gap-4 rounded-lg p-5 cursor-pointer ${card.gradient}}`}
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="w-full">{card.icon()}</span>
                  <div className="w-full flex items-center gap-2">
                    <h3 className="w-full text-[#ffffff] font-semibold text-2xl text-start pt-4">{card.title}</h3>
                  </div>
                  <p className="text-base text-[#eeeeee] font-normal pt-2">{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="w-full flex">
        <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
            <Image src={ArrowRight} alt="hero_image"  />
            View all services
        </button>
      </div> */}
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
  
};

export const UniqueSellingPointIconOne = () => {
    return (
        <svg width="47" height="47" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z" fill="#ffffff"/>
    </svg>
    
      );
};

export const UniqueSellingPointIconTwo = () => {
    return (
        <svg width="47" height="47" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z" fill="#ffffff"/>
    </svg>
    
      );
};

export const UniqueSellingPointIconThree = () => {
    return (
        <svg width="47" height="47" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z" fill="#ffffff"/>
    </svg>
    
      );
};

export const facilityCardData : ServiceCardType[]  = [
  {
    id: 1,
    icon: UniqueSellingPointIconOne,
    imageSrc: FacilityCardImageThree,
    title: "Web Development",
    description: "Creating beautiful, functional web solutions tailored to your brand that engage the customers and convert",
    gradient: 'bg-gradient-to-r from-[#292929] to-[#ED1AFF]'
  },
  {
    id: 2,
    icon: UniqueSellingPointIconTwo,
    imageSrc: FacilityCardImageThree,
    title: "Digital Design",
    description: "Creating visually stunning designs that boost your brand awareness and captivate your audience",
    gradient: 'bg-gradient-to-r from-[#292929] to-[#FF7A1A]'
  },
  {
    id: 3,
    icon: UniqueSellingPointIconThree,
    imageSrc: FacilityCardImageThree,
    title: "Digital Marketing",
    description: "Choose something for yourself and have fun",
    gradient: 'bg-gradient-to-r from-[#292929] to-[#9FFF1A]'
  }
];