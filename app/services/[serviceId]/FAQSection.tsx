"use client";

import React, { useState } from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import "../../../public/test.css"
import { allServicesArray } from "./AllServicesData";
import { formatString } from "./HeroSection";

export default function FAQSection({ serviceName }: { serviceName: string }) {
  const selectedService = allServicesArray.find(
    (service) => formatString(serviceName) === service.name
  );
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-center sm:text-start z-20">
        Frequently Asked Questions
      </h2>
      <Accordion faqData={selectedService?.faq} />
    </SectionWrapper>
  );
}

function Accordion({ faqData }: { faqData: FAQType[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="w-full flex flex-col gap-4 z-20 pt-4 sm:pt-8 md:pt-12">
      {faqData.map((accordion, index) => (
        <Panel
          key={accordion.id}
          id={accordion.id}
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
  index,
  title,
  answer,
  isActive,
  onShow,
}: {
  id: number;
  index: number;
  title: string;
  answer: string;
  isActive: boolean;
  onShow: () => void;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-[#0A1A2A]/90 to-[#0D2237]/90 shadow-lg"
          : "bg-[#0A1A2A]/60 hover:bg-[#0A1A2A]/80 border-[#1d263f] border-[0.5px] hover:shadow-[0_0_15px_0_rgba(10,32,78,1)]"
      }`}
    >
      <div
        onClick={onShow}
        className="relative cursor-pointer backdrop-blur-sm p-6"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center justify-center w-8 h-8 text-[#ffffff] rounded-full bg-gradient-to-br from-[#1A9FFF] to-[#0086E6] text-white font-bold text-sm">
              {id}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#ffffff]">
              {title}
            </h3>
          </div>

          {/* BlueArrowRight with rotation effect */}
          <div
            className={`text-[#1A9FFF] transform transition-transform duration-300 ${
              isActive ? "rotate-90" : ""
            }`}
          >
            <BlueArrowRight />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isActive ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="sm:pl-12 sm:pr-4 text-[#ffffff] text-xl font-light">
            {answer}
          </div>
        </div>
      </div>
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
    answer:
      "The timeline for developing a custom website varies based on complexity. Generally, it takes between 6 to 12 weeks to design, develop, and launch a fully functional website.",
  },
  {
    id: 2,
    title: "What services are included in your frontend development package?",
    answer:
      "Our frontend development package includes services such as responsive design, cross-browser compatibility, performance optimization, and implementation of interactive elements to enhance user experience.",
  },
  {
    id: 3,
    title: "How do you measure the success of an ad campaign?",
    answer:
      "We measure the success of an ad campaign through key metrics such as click-through rates (CTR), conversion rates, return on ad spend (ROAS), and overall engagement. We provide detailed reports to track the effectiveness of each campaign.",
  },
  {
    id: 4,
    title: "Can you integrate e-commerce functionality into our website?",
    answer:
      "Yes, we specialize in integrating e-commerce functionality into websites. This includes setting up online stores, payment gateways, product catalogs, and inventory management systems tailored to your business needs.",
  },
  {
    id: 5,
    title: "Do you offer ongoing support and maintenance for websites?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your website remains updated, secure, and performs optimally. Our support includes regular updates, bug fixes, and technical assistance.",
  },
  {
    id: 6,
    title: "What is your process for starting a new project?",
    answer:
      "Our process begins with an initial consultation to understand your goals and requirements. We then move on to planning and design, followed by development and testing. Finally, we launch the project and provide post-launch support to ensure everything runs smoothly.",
  },
];

export const BlueArrowRight = () => {
  return (
    <svg
      width="13"
      height="20"
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
