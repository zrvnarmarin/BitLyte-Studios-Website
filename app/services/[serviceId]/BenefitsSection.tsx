"use client"

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
import '../../../public/test.css'
import { facilityCardData } from "@/app/(home-sections)/ServicesSection";
import { useState } from "react";

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
      <SectionWrapper>
        <p className="w-full text-start text-3xl text-[#ffffff]">
          Explore how landing page
          <span className="linear-gradient-purple-text"> boosts conversions </span> and makes your <span className="linear-gradient-purple-text"> product more impactful </span>
        </p>
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
    </SectionWrapper>
  )
}