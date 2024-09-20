import React from "react";
import Image from "next/image";
import MarinRemovedBgImage from "../../../public/marin_photoroom-Photoroom(1)_LE_auto_x2.jpg";
import IgorImage from "../../../public/Igor.png";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import { socialMediaIcons } from "@/app/components/Footer";
import Link from "next/link";

// image enchancer: https://letsenhance.io/boost for team images i ovaj:https://pixlr.com/express/

export default function MissionAndVision() {
  return (
    <SectionWrapper>
      <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] text-start xs:font-normal z-20 py-4 sm:py-8 md:py-6 xl:px-24 ">
        We helped businesses increase sales by{" "}
        <span className="custom-text">27%</span>. Your product`s achievements is
        our success. Our design approach is result-driven and it`s crucial for
        us to make your product reach it`s business metrics.
        <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      </h3>

      <div className="relative w-full grid grid-cols-2 place-items-center gap-6 pt-4 sm:pt-8 md:pt-12 px-48 justify-center items-center">
        <div className="w-[28rem] h-[28rem] absolute bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        <h3 className="col-span-full relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-normal text-center xs:font-normal z-20 pb-4 sm:pb-8 md:pb-6 ">
          Meet The <span className="custom-text">Founders</span>
        </h3>
        {/* Marin Card */}
        <div className="relative overflow-hidden flex flex-col rounded-lg border-[#252525] z-20 bg-[#0b0b0b]">
          {/* Blur background */}
          <div className="w-64 h-64 absolute right-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[530px]"></div>

          {/* Image Section */}
          <div className="w-full relative z-20">
            {/* Blue Overlay */}
            <div className="bg-blue-500 opacity-90 absolute inset-0 z-20 rounded-lg"></div>

            {/* Image */}
            <Image
              src={MarinRemovedBgImage}
              width={0} // Set desired width
              height={0} // Set desired height
              alt="Marin_image"
              className="z-20 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="relative flex flex-col justify-between items-start py-8 px-6">
            {/* Centered Content */}
            <div className="flex flex-col gap-2 justify-center items-start z-20 my-auto">
              <h2 className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">
                Marin Zrvnar
              </h2>
              <p className="text-lg xs:text-xl font-light text-[#ffffff]">
                Co-Founder <br />
                Web Developer/Designer
              </p>
            </div>

            {/* Social Media Icons and Divider */}
            <div className="flex flex-col gap-2 relative overflow-hidden z-20 mt-6">
              <div className="w-full flex items-center justify-end gap-8">
                <React.Fragment key={socialMediaIcons[2].id}>
                  <Link href={socialMediaIcons[2].href}>
                    {socialMediaIcons[2].icon()}
                  </Link>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>

        {/* Marin Card */}
        <div className="relative overflow-hidden flex flex-col rounded-lg  border-[#252525] z-20 bg-[#0b0b0b]">
          {/* Blur background */}
          <div className="w-64 h-64 absolute right-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px]"></div>

          {/* Image Section */}
          <div className="w-full relative z-20">
            {/* Blue Overlay */}
            <div className="bg-blue-500 opacity-90 absolute inset-0 z-20 rounded-lg"></div>

            {/* Image */}
            <Image
              src={MarinRemovedBgImage}
              width={0} // Set desired width
              height={0} // Set desired height
              alt="Marin_image"
              className="z-20 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="relative flex flex-col justify-between items-start py-8 px-6">
            {/* Centered Content */}
            <div className="flex flex-col gap-2 justify-center items-start z-20 my-auto">
              <h2 className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">
                Marin Zrvnar
              </h2>
              <p className="text-lg xs:text-xl font-light text-[#ffffff]">
                Co-Founder <br />
                Web Developer/Designer
              </p>
            </div>

            {/* Social Media Icons and Divider */}
            <div className="flex flex-col gap-2 relative overflow-hidden z-20 mt-6">
              <div className="w-full flex items-center justify-end gap-8">
                <React.Fragment key={socialMediaIcons[2].id}>
                  <Link href={socialMediaIcons[2].href}>
                    {socialMediaIcons[2].icon()}
                  </Link>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big paragraph */}
      <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium text-center xs:font-normal z-20 py-4 sm:py-8 md:py-6 xl:px-36 pt-20 md:pt-16 lg:pt-24">
        We helped businesses increase sales by{" "}
        <span className="custom-text">27%</span>. Your product`s achievements is
        our success. Our design approach is result-driven and it`s crucial for
        us to make your product reach it`s business metrics.
        {/* <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div> */}
      </h3>

      {/* Mission and vision section*/}
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4 sm:py-8 md:py-6">
          {valueCardData.map((value) => (
            <ValueCard
              key={value.id}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
{
  /* <span className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></span> */
}

export const ValueCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: () => React.FC;
}) => {
  return (
    <div className="relative overflow-hidden flex flex-col items-start justify-center p-8 rounded-lg border-[0.5px] border-[#252525]">
      <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
      <div className="w-full flex items-center justify-start">{icon()}</div>
      <h2 className="text-[#ffffff] text-3xl xs:text-4xl sm:text-5xl font-medium xs:font-normal mb-8">
        Our <span className="text-primary-blue font-black">{title}</span>
      </h2>
      <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
        {description}
      </p>
    </div>
  );
};

export const MissionIcon = () => (
  <svg viewBox="0 0 32 32" fill="#55b8ff" width={70} height={70}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <style type="text/css">
        {`.st0{fill:none;stroke:#55b8ff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
      </style>
      <line className="st0" x1="16" y1="16" x2="22" y2="10"></line>
      <polygon
        className="st0"
        points="30,6 26,6 26,2 22,6 22,10 26,10"
      ></polygon>
      <circle className="st0" cx="16" cy="16" r="6"></circle>
      <path
        className="st0"
        d="M27,9c1.3,2,2,4.4,2,7c0,7.2-5.8,13-13,13S3,23.2,3,16S8.8,3,16,3c2.6,0,5,0.7,7,2"
      ></path>
    </g>
  </svg>
);

export const VisionIcon = () => (
  <svg fill="#55b8ff" height={70} width={70} viewBox="0 0 512 512">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path d="M509.778,250.021C505.152,244.672,394.926,118.857,256,118.857S6.848,244.672,2.222,250.03 c-2.962,3.429-2.962,8.521,0,11.95C6.848,267.328,117.074,393.143,256,393.143S505.152,267.328,509.778,261.97 C512.741,258.542,512.741,253.449,509.778,250.021z M21.568,256c16.64-17.481,69.477-69.019,138.862-98.158 c-25.6,24.923-41.573,59.694-41.573,98.158c0,38.464,15.973,73.234,41.573,98.158C91.045,325.02,38.208,273.481,21.568,256z M256,374.857c-65.536,0-118.857-53.321-118.857-118.857S190.464,137.143,256,137.143S374.857,190.464,374.857,256 S321.536,374.857,256,374.857z M351.579,354.158c25.591-24.923,41.563-59.694,41.563-98.158c0-38.464-15.973-73.234-41.573-98.158 c69.385,29.138,122.222,80.677,138.862,98.158C473.792,273.481,420.965,325.02,351.579,354.158z"></path>
        </g>
      </g>
      <g>
        <g>
          <path d="M182.857,256h18.286c0-30.254,24.603-54.857,54.857-54.857v-18.286C215.671,182.857,182.857,215.671,182.857,256z"></path>
        </g>
      </g>
      <g>
        <g>
          <path d="M310.857,256c0,30.254-24.603,54.857-54.857,54.857v18.286c40.329,0,73.143-32.814,73.143-73.143H310.857z"></path>
        </g>
      </g>
      {/* Add other <g> and <path> elements here as needed */}
    </g>
  </svg>
);

export const valueCardData = [
  {
    id: 1,
    title: "Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.",
    icon: MissionIcon,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.",
    icon: VisionIcon,
  },
];
