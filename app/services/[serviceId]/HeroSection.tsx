import React from "react";
import Link from "next/link";
import HeroSectionWrapper from "@/app/components/HeroSectionWrapper";
import '../../../public/test.css'

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
      <div  className={`flex flex-col gap-2 rounded-lg p-4 py-8 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] border-[0.5px] border-[#252525]`}>
        {/* Service Card */}
        <div className="flex flex-col items-center justify-center gap-2">
          <LandingPageIcon />
        </div>
      </div>
      <p className="text-base text-[#eeeeee] font-normal pt-2">
        Capture attention and convert visitors with beautifully designed landing pages tailored to your brand. Our expert team 
        creates engaging, high-converting landing pages that drive results and enhance your digital marketing efforts.
      </p>
      <div className="w-full flex">
        <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#5775D0] rounded-full text-xl">
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
    <svg width="8" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.85895 8.70736e-06L6.22674 0.0209734L0.0714852 5.66772L4.01513 11.1848L5.69866 11.1631L7.85895 8.70736e-06Z" fill={fillColor} />
    </svg>
  )
}

export const FrontendDevelopmentIcon = () => (
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
  
export const WebsiteDevelopmentIcon = () => (
  <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 64 51.23" width={100} height={100}>
    <defs>
      <style>
        {`
          .cls-1 {
            fill: url(#linear-gradient-12);
          }

          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19 {
            stroke-width: 0px;
          }

          .cls-2 {
            fill: url(#linear-gradient-17);
          }

          .cls-3 {
            fill: url(#linear-gradient-19);
          }

          .cls-4 {
            fill: url(#linear-gradient);
          }

          .cls-5 {
            fill: url(#linear-gradient-6);
          }

          .cls-6 {
            fill: url(#linear-gradient-15);
          }

          .cls-7 {
            fill: url(#linear-gradient-11);
          }

          .cls-8 {
            fill: url(#linear-gradient-5);
          }

          .cls-20 {
            opacity: .8;
          }

          .cls-9 {
            fill: url(#linear-gradient-13);
          }

          .cls-10 {
            fill: url(#linear-gradient-16);
          }

          .cls-11 {
            fill: url(#linear-gradient-14);
          }

          .cls-12 {
            fill: url(#linear-gradient-2);
          }

          .cls-13 {
            fill: url(#linear-gradient-7);
          }

          .cls-14 {
            fill: url(#linear-gradient-3);
          }

          .cls-15 {
            fill: url(#linear-gradient-9);
          }

          .cls-16 {
            fill: url(#linear-gradient-8);
          }

          .cls-17 {
            fill: url(#linear-gradient-18);
          }

          .cls-18 {
            fill: url(#linear-gradient-10);
          }

          .cls-19 {
            fill: url(#linear-gradient-4);
          }
        `}
      </style>
      <linearGradient id="linear-gradient" x1="21.1" y1="33.21" x2="28.86" y2="33.21" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3cf2de" stopOpacity=".8" />
        <stop offset=".19" stopColor="rgba(67, 231, 224, .82)" stopOpacity=".82" />
        <stop offset=".5" stopColor="rgba(86, 203, 231, .88)" stopOpacity=".88" />
        <stop offset=".88" stopColor="rgba(117, 156, 243, .97)" stopOpacity=".97" />
        <stop offset="1" stopColor="#818cf8" />
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="29.45" y1="32.3" x2="34.55" y2="32.3" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-3" x1="35.14" x2="42.9" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-4" x1="6.21" y1="34.98" x2="57.79" y2="60.12" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3cf2de" stopOpacity=".8" />
        <stop offset=".15" stopColor="rgba(67, 231, 224, .82)" stopOpacity=".82" />
        <stop offset=".38" stopColor="rgba(86, 203, 231, .88)" stopOpacity=".88" />
        <stop offset=".67" stopColor="rgba(117, 156, 243, .97)" stopOpacity=".97" />
        <stop offset=".77" stopColor="#818cf8" />
      </linearGradient>
      <linearGradient id="linear-gradient-5" x1="12.66" y1="41.09" x2="51.34" y2="59.94" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-6" x1="3.61" y1="38.04" x2="17.59" y2="44.85" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-7" x1="3.61" y1="34.13" x2="17.59" y2="40.94" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-8" x1="3.61" y1="30.21" x2="17.59" y2="37.02" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-9" x1="3.61" y1="26.3" x2="17.59" y2="33.11" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-10" x1="3.61" y1="22.38" x2="17.59" y2="29.2" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-11" x1="46.61" y1="38.04" x2="60.58" y2="44.85" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-12" x1="46.61" y1="34.13" x2="60.58" y2="40.94" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-13" x1="46.61" y1="30.21" x2="60.58" y2="37.02" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-14" x1="46.61" y1="26.3" x2="60.58" y2="33.11" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-15" x1="46.61" y1="22.38" x2="60.58" y2="29.2" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-16" x1="5.92" y1="5.55" x2="58.08" y2="30.97" xlinkHref="#linear-gradient-4" />
      <linearGradient id="linear-gradient-17" x1="50.48" y1="-133.16" x2="54.84" y2="-137.52" gradientTransform="translate(90.75 158.98) rotate(-179.07) scale(1 -1)" gradientUnits="userSpaceOnUse">
        <stop offset=".09" stopColor="#818cf8" stopOpacity=".8" />
        <stop offset="1" stopColor="#3cf2de" />
      </linearGradient>
      <linearGradient id="linear-gradient-18" x1="46.44" y1="-138.42" x2="49.63" y2="-141.43" gradientTransform="translate(-88 -46.55) rotate(-45.06) scale(1 -1)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#818cf8" stopOpacity=".8" />
        <stop offset=".18" stopColor="rgba(119, 153, 244, .83)" stopOpacity=".83" />
        <stop offset=".53" stopColor="rgba(96, 188, 235, .9)" stopOpacity=".9" />
        <stop offset="1" stopColor="#3cf2de" />
      </linearGradient>
      <linearGradient id="linear-gradient-19" x1="37.06" y1="-147.99" x2="39.86" y2="-150.63" gradientTransform="translate(90.61 159.11) rotate(-179) scale(1 -1) skewX(-.15)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#818cf8" stopOpacity=".8" />
        <stop offset=".18" stopColor="rgba(119, 153, 244, .83)" stopOpacity=".83" />
        <stop offset=".53" stopColor="rgba(96, 188, 235, .9)" stopOpacity=".9" />
        <stop offset="1" stopColor="#3cf2de" />
      </linearGradient>
    </defs>
    <g>
      <path className="cls-4" d="M28.86,37.22l-7.76-3.5v-1.02l7.76-3.5v1.08l-7.24,3.24v-.64l7.24,3.23v1.1Z" />
      <path className="cls-12" d="M30.47,38.78l-1.02-.3,4.07-12.66,1.03.3-4.09,12.66Z" />
      <path className="cls-14" d="M35.14,37.22v-1.1l7.25-3.23v.64l-7.25-3.24v-1.08l7.76,3.5v1.02l-7.76,3.5Z" />
    </g>
    <g className="cls-20">
      <rect className="cls-19" x=".15" y="46.88" width="63.69" height="1.34" rx=".67" ry=".67" />
    </g>
    <g className="cls-20">
      <rect className="cls-8" x="8.16" y="49.81" width="47.67" height="1.42" rx=".65" ry=".65" />
    </g>
    <g>
      <g className="cls-20">
        <rect className="cls-5" x="2.19" y="40.43" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-13" x="2.19" y="36.51" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-16" x="2.19" y="32.6" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-15" x="2.19" y="28.68" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-18" x="2.19" y="24.77" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
    </g>
    <g>
      <g className="cls-20">
        <rect className="cls-7" x="45.18" y="40.43" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-1" x="45.18" y="36.51" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-9" x="45.18" y="32.6" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-11" x="45.18" y="28.68" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
      <g className="cls-20">
        <rect className="cls-6" x="45.18" y="24.77" width="16.82" height="2.04" rx=".69" ry=".69" />
      </g>
    </g>
    <g className="cls-20">
      <rect className="cls-10" x="0" y="16.8" width="64" height="2.92" rx="1.17" ry="1.17" />
    </g>
    <g>
      <path className="cls-2" d="M45.08,24.46l-8.71,2.8-.26-.27,5.28-5.1c.31.25.77.25,1.07-.04.32-.31.33-.82.02-1.14s-.82-.33-1.14-.02c-.3.29-.32.74-.08,1.06l-5.28,5.1-.26-.27,3.1-8.61,4.16-.86,1.55,1.61,1.55,1.61-1.01,4.13Z" />
      <rect className="cls-17" x="42.8" y="17.97" width="4.36" height=".65" transform="translate(63.07 63.36) rotate(-134.02)" />
      <path className="cls-3" d="M63.36.66h0c.84.87.81,2.25-.05,3.08l-16.31,15.76-3.03-3.14L60.28.61c.86-.84,2.24-.81,3.08.05Z" />
    </g>
  </svg>
);

export const LandingPageIcon = () => {
  return (
    <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 63.97 41.71" width={100} height={100}>
    <defs>
      <style>
        {`
          .cls-1 {
            fill-rule: evenodd;
          }

          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10 {
            stroke-width: 0px;
          }

          .cls-1, .cls-9 {
            fill: #fff;
          }

          .cls-2 {
            fill: url(#linear-gradient);
          }

          .cls-3 {
            fill: url(#linear-gradient-6);
          }

          .cls-4 {
            fill: url(#linear-gradient-11);
          }

          .cls-11 {
            opacity: .8;
          }

          .cls-5 {
            fill: url(#linear-gradient-2);
          }

          .cls-6 {
            fill: url(#linear-gradient-7);
          }

          .cls-7 {
            fill: url(#linear-gradient-9);
          }

          .cls-12 {
            fill: url(#linear-gradient-3);
            stroke: url(#linear-gradient-4);
            stroke-width: .15px;
          }

          .cls-12, .cls-13 {
            stroke-miterlimit: 10;
          }

          .cls-8 {
            fill: url(#linear-gradient-8);
          }

          .cls-13 {
            fill: none;
            stroke: url(#linear-gradient-5);
            stroke-width: .16px;
          }

          .cls-10 {
            fill: url(#linear-gradient-10);
          }
        `}
      </style>
      <linearGradient id="linear-gradient" x1="8.14" y1="23.16" x2="55.83" y2="46.41" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3cf2de" stopOpacity=".8"/>
        <stop offset=".15" stopColor="rgba(67, 231, 224, .82)" stopOpacity=".82"/>
        <stop offset=".38" stopColor="rgba(86, 203, 231, .88)" stopOpacity=".88"/>
        <stop offset=".67" stopColor="rgba(117, 156, 243, .97)" stopOpacity=".97"/>
        <stop offset=".77" stopColor="#818cf8"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="14.01" y1="28.81" x2="49.76" y2="46.24" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-3" x1=".08" y1="3.43" x2="63.89" y2="3.43" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-4" x1="0" y1="3.43" x2="63.96" y2="3.43" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-5" x1="0" y1="24.21" x2="63.97" y2="24.21" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-6" x1="39.43" y1="23.33" x2="57.64" y2="32.2" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-7" x1="39.43" y1="19.71" x2="57.64" y2="28.59" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-8" x1="39.43" y1="16.1" x2="57.64" y2="24.98" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-9" x1="39.43" y1="12.49" x2="57.64" y2="21.36" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-10" x1="39.43" y1="8.87" x2="57.64" y2="17.75" xlinkHref="#linear-gradient"/>
      <linearGradient id="linear-gradient-11" x1="3.96" y1="13.57" x2="32.49" y2="27.47" xlinkHref="#linear-gradient"/>
    </defs>
    <g>
      <g className="cls-11">
        <rect className="cls-2" x="2.55" y="34.17" width="58.87" height="1.24" rx=".62" ry=".62"/>
      </g>
      <g className="cls-11">
        <rect className="cls-5" x="9.86" y="36.87" width="44.06" height="1.31" rx=".6" ry=".6"/>
      </g>
    </g>
    <path className="cls-12" d="M63.89,2.05v4.74H.08V2.05C.08.97,1.07.08,2.27.08h59.42c1.21,0,2.19.89,2.19,1.97Z"/>
    <path className="cls-13" d="M63.89,6.79v32.58c0,1.25-.99,2.26-2.19,2.26H2.27c-1.21,0-2.19-1.01-2.19-2.26V6.79h63.81Z"/>
    <g>
      <g className="cls-11">
        <rect className="cls-3" x="37.44" y="26.82" width="22.19" height="1.88" rx=".76" ry=".76"/>
      </g>
      <g className="cls-11">
        <rect className="cls-6" x="37.44" y="23.21" width="22.19" height="1.88" rx=".76" ry=".76"/>
      </g>
      <g className="cls-11">
        <rect className="cls-8" x="37.44" y="19.6" width="22.19" height="1.88" rx=".76" ry=".76"/>
      </g>
      <g className="cls-11">
        <rect className="cls-7" x="37.44" y="15.98" width="22.19" height="1.88" rx=".76" ry=".76"/>
      </g>
      <g className="cls-11">
        <rect className="cls-10" x="37.44" y="12.37" width="22.19" height="1.88" rx=".76" ry=".76"/>
      </g>
    </g>
    <g className="cls-11">
      <rect className="cls-4" x="4.35" y="10.22" width="27.75" height="20.61" rx="3.32" ry="3.32"/>
    </g>
    <g>
      <path className="cls-1" d="M13.99,14.25L4.34,30.86h19.92S14.6,14.25,14.6,14.25c-.13-.23-.47-.23-.6,0Z"/>
      <path className="cls-1" d="M24.44,20.23l-3.49,4.94,3.31,5.68h7.86s-7.11-10.62-7.11-10.62c-.13-.2-.42-.2-.56,0Z"/>
      <ellipse className="cls-9" cx="22.29" cy="14.59" rx="1.71" ry="1.78"/>
    </g>
  </svg>
  )
}

// export const CopywritingIcon = () => {
//   return (

//   )
// }