"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import FacilityCardImageThree from "../../public/images/Rectangle 1.svg";
import ArrowRight from '../../public/images/Rectangle 1.svg'
import '../../public/test.css'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (index: number) => setActiveIndex(index);

  return (
    <SectionWrapper>
      <h2 className="text-4xl text-primary-brown">
        Services to {" "}
        <span className="custom-text font-black">
            Elevate your digital impact {" "}
        </span>
        Services to Elevate your digital impact
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
                className={`group flex flex-row gap-4 rounded-lg p-5 cursor-pointer ${activeIndex === index ? "linear-gradient-background border-[0.5px] border-[#efe7ff]" : "inear-gradient-background border-[0.5px] border-[#efe7ff]"}`}
                onClick={() => handleShow(index)}
              >
                {/* First row */}
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-4">
                    {card.icon()}
                  </div>
                  <span
                    className={`${activeIndex === index ? "rotate-90 duration-300" : "rotate-0 duration-300"}`}
                  ></span>
                </div>

                {/* Second row */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <h3 className="w-full text-primary-brown font-semibold text-xl text-start">{card.title}</h3>
                  {activeIndex === index ? (
                    <p className="text-base text-primary-brown font-normal">{card.description}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full flex">
        <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
            <Image src={ArrowRight} alt="hero_image"  />
            View all services
        </button>
      </div>
    </SectionWrapper>
  );
}

export type FacilityCardType = {
  icon: () => JSX.Element;
  title: string;
  description: string;
};



export const UniqueSellingPointIconOne = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z" fill="#1A9FFF"/>
    </svg>
    
      );
};

export const UniqueSellingPointIconTwo = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z" fill="#1A9FFF"/>
    </svg>
    
      );
};

export const UniqueSellingPointIconThree = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z" fill="#1A9FFF"/>
    </svg>
    
      );
};

export const UniqueSellingPointIconFour = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.77778 13.2222H10.3889V11.3333H3.77778V13.2222ZM3.77778 9.44444H13.2222V7.55555H3.77778V9.44444ZM3.77778 5.66667H13.2222V3.77778H3.77778V5.66667ZM1.88889 17C1.36944 17 0.924926 16.8152 0.555333 16.4456C0.185741 16.076 0.00062963 15.6312 0 15.1111V1.88889C0 1.36944 0.185111 0.924926 0.555333 0.555333C0.925556 0.185741 1.37007 0.00062963 1.88889 0H15.1111C15.6306 0 16.0754 0.185111 16.4456 0.555333C16.8158 0.925556 17.0006 1.37007 17 1.88889V15.1111C17 15.6306 16.8152 16.0754 16.4456 16.4456C16.076 16.8158 15.6312 17.0006 15.1111 17H1.88889ZM1.88889 15.1111H15.1111V1.88889H1.88889V15.1111Z" fill="#1A9FFF"/>
    </svg>
    
      );
};

export const facilityCardData = [
  {
    id: 1,
    icon: UniqueSellingPointIconOne,
    imageSrc: FacilityCardImageThree,
    title: "Swimming",
    description: "Enhance your posture breathing with our lessons of swimming",
  },
  {
    id: 2,
    icon: UniqueSellingPointIconTwo,
    imageSrc: FacilityCardImageThree,
    title: "Spa And Wellness",
    description: "Relax and enjoy the soothness of our spa treatments",
  },
  {
    id: 3,
    icon: UniqueSellingPointIconThree,
    imageSrc: FacilityCardImageThree,
    title: "Studios",
    description: "Choose something for yourself and have fun",
  },
  {
    id: 4,
    icon: UniqueSellingPointIconFour,
    imageSrc: FacilityCardImageThree,
    title: "Gym",
    description: "Shape your body to unstoppable human-like machine",
  },
];