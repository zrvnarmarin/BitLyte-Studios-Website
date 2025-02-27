import React from "react";
import "../../../public/test.css";
import Image from "next/image";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import Link from "next/link";
import HeroSectionImage from "../../../public/images/projects/1_dj_david_mash/DJ_David_Mash_Hero_Section_Image.png"

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <div className="flex flex-col items-start gap-10">
        {/* Blur background effects */}
        <div className="w-56 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div>

        {/* Links */}
        <div className="flex items-center gap-2">
          <Link
            href={`/projects`}
            className="text-base md:text-xl 3xl:text-2xl text-center font-black text-[#ffffff] uppercase"
          >
            All Projects{" "}
          </Link>
          <span className="custom-text-yellow">&#x2022;</span>{" "}
          <span className="text-lg xs:text-xl font-bold text-[#ffffff] uppercase">
            DJ David Mash
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl 3xl:text-[80px] leading-tight lg:leading-none  text-[#ffffff] font-medium text-start z-30">
          DJ David Mash -{" "}
          <span className="custom-text-yellow font-black">
            Mash Up Your Event{" "}
          </span>{" "}
          Like A Star
        </h1>
      </div>

      {/* Services */}
      <div className="flex flex-wrap justify-start items-start gap-2">
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

      {/* Main image */}
      <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-24 z-20">
        <Image src={HeroSectionImage} alt="Tekst" width={0} height={0} className="rounded-lg" />
      </div>


      {/* CTA button */}
      {/* <div className="relative w-full flex justify-center pt-4 md:pt-12 z-30">
        <Link href={`/contact`}>
          <button className="relative overflow-hidden w-fit flex items-center gap-2 py-3 sm:py-4 px-10 sm:px-12 3xl:py-5 3xl:px-16 text-[#000000] bg-[#ffffff]  rounded-full font-normal text-lg sm:text-2xl md:text-2xl 3xl:text-3xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
            <LogoForButtonRotated fillColor="#000000" width={18} height={20} />
            Start Your Project
          </button>
        </Link>
      </div> */}

      {/* Blur background effects */}
      <div className="md:w-48 md:h-48 absolute right-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div>
      <div className="md:w-48 md:h-48 absolute left-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div>
    </HeroSectionWrapper>
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
