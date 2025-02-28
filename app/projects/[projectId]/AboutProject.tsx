import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import AboutProjectImage from "../../../public/images/projects/1_dj_david_mash/thumbnail_DJ_David_Mash.png";

export default function AboutProject() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between gap-6">
        <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
          About Project
        </h2>
        <div className="w-full flex justify-end items-start gap-2">
          {servicesDummy.map((service) => (
            <div
              key={service.id}
              className="flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#4b4d1e] z-20 rounded-full px-6 py-2"
            >
              <span className="text-base xs:text-lg font-light text-[#ffffff] text-center">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 items-center justify-between gap-6 rounded-lg pt-4 sm:pt-8 md:pt-12">
        {/* Project image  */}
        <div className="z-20">
          <Image
            src={AboutProjectImage}
            alt="Tekst"
            width={0}
            height={0}
            className="rounded-lg"
          />
        </div>

        <p className="w-full text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight text-start z-20">
          Astra Capital is a forex platform providing instant cryptocurrency
          withdrawals, excellent trading conditions, and 24/7 live support. It
          is developed for traders of all levels to offer a trustworthy trading
          Web3 experience. It is developed for traders of all levels to offer a
          trustworthy trading Web3 experience.
        </p>
      </div>
    </SectionWrapper>
  );
}

const servicesDummy = [
  {
    id: 1,
    name: "Social Media Management",
  },
  {
    id: 2,
    name: "Ad Campaigns",
  },
];
