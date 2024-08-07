import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import HeroImage from "../../../public/images/services/undraw_services_re_hu5n 1.svg";
import { LogoForButton } from "../[serviceId]/HeroSection";
import Link from "next/link";
import { CopywritingIcon } from "../[serviceId]/HeroSection";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="hidden lg:grid grid-cols-2 items-center gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-7xl text-[#ffffff] font-medium text-start">
            <span className="font-bold">
              Our services compliment your needs
            </span>
          </h1>
          <p className="text-lg text-[#eeeeee] font-normal pt-2">
            We create unique and highly converting digital experiences, tailored
            to meet your specific business needs. Our expertise spans a wide
            range of digital solutions, including custom-designed websites,
            e-commerce shops, and interactive platforms. By combining innovative
            design with strategic functionality, we ensure that every digital
            experience we develop not only captures attention but also drives
            meaningful engagement and conversions.
          </p>
          <Link href={`/contact`}>
            <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#5775D0] rounded-full text-4xl">
              <LogoForButton fillColor="#ffffff" width={18} height={20} />
              Start building
            </button>
          </Link>
        </div>
        <div className="relative">
          {/* Blur background */}
          <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[230px]"></div>
          <div className={`flex flex-col gap-2 rounded-lg p-4 py-8 `}>
            {/* Service Card */}
            <div className="flex flex-col items-center justify-center gap-2 z-20 rounded-full">
              <CopywritingIcon width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </HeroSectionWrapper>
  );
}
