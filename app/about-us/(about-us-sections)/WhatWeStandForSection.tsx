import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import TestHumanImage from "../../../public/WhatWeStandForImage.png";

export default function WhatWeStandForSection() {
  return (
    <SectionWrapper>
      <div className="relative flex flex-col gap-6 items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center z-20">
          <div className="relative flex flex-col gap-2">
            {/* Blur background */}
            <div className="w-48 h-48 absolute right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
            <div className="w-48 h-48 absolute left-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

            <h2 className="w-full text-start text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium xs:font-normal z-20">
              What We Stand For
            </h2>
            <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start pt-4 sm:pt-8 md:pt-12 z-20">
              As a digital agency, we bring a unique combination of creativity
              and technical expertise to every project. With a keen eye for
              design and a passion for delivering user-friendly web experiences,
              we work closely with clients to understand their needs and bring
              their vision to life.
            </p>
            <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start pt-8 z-20">
              We build trust-based relationships with our clients, genuinely
              support our team, and always prioritize users' needs, while acting
              with honesty and integrity in everything we do.
            </p>
          </div>

          <div className="w-full flex items-center sm:justify-start lg:justify-center relative ">
            <div className="w-64 h-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

            <Image
              src={TestHumanImage}
              alt="image"
              width={450}
              height={450}
              className="rounded-lg w-full h-auto sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[350px] lg:w-[400px] lg:h-[350px] xl:w-[500px] xl:h-[400px] z-20"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
