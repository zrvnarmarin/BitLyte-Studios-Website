import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import HeroImage from "../../../public/images/services/undraw_services_re_hu5n 1.svg";
import { LogoForButton } from "../[serviceId]/HeroSection";
import Link from "next/link";
import { CopywritingIcon, BrandIdentityIcon } from "../[serviceId]/HeroSection";
import TestIkona from "../../../public/icons/BitLyte_Studios_ikona_Web_Services_64x64px.svg";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <div className="w-64 h-64 md:w-96 md:h-96 absolute left-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[230px]"></div>

          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-10 lg:leading-none text-[#ffffff] font-medium text-center lg:text-left z-20">
            Transform
            <span className="linear-gradient-purple-text font-black">
              {" "}
              Your Vision{" "}
            </span>
            To Breathtaking Reality
          </h1>

          <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center lg:text-left z-20">
            We create unique and highly converting digital experiences, tailored
            to meet your specific business needs. Our expertise spans a wide
            range of digital solutions, including custom-designed websites
          </p>

          <div className="w-full flex items-center justify-center lg:justify-start z-20 pt-2">
            <Link href={`/contact`}>
              <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#5775D0] rounded-full font-medium text-xl xs:text-2xl sm:text-2xl md:text-3xl">
                <LogoForButton fillColor="#ffffff" width={18} height={20} />
                Start building
              </button>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* Image container */}
          <div className="hidden sm:block w-80 h-80 absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[130px]"></div>
          <Image
            src={TestIkona}
            alt="t"
            className="w-full h-full max-w-[274px] xs:max-w-[294px] sm:max-w-[314px] lg:max-w-[444px] 2xl:max-w-[474px] z-20"
          />
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
