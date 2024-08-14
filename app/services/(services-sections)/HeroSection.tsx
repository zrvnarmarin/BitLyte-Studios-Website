import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import HeroImage from "../../../public/images/services/undraw_services_re_hu5n 1.svg";
import { LogoForButton } from "../[serviceId]/HeroSection";
import Link from "next/link";
import { CopywritingIcon, BrandIdentityIcon } from "../[serviceId]/HeroSection";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="hidden lg:grid grid-cols-2 items-center gap-8">
        <div className="flex flex-col gap-6">
          <p className="w-fit bg-gradient-to-r from-[#0b0b0b] to-[#131313] mt-8 flex gap-2 items-center justify-center text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
            <span className="flex items-center gap-2">
              <LogoIconWhite /> Our Services
            </span>
          </p>
          <h1 className="text-7xl text-[#ffffff] font-medium text-start z-30">
            Transform
            <span className="linear-gradient-purple-text font-black">
              {" "}
              Your Vision{" "}
            </span>
            Into Real Digital Experience
          </h1>
          <p className="text-lg text-[#eeeeee] font-normal pt-2">
            We create unique and highly converting digital experiences, tailored
            to meet your specific business needs. Our expertise spans a wide
            range of digital solutions, including custom-designed websites,
            e-commerce shops
          </p>
          <Link href={`/contact`}>
            <button className="w-fit flex items-center gap-2 mt-6 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#5775D0] rounded-full text-4xl">
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
              <BrandIdentityIcon width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </HeroSectionWrapper>
  );
}

const LogoIconWhite = () => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3278 4.85669H18.4829L0 22.4283L11.4937 39.9998H16.4909L23.3278 4.85669Z"
        fill="#ffffff"
      />
      <path
        d="M20.783 35.1431H25.6279L44.1108 17.5716L32.6171 4.36873e-07L27.6199 0L20.783 35.1431Z"
        fill="#ffffff"
      />
    </svg>
  );
};
