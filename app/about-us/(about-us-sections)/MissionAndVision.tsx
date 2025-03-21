import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

// image enchancer: https://letsenhance.io/boost for team images i ovaj:https://pixlr.com/express/

export default function MissionAndVision() {
  return (
    <SectionWrapper>
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

export const ValueCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: () => React.JSX.Element;
}) => {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-8 rounded-lg border-[0.5px] border-[#0a2030]">
      <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
      <div className="w-full flex items-center justify-center">{icon()}</div>
      <h2 className="text-[#ffffff] text-3xl xs:text-4xl sm:text-5xl font-medium xs:font-normal mb-8 z-20">
        <span className="text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight ">{title}</span>
      </h2>
      <p className="text-center text-lg xs:text-xl font-light text-[#ffffff] z-20">
        {description}
      </p>
    </div>
  );
};

export const MissionIcon = () => (
  <svg viewBox="0 0 32 32" fill="#55b8ff" width={90} height={90}>
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
  <svg fill="#55b8ff" height={90} width={90} viewBox="0 0 512 512">
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
      "To craft digital experiences that drive growth and boost revenue for our clients through collaboration and innovation.",
    icon: MissionIcon,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "To build a user-focused space where our clients stand out, creating memorable brand experiences that last.",
    icon: VisionIcon,
  },
];
