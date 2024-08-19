import React from "react";
import "../../public/test.css";
import HeroSectionWrapper from "../components/HeroSectionWrapper";
import { LogoForButton } from "../services/[serviceId]/HeroSection";
import Link from "next/link";
import { Logo } from "../services/[serviceId]/StepsSection";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <p className="text-sm sm:text-base md:text-xl text-center font-bold text-[#ffffff] uppercase  z-30">
        Success begins here
      </p>
      <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-none  text-[#ffffff] font-medium text-center z-30">
        Your caring
        <span className="custom-text font-black"> Design Partner </span>
        that provides experienced Product Designers
      </h1>

      {/* Services */}
      <ul className="hidden xs:flex xs:flex-wrap relative w-full items-center justify-center gap-6 z-30">
        <li className="w-fit bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
          <span>Digital Marketing</span>
        </li>
        <li className="w-fit bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
          <span>Web Development</span>
        </li>
        <li className="w-fit bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
          <span>Digital Design</span>
        </li>
      </ul>

      {/* CTA button */}
      <div className="relative w-full flex justify-center pt-4 md:pt-8 z-30">
        <Link href={`/contact`}>
          <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#57b7fc] to-[#27A5FF] rounded-full font-medium text-2xl sm:text-2xl md:text-3xl">
            <LogoForButton fillColor="#ffffff" width={18} height={20} />
            Start Building
          </button>
        </Link>
      </div>

      {/* Logo Behind */}
      <div className="absolute inset-0 flex items-center justify-center z-20 xs:pt-24 sm:pt-0 md:pt-0">
        <Logo width={500} height={500} />
      </div>

      {/* Blur background */}
      {/* <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div> */}
    </HeroSectionWrapper>
  );
}

// const LogoIconWhite = () => {
//   return (
//     <svg
//       width="20"
//       height="15"
//       viewBox="0 0 45 40"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M23.3278 4.85669H18.4829L0 22.4283L11.4937 39.9998H16.4909L23.3278 4.85669Z"
//         fill="#ffffff"
//       />
//       <path
//         d="M20.783 35.1431H25.6279L44.1108 17.5716L32.6171 4.36873e-07L27.6199 0L20.783 35.1431Z"
//         fill="#ffffff"
//       />
//     </svg>
//   );
// };
