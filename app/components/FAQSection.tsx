"use client";

import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import "../../public/test.css";

export default function FAQSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[40px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Frequently Asked Questions
      </h2>
      <Accordion faqArray={homePageFAQ} />
    </SectionWrapper>
  );
}

export function Accordion({ faqArray }: { faqArray: FAQType[] }) {
  const [activeIndex, setActiveIndex] = useState(-1); // Initialize with -1 to have no active accordion initially

  const handleShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="w-full flex flex-col z-20 pt-4 sm:pt-8 md:pt-12">
      {faqArray.map((accordion, index) => (
        <Panel
          id={accordion.id}
          key={accordion.id}
          index={index}
          title={accordion.title}
          answer={accordion.answer}
          isActive={activeIndex === index}
          onShow={() => handleShow(index)}
        />
      ))}
    </div>
  );
}

function Panel({
  id,
  title,
  answer,
  isActive,
  onShow,
}: {
  id: number;
  title: string;
  answer: string;
  isActive: boolean;
  onShow: () => void;
  index: number;
}) {
  return (
    <div
      onClick={onShow}
      // TO DO: decide if border is necesary here - border-b-[0.5px] border-[#0a2030]
      className={`cursor-pointer rounded-lg pl-6 pr-4 py-6 hover:shadow-[0_0_5px_0_rgba(255,255,255,1)] ${isActive ? 'bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] hover:shadow-none border-[0.5px] border-[#0a2030]' : ''}`}
    >
      <div className="flex items-center justify-between gap-6 py-2">
        <div className="w-full flex items-center gap-4">
          <span className="hidden lg:block text-lg sm:text-xl custom-text font-semibold">0{id}</span>
          <p className="text-[#ffffff] font-semibold text-2xl md:text-3xl">{title}</p>
        </div>
        {isActive ? (
          <span className="rotate-90 duration-300">
            <BlueArrowRight />
          </span>
        ) : (
          <span className="rotate-0 duration-300">
            <BlueArrowRight />
          </span>
        )}
      </div>
      {isActive ? (
        <p className="pl-2 py-4 text-lg sm:text-xl font-light text-[#ffffff]">
          {answer}
        </p>
      ) : null}
    </div>
  );
}

export type FAQType = {
  id: number;
  title: string;
  answer: string;
};

const homePageFAQ = [
  {
    id: 1,
    title: "How long does it take to develop a custom website?",
    answer: "The timeline for developing a custom website varies based on complexity. Generally, it takes between 6 to 12 weeks to design, develop, and launch a fully functional website.",
  },
  {
    id: 2,
    title: "What services are included in your frontend development package?",
    answer: "Our frontend development package includes services such as responsive design, cross-browser compatibility, performance optimization, and implementation of interactive elements to enhance user experience.",
  },
  {
    id: 3,
    title: "How do you measure the success of an ad campaign?",
    answer: "We measure the success of an ad campaign through key metrics such as click-through rates (CTR), conversion rates, return on ad spend (ROAS), and overall engagement. We provide detailed reports to track the effectiveness of each campaign.",
  },
  {
    id: 4,
    title: "Can you integrate e-commerce functionality into our website?",
    answer: "Yes, we specialize in integrating e-commerce functionality into websites. This includes setting up online stores, payment gateways, product catalogs, and inventory management systems tailored to your business needs.",
  },
  {
    id: 5,
    title: "Do you offer ongoing support and maintenance for websites?",
    answer: "Yes, we offer ongoing support and maintenance services to ensure your website remains updated, secure, and performs optimally. Our support includes regular updates, bug fixes, and technical assistance.",
  },
  {
    id: 6,
    title: "What is your process for starting a new project?",
    answer: "Our process begins with an initial consultation to understand your goals and requirements. We then move on to planning and design, followed by development and testing. Finally, we launch the project and provide post-launch support to ensure everything runs smoothly.",
  },
];


export const BlueArrowRight = () => {
  return (
    <svg
      width="23"
      height="30"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 17.9771L10 9.99207L2 2.0071"
        stroke="#1A9FFF"
        strokeWidth="2"
      />
    </svg>
  );
};
