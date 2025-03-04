import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";

export default function WhyUsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Why Choose Us
      </h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-between gap-6 rounded-lg pt-4 sm:pt-8 md:pt-12">
        {/* Blur background */}
        {/* <div className="w-64 h-64 absolute inset-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div> */}

        {/* Card container */}
        {whyUsData.map((reason) => (
          <WhyUsCard
            key={reason.id}
            index={reason.id}
            title={reason.title}
            description={reason.description}
            icon={reason.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export type WhyUsCardType = {
  index: number;
  title: string;
  description: string;
  icon: any;
};

export const WhyUsCard = ({ index, title, description, icon }: WhyUsCardType) => {
  return (
    <div
      className="overflow-hidden relative flex flex-col gap-2 rounded-lg p-4 py-8 border-[0.5px] border-[#0a2030] z-20"
    >
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
      <div className="relative flex flex-col items-center justify-center gap-2 z-20">
        <div className="flex items-center z-30">
          {React.createElement(icon)}
        </div>
        <h3 className="w-full text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight text-center z-20">
          {title}
        </h3>
        <p className="text-xl font-light text-[#ffffff] text-center pt-6 z-40">
          {description}
        </p>
      </div>
    </div>
  );
};

export const SupportAndPartnershipIcon = () => (
  <svg
    // width="90px"
    // height="90px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#55b8ff"
    stroke="#55b8ff"
    className="w-[75px] h-[75px] sm:w-[90px] sm:h-[90px]"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Q3_icons" data-name="Q3 icons">
        <g>
          <path d="M18.4,13.8A5.9,5.9,0,0,1,23,12.1a7.6,7.6,0,0,1,5.2,2.2c2.9,2.8,3.4,7.2,1,9.7a2.1,2.1,0,0,0,0,2.9,2.4,2.4,0,0,0,1.4.5,1.8,1.8,0,0,0,1.4-.6c3.2-3.3,3.5-8.2,1.3-12.3H34a6.1,6.1,0,0,0,4.5-1.9,6.3,6.3,0,0,0-.2-8.9A6.5,6.5,0,0,0,34,2a6.6,6.6,0,0,0-4.6,1.9,6.3,6.3,0,0,0-1.6,5.3,11.2,11.2,0,0,0-4.7-1.1,9.5,9.5,0,0,0-7.6,3,2,2,0,1,0,2.9,2.7Z" />
          <path d="M21.4,38.4C18,37.5,16,33.6,17,29.7s4.5-6.6,7.9-5.7a2,2,0,0,0,2.4-1.5,1.9,1.9,0,0,0-1.4-2.4,10.4,10.4,0,0,0-11.3,5.1,6.3,6.3,0,0,0-4.3-3.6l-1.4-.2a6.3,6.3,0,0,0-6.1,4.8,6.2,6.2,0,0,0,4.6,7.6l1.5.2a6.2,6.2,0,0,0,3.9-1.4,10.5,10.5,0,0,0,7.7,9.7h.4a2,2,0,0,0,2-1.5A1.9,1.9,0,0,0,21.4,38.4Z" />
          <path d="M40.5,33.9a11.9,11.9,0,0,0,3.3-3.4A9.8,9.8,0,0,0,45,22.4,2,2,0,0,0,42.5,21a2,2,0,0,0-1.3,2.5,5.6,5.6,0,0,1-.8,4.8,8.2,8.2,0,0,1-4.5,3.4C32,32.9,28,31,27,27.7a2,2,0,0,0-2.5-1.4,2,2,0,0,0-1.4,2.5A10.5,10.5,0,0,0,33.2,36a6.3,6.3,0,0,0,5,10,5.7,5.7,0,0,0,1.8-.3,6.3,6.3,0,0,0,.5-11.8Z" />
        </g>
      </g>
    </g>
  </svg>
);

export const CollaborativeApproachIcon = () => (
  <svg
    fill="#55b8ff"
    baseProfile="tiny"
    viewBox="0 0 256 256"
    // width="90px"
    // height="90px"
    className="w-[75px] h-[75px] sm:w-[90px] sm:h-[90px]"
  >
    <g id="SVGRepo_iconCarrier">
      <path d="M223.8,95.9c-0.4-0.2-1.5-0.2-1.9-0.4c-0.4-0.2-1.9-0.2-2.6-0.2c-4.3,0-7.4,1.7-9.1,4.7l-22.8,37.6l-28.7,0.5 c-4.7,0-8.7,3.8-8.7,8.7c0,1.3,0.3,2.5,0.8,3.6h-46c0.5-1.1,0.8-2.3,0.8-3.6c0-4.9-4-8.7-8.7-8.7H68.2L45.4,100 c-1.7-3-4.9-4.7-9.1-4.7c-0.6,0-2.1,0-2.6,0.2c-0.4,0.2-1.5,0.2-1.9,0.4c-29.2,6.7-29.3,69-29.1,80.9c0,10.9,3.8,15.7,11.7,18.7 c1.9,0.9,4.3,1.3,6.2,1.3l50.2,0v43.4c0,6.4,4.9,11.3,11.3,11.3c6.4,0,11.3-4.9,11.3-11.3v-54.3c0-3-1.3-6.2-3.4-8.1 c-2.3-2.3-5.3-3.6-8.1-3.6H48.4v-25.1L31,119.5c-0.9-1.3-0.4-2.8,0.6-3.4c1.3-0.9,2.8-0.4,3.4,0.6L55.2,151 c0.1,0.2,0.3,0.4,0.4,0.7v15.7H200v-15.7c0.2-0.2,0.3-0.4,0.4-0.7l20.2-34.3c0.6-1.1,2.1-1.5,3.4-0.6c1.1,0.6,1.5,2.1,0.6,3.4 l-17.4,29.6v25.1h-33.4c-2.8,0-5.7,1.3-8.1,3.6c-2.1,1.9-3.4,5.1-3.4,8.1v54.3c0,6.4,4.9,11.3,11.3,11.3c6.4,0,11.3-4.9,11.3-11.3 v-43.4h50.2c1.9,0,4.3-0.4,6.2-1.3c7.9-3,11.7-7.8,11.7-18.7C253.2,165,253.1,102.6,223.8,95.9z" />
      <ellipse
        transform="matrix(0.3827 -0.9239 0.9239 0.3827 56.0066 232.6846)"
        cx="202.1"
        cy="74.4"
        rx="20.2"
        ry="20.2"
      />
      <ellipse
        transform="matrix(0.3827 -0.9239 0.9239 0.3827 -35.7223 95.4025)"
        cx="53.5"
        cy="74.4"
        rx="20.2"
        ry="20.2"
      />
      <path d="M114.7,67.8v0.6h11.2h3.9H141v-0.6c0-6.4,2.5-12.6,7-17.3c4.6-4.9,7.5-11.6,7.5-18.9c0-15.4-12.7-27.9-28.2-27.6 c-15.1,0.4-27.1,13-26.9,28c0.1,7.1,2.9,13.6,7.5,18.4C112.1,55.2,114.7,61.3,114.7,67.8z" />
      <rect x="114.7" y="72.3" width="26.3" height="5.2" />
      <path d="M123.9,88.1h7.9c2.9,0,5.3-2.4,5.3-5.3v-1.3h-18.4v1.3C118.6,85.7,121,88.1,123.9,88.1z" />
    </g>
  </svg>
);
("");
export const TransparentCommunicationIcon = ({
  width = 90,
  height = 90,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    fill="#55b8ff"
    // width={width}
    // height={height}
    viewBox="0 0 256 240"
    stroke="#55b8ff"
    className="w-[75px] h-[75px] sm:w-[90px] sm:h-[90px]"
  >
    <g id="SVGRepo_iconCarrier">
      <path d="M84.635,20.256c18.383,0,33.286,14.903,33.286,33.286s-14.903,33.286-33.286,33.286S51.349,71.925,51.349,53.542 S66.251,20.256,84.635,20.256z M31.002,145.011c0-2.499,1.606-4.194,4.194-4.194s4.194,1.606,4.194,4.194v92.986h91.469v-92.986 c0-2.499,1.606-4.194,4.194-4.194c2.499,0,4.194,1.606,4.194,4.194v92.986h29.092V136.623c0-22.934-18.74-41.585-41.585-41.585 h-8.388l-24.451,38.015l-2.945-28.467l4.016-9.638H76.96l4.016,9.638l-3.123,28.645L53.401,95.038h-9.816 C20.651,95.038,2,113.778,2,136.623v101.375h29.092v-92.986H31.002z M204.71,2c-27.189,0-49.29,22.061-49.29,49.21 c0,27.189,22.101,49.29,49.29,49.29S254,78.399,254,51.21C253.921,24.061,231.82,2,204.71,2z M204.71,90.761 c-21.823,0-39.551-17.728-39.551-39.551s17.728-39.551,39.551-39.551s39.551,17.728,39.551,39.551 C244.023,73.033,226.294,90.761,204.71,90.761z M229.276,41.591c-0.914-1.511-2.822-2.544-5.008-1.431l-17.45,7.791v-20.63 c0-1.113-0.398-2.107-1.113-2.862l-0.04-0.04c-0.715-0.636-1.55-0.914-2.544-0.914c-1.908,0-3.895,1.431-3.895,3.816v26.99 c0,1.471,0.835,2.862,2.146,3.577c0.676,0.318,1.272,0.477,1.828,0.477c0.596,0,1.272-0.199,1.908-0.477l22.538-10.772 c0.994-0.517,1.709-1.352,2.027-2.345C229.912,43.737,229.792,42.585,229.276,41.591L229.276,41.591z" />
    </g>
  </svg>
);

export const HighlySkilledProffesionalIcon = () => (
  <svg viewBox="0 0 24 24" fill="#55b8ff" className="w-[75px] h-[75px] sm:w-[90px] sm:h-[90px]">
    <title>controlxpert</title>
    <rect width="24" height="24" fill="none" />
    <g>
      <path d="M16.24,7.76,14.83,9.17a4,4,0,0,1,0,5.66l1.41,1.41a6,6,0,0,0,0-8.48Z" />
      <path d="M19.07,4.93,17.65,6.35a8,8,0,0,1,0,11.3l1.42,1.42a10,10,0,0,0,0-14.14Z" />
      <path d="M12,18A6,6,0,0,1,12,6V9l4-4L12,1V4a8,8,0,1,0,4.06,14.88l-1.48-1.47A6,6,0,0,1,12,18Z" />
      <circle cx="12" cy="12" r="2" />
    </g>
  </svg>
);

export const whyUsData = [
  {
    id: 1,
    title: "Support And Partnership",
    description:
      "Your success is our priority, with guidance and support every step of the way",
    icon: SupportAndPartnershipIcon,
  },
  {
    id: 2,
    title: "Highly Collaborative Approach",
    description:
      "Working together to bring your brand to life with your ideas and our expertise",
    icon: CollaborativeApproachIcon,
  },
  {
    id: 3,
    title: "Transparent Communication",
    description:
      "We keep you informed every step of the way with clear and honest updates",
    icon: TransparentCommunicationIcon,
  },
  {
    id: 4,
    title: "Highly Skilled Professionals",
    description:
      "Our team consists of highly skilled professionals that will get you results",
    icon: HighlySkilledProffesionalIcon,
  },
];
