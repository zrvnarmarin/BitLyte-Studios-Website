import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import Link from "next/link";
import { LogoForButtonRotated } from "@/app/services/[serviceId]/HeroSection";

export default function WhyUsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Our Values
      </h2>

      <div className="w-32 h-32 absolute top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

      {/* Values cards section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 sm:pt-8 md:pt-12">
        {/* <div className="w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div> */}

        {values.map((value) => (
          <ValueCard
            key={value.id}
            id={value.id}
            title={value.title}
            description={value.description}
            icon={value.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ValueCard = ({ title, description, icon }: ValueType) => {
  return (
    <div className="relative overflow-hidden flex flex-col xl:flex-row gap-6 rounded-lg px-6 py-8 border-[0.5px] border-[#0a2030] z-20">
      <div className="flex items-center justify-center xs:justify-start sm:justify-center">
        {icon()}
      </div>

      <div className="flex flex-col gap-2"> 
        <h3 className="text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight text-center xs:text-start sm:text-center xl:text-start z-20">
          {title}
        </h3>
        <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center xs:text-start sm:text-center xl:text-start pt-2 z-20">
          {description}
        </p>
      </div>

      {/* Blur background */}
      <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
    </div>
  );
};

export const UserCentricIcon = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="#ffffff"
      stroke="#ffffff"
      width={70}
      height={70}
      className="flex-shrink-0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M512 616.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M511.6 656.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M512.4 697.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M512 130.8c42.1 0 81.7 16.4 111.5 46.2s46.2 69.4 46.2 111.5-16.4 81.7-46.2 111.5c-29.8 29.8-69.4 46.2-111.5 46.2s-81.7-16.4-111.5-46.2c-29.8-29.8-46.2-69.4-46.2-111.5s16.4-81.7 46.2-111.5 69.4-46.2 111.5-46.2m0-44c-111.4 0-201.6 90.3-201.6 201.6C310.4 399.8 400.7 490 512 490c111.4 0 201.6-90.3 201.6-201.6S623.3 86.8 512 86.8zM512.3 523.5L84 681.4v255.7h856V681.4L512.3 523.5zM896 893.1H128V712.6l384.3-142.4L896 712.6v180.5z"
          fill="#55b8ff"
        ></path>
        <path
          d="M555.4 585.3l-1.4-0.5v159.9c0 11.7-4.8 22.3-12.4 30-7.7 7.7-18.3 12.4-30 12.4-23.4 0-42.4-19-42.4-42.4V585.3l-1.4 0.5-14.6 5.2v153.8c0 32.2 26.2 58.4 58.4 58.4S570 777 570 744.8V590.5l-14.6-5.2z"
          fill="#55b8ff"
        ></path>
      </g>
    </svg>
  );
};

export const InnovationAndCreativityIcon = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="#ffffff"
      stroke="#ffffff"
      width={70}
      height={70}
      className="flex-shrink-0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M393.3 768H392h1.3z" fill="#55b8ff"></path>
        <path
          d="M511.9 199.6C355.7 199.6 229 326.2 229 482.5c0 103.8 55.9 194.6 139.3 243.8v89.8c0 1.3 0 2.5 0.1 3.8 0.1 3.2 0.3 6.4 0.6 9.6 6.8 72.8 68.6 130.3 143.1 130.3 39.5 0 75.4-16.2 101.5-42.2 23-23 38.3-53.8 41.6-87.9 0.3-3.2 0.5-6.4 0.6-9.6 0-1.3 0.1-2.7 0.1-4v-90l0.6-0.3C739.4 676.5 795 586 795 482.5c-0.2-156.3-126.8-282.9-283.1-282.9zM391.9 768h1.3-1.3z m219.8 48.1c0 5.8-0.5 11.5-1.5 17-1.1 6.5-2.9 12.8-5.3 18.9-5 12.7-12.6 24.5-22.6 34.5-18.9 18.9-43.9 29.3-70.4 29.3-26.5 0-51.5-10.4-70.4-29.3-10-10-17.7-21.8-22.7-34.6-2.4-6.1-4.1-12.4-5.2-18.9-1-5.5-1.4-11.2-1.4-16.9v-8.8h199.4v8.8z m0-24.8H412.3v-47.7h199.4v47.7z m69.1-139.9c-7.8 7.8-15.9 14.9-24.5 21.4-13.7 10.4-28.4 19.3-44 26.5l-0.6 0.3v0.1H412.3c-15.4-7.1-29.9-15.7-43.4-25.8-9.1-6.8-17.7-14.3-25.9-22.5-22-22-39.2-47.5-51.2-75.9-12.5-29.4-18.8-60.7-18.8-93s6.3-63.5 18.8-93c12-28.4 29.3-54 51.2-76 22-22 47.5-39.2 76-51.2 29.4-12.4 60.7-18.7 93-18.7s63.6 6.3 93 18.7c28.4 12 54 29.3 76 51.2 22 22 39.2 47.5 51.2 76 12.4 29.4 18.8 60.7 18.8 93s-6.3 63.5-18.8 93c-12.2 28.4-29.4 53.9-51.4 75.9z"
          fill="#55b8ff"
        ></path>
        <path d="M391.9 768h1.3-1.3z" fill="#55b8ff"></path>
        <path
          d="M511.9 432.3c-39.7 0-72 32.3-72 72 0 37.3 28.6 68.1 65 71.7v123.7h14V576c36.4-3.5 65-34.3 65-71.7 0-39.7-32.3-72-72-72z m0 128c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
          fill="#55b8ff"
        ></path>
        <path
          d="M512 103.6m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M244.2 214.5m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M133.3 482.2m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M890.7 482.2m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M779.8 214.5m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z"
          fill="#55b8ff"
        ></path>
      </g>
    </svg>
  );
};

export const ContinuousLearningIcon = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="#ffffff"
      stroke="#ffffff"
      width={70}
      height={70}
      className="flex-shrink-0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M512 301.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
          fill="#55b8ff"
        ></path>
        <path
          d="M400.3 744.5c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z m0 0c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z"
          fill="#55b8ff"
        ></path>
        <path
          d="M511.8 256.6c24.4 0 44.2 19.8 44.2 44.2S536.2 345 511.8 345s-44.2-19.8-44.2-44.2 19.9-44.2 44.2-44.2m0-20c-35.5 0-64.2 28.7-64.2 64.2s28.7 64.2 64.2 64.2 64.2-28.7 64.2-64.2-28.7-64.2-64.2-64.2z"
          fill="#55b8ff"
        ></path>
        <path
          d="M730.7 529.5c0.4-8.7 0.6-17.4 0.6-26.2 0-179.6-86.1-339.1-219.3-439.5-133.1 100.4-219.2 259.9-219.2 439.5 0 8.8 0.2 17.5 0.6 26.1-56 56-90.6 133.3-90.6 218.7 0 61.7 18 119.1 49.1 167.3 30.3-49.8 74.7-90.1 127.7-115.3 39-18.6 82.7-29 128.8-29 48.3 0 93.9 11.4 134.3 31.7 52.5 26.3 96.3 67.7 125.6 118.4 33.4-49.4 52.9-108.9 52.9-173.1 0-85.4-34.6-162.6-90.5-218.6zM351.1 383.4c9.2-37.9 22.9-74.7 40.6-109.5a502.1 502.1 0 0 1 63.6-95.9c17.4-20.6 36.4-39.9 56.8-57.5 20.4 17.6 39.4 36.9 56.8 57.5 24.8 29.5 46.2 61.8 63.6 95.9 17.7 34.8 31.4 71.6 40.6 109.5 8.7 35.8 13.5 72.7 14.2 109.9C637.4 459 577 438.9 512 438.9c-65 0-125.3 20.1-175.1 54.4 0.7-37.2 5.5-74.1 14.2-109.9z m-90.6 449.2c-9.1-27-13.7-55.5-13.7-84.4 0-35.8 7-70.6 20.8-103.2 8.4-19.8 19-38.4 31.9-55.5 9.7 61.5 29.5 119.7 57.8 172.6-36.4 17.8-69 41.6-96.8 70.5z m364.2-85.3c-0.7-0.3-1.5-0.5-2.2-0.8-0.4-0.2-0.9-0.3-1.3-0.5-0.6-0.2-1.3-0.5-1.9-0.7-0.8-0.3-1.5-0.5-2.3-0.8-0.8-0.3-1.5-0.5-2.3-0.7l-0.9-0.3c-1-0.3-2.1-0.7-3.1-1-1.2-0.4-2.4-0.7-3.5-1.1l-3-0.9c-0.2-0.1-0.4-0.1-0.7-0.2-1.1-0.3-2.3-0.7-3.4-1-1.2-0.3-2.4-0.6-3.5-0.9l-3.6-0.9-3.6-0.9c-1-0.3-2.1-0.5-3.1-0.7-1.2-0.3-2.4-0.5-3.6-0.8-1.3-0.3-2.5-0.6-3.8-0.8h-0.3c-0.9-0.2-1.9-0.4-2.8-0.6-0.4-0.1-0.7-0.1-1.1-0.2-1.1-0.2-2.2-0.4-3.4-0.6-1.2-0.2-2.4-0.4-3.6-0.7l-5.4-0.9c-0.9-0.1-1.9-0.3-2.8-0.4-0.8-0.1-1.6-0.3-2.5-0.4-2.6-0.4-5.1-0.7-7.7-1-1.2-0.1-2.3-0.3-3.5-0.4h-0.4c-0.9-0.1-1.8-0.2-2.8-0.3-1.1-0.1-2.1-0.2-3.2-0.3-1.7-0.2-3.4-0.3-5.1-0.4-0.8-0.1-1.5-0.1-2.3-0.2-0.9-0.1-1.9-0.1-2.8-0.2-0.4 0-0.8 0-1.2-0.1-1.1-0.1-2.1-0.1-3.2-0.2-0.5 0-1-0.1-1.5-0.1-1.3-0.1-2.6-0.1-3.9-0.1-0.8 0-1.5-0.1-2.3-0.1-1.2 0-2.4 0-3.5-0.1h-13.9c-2.3 0-4.6 0.1-6.9 0.2-0.9 0-1.9 0.1-2.8 0.1-0.8 0-1.5 0.1-2.3 0.1-1.4 0.1-2.8 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.4-0.6 0-1.2 0.1-1.8 0.2l-7.8 0.9c-1.1 0.1-2.1 0.3-3.2 0.4-1 0.1-2.1 0.3-3.1 0.4-3.2 0.5-6.4 0.9-9.5 1.5-0.7 0.1-1.4 0.2-2.1 0.4-0.9 0.1-1.7 0.3-2.6 0.5-1.1 0.2-2.3 0.4-3.4 0.6-0.9 0.2-1.7 0.3-2.6 0.5-0.4 0.1-0.8 0.1-1.1 0.2-0.7 0.1-1.4 0.3-2.1 0.4-1.2 0.3-2.4 0.5-3.6 0.8-1.2 0.3-2.4 0.5-3.6 0.8-0.2 0-0.4 0.1-0.6 0.1-0.5 0.1-1 0.2-1.5 0.4-1.1 0.3-2.3 0.6-3.5 0.9-1.3 0.3-2.5 0.6-3.8 1-0.4 0.1-0.9 0.2-1.4 0.4-1.3 0.4-2.7 0.7-4 1.1-1.5 0.4-3 0.9-4.6 1.3-1 0.3-2.1 0.6-3.1 1-2.1 0.6-4.1 1.3-6.2 2-0.7 0.2-1.4 0.5-2.1 0.7-15-27.5-27.4-56.4-37-86.2-11.7-36.1-19.2-73.6-22.5-111.6-0.6-6.7-1-13.3-1.3-20-0.1-1.2-0.1-2.4-0.1-3.6-0.1-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.7 18.8-14 39.2-25.8 61-35 36.1-15.3 74.5-23 114.1-23 39.6 0 78 7.8 114.1 23 21.8 9.2 42.2 20.9 61 35v0.1c0 1 0 1.9-0.1 2.9 0 1.4-0.1 2.8-0.1 4.3 0 0.7 0 1.3-0.1 2-0.1 1.8-0.1 3.5-0.2 5.3-0.3 6.7-0.8 13.3-1.3 20-3.3 38.5-11 76.5-23 113-9.7 30.3-22.3 59.4-37.6 87.1z m136.8 90.9a342.27 342.27 0 0 0-96.3-73.2c29.1-53.7 49.5-112.8 59.4-175.5 12.8 17.1 23.4 35.6 31.8 55.5 13.8 32.7 20.8 67.4 20.8 103.2 0 31-5.3 61.3-15.7 90z"
          fill="#55b8ff"
        ></path>
        <path
          d="M512 819.3c8.7 0 24.7 22.9 24.7 60.4s-16 60.4-24.7 60.4-24.7-22.9-24.7-60.4 16-60.4 24.7-60.4m0-20c-24.7 0-44.7 36-44.7 80.4 0 44.4 20 80.4 44.7 80.4s44.7-36 44.7-80.4c0-44.4-20-80.4-44.7-80.4z"
          fill="#55b8ff"
        ></path>
      </g>
    </svg>
  );
};

export const DemonstratingLeadershipIcon = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="#ffffff"
      stroke="#ffffff"
      width={70}
      height={70}
      className="flex-shrink-0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M828.5 180.1h-9.9v-54.7h23.5v-44H182v44h23v54.7h-9.5C123.2 180.1 64 239.2 64 311.5v0.1c0 72.3 59.2 131.5 131.5 131.5h9.6c0 1.3 0.1 2.5 0.1 3.7 0.5 17.7 2.7 35.4 6.2 52.5 17.8 85.7 71.8 160 148.3 204 4.8 2.8 9.8 5.4 14.7 7.9 15.3 7.7 31.2 14.1 47.4 19.2 3.4 1 6.8 2 10.2 2.9v165.2H250.4v44h511.9v-44H591.9V733.4c3.7-1 7.3-2.1 10.9-3.2 16.2-5.1 32.2-11.6 47.4-19.4 5-2.5 10-5.3 14.8-8.1 75.6-43.9 129.2-117.8 147-202.7 3.6-17.2 5.8-34.9 6.3-52.4 0.1-1.5 0.1-3 0.1-4.5h10c72.3 0 131.5-59.2 131.5-131.5v-0.1c0.1-72.3-59.1-131.4-131.4-131.4zM205 399.2h-9.5c-23.2 0-45.1-9.1-61.7-25.7s-25.7-38.5-25.7-61.7v-0.1c0-23.2 9.1-45.2 25.7-61.7 16.6-16.6 38.5-25.7 61.7-25.7h9.5v174.9z m370.9 499.4h-128V737.3c20.9 4.5 42.3 6.8 63.9 6.8 21.7 0 43.1-2.3 64.1-6.8v161.3z m198.7-461.4c0 2.9 0 5.9-0.2 8.9-0.5 15-2.3 30.1-5.4 44.9-15.3 72.7-61.2 136-126.1 173.7-4.1 2.4-8.4 4.7-12.7 6.9-13 6.6-26.7 12.2-40.6 16.6-25.2 7.9-51.4 11.9-77.9 11.9-26.2 0-52.2-3.9-77.1-11.6-13.9-4.3-27.5-9.8-40.6-16.4-4.2-2.1-8.5-4.4-12.6-6.8-65.4-37.8-111.7-101.5-126.9-174.8-3.1-14.7-4.9-29.8-5.3-45-0.1-2.7-0.1-5.5-0.1-8.2v-312h525.6v311.9zM916 311.7c0 23.2-9.1 45.2-25.7 61.7-16.6 16.6-38.5 25.7-61.7 25.7h-9.9v-175h9.9c23.2 0 45.1 9.1 61.7 25.7s25.7 38.5 25.7 61.7v0.2z"
          fill="#55b8ff"
        ></path>
        <path
          d="M317.428 274.917l70.145-70.144 14.142 14.142-70.145 70.144zM316.055 351.98L456.13 211.904l14.142 14.142-140.076 140.076zM555.4 659.6l-4.8-19.4c0.3-0.1 26.5-6.8 55.4-23.5 37.8-21.9 62-49.7 72-82.7l19.1 5.8c-11.4 37.6-39.6 70.3-81.6 94.5-31.2 18-58.9 25-60.1 25.3z"
          fill="#55b8ff"
        ></path>
      </g>
    </svg>
  );
};

export const IntegrityAndHonestyIcon = () => {
  return (
    <svg
      fill="#55b8ff"
      viewBox="0 -2 16 16"
      id="handshake-16px"
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={70}
      className="flex-shrink-0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          id="Path_95"
          data-name="Path 95"
          d="M-5.5,11H-7.293l1.146-1.146a.518.518,0,0,0,.109-.163A.5.5,0,0,0-6,9.5V6h.5A.5.5,0,0,0-5,5.5.5.5,0,0,0-5.5,5h-.834L-9.666,2.5a2.52,2.52,0,0,0-1.5-.5h-.505a2.485,2.485,0,0,0-.58.075A.491.491,0,0,0-12.5,2h-2.758a3.522,3.522,0,0,0-2.474,1.025L-18.707,4H-20.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H-19v5h-1.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.793l1.975,1.975A3.522,3.522,0,0,0-14.258,14h2.516a3.522,3.522,0,0,0,2.474-1.025L-8.293,12H-5.5a.5.5,0,0,0,.5-.5A.5.5,0,0,0-5.5,11Zm-5.667-8a1.5,1.5,0,0,1,.9.3L-7,5.75V8.977A5.544,5.544,0,0,1-9.8,7.9l-2.4-1.8a.5.5,0,0,0-.3-.1.5.5,0,0,0-.354.146l-.707.708a1.361,1.361,0,0,1-1.878,0,.5.5,0,0,1,0-.708l2.707-2.707A1.511,1.511,0,0,1-11.672,3Zm1.192,9.268A2.515,2.515,0,0,1-11.742,13h-2.516a2.515,2.515,0,0,1-1.767-.732L-18,10.293V4.707l.975-.975A2.515,2.515,0,0,1-15.258,3h1.551l-2.439,2.439a1.5,1.5,0,0,0,0,2.122,2.384,2.384,0,0,0,3.292,0l.4-.4L-10.4,8.7A6.533,6.533,0,0,0-7.606,9.9l-1.247,1.247h0Z"
          transform="translate(21 -2)"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const TeamworkAndCollaborationIcon = () => {
  return (
    <svg
      fill="#55b8ff"
      height={70}
      width={70}
      viewBox="0 0 472.615 472.615"
      className="flex-shrink-0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <circle cx="236.308" cy="142.868" r="70.203"></circle>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M325.514,234.831l-16.542-4.923l-72.665,72.763l-72.665-72.763l-16.542,4.923c-42.831,12.898-71.582,51.495-71.582,96.197 v82.511h321.575v-82.511C397.095,286.326,368.345,247.729,325.514,234.831z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M319.311,59.077c-11.9,0-23.306,3.208-33.317,8.938c24.209,16.125,40.208,43.645,40.208,74.849 c0,18.496-5.625,35.697-15.239,50.004c2.762,0.348,5.542,0.609,8.348,0.609c37.12,0,67.249-30.129,67.249-67.249 C386.56,89.205,356.431,59.077,319.311,59.077z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M404.283,213.169l-16.049-4.726l-23.555,23.556c32.136,21.917,52.11,58.372,52.11,99.029V384h55.827v-78.966 C472.615,262.4,445.145,225.477,404.283,213.169z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M186.621,68.015c-10.01-5.73-21.416-8.938-33.316-8.938c-37.12,0-67.249,30.128-67.249,67.151 c0,37.12,30.129,67.249,67.249,67.249c2.805,0,5.586-0.262,8.347-0.609c-9.614-14.306-15.239-31.508-15.239-50.004 C146.413,111.66,162.412,84.14,186.621,68.015z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M84.382,208.443l-15.951,4.726h-0.099C27.471,225.477,0,262.4,0,305.034V384h55.827v-52.972 c0-40.666,19.984-77.128,52.104-99.036L84.382,208.443z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export type ValueType = {
  id: number;
  title: string;
  description: string;
  icon: () => React.JSX.Element;
};

const values: ValueType[] = [
  {
    id: 1,
    title: "Innovation And Creativity",
    description:
      "We embrace new ideas and encourage creative thinking to drive growth and success.",
    icon: InnovationAndCreativityIcon,
  },
  {
    id: 2,
    title: "Integrity And Honesty",
    description:
      "We adhere to the highest ethical standards and act with transparency in all our dealings.",
    icon: IntegrityAndHonestyIcon,
  },
  {
    id: 3,
    title: "Demonstrating Leadership",
    description:
      "We lead by example, inspiring and guiding others to achieve their full potential.",
    icon: DemonstratingLeadershipIcon,
  },
  {
    id: 4,
    title: "Continuous Learning",
    description:
      "We are committed to lifelong learning and personal development to stay ahead in a changing world.",
    icon: ContinuousLearningIcon,
  },
  {
    id: 5,
    title: "Client Centric Focus",
    description:
      "Our clients are at the heart of everything we do; we strive to exceed their expectations.",
    icon: UserCentricIcon,
  },
  {
    id: 6,
    title: "Teamwork And Collaboration",
    description:
      "We work together, leveraging diverse skills and perspectives to achieve shared goals.",
    icon: TeamworkAndCollaborationIcon,
  },
];
