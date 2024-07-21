import React from "react";
import HeroSectionWrapper from "@/app/components/HeroSectionWrapper";
import '../../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/services/undraw_social_networking_re_i1ex 1.svg'
import BackButtonIcon from '../../../public/images/services/BackButton.svg'
import ArrowRight from '../../../public/images/home/ArrowRight.svg'
import Link from "next/link";

export default function HeroSection({ serviceName } : { serviceName: string }) {
    return (
        <HeroSectionWrapper>
            <div className="w-full flex">
                <Link href={`/services`} className="flex items-center gap-2 linear-gradient-purple-text rounded-full text-xl">
                    <LogoForButton fillColor="#ffffff" />
                    Services
                </Link>
            </div>
            <h1 className="text-4xl text-[#ffffff] font-semibold text-start">
                <span className="linear-gradient-purple-text font-black">
                    {serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} {" "}
                </span>
            </h1>
            <div  className={`flex flex-col gap-2 rounded-lg p-4 py-8 bg-gradient-to-r from-[#0b0b0b] to-[#3F5086] border-[0.5px] border-[#252525]`}>
                {/* Service Card */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <GradientSVG />
                </div>
            </div>
            <p className="text-base text-[#eeeeee] font-normal pt-2">
                Capture attention and convert visitors with beautifully designed landing pages tailored to your brand. Our expert team 
                creates engaging, high-converting landing pages that drive results and enhance your digital marketing efforts.
            </p>
            <div className="w-full flex">
                <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#7f96db] rounded-full text-xl">
                    <LogoForButton fillColor="#ffffff" />
                    Start building
                </button>
            </div>
        </HeroSectionWrapper>
    )
}

export type ButtonProps = {
    fillColor: string;
}

export const LogoForButton = ({ fillColor } : ButtonProps) => {
    return (
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.85895 8.70736e-06L6.22674 0.0209734L0.0714852 5.66772L4.01513 11.1848L5.69866 11.1631L7.85895 8.70736e-06Z" fill={fillColor} />
        </svg>
    )
}

const GradientSVG = () => (
    <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 64 38.05" width={100} height={100}>
      <defs>
        <style>
          {`
            .cls-1 {
              fill: url(#linear-gradient);
            }
  
            .cls-1, .cls-2, .cls-3 {
              stroke-width: 0px;
            }
  
            .cls-2 {
              fill: url(#linear-gradient-2);
            }
  
            .cls-3 {
              fill: url(#linear-gradient-3);
            }
          `}
        </style>
        <linearGradient id="linear-gradient" x1="0" y1="21.71" x2="22.78" y2="21.71" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3cf2de" stopOpacity=".8" />
          <stop offset=".19" stopColor="rgba(67, 231, 224, .82)" stopOpacity=".82" />
          <stop offset=".5" stopColor="rgba(86, 203, 231, .88)" stopOpacity=".88" />
          <stop offset=".88" stopColor="rgba(117, 156, 243, .97)" stopOpacity=".97" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="24.51" y1="19.02" x2="39.49" y2="19.02" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-3" x1="41.22" x2="64" xlinkHref="#linear-gradient" />
      </defs>
      <path className="cls-1" d="M22.78,33.47L0,23.2v-2.99l22.78-10.27v3.17L1.54,22.64v-1.87l21.24,9.48v3.22Z" />
      <path className="cls-2" d="M27.5,38.05l-2.99-.89L36.46,0l3.03.89-12,37.16Z" />
      <path className="cls-3" d="M41.22,33.47v-3.22l21.29-9.48v1.87l-21.29-9.52v-3.17l22.78,10.27v2.99l-22.78,10.27Z" />
    </svg>
  );
  